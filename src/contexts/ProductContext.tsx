import { useState, useCallback } from "react";

import { createContext } from "use-context-selector";
import { request } from "@lib/datocms";
import { ALL_PRODUCTS_QUERY } from "@queries/products/productsQuery";
import {
	IProduct,
	IProductContext,
	IProductContextProvider,
} from "./types/ProductTypes";

export const ProductContext = createContext({} as IProductContext);

export const ProductContextProvider = ({
	children,
}: IProductContextProvider) => {
	const [products, setProducts] = useState<IProduct[] | null>(null);

	const onGetAllProducts = useCallback(async (): Promise<void> => {
		try {
			const response = await request({
				query: ALL_PRODUCTS_QUERY,
				variables: { limit: 10 },
				preview: {},
			});
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
	}, []);

	const onFilterByRating = useCallback(
		(rating: number): IProduct[] | null => {
			const filtered = products
				? products?.filter((product: IProduct) => rating >= product.rating)
				: null;

			if (filtered && filtered?.length > 0) {
				return filtered;
			}

			return null;
		},
		[products]
	);

	const onFilterByPrice = useCallback(
		(type: "MAX_PRICE" | "MIN_PRICE", price: number): IProduct[] | null => {
			const filtered = products
				? // eslint-disable-next-line array-callback-return
				  products?.filter((product: IProduct): any => {
						if (type === "MAX_PRICE") {
							return product.price <= price;
						}

						if (type === "MIN_PRICE") {
							return product.price >= price;
						}
				  })
				: null;

			if (filtered && filtered?.length > 0) {
				return filtered;
			}
			return null;
		},
		[products]
	);

	const onFilterByTitle = useCallback(
		(query: string): IProduct[] | null => {
			const filtered = products
				? products.filter((product: IProduct) =>
						product.title.toLowerCase().includes(query)
				  )
				: null;

			if (filtered && filtered?.length > 0) {
				return filtered;
			}
			return null;
		},
		[products]
	);

	return (
		<ProductContext.Provider
			value={{
				products,
				onGetAllProducts,
				onFilterByRating,
				onFilterByPrice,
				onFilterByTitle,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
