export const Button = {
	baseStyle: {
		fontWeight: "bold",
		borderRadius: "80px",
		_focus: { boxShadow: "none" },
		_active: {
			bg: "purple.600",
		},
	},
	sizes: {
		sm: {
			fontSize: "18px",
			color: "white",
		},
		md: {
			fontSize: "18px",
			color: "white",
		},
	},
	variants: {
		outline2: {
			bg: "purple.700",
		},
		outline: {},
		rounded: {
			width: "40px",
			height: "40px",

			display: "flex",
			alignItems: "center",
			justify: "center",

			bg: "transparent",
			border: "3px solid",
			borderColor: "purple.500",
			borderRadius: "50%",

			fontSize: "16px",

			_hover: {
				color: "white",
				bg: "purple.500",
			},
		},
		solid: {
			bg: "purple.500",
			boxShadown:
				"0 24px 34px 0 rgba(74, 58, 255, 0.05), 0 9px 24px 0 rgba(0, 0, 0, 0.45)",
			_hover: {
				bg: "purple.600",
			},
			borderRadius: "80px",
			fontSize: "18px",
			minW: "100px",
			flex: 1,
			minH: "40px",
			transition: "background ease-in-out 0.2s",
			_active: {
				bg: "purple.600",
			},
		},
	},
	defaultProps: {
		size: "sm",
		variant: "solid",
	},
};
