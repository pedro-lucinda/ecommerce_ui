import { CartContextProvider } from "@contexts/CartContext";
import { ProductContextProvider } from "@contexts/ProductContext";
import type { AppProps } from "next/app";
import { AppLayout } from "../components/layouts/AppLayout";
import Global from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ProductContextProvider>
				<CartContextProvider>
					<Global />
					<AppLayout>
						<Component {...pageProps} />
					</AppLayout>
				</CartContextProvider>
			</ProductContextProvider>
		</>
	);
}
export default MyApp;
