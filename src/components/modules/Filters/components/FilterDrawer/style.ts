import { FlexColumn, FlexRow } from "@components/templates/styled/flex";
import styled from "styled-components";

export const MobileFiltersList = styled(FlexColumn)`
	margin-top: 20px;
	div {
		width: 136px;
	}

	.MuiTextField-root {
		width: 112px;
		font-size: 14px;
		.MuiFormLabel-root {
			font-size: 14px;
		}
	}

	.MuiSelect-root {
		width: 150px;
		.MuiSelect-select {
			font-size: 14px;
			padding: 10px;
			height: 10px;
		}
	}
`;

export const FiltersList = styled(FlexColumn)`
	width: auto;
	padding: 20px 24px;
	height: 422px;

	div {
		margin-bottom: 16px;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
	}
`;
export const FilterDrawerContainer = styled(FlexRow)`
	width: 100%;
	margin: 24px auto 28px;
	max-width: 500px;

	main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		.MuiSelect-select {
			width: 112px;
			font-size: 14px;
		}
	}
`;
