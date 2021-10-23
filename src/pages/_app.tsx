import type { AppProps } from "next/app";
import { AppLayout } from "../components/layouts/AppLayout";
import Global from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global />
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
}
export default MyApp;
