import { ReactNode, Dispatch, SetStateAction } from "react";

export type IProduct = {
	id: string;
	title: string;
	image: string;
	price: number;
	quantity: number;
	rating: number;
	quantityOnCart: number;
};

export type IProductContext = {
	products: IProduct[] | null;
	onGetAllProducts(): Promise<void>;
	onFilterByRating(rating: number): IProduct[] | null;
	onFilterByPrice(
		type: "MAX_PRICE" | "MIN_PRICE",
		price: number
	): IProduct[] | null;
	onFilterByTitle(query: string): IProduct[] | null;
};
export type IProductContextProvider = {
	children: ReactNode;
};
