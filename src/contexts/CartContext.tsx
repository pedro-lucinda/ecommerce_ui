import { useState, useCallback } from "react";

import { createContext } from "use-context-selector";
import { ICartContext, ICartContextProvider } from "./types/CartTypes";
import { IProduct } from "./types/ProductTypes";

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: ICartContextProvider) => {
	const [cart, setCart] = useState<IProduct[] | null>(null);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const getProductOnCart = (productId: string): IProduct | null => {
		const productOnCart = cart?.filter((p: IProduct) => p.id === productId);
		if (productOnCart && productOnCart?.length > 0) {
			return productOnCart[0];
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

	const canAddToCart = (product: IProduct): boolean => {
		const productOnCart = getProductOnCart(product.id);
		if (productOnCart) {
			const hasQuantityAvailable =
				product.quantity > productOnCart.quantityOnCart;
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
		(product: IProduct): void => {
			if (!cart) {
				setCart([{ ...product, quantityOnCart: product.quantityOnCart + 1 }]);
				return updateTotals("ADD", 1, product.price);
			}
			const canAdd = canAddToCart(product);
			if (canAdd) {
				const updatedCart = cart.map((prod: IProduct) => {
					if (prod.id === product.id) {
						return { ...prod, quantityOnCart: prod.quantityOnCart + 1 };
					}
					return prod;
				});
				setCart(updatedCart);
				return updateTotals("ADD", 1, product.price);
			}

			if (!canAdd) alert("No stock avalible");
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
					return updateTotals("REMOVE", 1, product.price);
				}
				const removedFromCart = cart.filter(
					(p: IProduct) => p.id !== product.id
				);

				if (removedFromCart?.length > 0) {
					return setCart([...removedFromCart]);
				}
				setCart(null);
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
				onRemoveProductFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
