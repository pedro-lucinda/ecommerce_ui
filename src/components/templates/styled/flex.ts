import styled from "styled-components";

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexRow = styled.div`
	display: flex;
`;

export const FlexColumnCenter = styled(FlexColumn)`
	align-items: center;
	justify-content: center;
`;

export const FlexRowCenter = styled(FlexRow)`
	align-items: center;
	justify-content: center;
`;

export const FlexRowSpaceBetween = styled(FlexRow)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
