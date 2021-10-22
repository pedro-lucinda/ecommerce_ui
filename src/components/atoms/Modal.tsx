import {
	Modal as ChakraModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type IModal = {
	children: ReactNode;
	action(): any;
	actionName: string;
};

export function Modal({ children, actionName, action }: IModal) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>
			<ChakraModal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{children}</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" onClick={action}>
							{actionName}
						</Button>
					</ModalFooter>
				</ModalContent>
			</ChakraModal>
		</>
	);
}
