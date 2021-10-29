import { CartContext } from "@contexts/CartContext";
import { ICartContext } from "@contexts/types/CartTypes";
import { useContextSelector } from "use-context-selector";

export function useCart(): ICartContext {
	const cart = useContextSelector(CartContext, (state) => state.cart);

	const totalItems = useContextSelector(
		CartContext,
		(state) => state.totalItems
	);

	const totalPrice = useContextSelector(
		CartContext,
		(state) => state.totalPrice
	);

	const onAddToCart = useContextSelector(
		CartContext,
		(state) => state.onAddToCart
	);

	const onRemoveProductFromCart = useContextSelector(
		CartContext,
		(state) => state.onRemoveProductFromCart
	);
	const showConfirmation = useContextSelector(
		CartContext,
		(state) => state.showConfirmation
	);

	return {
		cart,
		totalItems,
		totalPrice,
		onAddToCart,
		onRemoveProductFromCart,
		showConfirmation,
	};
}
