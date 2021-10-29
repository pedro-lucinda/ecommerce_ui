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

	const onFilterByTitle = useContextSelector(
		ProductContext,
		(state) => state.onFilterByTitle
	);
	const onPaginationChange = useContextSelector(
		ProductContext,
		(state) => state.onPaginationChange
	);
	const currentPage = useContextSelector(
		ProductContext,
		(state) => state.currentPage
	);

	const onSort = useContextSelector(ProductContext, (state) => state.onSort);

	return {
		products,
		currentPage,
		onPaginationChange,
		numberOfPages,
		onFilterByTitle,
		onSort,
		onGetAllProducts,
	};
}
