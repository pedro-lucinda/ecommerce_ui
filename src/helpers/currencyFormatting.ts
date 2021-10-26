export function priceFormatting(value: string): string {
	return Number(value).toLocaleString("de-DE", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	});
}
