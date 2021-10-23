import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
		* {
			margin: 0;
			padding: 0;
			outline: 0;
			box-sizing: border-box;
			-webkit-font-smoothing: antialiased;
			text-rendering: optimizeLegibility;
		}
		html {
			font-size: 10px;
		}
		body {
			background: white;
			color: black;
			font-family: "Inter", sans-serif;
			font-weight: 400;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
`;
