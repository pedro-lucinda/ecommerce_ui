import { ReactNode } from "react";

import { MdOutlineShoppingCart } from "react-icons/md";
import { ButtonContainer } from "./style";

type ButtonProps = {
	children?: ReactNode;
	numberOfItems?: number;
};

const Button = ({ children, numberOfItems }: ButtonProps) => (
	<ButtonContainer variant="contained" startIcon={<MdOutlineShoppingCart />}>
		{!!numberOfItems && <div className="number_of_items">{numberOfItems}</div>}
		<p> {children}</p>
	</ButtonContainer>
);

export { Button };
export type { ButtonProps };
