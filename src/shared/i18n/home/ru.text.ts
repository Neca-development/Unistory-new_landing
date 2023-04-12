import { Reviews } from "@widgets/layout";
import { IconsTypes } from "@shared/ui";

export const HeroRu = {
	description: {
		first: "Разрабатываем приложения",
		second: "с комлексными",
		third: "интеграциями",
		fourth: "для web & mobile",
	},
	params: {
		teamSize: "сотрудников <br/>в штате",
		projects: "успешных <br/>проектов",
		rating: "оценка <br/>на Upwork",
	},
};

export const ServicesRu: Array<{
	title: string;
	icon: IconsTypes;
	header: string;
	description: string;
}> = [
	{
		title: "Продуктовый дизайн",
		icon: "grid",
		header: "Из идеи в дизайн-прототип",
		description: `Создадим современный и удобный дизайн на основе вашей идеи и нашей
    экспертизы. Мы придерживаемся прозрачного процесса, выработанного
    годами практики, и вашей обратной связи, чтобы получить дизайн,
    который соответствует целям проекта.`,
	},
	{
		title: "Разработка",
		icon: "layout",
		header: "Разработка web & mobile",
		description: `Разработаем веб-сервис или мобильное приложение для решения ваших
    уникальных бизнес задач.
    <br /> <br />
    — frontend: React, Angular, Vue, TS
    <br />
    — backend: Node.js, C#, Битрикс24
    <br />— mobile: React native, Kotlin, Swift`,
	},
	{
		title: "Поддержка и развитие",
		icon: "folder",
		header: "Поддержка и развитие",
		description: `Подключим онлайн или офлайн сформированную команду профессионалов
    к вашему проекту на любом этапе развития продукта. Доработаем,
    улучшим или полностью модернизируем существующие IT-решения.
    <br /> <br />И нас даже необязательно приглашать на корпоративы!
    Хотя мы бы точно не отказались :)`,
	},
];

export const WorksRu = {
	title: `Мы помогаем предприятиям<br/>разрабатывать цифровые продукты`,
	moreCases: "Еще кейсы",
};

export const PrinciplesRu: {
	message: {
		author: string;
		avatar: string;
		message: string;
		date: string;
	};
	items: Array<{
		title: string;
		description: {
			beforeHighlight: string;
			highlight: string;
			afterHighlight: string;
		};
	}>;
} = {
	message: {
		author: "Нурсултан Бегенов",
		avatar: "/assets/images/nursultan.jpg",
		message:
			"Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
		date: "только что",
	},
	items: [
		{
			title: "Всегда на связи",
			description: {
				beforeHighlight: "",
				highlight: "Коммуникация важна и точка.",
				afterHighlight: ` Мы ответим на все вопросы и поможем определиться с деталями проекта.
        Подскажем лучшее решение и будем держать в курсе всех событий на
        проекте.`,
			},
		},
		{
			title: "Экспертность",
			description: {
				beforeHighlight: "Планируете",
				highlight: " сложный сервис или использование новейших технологии?",
				afterHighlight: ` Поможем реализовать ваши амбициозные планы будь это международный
        B2B маркетплейс или новый продукт с AI.`,
			},
		},
		{
			title: "Соблюдение сроков",
			description: {
				beforeHighlight: `Дедлайн – крайний срок выполнения задачи и то, что мы не нарушаем.`,
				highlight: " Ваши планы не сорвутся из-за плохой организации работ",
				afterHighlight: `, COVIDa или атаки НЛО, потому что мы ответственные.`,
			},
		},
	],
};

export const ReviewsRU = {
	title: {
		beforeHighlight: "Факт: ",
		highlight: "9 из 10 клиентов<br />рекомендуют нас",
		afterHighlight: " и вот почему",
	},
};
