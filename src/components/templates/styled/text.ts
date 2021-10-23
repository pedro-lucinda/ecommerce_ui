import styled from "styled-components";
import { gray700 } from "@styles/variables";

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

export const PlaceholderText = styled(smTextRegular)`
	color: ${gray700};
`;

export const RattingText = styled(smTextRegular);
export const FilterText = styled(smTextRegular);

export const TitleText = styled(mdTextRegular);
export const cartButtonText = styled(mdTextRegular);

export const PriceText = styled(lgTextBold);
