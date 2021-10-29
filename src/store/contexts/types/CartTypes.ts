import { ReactNode } from "react";
import { IProduct } from "./ProductTypes";

export type ICartContext = {
	cart: IProduct[] | null;
	totalPrice: number;
	totalItems: number;
	onAddToCart(product: IProduct, quantity: number): void;
	onRemoveProductFromCart(product: IProduct): void;
	showConfirmation: string | null;
};

export type ICartContextProvider = {
	children: ReactNode;
};
