const pathSrc = "../src/";

module.exports = function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	const folders = ["atoms", "molecules", "organisms"];

	plop.setGenerator(`Create component`, {
		description: `Create component`,
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the component?",
			},
			{
				message: "What type of component?",
				type: "list",
				name: "folder",
				choices: folders,
			},
		],

		actions: [
			{
				type: "add",
				path: `${pathSrc}/{{folder}}/{{camelCase name}}/{{camelCase name}}.tsx`,
				templateFile: "./templates/template-component.tsx.hbs",
			},
			{
				type: "add",
				path: `${pathSrc}/{{folder}}/{{camelCase name}}/styled.ts`,
				templateFile: "./templates/styled.ts.hbs",
			},
			{
				type: "add",
				path: `${pathSrc}/{{folder}}/{{camelCase name}}/index.tsx`,
				templateFile: "./templates/index.tsx.hbs",
			},
			{
				type: "add",
				path: `${pathSrc}/{{folder}}/{{camelCase name}}/{{camelCase name}}.stories.tsx`,
				templateFile: "./templates/stories.tsx.hbs",
			},
		],
	});
};
