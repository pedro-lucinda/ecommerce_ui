/* eslint-disable jsx-a11y/label-has-associated-control */
import {
	forwardRef,
	ForwardRefRenderFunction,
	InputHTMLAttributes,
} from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ label, ...rest },
	ref
) => (
	<InputContainer>
		{label && <label> {label} </label>}
		<input {...rest} ref={ref} />
	</InputContainer>
);
export const Input = forwardRef(InputBase);
