import { useState, ReactNode } from "react";

import { createContext } from "use-context-selector";

type IGlobalContext = {
	value: string;
	onChange(value: string): void;
};
type IGlobalContextProvider = {
	children: ReactNode;
};

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => {
	const [value, onChange] = useState("");

	return (
		<GlobalContext.Provider value={{ value, onChange }}>
			{children}
		</GlobalContext.Provider>
	);
};
