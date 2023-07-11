import { IMessage, IconsTypes } from "@shared/ui";

export const HeroRu = {
  description: {
    first: "Разрабатываем ",
    second: "цифровые",
    third: " продукты",
    fourth: "",
    fifth: "для бизнеса",
  },
  params: {
    teamSize: "сотрудников <br/>в штате",
    projects: "успешных <br/>проектов",
    rating: "оценка <br/>на Clutch",
  },
};

export const ServicesRu: Array<{
  id: number;
  title: string;
  icon: IconsTypes;
  header: string;
  description: string;
}> = [
  {
    id: 1,
    title: "Аналитика и дизайн",
    icon: "grid",
    header: "",
    description: `
      <div class="bg-light-bg/[0.8] dark:bg-dark-bg/[0.8] p-4 lg:p-6">
        <h4 class="mb-3 text-xl lg:text-3xl font-semibold">Аналитика</h4>
        <ul>
          <li>— Аудит дизайна</li>
          <li>— Продуктовое исследование</li>
          <li>— Техническое задание</li>
        </ul>
      </div>
      <div class="bg-light-bg/[0.8] dark:bg-dark-bg/[0.8] p-4 lg:p-6 mt-4">
      <h4 class="mb-3 text-xl lg:text-3xl font-semibold">Дизайн</h4>
      <ul>
        <li>— Проектирование и прототипирование</li>
        <li>— UI/UX дизайн</li>
        <li>— Графический дизайн</li>
      </ul>
      </div>
      `,
  },
  {
    id: 2,
    title: "Разработка",
    icon: "layout",
    header: "Веб и мобильная разработка",
    description: `Разработаем веб-сервис или мобильное приложение для решения ваших
    уникальных бизнес задач.
    <br /> <br />
    — frontend: React, Angular, Vue, TS
    <br />
    — backend: Node.js, C#
    <br />— mobile: React native, Kotlin, Swift`,
  },
  {
    id: 3,
    title: "Блокчейн и ИИ",
    icon: "bitcoin",
    header: "",
    description: `      
    <div class="bg-light-bg/[0.8] dark:bg-dark-bg/[0.8] p-4 lg:p-6">
      <h4 class="mb-3 text-xl lg:text-3xl font-semibold">Блокчейн интеграция</h4>
      <ul>
        <li>— Разработка токеномики</li>
        <li>— Разработка смарт-контрактов</li>
        <li>— DeFi-интеграция в веб и мобильные приложения</li>
      </ul>
      </div>
      <div class="bg-light-bg/[0.8] dark:bg-dark-bg/[0.8] p-4 lg:p-6 mt-4">
      <h4 class="mb-3 text-xl lg:text-3xl font-semibold">Искусственный интеллект</h4>
      <ul>
        <li>— Сбор и обработка данных</li>
        <li>— Машинное обучение</li>
        <li>— Интеграция ChatGPT / Azure OpenAI</li>
      </ul>
    </div>`,
  },
  {
    id: 4,
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
  messages: IMessage[];
  items: Array<{
    title: string;
    description: {
      beforeHighlight: string;
      highlight: string;
      afterHighlight: string;
    };
  }>;
} = {
  messages: [
    {
      author: "Нурсултан Бегенов",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
      date: "только что",
    },
    {
      author: "Нурсултан Бегенов",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
      date: "только что",
    },
    {
      author: "Нурсултан Бегенов",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
      date: "только что",
    },
  ],
  items: [
    {
      title: "Коммуникация",
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
      title: "Сроки",
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
