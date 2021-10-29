/* eslint-disable no-underscore-dangle */
import { useState, useCallback } from "react";

import { createContext } from "use-context-selector";
import { request } from "@lib/datocms";
import { sortByMaxPrice, sortByMinPrice, sortByRating } from "@helpers/sorting";
import {
	IProduct,
	IProductContext,
	IProductContextProvider,
} from "./types/ProductTypes";
import { ALL_PRODUCTS_QUERY } from "../queries/products/productsQuery";

export const ProductContext = createContext({} as IProductContext);

export const ProductContextProvider = ({
	children,
}: IProductContextProvider) => {
	const [products, setProducts] = useState<IProduct[] | null>(null);
	const [numberOfPages, setNumberOfPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const onGetAllProducts = useCallback(
		async (page: number = 1, filters?: any): Promise<void> => {
			const limit = 6;
			const skip = page === 1 ? 0 : limit * (page - 1);
			setCurrentPage(page);

			try {
				const response = await request({
					query: ALL_PRODUCTS_QUERY,
					variables: { skip, limit, filter: filters },
					preview: {},
				});

				const totalOfProducts = response?._allProductsMeta?.count;
				const totalOfPages = totalOfProducts / limit;
				setNumberOfPages(Math.ceil(totalOfPages));

				const formatted = response.allProducts.map(
					(product: Omit<IProduct, "quantityOnCart">) => ({
						...product,
						quantityOnCart: 0,
					})
				);
				setProducts(formatted);
			} catch (err) {
				console.log(err);
			}
		},
		[numberOfPages]
	);

	const onFilterByTitle = useCallback(
		async (query: string): Promise<void> => {
			if (query.trim() === "") {
				return onGetAllProducts(1);
			}
			await onGetAllProducts(1, {
				title: { matches: { pattern: query } },
			});
		},
		[products]
	);

	const onSort = (key: string) => {
		if (!products || !key) {
			return;
		}
		switch (key) {
			case "maxPrice": {
				const sortedByMaxPrice = sortByMaxPrice(products);
				return setProducts([...sortedByMaxPrice]);
			}

			case "minPrice": {
				const sortedByMinPrice = sortByMinPrice(products);
				return setProducts([...sortedByMinPrice]);
			}

			case "rating": {
				const sortedByRating = sortByRating(products);
				return setProducts([...sortedByRating]);
			}

			default: {
				break;
			}
		}
	};
	const onPaginationChange = useCallback(
		async (page: number) => {
			setCurrentPage(page);
			await onGetAllProducts(page);
		},
		[currentPage, numberOfPages]
	);
	return (
		<ProductContext.Provider
			value={{
				products,
				numberOfPages,
				onGetAllProducts,
				onPaginationChange,
				currentPage,
				onFilterByTitle,
				onSort,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
