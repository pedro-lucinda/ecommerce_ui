import {
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";

import { ReactNode } from "react";

export type DrawerProps = {
	action: any;
	actionName: string;
	children: ReactNode;
	title: string;
};
export function Drawer({ title, children, actionName, action }: DrawerProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button maxW="200px" onClick={onOpen}>
				Open
			</Button>
			<ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>{title}</DrawerHeader>

					<DrawerBody>{children}</DrawerBody>

					<DrawerFooter>
						<Button mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button onClick={action}>{actionName}</Button>
					</DrawerFooter>
				</DrawerContent>
			</ChakraDrawer>
		</>
	);
}
