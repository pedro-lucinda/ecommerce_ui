import { ProductContext } from "@contexts/ProductContext";
import { IProductContext } from "@contexts/types/ProductTypes";
import { useContextSelector } from "use-context-selector";

export function useProducts(): IProductContext {
	const products = useContextSelector(
		ProductContext,
		(state) => state.products
	);
	const numberOfPages = useContextSelector(
		ProductContext,
		(state) => state.numberOfPages
	);
	const onGetAllProducts = useContextSelector(
		ProductContext,
		(state) => state.onGetAllProducts
	);
	const onFilterByRating = useContextSelector(
		ProductContext,
		(state) => state.onFilterByRating
	);
	const onFilterByPrice = useContextSelector(
		ProductContext,
		(state) => state.onFilterByPrice
	);
	const onFilterByTitle = useContextSelector(
		ProductContext,
		(state) => state.onFilterByTitle
	);

	return {
		products,
		numberOfPages,
		onFilterByTitle,
		onFilterByRating,
		onGetAllProducts,
		onFilterByPrice,
	};
}
