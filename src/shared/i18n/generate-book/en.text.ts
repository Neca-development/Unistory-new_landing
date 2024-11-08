import { StaticImageData } from "next/image";
import genreAdventure from "@public/assets/images/generate-book/genre-adventure.png";
import genreComedy from "@public/assets/images/generate-book/genre-comedy.png";
import genreDetective from "@public/assets/images/generate-book/genre-detective.png";
import genreFiction from "@public/assets/images/generate-book/genre-fiction.png";
import styleComics from "@public/assets/images/generate-book/style-comics.png";
import styleIllustration from "@public/assets/images/generate-book/style-illustration.png";
import styleManga from "@public/assets/images/generate-book/style-manga.png";
import styleRealistic from "@public/assets/images/generate-book/style-realistic.png";
import generatedImage from "@public/assets/images/generate-book/generated-image.png";
import { GenreEnum, StylisticsEnum } from "@shared/lib/enums";

interface InputText {
  character: string;
  name: string;
  events: string;
  secondary: string;
  location: string;
  description: string;
}

interface PictureStyle<T> {
  title: string;
  value: T;
  image: StaticImageData;
}

interface GeneratedSection {
  heading: string;
  image: StaticImageData;
  sampleText: string;
  backButton: string;
  nextButton: string;
}

export interface GenerateBookText {
  HERO: {
    first: string;
    second: string;
    sampleText: string;
  };
  INPUT: InputText;
  GENRE_SELECTION: string;
  PICTURE_STYLE_SELECTION: string;
  GENERATE_BUTTON: string;
  GENRE_STYLES: PictureStyle<GenreEnum>[];
  PICTURE_STYLES: PictureStyle<StylisticsEnum>[];
  GENERATED: GeneratedSection;
}

export const GenerateBookTextEn: GenerateBookText = {
  HERO: {
    first: "Generate your own story",
    second: "Make a fairy tale in few steps",
    sampleText: "This is a sample text for the hero section",
  },

  INPUT: {
    character: "Main character",
    name: "Name your fairy tale",
    events: "What events should be in the fairy tale?",
    secondary: "Secondary character",
    location: "Location",
    description: "Description",
  },

  GENRE_SELECTION: "Choose genre of the fairy tale",
  PICTURE_STYLE_SELECTION: "Choose picture style",
  GENERATE_BUTTON: "Generate a fairy tale",

  GENRE_STYLES: [
    { title: "Adventure", value: GenreEnum.ADVENTURE, image: genreAdventure },
    { title: "Comedy", value: GenreEnum.COMEDY, image: genreComedy },
    { title: "Detective", value: GenreEnum.DETECTIVE, image: genreDetective },
    { title: "Fiction", value: GenreEnum.FICTION, image: genreFiction },
  ],

  PICTURE_STYLES: [
    { title: "Realistic", value: StylisticsEnum.REALISTIC, image: styleRealistic },
    { title: "Comics", value: StylisticsEnum.CARTOONISH, image: styleComics },
    { title: "Manga", value: StylisticsEnum.CARTOONISH, image: styleManga },
    { title: "Illustration", value: StylisticsEnum.ILLUSTRATION, image: styleIllustration },
  ],

  GENERATED: {
    heading: "Chapter 1. The Adventure of the Big App",
    image: generatedImage,
    sampleText:
      "In the cozy corner of their sunlit room, Biba and Boba were sprawled out with crayons and paper, drawing rainbows and robots. 'I wish we could make daily chores fun,' Biba said with a sigh, looking down at her drawing of a colorful, chore-doing machine. 'Let's make an app that turns chores into a game!' Boba exclaimed. Their eyes lit up with excitement, and just like that, the seed of an incredible idea was planted. Once upon a bright and cheery morning, in a room where the sun danced upon the walls, Biba and Boba were brimming with energy and imagination. Crayons in hand, they were busy bringing their dreams to life on paper. Biba's drawing was a splendid machine with rainbow wheels and funnels that spat out sparkles, while Boba was deep into sketching a robot that could tidy up toys with a smile. 'I wish our chores could be just like these drawings—fun and colorful,' Biba mused, her eyes reflecting a longing for adventure. 'Hey, Biba,' Boba said, snapping his fingers with a grin, 'What if we could play a game where every time we did our chores, we earned points and won prizes?' The question hung in the air, buzzing with possibility. With a burst of excitement, Biba clapped her hands in delight. 'Boba, you're brilliant! We could use your robot and my machine to make an app—a game that would make all the kids want to do their chores!' Their room, filled with toys and laughter, transformed into a little workshop for big ideas. The siblings began to imagine all the ways their app could turn the dull, everyday tasks into a treasure hunt, where each dish washed and each sock paired was a step closer to winning a shiny, new badge. With hearts pounding and minds whirring, Biba and Boba embarked on their grand adventure, not knowing just how far their idea could take them—but ready to find out.",
    backButton: "Back",
    nextButton: "Next",
  },
};
