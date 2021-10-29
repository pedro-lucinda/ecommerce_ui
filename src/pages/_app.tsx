import { CartContextProvider } from "@contexts/CartContext";
import { ProductContextProvider } from "@contexts/ProductContext";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { AppLayout } from "../components/layouts/AppLayout";
import Global from "../styles/global";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ProductContextProvider>
				<CartContextProvider>
					<ToastContainer />
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
