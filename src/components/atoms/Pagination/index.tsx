/* eslint-disable react/no-array-index-key */
import { useProducts } from "@hooks/useProducts";
import { useState } from "react";

import { PaginationContainer, PageNumber } from "./style";

const Pagination = () => {
	const { numberOfPages, onPaginationChange, currentPage } = useProducts();

	return (
		<PaginationContainer>
			{[...Array(numberOfPages)]?.map((_, i) => (
				<PageNumber
					isSelected={currentPage === i + 1}
					key={i}
					onClick={() => onPaginationChange(i + 1)}
				>
					{i + 1}
				</PageNumber>
			))}
		</PaginationContainer>
	);
};

export { Pagination };
