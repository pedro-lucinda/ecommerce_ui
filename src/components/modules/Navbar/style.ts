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
		margin-left: 8.8%;
	}

	section button {
		margin-left: 40px;
	}

	.mobile_menu_icon {
		font-size: 24px;
		margin-left: 28px;
	}
`;
