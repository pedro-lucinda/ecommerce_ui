import * as yup from "yup";

export const addLocationSchema = yup.object().shape({
	user_name: yup
		.string()
		.required("Enter your name.")
		.min(2, "Minimum of 2 characters.")
		.trim(),

	user_email: yup
		.string()
		.required("Enter your e-mail.")
		.trim()
		.email("Invalid E-mail "),

	link: yup.string().required("Enter the URL").url("Invalid URL"),

	description: yup
		.string()
		.min(20, "Min 20 characters.")
		.required("Enter a description")
		.trim(),

	categoriesSelect: yup
		.string()
		.notOneOf(["Select a category*"])
		.required("Select a category"),

	image1: yup
		.string()
		.matches(/(https?:\/\/.*\.(?:png|jpg))/i, "Invalid URL")
		.url("Invalid URL")
		.required("Enter the URL"),
});
