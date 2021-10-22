/* eslint-disable jsx-a11y/label-has-associated-control */
import { Flex } from "@chakra-ui/react";
import {
	forwardRef,
	ForwardRefRenderFunction,
	InputHTMLAttributes,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ label, ...rest },
	ref
) => (
	<Flex direction="column">
		{label && <label> {label} </label>}
		<input {...rest} ref={ref} />
	</Flex>
);
export const Input = forwardRef(InputBase);
