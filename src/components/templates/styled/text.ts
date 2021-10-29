import { mobileMaxWidth } from "@styles/variables";
import styled from "styled-components";

export const smText = styled.p`
	font-size: 14px;
`;

export const mdText = styled.p`
	font-size: 16px;
	line-height: 24px;
`;
export const lgText = styled.h3`
	font-size: 24px;
	line-height: 36px;
`;

export const lgTextBold = styled(lgText)`
	font-weight: 700;
`;

export const smTextRegular = styled(smText)`
	font-weight: 500;
`;

export const mdTextRegular = styled(mdText)`
	font-weight: 600;
`;

export const PlaceholderText = `
	color: gray700,
	font-size: 14px;
	font-weight: 500;

`;

export const RattingText = styled(smTextRegular)``;
export const FilterText = styled(smTextRegular)``;

export const TitleText = styled.p`
	height: 80px;
	font-size: 16px;
	font-weight: 400;
	line-height: 150%;

	@media screen and (max-width: ${mobileMaxWidth}) {
		font-size: 14px;
	}
`;
export const cartButtonText = styled(mdTextRegular)`
	font-weight: 400;
`;

export const PriceText = styled(lgTextBold)`
	@media screen and (max-width: ${mobileMaxWidth}) {
		font-size: 16px;
	}
`;
