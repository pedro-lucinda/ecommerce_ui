import { FlexRowCenter } from "@components/templates/styled/flex";
import { blueOcean, gray500 } from "@styles/variables";
import styled from "styled-components";

type PageNumberProps = {
	isSelected: boolean;
};

export const PaginationContainer = styled(FlexRowCenter)`
	div {
		& + div {
			margin-left: 12px;
		}
	}
`;
export const PageNumber = styled(FlexRowCenter)<PageNumberProps>`
	border-radius: 100%;
	border: ${(props) => (props.isSelected ? "none" : `1px solid ${gray500}`)};
	background-color: ${(props) =>
		props.isSelected ? blueOcean : "transparent"};
	width: 32px;
	height: 32px;
	font-size: 14px;
	color: ${(props) => (props.isSelected ? "white" : gray500)};
	cursor: pointer;
`;
