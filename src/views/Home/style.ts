import styled from "styled-components";
import { FlexRow } from "@components/templates/styled/flex";

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ProductsContainer = styled(FlexRow)`
	max-width: 950px;
	margin: 50px auto;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;

	@media screen and (max-width: 400px) {
		justify-content: space-between;
	}
`;
