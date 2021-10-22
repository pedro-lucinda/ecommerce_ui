import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
	config: {
		initialColorMode: "light",
	},
	global: {
		fontFamily: "Roboto, sans-serif",
	},
	components: {
		Button,
	},
	colors: {
		purple: {
			"300": "#CBAAD6",
			"500": "#A17DFA",
			"600": "#7A4CEB",
			"700": "#1F1639",
			"800": "#0F0822",
		},
	},
	fonts: {
		heading: "Roboto, sans-serif",
		body: "Roboto, sans-serif",
	},
	styles: {
		global: {
			body: {
				bg: "white",
				color: "black",
			},
		},
	},
});
