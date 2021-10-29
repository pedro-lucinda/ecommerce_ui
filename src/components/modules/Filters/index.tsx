/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { Button, TextField, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Select } from "@components/atoms/forms/Select";
import { mobileMaxWidth } from "@styles/variables";
import { useProducts } from "@hooks/useProducts";
import { FiltersContainer } from "./style";
import FilterDrawer from "./components/FilterDrawer";

const SortBy = {
	rating: "Rating",
	minPrice: "Min price",
	maxPrice: "Max price",
};

const ratingOptions = [
	{ value: "", label: "Rating" },
	{ value: 1, label: "1 and above" },
	{ value: 2, label: "2 and above" },
	{ value: 3, label: "3 and above" },
	{ value: 4, label: "4 and above" },
	{ value: 5, label: "above 5" },
];
const sortByOptions = [
	{ value: "", label: "Sort by" },
	{ value: "rating", label: "Rating" },
	{ value: "minPrice", label: "Min price" },
	{ value: "maxPrice", label: "Max price" },
];

type Option = {
	value: any;
	label: string;
};

type FilterProps = {
	onApplyFilter(filters: any): void;
	handleSort(key: string): void;
};

const Filters = ({ onApplyFilter, handleSort }: FilterProps) => {
	const { onGetAllProducts } = useProducts();
	const [maxPrice, setMaxPrice] = useState<any | "">("");
	const [minPrice, setMinPrice] = useState<any | "">("");
	const [rating, setRating] = useState<any>({ value: "", label: "" });
	const [sortBy, setSortBy] = useState<any>({ value: "", label: "" });
	const [filters, setFilters] = useState<any>([]);

	const isWeb = useMediaQuery(`(min-width: ${mobileMaxWidth} )`);
	function clearAllFilters() {
		setMaxPrice("");
		setMinPrice("");
		setRating({ value: "", label: "" });
		setSortBy({ value: "", label: "" });
		setFilters([]);
		onGetAllProducts(1);
	}

	function handlePriceChange(key: string, value: any) {
		if (key === "maxPrice") {
			setMaxPrice(value);
			const hasMaxPriceOnFilters = !!filters.find((field: any) => field.price);
			const hasValidMaxPrice = !!value;
			if (hasMaxPriceOnFilters) {
				if (hasValidMaxPrice) {
					const arr = filters.map((field: any) => {
						if (!!field.price) {
							field.price.lt = value;
						}
						return field;
					});

					return setFilters(arr);
				}
				const removeFilter = [...filters];
				removeFilter.forEach((field: any) => delete field?.price?.lt);
				return setFilters(removeFilter);
			}

			return setFilters([
				...filters,
				{
					price: {
						lt: value,
					},
				},
			]);
		}
		setMinPrice(value);

		const hasMinPriceOnFilters = !!filters.find((field: any) => field.price);
		const hasValidMinPrice = !!value;

		if (hasMinPriceOnFilters) {
			if (hasValidMinPrice) {
				const arr = filters.map((field: any) => {
					if (!!field.price) {
						field.price.gt = value;
					}
					return field;
				});
				return setFilters(arr);
			}
			const removeFilter = [...filters];
			removeFilter.forEach((field: any) => delete field?.price?.gt);
			return setFilters(removeFilter);
		}

		setFilters([
			...filters,
			{
				price: {
					gt: value,
				},
			},
		]);
	}
	function handleRatingChange(key: string, value: any) {
		setRating({ value, label: String(value) });
		const hasRatingOnFilters = !!filters.find((field: any) => field?.rating);

		const hasValidRating = !!value;

		if (hasRatingOnFilters) {
			if (hasValidRating) {
				const arr = filters.map((field: any) => {
					if (!!field.rating) {
						field.rating.gt = value;
					}
					return field;
				});

				return setFilters(arr);
			}
			const removeFilter = [...filters];
			removeFilter.forEach((field: any) => delete field?.rating?.gt);
			return setFilters(removeFilter);
		}

		setFilters([
			...filters,
			{
				rating: {
					gt: value,
				},
			},
		]);
	}

	function handleSortChange(value: string) {
		setSortBy({
			value,
			label: SortBy[`${value as keyof typeof SortBy}`],
		});
		handleSort(value);
	}

	if (!isWeb) {
		return (
			<FilterDrawer
				sortByOptions={sortByOptions}
				handleSortChange={handleSortChange}
				sortBy={sortBy}
				applyFilters={() => onApplyFilter(filters)}
				clearFilters={clearAllFilters}
			>
				<TextField
					id="outlined-max-input"
					label="€ MAX"
					type="number"
					value={maxPrice}
					onChange={(e: any) => handlePriceChange("maxPrice", e.target.value)}
				/>
				<TextField
					id="outlined-min-input"
					label="€ MIN"
					type="number"
					value={minPrice}
					onChange={(e: any) => handlePriceChange("minPrice", e.target.value)}
				/>
				<Select
					options={ratingOptions}
					value={rating}
					onChange={(e: any) => handleRatingChange("rating", e)}
					label="RATING"
				/>
			</FilterDrawer>
		);
	}

	return (
		<FiltersContainer>
			<main>
				<section>
					<TextField
						id="outlined-max-input"
						label="€ MAX"
						type="number"
						value={maxPrice}
						onChange={(e: any) => handlePriceChange("maxPrice", e.target.value)}
					/>
					<TextField
						id="outlined-min-input"
						label="€ MIN"
						type="number"
						value={minPrice}
						onChange={(e: any) => handlePriceChange("minPrice", e.target.value)}
					/>
					<Select
						options={ratingOptions}
						value={rating}
						onChange={(e: any) => handleRatingChange("rating", e)}
						label="RATING"
					/>
				</section>

				<Button variant="outlined" onClick={() => onApplyFilter(filters)}>
					Apply filters
				</Button>
			</main>
			<footer>
				<Select
					options={sortByOptions}
					value={sortBy}
					onChange={(e: any) => handleSortChange(e)}
					label="SORT BY"
				/>
			</footer>
		</FiltersContainer>
	);
};

export { Filters };
