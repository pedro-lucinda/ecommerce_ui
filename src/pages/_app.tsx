import { CartContextProvider } from "@contexts/CartContext";
import { ProductContextProvider } from "@contexts/ProductContext";
import type { AppProps } from "next/app";
import { AppLayout } from "../components/layouts/AppLayout";
import Global from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global />
			<AppLayout>
				<ProductContextProvider>
					<CartContextProvider>
						<Component {...pageProps} />
					</CartContextProvider>
				</ProductContextProvider>
			</AppLayout>
		</>
	);
}
export default MyApp;
