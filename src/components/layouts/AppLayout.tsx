import React, { ReactNode } from "react";
import { AppLayoutWrapper } from "./style";

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => (
	<AppLayoutWrapper>
		<div>{children}</div>
	</AppLayoutWrapper>
);
