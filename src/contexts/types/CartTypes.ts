import { ReactNode } from "react";
import { IProduct } from "./ProductTypes";

export type ICartContext = {
	cart: IProduct[] | null;
	totalPrice: number;
	totalItems: number;
	onAddToCart(product: IProduct): void;
	onRemoveProductFromCart(product: IProduct): void;
};
export type ICartContextProvider = {
	children: ReactNode;
};
