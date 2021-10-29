/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import { ProductCard } from "@components/atoms/ProductCard";
import { Filters } from "@components/modules/Filters";
import { IProduct } from "@contexts/types/ProductTypes";
import { useProducts } from "@hooks/useProducts";
import { useCart } from "@hooks/useCart";
import { useEffect, useState } from "react";
import { Pagination } from "@components/atoms/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { HomeContainer, ProductsContainer } from "./style";

export const HomePage = () => {
	const { products, onGetAllProducts, onSort } = useProducts();
	const { onAddToCart } = useCart();

	const [isLoading, setIsLoading] = useState(true);
	const [productsList, setProductsList] = useState<IProduct[] | null>(null);

	useEffect(() => {
		onGetAllProducts();
	}, []);

	useEffect(() => {
		if (products) updateProducts();
	}, [products]);

	function updateProducts() {
		setProductsList(products);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}

	async function handleApplyFilter(filters: any) {
		setIsLoading(true);
		const allFilters = Object.assign({}, ...filters);
		await onGetAllProducts(1, allFilters);
		setIsLoading(false);
	}

	function handleSort(key: string) {
		onSort(key);
	}

	return (
		<>
			<Filters onApplyFilter={handleApplyFilter} handleSort={handleSort} />

			<HomeContainer>
				<ProductsContainer>
					{isLoading && (
						<>
							<CircularProgress />
						</>
					)}
					{!isLoading &&
						productsList &&
						productsList?.length > 0 &&
						productsList?.map((product: IProduct) => (
							<ProductCard
								key={product.id}
								product={product}
								onClick={onAddToCart}
							/>
						))}

					{!isLoading && productsList && productsList?.length < 1 && (
						<p>No product was found :/ </p>
					)}
				</ProductsContainer>
				{!isLoading && productsList && productsList?.length > 0 && (
					<Pagination />
				)}
			</HomeContainer>
		</>
	);
};
