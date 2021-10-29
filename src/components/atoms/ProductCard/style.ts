import { FlexColumn, FlexRow } from "@components/templates/styled/flex";
import {
	borderRadius,
	gray700,
	green,
	productCardBorder,
} from "@styles/variables";
import styled from "styled-components";

export const ConfirmationContainer = styled(FlexRow)`
	width: 100%;
	align-items: center;
	justify-content: center;
	svg {
		fill: ${green};
		font-size: 24px;
	}
	p {
		font-weight: 500;
		font-size: 14px;
		margin-left: 10px;
		color: black;
	}
`;

export const ProductCardContainer = styled(FlexColumn)`
	width: 100%;
	height: 100%;

	width: 288px;

	min-height: 365px;
	max-height: 472px;

	border: 1px solid ${productCardBorder};
	border-radius: ${borderRadius};
	padding: 20px 15px;
	margin: 0 10px 36px;

	img {
		height: 224px;
		object-fit: contain;
	}

	section {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		margin: 15px 0;

		.MuiFormControl-root,
		.MuiOutlinedInput-root {
			height: 40px;
			width: 90px;
		}
	}

	button {
		width: 100%;
		margin-top: auto;
	}

	@media screen and (max-width: 400px) {
		width: 175px;
		height: 472px;
		padding: 5px;
		margin: 10px 2px;
		section {
			.MuiFormControl-root,
			.MuiOutlinedInput-root {
				width: 60px;
				height: 32px;
			}
		}

		img {
			height: "144.99px";
		}
	}
`;

export const RatingContainer = styled(FlexRow)`
	align-items: center;
	margin-top: auto;

	p {
		margin-left: 8px;
		color: ${gray700};
	}
`;
