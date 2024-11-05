import { GenerateBookTextEn, GenerateBookText } from "@shared/i18n/generate-book/en.text";
import { useRouter } from "next/router";
import { useMemo } from "react";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { GenerateBookTextRu } from "@shared/i18n/generate-book/ru.text";
import BookCheckbox from "./generated-book-checkbox/checkbox.component";

const SelectionComponent = () => {
  const [selectedPictureStyle, setSelectedPictureStyle] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const { locale } = useRouter();

  const handleGenerateClick = () => {
    console.log("Запрос отправлен (заглушка)");
  };

  const langData: GenerateBookText = useMemo(() => {
    return locale === "ru" ? GenerateBookTextRu : GenerateBookTextEn;
  }, [locale]);

  return (
    <div className="container sm:py-4 py-9 grid gap-0 md:gap-6 md:grid-cols-2 md:py-16">
      {(Object.keys(langData.INPUT) as (keyof typeof langData.INPUT)[]).map((field) => (
        <div
          key={field}
          className={clsx(
            "bg-light-bg-accent dark:bg-dark-bg-secondary my-4 p-4 border border-[#EDEAE8] dark:border-[#353535] rounded-3xl text-2xl md:p-8 flex items-center justify-between",
            {
              "md:col-span-2": field === "events",
            }
          )}
        >
          <span className="text-2xl md:mr-4">{langData.INPUT[field]}</span>
          <textarea
            placeholder=""
            className="bg-[inherit] w-full max-w-[60%] outline-none h-8 resize-none border-b-2 border-[#EDEAE8] dark:border-[#717171] overflow-hidden"
          />
        </div>
      ))}

      <div className="bg-light-bg-accent  dark:bg-dark-bg-secondary p-4 py-8 my-4 rounded-3xl border border-[#EDEAE8] dark:border-[#353535] text-2xl md:p-4 md:col-span-2">
        <div className="flex justify-around items-center space-x-8">
          <div className="text-white">{langData.GENRE_SELECTION}</div>
          <div className="flex  justify-between gap-6 flex-wrap">
            {langData.GENRE_STYLES.map(
              (genre: { title: string; image: string | StaticImageData }, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "group relative rounded-2xl overflow-hidden w-32 h-32 cursor-pointer transition-transform-shadow duration-500",
                    {
                      "shadow-lg -translate-y-2  shadow-summer": selectedGenre === index,
                    }
                  )}
                  onClick={() => setSelectedGenre(selectedGenre === index ? null : index)}
                >
                  <img
                    src={typeof genre.image === "string" ? genre.image : genre.image.src}
                    alt={genre.title}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={clsx(
                      "absolute bottom-1 right-1 py-0 px-2 bg-light-bg text-[#000000] text-sm rounded-full shadow-md transition-colors duration-500",
                      {
                        "text-summer": selectedGenre === index,
                        "group-hover:text-summer": selectedGenre !== index,
                      }
                    )}
                  >
                    {genre.title}
                  </div>

                  <BookCheckbox
                    className="absolute bg-light-bg top-2 right-2 pointer-events-none"
                    isChecked={selectedGenre === index}
                    onToggle={() => setSelectedGenre(selectedGenre === index ? null : index)}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="bg-light-bg-accent dark:bg-dark-bg-secondary p-4 px-2 my-4 rounded-3xl border border-[#EDEAE8] dark:border-[#353535] text-2xl md:p-4 md:col-span-2">
        <div className="flex justify-evenly  items-center space-x-8">
          <div className="text-white">{langData.PICTURE_STYLE_SELECTION}</div>

          <div className="flex justify-between gap-6 flex-wrap">
            {langData.PICTURE_STYLES.map(
              (style: { title: string; image: string | StaticImageData }, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "group relative rounded-2xl overflow-hidden w-32 h-32 cursor-pointer transition-transform-shadow duration-500",
                    {
                      "shadow-lg -translate-y-2  shadow-summer": selectedPictureStyle === index,
                    }
                  )}
                  onClick={() =>
                    setSelectedPictureStyle(selectedPictureStyle === index ? null : index)
                  }
                >
                  <img
                    src={typeof style.image === "string" ? style.image : style.image.src}
                    alt={style.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={clsx(
                      "absolute bottom-1 right-1 py-0 px-2 bg-light-bg text-[#000000] text-sm rounded-full shadow-md transition-colors duration-500",
                      {
                        "text-summer": selectedPictureStyle === index,
                        "group-hover:text-summer": selectedPictureStyle !== index,
                      }
                    )}
                  >
                    {style.title}
                  </div>

                  <BookCheckbox
                    className="absolute bg-light-bg top-2 right-2 pointer-events-none"
                    isChecked={selectedPictureStyle === index}
                    onToggle={() =>
                      setSelectedPictureStyle(selectedPictureStyle === index ? null : index)
                    }
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          className="btn-primary px-6 py-2"
          onClick={(e) => {
            e.preventDefault();
            handleGenerateClick();
          }}
        >
          {langData.GENERATE_BUTTON}
        </button>
      </div>
    </div>
  );
};

export default SelectionComponent;
