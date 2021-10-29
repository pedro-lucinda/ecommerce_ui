import { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import { createContext } from "use-context-selector";
import { ICartContext, ICartContextProvider } from "./types/CartTypes";
import { IProduct } from "./types/ProductTypes";

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: ICartContextProvider) => {
	const [cart, setCart] = useState<IProduct[] | null>(null);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [showConfirmation, setShowConfirmation] = useState<string | null>(null);

	useEffect(() => {
		if (showConfirmation) {
			toast.success("Added to cart successfully", {
				position: toast.POSITION.TOP_CENTER,
			});

			setTimeout(() => {
				setShowConfirmation(null);
			}, 2000);
		}
	}, [showConfirmation]);

	const getProductOnCart = (productId: string): IProduct | null => {
		const productOnCart = cart?.find((p: IProduct) => p.id === productId);
		if (productOnCart) {
			return productOnCart;
		}
		return null;
	};

	const getTotalPrice = (): any => {
		if (!cart) {
			return 0;
		}

		return cart
			? cart.reduce(
					(accumulator, current) =>
						accumulator + current.price * current.quantityOnCart,
					0
			  )
			: 0;
	};

	const getTotalItemsOnCart = () =>
		cart
			? cart
					.map((product: IProduct) => product.quantityOnCart)
					.reduce((prev: number, next: number) => prev + next)
			: 0;

	const updateTotals = (
		type: "ADD" | "REMOVE",
		quantity: number,
		price: number
	) => {
		const currentTotalPrice = getTotalPrice();
		const cartSize = getTotalItemsOnCart();

		if (type === "ADD") {
			setTotalItems(cartSize + quantity);
			return setTotalPrice(currentTotalPrice + price);
		}

		if (type === "REMOVE") {
			setTotalItems(cartSize > 0 ? cartSize - quantity : 0);
			return setTotalPrice(cartSize > 0 ? currentTotalPrice - price : 0);
		}
	};

	const canAddToCart = (product: IProduct, quantity: number): boolean => {
		if (product.quantity < 1) {
			return false;
		}
		const productOnCart = getProductOnCart(product.id);
		if (productOnCart) {
			const hasQuantityAvailable =
				productOnCart.quantity >= productOnCart.quantityOnCart + quantity;
			if (hasQuantityAvailable) {
				return true;
			}
			return false;
		}
		return true;
	};
	const canRemoveFromCart = (product: IProduct): boolean => {
		if (!cart) return false;
		if (product.quantityOnCart >= 1) {
			return true;
		}
		return false;
	};

	const onAddToCart = useCallback(
		(product: IProduct, quantity: number): void => {
			if (!cart && product.quantity > 0) {
				setCart([
					{ ...product, quantityOnCart: product.quantityOnCart + quantity },
				]);
				setShowConfirmation(product.id);
				return updateTotals("ADD", quantity, product.price);
			}

			const canAdd = canAddToCart(product, quantity);

			if (canAdd) {
				const productOnCart = getProductOnCart(product.id);
				if (!productOnCart) {
					const updatedProduct = {
						...product,
						quantityOnCart: product?.quantityOnCart + quantity,
					};
					setCart([...(cart as IProduct[]), updatedProduct]);
					setShowConfirmation(product.id);
					return updateTotals("ADD", quantity, product.price);
				}

				const updatedCart = cart?.map((prod: IProduct) => {
					if (product.id === prod.id) {
						return {
							...prod,
							quantityOnCart: prod?.quantityOnCart + quantity,
						};
					}
					return prod;
				});
				setCart([...(updatedCart as IProduct[])]);
				setShowConfirmation(product.id);
				return updateTotals("ADD", quantity, product.price);
			}

			if (!canAdd) {
				toast.error("No stock available", {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		},
		[cart]
	);

	const onRemoveProductFromCart = useCallback(
		(product: IProduct): void => {
			if (!cart) {
				return;
			}
			const productOnCart = getProductOnCart(product.id);
			const canRemove = productOnCart
				? canRemoveFromCart(productOnCart)
				: false;

			if (canRemove && productOnCart) {
				if (productOnCart.quantityOnCart > 1) {
					const updatedCart = cart?.map((prod: IProduct) => {
						if (prod.id === product.id) {
							return { ...prod, quantityOnCart: prod.quantityOnCart - 1 };
						}
						return prod;
					});
					setCart(updatedCart);
					setShowConfirmation(product.id);
					return updateTotals("REMOVE", 1, product.price);
				}
				const removedFromCart = cart.filter(
					(p: IProduct) => p.id !== product.id
				);

				if (removedFromCart?.length > 0) {
					return setCart([...removedFromCart]);
				}
				setCart(null);
				setShowConfirmation(product.id);
				return updateTotals("REMOVE", 1, product.price);
			}
		},
		[cart]
	);

	return (
		<CartContext.Provider
			value={{
				cart,
				totalPrice,
				totalItems,
				onAddToCart,
				showConfirmation,
				onRemoveProductFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
