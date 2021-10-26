import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
	padding: 40px;

	> div {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
	}

	@media screen and (max-width: 909px) {
		padding: 16px;
	}
`;
