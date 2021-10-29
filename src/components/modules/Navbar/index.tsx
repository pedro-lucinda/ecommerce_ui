import { useState } from "react";

import { SearchBox } from "@components/atoms/SearchBox";
import { Select } from "@components/atoms/forms/Select";
import { Button } from "@components/atoms/Button";
import { useCart } from "@hooks/useCart";
import { priceFormattingEUR } from "@helpers/currencyFormatting";
import { useMediaQuery } from "@mui/material";
import { BiMenu } from "react-icons/bi";
import { mobileMaxWidth } from "@styles/variables";
import { NavbarContainer } from "./style";

const Navbar = () => {
	const { totalItems, totalPrice } = useCart();
	const isWeb = useMediaQuery(`(min-width: ${mobileMaxWidth})`);
	const [selectedLanguage, setSelectedLanguage] = useState({
		value: "EN",
		label: "English",
	});
	return (
		<NavbarContainer>
			{isWeb && <p>Logo</p>}
			<SearchBox />
			{isWeb && (
				<section>
					<Select
						options={[{ value: "EN", label: "English" }]}
						value={selectedLanguage}
						onChange={setSelectedLanguage}
					/>
					<Button numberOfItems={totalItems}>
						Sub total: {priceFormattingEUR(String(totalPrice))}
					</Button>
				</section>
			)}
			{!isWeb && <BiMenu className="mobile_menu_icon" />}
		</NavbarContainer>
	);
};

export { Navbar };
