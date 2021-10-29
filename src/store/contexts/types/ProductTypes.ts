import { ReactNode } from "react";

export type IProduct = {
	id: string;
	title: string;
	image: {
		url: string;
	};
	price: number;
	quantity: number;
	rating: number;
	quantityOnCart: number;
};

export type IProductContext = {
	products: IProduct[] | null;
	numberOfPages: number;
	onGetAllProducts(page?: number, filters?: any): Promise<void>;
	onFilterByTitle(query: string): Promise<void>;
	onSort(key: string): void;
	onPaginationChange(page: number): void;
	currentPage: number;
};
export type IProductContextProvider = {
	children: ReactNode;
};
