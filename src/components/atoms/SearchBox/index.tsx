import { useProducts } from "@hooks/useProducts";
import { useMediaQuery } from "@mui/material";
import { mobileMaxWidth } from "@styles/variables";
import { InputHTMLAttributes, ChangeEvent, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { SearchBoxContainer } from "./style";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement> & {};

const SearchBox = () => {
	const { onFilterByTitle } = useProducts();
	const [query, setQuery] = useState("");
	const isWeb = useMediaQuery(`(min-width: ${mobileMaxWidth} )`);

	function handleChange(value: string) {
		setQuery(value);
		onFilterByTitle(value);
	}

	return (
		<SearchBoxContainer>
			{isWeb && <FaSearch />}
			<input
				value={query}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					handleChange(e.target.value)
				}
				placeholder="Search"
			/>
			{isWeb ? <IoMdClose onClick={() => handleChange("")} /> : <FaSearch />}
		</SearchBoxContainer>
	);
};

export { SearchBox };
export type { SearchBoxProps };
