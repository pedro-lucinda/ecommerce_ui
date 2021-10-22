import {
	AlertStatus,
	createStandaloneToast,
	ToastPosition,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";

type ToastProps = {
	title: string;
	status: AlertStatus;
	duration?: number;
	isClosable?: boolean;
	position?: ToastPosition;
};

export const Toast = ({
	title,
	status,
	duration = 3000,
	isClosable = true,
	position = "top",
}: ToastProps) => {
	const toast = createStandaloneToast({ theme });
	return toast({
		position,
		duration,
		isClosable,
		title,
		status,
	});
};
