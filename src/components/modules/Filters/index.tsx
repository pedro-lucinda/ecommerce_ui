import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Select } from "@components/atoms/Select";
import { FiltersContainer } from "./style";

const SortBy = {
	rating: "Rating",
	minPrice: "Min price",
	maxPrice: "Max price",
};
const Rating = {
	"1": "1 and above",
	"2": "2 and above",
	"3": "3 and above",
	"4": "4 and above",
	"5": "5",
};

const ratingOptions = [
	{ value: 1, label: "1 and above" },
	{ value: 2, label: "2 and above" },
	{ value: 3, label: "3 and above" },
	{ value: 4, label: "4 and above" },
	{ value: 5, label: "5" },
];
const sortByOptions = [
	{ value: "rating", label: "Rating" },
	{ value: "minPrice", label: "Min price" },
	{ value: "maxPrice", label: "Max price" },
];

const Filters = () => {
	const [filter, setFilter] = useState({
		max: 1,
		min: 1,
		rating: { value: 1, label: "1 and above" },
		sortBy: { value: "rating", label: "Rating" },
	});

	function handleInputChange(
		key: string,
		value: any,
		type?: "SELECT" | "INPUT"
	): void {
		if (type && type === "SELECT") {
			return setFilter({
				...filter,
				[key]: {
					value,
					label:
						key === "rating"
							? Rating[value as keyof typeof Rating]
							: SortBy[value as keyof typeof SortBy],
				},
			});
		}
		setFilter({ ...filter, [key]: value });
	}

	return (
		<FiltersContainer>
			<main>
				<section>
					<TextField
						id="outlined-max-input"
						label="€ MAX"
						type="number"
						value={filter.max}
						onChange={(e: any) => handleInputChange("max", e.target.value)}
					/>
					<TextField
						id="outlined-min-input"
						label="€ MIN"
						type="number"
						value={filter.min}
						onChange={(e: any) => handleInputChange("min", e.target.value)}
					/>
					<Select
						options={ratingOptions}
						value={filter.rating}
						onChange={(e: any) => handleInputChange("rating", e, "SELECT")}
						label="RATING"
					/>
				</section>

				<Button variant="outlined">Apply filters</Button>
			</main>
			<footer>
				<Select
					options={sortByOptions}
					value={filter.sortBy}
					onChange={(e: any) => handleInputChange("sortBy", e, "SELECT")}
					label="SORT BY"
				/>
			</footer>
		</FiltersContainer>
	);
};

export { Filters };
