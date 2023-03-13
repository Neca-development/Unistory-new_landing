export const TEAM = {
	andreyPaskarenko: {
		name: "Andrey Paskarenko",
		position: "Frontend Developer",
	},
	ernestMironovRN: {
		name: "Ernest Mironov",
		position: "React Native Developer",
	},
	ernestMironov: {
		name: "Ernest Mironov",
		position: "Frontend Developer",
	},
	daniilSemenov: {
		name: "Daniil Semenov",
		position: "Project Manager",
	},
	kirillElizarov: {
		name: "Kirill Elizarov",
		position: "Backend Developer",
	},
} as const;

type TeamKeys = keyof typeof TEAM;
export type TeamValues = (typeof TEAM)[TeamKeys];
