export function priceFormattingEUR(value: string): string {
	return Number(value).toLocaleString("de-DE", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	});
}
export function priceFormattingUS(value: string): string {
	return Number(value).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});
}
