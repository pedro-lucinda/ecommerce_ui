import theme from "../src/styles/global";
import { ThemeProvider } from "styled-components";

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
];
