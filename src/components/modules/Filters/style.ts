import { FlexColumn } from "@components/templates/styled/flex";
import { gray200 } from "@styles/variables";
import styled from "styled-components";

export const FiltersContainer = styled(FlexColumn)`
	> main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background-color: ${gray200};
		height: 72px;
		padding: 16px 24px;
		margin-top: 34px;
		position: relative;

		.MuiTextField-root {
			margin-right: 16px;
			width: 112px;
			.MuiFormLabel-root {
				font-size: 12px;
			}
		}

		.MuiOutlinedInput-input {
			height: 25px;
			width: 112px;
			font-size: 14px;
			padding: 10px;
		}

		section {
			margin: 0 auto;
		}

		button {
			justify-self: flex-end;
			margin-left: auto;
			position: absolute;
			right: 24px;
		}
	}

	footer {
		width: 100%;
		margin: 32px 0 24px;
		display: flex;
		align-items: center;
		justify-content: center;

		.MuiTextField-root {
			margin-right: 16px;
			width: 112px;
			.MuiFormLabel-root {
				font-size: 12px;
			}
		}

		.MuiOutlinedInput-input {
			height: 10px;
			width: 206px;
			font-size: 14px;
		}
	}
`;
