import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AppLayout } from "../components/layouts/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ChakraProvider>
	);
}
export default MyApp;
