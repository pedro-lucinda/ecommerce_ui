import styled from "styled-components";
import Button from "@mui/material/Button";
import { blue500, borderRadius } from "@styles/variables";
import { cartIconStyle } from "@components/templates/styled/svg";

export const ButtonContainer = styled(Button)`
	background: ${blue500};
	border-radius: ${borderRadius};
	font-size: 16px;
	min-width: 232px;
	height: 48px;

	.number_of_items {
		border-radius: 100%;
		background-color: red;
		color: white;
		width: 20px;
		height: 20px;

		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 5px;
		left: 42px;
	}

	svg {
		${cartIconStyle};
	}
	p {
		font-size: 14px;
		margin-left: 20px;
	}
`;
