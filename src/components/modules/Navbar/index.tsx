import { Flex, Heading } from "@chakra-ui/react";
import { Drawer } from "@components/atoms/Drawer";
import { Toast } from "@components/atoms/Toast";

export function Navbar() {
	return (
		<Flex align="center" w="100%" justify="space-between">
			{/* <Heading> Logo</Heading>
			<Drawer
				title="Hey"
				actionName="save"
				action={() => Toast({ title: "helo", status: "success" })}
			>
				<Heading> Hello</Heading>
			</Drawer> */}
		</Flex>
	);
}
