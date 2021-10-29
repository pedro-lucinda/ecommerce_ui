import { productQueryType } from "./types";

type Filters = {
	price?: {
		gt?: number;
		lt?: number;
	};
	rating?: {
		gt?: number;
	};
};

export const ALL_PRODUCTS_QUERY = `
	query GetAllProducts($skip: IntType, $limit: IntType, $filter: ProductModelFilter ) {
		allProducts(skip: $skip, first: $limit,  filter: $filter) {
			${productQueryType}
		}
		_allProductsMeta(filter: $filter) {
    	count
  	}
	}
`;
