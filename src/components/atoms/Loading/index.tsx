import {
	Flex,
	Spinner as ChakraSpinner,
	FlexProps,
	Text,
} from "@chakra-ui/react";

export type LoadingProps = FlexProps & {
	color?: string;
	size?: "sm" | "md" | "lg" | "xl" | "xs";
	thickness?: string;
};

export const Loading = ({
	color,
	size = "md",
	thickness,
	...rest
}: LoadingProps) => (
	<Flex direction="column" w="100%" align="center" justify="center" {...rest}>
		<Text>Loading...</Text>
		<ChakraSpinner color={color} size={size} thickness={thickness} />
	</Flex>
);
