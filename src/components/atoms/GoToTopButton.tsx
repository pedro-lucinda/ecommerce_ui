import { ReactNode, ForwardRefRenderFunction } from "react";
import { Flex, Link, FlexProps } from "@chakra-ui/react";

type IGoToTopButton = FlexProps & {
	children: ReactNode;
};

export const GoToTopButton: ForwardRefRenderFunction<
	HTMLDivElement,
	IGoToTopButton
> = ({ children, ...rest }, ref) => (
	<Link href="#top">
		<Flex
			{...rest}
			ref={ref}
			position="fixed"
			bottom="50px"
			right={["16px", "84px"]}
			zIndex={1}
			borderRadius="100%"
			align="center"
			justify="center"
		>
			{children}
		</Flex>
	</Link>
);
