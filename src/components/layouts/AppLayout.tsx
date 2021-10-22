import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
	const { pathname } = useRouter();
	// const loginPath = pathname === "/";

	return (
		<Flex direction="column" minH="100vh" w="100vw" p="20px" bgColor="white">
			{/* <Navbar isLoginPage={loginPath} /> */}
			<Flex w="100%" maxW="1440px" m="0 auto" minH="100%">
				{children}
			</Flex>
			{/* <Footer /> */}
		</Flex>
	);
};
