module.exports = (plop) => {
	plop.setGenerator("component", {
		description: "Create a component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
		],
		actions: [
			{
				type: "add",
				path: "../components/atoms/{{dashCase name}}/index.tsx",
				templateFile: "component/index.tsx.hbs",
			},
			{
				type: "add",
				path: "../components/atoms/{{dashCase name}}/stories/{{dashCase name}}.stories.tsx",
				templateFile: "component/stories/stories.tsx.hbs",
			},
		],
	});
};
