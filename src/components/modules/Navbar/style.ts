import { FlexRowCenter } from "@components/templates/styled/flex";
import styled from "styled-components";

export const NavbarContainer = styled(FlexRowCenter)`
	width: 100vw;
	margin-bottom: 34px;

	p {
		margin-right: auto;
	}

	.MuiOutlinedInput-notchedOutline {
		border: none;
	}

	section {
		margin-left: 7vw;
	}

	section button {
		margin-left: 40px;
	}

	.mobile_menu_icon {
		font-size: 24px;
		margin-left: 28px;
	}

	@media screen and (max-width: 998px) {
		section {
			margin-left: 10px;
		}
		section button {
			margin-left: 10px;
		}
	}
`;
