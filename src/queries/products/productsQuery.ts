import { productQueryType } from "./types";

export const ALL_PRODUCTS_QUERY = `
query Product {
  allProducts {
    ${productQueryType}
  }
}`;
