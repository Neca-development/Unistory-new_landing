import { TEAM } from "./team";
import { ICase } from "../types";
import { TECHNOLOGIES } from "./technologies.constats";

export const CASES: ICase[] = [
	{
		title: "Personal – мультиплатформенное </br> HR приложение",
		id: "stat-service",
		categories: ["Серверная разработка", "клиентская разработка"],
		cardBgClass: "card_bg_stat_service",
		icons: ["monitor", "bitcoin"],
		additionalClassnames: "col-span-2",
		textColor: "white",
		technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.nest],
		banner:
			"https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png",
		description:
			"Нашей команде предстояло разработать HR приложение-агрегатор, которое помогает собирать все резюме в  одном месте, облегчает общение с кандидатами и имеет интеграцию с популярными платформами для поиска работы.",
		params: {
			budget: 100000,
			period: 6,
			year: 2020,
		},
		main: [
			{
				title: "Основные задачи",
				text: [
					{
						subtitle: "Основные задачи",
						text: "Разработать мобильное приложение для iOS и Android, а также веб-версию, которая будет работать на всех устройствах. Приложение должно быть мультиплатформенным, а также иметь интеграцию с популярными платформами для поиска работы.",
					},
				],
				banner:
					"https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png",
			},
			{
				title: "Основные задачи",
				text: [
					{
						subtitle: "Основные задачи",
						text: "Разработать мобильное приложение для iOS и Android, а также веб-версию, которая будет работать на всех устройствах. Приложение должно быть мультиплатформенным, а также иметь интеграцию с популярными платформами для поиска работы.",
					},
				],
				banner:
					"https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png",
			},
			{
				title: "Основные задачи",
				text: [
					{
						subtitle: "Основные задачи",
						text: "Разработать мобильное приложение для iOS и Android, а также веб-версию, которая будет работать на всех устройствах. Приложение должно быть мультиплатформенным, а также иметь интеграцию с популярными платформами для поиска работы.",
					},
				],
				banner:
					"https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png",
			},
		],
		team: [TEAM.ernestMironov, TEAM.daniilSemenov],
	},
	// {
	//   title: 'Gas Monsters',
	//   id: 'gas-monsters',
	//   categories: ['Корпоративные сайты'],
	//   cardBgClass: 'card_bg_gas_monsters',
	//   icons: ['phone02', 'monitor'],
	//   textColor: 'white',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
	// {
	//   title: 'Игровая платформа',
	//   id: 'game-platform',
	//   categories: ['Корпоративные сайты, клиентская разраб...'],
	//   cardBgClass: 'card_bg_game_platform',
	//   icons: ['phone02'],
	//   textColor: 'white',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
	// {
	//   title: 'РЖД Логистика',
	//   id: 'rzhd-logistics',
	//   categories: ['UX-аналитика, серверная разработка...'],
	//   cardBgClass: 'card_bg_rzhd',
	//   icons: ['phone02', 'monitor', 'bitcoin'],
	//   textColor: 'white',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
	// {
	//   title: 'Платформа безопасности',
	//   id: 'safety-platform',
	//   categories: ['Корпоративные сайты, клиентская разраб...'],
	//   cardBgClass: 'card_bg_safety_platform',
	//   icons: ['phone01', 'monitor', 'bitcoin'],
	//   textColor: 'black',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
	// {
	//   title: 'HR-портал Personal',
	//   id: 'hr-portal',
	//   categories: ['Сервисы, мобильная разработка'],
	//   cardBgClass: 'card_bg_personal',
	//   icons: ['phone02', 'bitcoin'],
	//   textColor: 'black',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
	// {
	//   title: 'Витрина облачных касс',
	//   id: 'cloud-cash',
	//   categories: ['UX-аналитика, серверная разработка'],
	//   cardBgClass: 'card_bg_cloud_cash',
	//   icons: ['monitor'],
	//   additionalClassnames: 'col-span-2',
	//   textColor: 'black',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
	// {
	//   title: 'ЛК Сбербанк',
	//   id: 'sberbank',
	//   categories: ['UX-аналитика, серверная разработка'],
	//   cardBgClass: 'card_bg_sberbank',
	//   icons: ['monitor', 'bitcoin'],
	//   textColor: 'white',
	//   technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.express],
	//    banner: 'https://www.parkwoodtheatres.co.uk/.imaging/focalpoint/2576x1442/dam/jcr:50bd2304-a999-4204-b375-68fe42362925/Hazlitt+Shrek+Banner+%281%29.png',
	// },
];
