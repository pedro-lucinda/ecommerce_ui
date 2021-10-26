import { FlexRowSpaceBetween } from "@components/templates/styled/flex";
import {
	closeIconStyle,
	searchIconStyle,
} from "@components/templates/styled/svg";
import { PlaceholderText } from "@components/templates/styled/text";

import { gray400, borderRadius } from "@styles/variables";

import styled from "styled-components";

export const SearchBoxContainer = styled(FlexRowSpaceBetween)`
	background-color: ${gray400};
	padding: 0 15px;
	height: 48px;
	min-width: 291px;
	max-width: 438px;
	width: 100%;
	border-radius: ${borderRadius};
	margin-left: auto;

	svg:first-child {
		${searchIconStyle}
		margin-right: 12px;
	}

	svg {
		${closeIconStyle}
	}

	input {
		flex: 1;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: ${borderRadius};
		margin-right: 12px;
		font-size: 16px;

		&::placeholder {
			${PlaceholderText}
		}
	}

	@media screen and (max-width: 909px) {
		margin-left: 0;

		height: 40px;
	}
`;
