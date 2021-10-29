import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import { Select } from "@components/atoms/forms/Select";

import { FilterDrawerContainer, MobileFiltersList, FiltersList } from "./style";

type Anchor = "top" | "left" | "bottom" | "right";

type FilterDrawerProps = {
	sortByOptions: any;
	handleSortChange(value: any): any;
	sortBy: any;
	children: React.ReactNode;
	applyFilters(): void;
	clearFilters(): any;
};

export default function FilterDrawer({
	sortByOptions,
	handleSortChange,
	sortBy,
	children,
	clearFilters,
	applyFilters,
}: FilterDrawerProps) {
	const [state, setState] = React.useState({
		bottom: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	function changeFiltersAndClose(cb: any, e: any) {
		toggleDrawer("bottom", false)(e);
		return cb();
	}

	const list = () => (
		<FiltersList>
			<h3>Filters</h3>
			<MobileFiltersList>{children}</MobileFiltersList>
			<footer>
				<Button onClick={(e) => changeFiltersAndClose(clearFilters, e)}>
					Clear
				</Button>
				<Button
					variant="outlined"
					onClick={(e) => changeFiltersAndClose(applyFilters, e)}
				>
					Apply filters
				</Button>
			</footer>
		</FiltersList>
	);

	return (
		<FilterDrawerContainer>
			<main>
				<Select
					options={sortByOptions}
					value={sortBy}
					onChange={(e: any) => handleSortChange(e)}
					label="SORT BY"
				/>
				<Button onClick={toggleDrawer("bottom", true)}>Filters</Button>
			</main>
			<SwipeableDrawer
				anchor="bottom"
				open={state.bottom}
				onClose={toggleDrawer("bottom", false)}
				onOpen={toggleDrawer("bottom", true)}
			>
				{list()}
			</SwipeableDrawer>
		</FilterDrawerContainer>
	);
}
