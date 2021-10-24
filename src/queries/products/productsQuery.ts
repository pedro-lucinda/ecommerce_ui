import { productQueryType } from "./types";

export const ALL_PRODUCTS_QUERY = `
	query GetAllProducts($skip: IntType, $limit: IntType) {
		allProducts(skip: $skip, first: $limit) {
			${productQueryType}
		}
		_allProductsMeta {
    	count
  	}
	}
`;
