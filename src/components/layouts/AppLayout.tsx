import { Navbar } from "@components/modules/Navbar";
import React, { ReactNode } from "react";
import { AppLayoutWrapper } from "./style";

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => (
	<AppLayoutWrapper>
		<Navbar />
		<div>{children}</div>
	</AppLayoutWrapper>
);
