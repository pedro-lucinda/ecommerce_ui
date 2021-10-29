import { IProduct } from "@contexts/types/ProductTypes";

export const sortByRating = (prod: IProduct[]) =>
	prod.sort(
		(a: IProduct, b: IProduct) => Math.floor(b.rating) - Math.floor(a.rating)
	);

export const sortByMaxPrice = (prod: IProduct[]) =>
	prod.sort((a: IProduct, b: IProduct) => b.price - a.price);

export const sortByMinPrice = (prod: IProduct[]) =>
	prod.sort((a: IProduct, b: IProduct) => a.price - b.price);
