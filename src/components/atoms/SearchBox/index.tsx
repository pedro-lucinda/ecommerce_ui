import { InputHTMLAttributes, ChangeEvent, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { SearchBoxContainer } from "./style";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement> & {};

const SearchBox = () => {
	const [query, setQuery] = useState("");

	return (
		<SearchBoxContainer>
			<FaSearch />
			<input
				value={query}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setQuery(e.target.value)
				}
				placeholder="Search"
			/>
			<IoMdClose onClick={() => setQuery("")} />
		</SearchBoxContainer>
	);
};

export { SearchBox };
export type { SearchBoxProps };
