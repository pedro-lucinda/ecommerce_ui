import { GlobalContext } from "@contexts/Global";
import { useContextSelector } from "use-context-selector";

export function useChatMessages() {
	const value = useContextSelector(GlobalContext, (global) => global.value);

	return {
		value,
	};
}
