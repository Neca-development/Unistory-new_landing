import genreAdventure from "@public/assets/images/generate-book/genre-adventure.png";
import genreComedy from "@public/assets/images/generate-book/genre-comedy.png";
import genreDetective from "@public/assets/images/generate-book/genre-detective.png";
import genreFiction from "@public/assets/images/generate-book/genre-fiction.png";
import styleComics from "@public/assets/images/generate-book/style-comics.png";
import styleIllustration from "@public/assets/images/generate-book/style-illustration.png";
import styleManga from "@public/assets/images/generate-book/style-manga.png";
import styleRealistic from "@public/assets/images/generate-book/style-realistic.png";
import generatedImage from "@public/assets/images/generate-book/generated-image.png";
import { GenerateBookText } from "./en.text";

export const GenerateBookTextRu: GenerateBookText = {
  HERO: {
    first: "Создайте свою историю",
    second: "Сгенерируйте сказку за несколько шагов",
    sampleText: "Это пример текста для раздела Hero",
  },

  INPUT: {
    character: "Главный герой",
    name: "Назовите вашу сказку",
    events: "Какие события должны произойти в сказке?",
    secondary: "Второстепенный герой",
    location: "Местоположение",
  },

  GENRE_SELECTION: "Выберите жанр сказки",
  PICTURE_STYLE_SELECTION: "Выберите стиль изображения",
  GENERATE_BUTTON: "Сгенерировать сказку",

  GENRE_STYLES: [
    { title: "Приключения", image: genreAdventure },
    { title: "Комедия", image: genreComedy },
    { title: "Детектив", image: genreDetective },
    { title: "Фантастика", image: genreFiction },
  ],

  PICTURE_STYLES: [
    { title: "Реализм", image: styleRealistic },
    { title: "Комиксы", image: styleComics },
    { title: "Манга", image: styleManga },
    { title: "Иллюстрация", image: styleIllustration },
  ],

  GENERATED: {
    heading: "Глава 1. Приключение Большого Приложения",
    image: generatedImage,
    sampleText:
      "В уютном уголке своей залитой солнцем комнаты Биба и Боба раскинулись с карандашами и бумагой, рисуя радуги и роботов. «Хотелось бы, чтобы повседневные дела были веселее», — вздохнула Биба, глядя на свой рисунок красочной машины, выполняющей работу по дому. «Давай сделаем приложение, которое превратит дела в игру!» — воскликнул Боба. Их глаза загорелись от волнения, и так была посажена семечка невероятной идеи. Однажды, светлым и радостным утром, в комнате, где солнце танцевало на стенах, Биба и Боба переполнялись энергией и воображением. В руках у них были карандаши, и они с энтузиазмом воплощали свои мечты на бумаге. На рисунке Бибы была великолепная машина с радужными колесами и воронками, из которых сыпались искры, в то время как Боба рисовал робота, который мог с улыбкой на лице убирать игрушки. «Как бы хотелось, чтобы наши дела были такими же веселыми и красочными, как эти рисунки», — мечтательно сказала Биба, ее глаза светились жаждой приключений. «Эй, Биба», — сказал Боба, щелкнув пальцами с улыбкой, — «А что, если мы будем играть в игру, где за каждое выполненное дело мы будем получать очки и выигрывать призы?» Этот вопрос завис в воздухе, наполненный возможностями. Биба радостно хлопнула в ладоши. «Боба, ты гений! Мы могли бы использовать твоего робота и мою машину, чтобы создать приложение — игру, которую захотели бы все дети, чтобы выполнять свои дела!» Их комната, наполненная игрушками и смехом, превратилась в маленькую мастерскую для больших идей.",
    backButton: "Назад",
    nextButton: "Далее",
  },
};
