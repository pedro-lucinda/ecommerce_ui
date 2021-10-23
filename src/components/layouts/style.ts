import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;

	> div {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
	}
`;
