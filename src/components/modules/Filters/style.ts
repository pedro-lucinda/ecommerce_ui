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
		}
		.MuiOutlinedInput-input {
			height: 20px;
			width: 112px;
			padding: 12px;
		}

		section {
			margin: 0 auto;
			/* margin-right: -150px; */
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

		.MuiOutlinedInput-input {
			height: 20px;
			width: 206px;
			padding: 12px;
			font-size: 14px;
		}
	}
`;
