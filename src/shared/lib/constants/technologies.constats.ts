export const TECHNOLOGIES = {
	react: {
		name: "React",
		icon: "../../assets/technologies/React-icon.svg",
	},
	angular: {
		name: "Angular",
		icon: "angular",
	},
	vue: {
		name: "Vue",
		icon: "vue",
	},
	node: {
		name: "Node",
		icon: "../../assets/technologies/node-js.svg",
	},
	express: {
		name: "Express",
		icon: "express",
	},
	nest: {
		name: "Nest",
		icon: "../../assets/technologies/NestJS.svg",
	},
} as const;

type TechnologiesKeys = keyof typeof TECHNOLOGIES;
export type TechnologiesValues = (typeof TECHNOLOGIES)[TechnologiesKeys];
