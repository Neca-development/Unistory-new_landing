import { GenerateBookTextEn, GenerateBookText } from "@shared/i18n/generate-book/en.text";
import { useRouter } from "next/router";
import { useMemo } from "react";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { GenerateBookTextRu } from "@shared/i18n/generate-book/ru.text";
import { BookCheckbox } from "./ui";
import { useBookStore } from "@shared/lib/store/book/book.store";
import { createBook } from "@shared/api/controllers/createBook";
import { useForm } from "react-hook-form";
import { ControlledInput } from "@shared/ui";
import { IBookDto } from "@shared/lib/types";
import { GenreEnum, StylisticsEnum, ThemesEnum } from "@shared/lib/enums";

export const SelectionComponent = () => {
  const [selectedPictureStyle, setSelectedPictureStyle] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<GenreEnum | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const { locale, push } = useRouter();
  const { setBookStore } = useBookStore();

  const { handleSubmit, control } = useForm<inputType>({
    mode: "onSubmit",
  });

  const langData: GenerateBookText = useMemo(() => {
    return locale === "ru" ? GenerateBookTextRu : GenerateBookTextEn;
  }, [locale]);

  type inputType = typeof langData.INPUT;

  const handleGenerateClick = async (data: inputType) => {
    try {
      setLoading(true);
      const { character, events, name, secondary } = data;

      const body: IBookDto = {
        chapterCount: 1,
        title: name,
        genre: selectedGenre ? selectedGenre : GenreEnum.ADVENTURE,
        keyEvents: events.split(","),
        mainCharacter: character,
        secondaryCharater: secondary,
        theme: ThemesEnum.FOREST,
        stylistic: StylisticsEnum.ILLUSTRATION,
      };

      const res = await createBook(body);

      setBookStore(res.data);
      push(`/generated-book`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleGenerateClick)} encType="multipart/form-data" noValidate>
      <div className="container sm:py-4 py-9 grid gap-0 md:gap-6 md:grid-cols-2 md:py-16">
        {(Object.keys(langData.INPUT) as (keyof inputType)[]).map((field) => (
          <div
            key={field}
            className={clsx(
              "bg-light-bg-accent dark:bg-dark-bg-secondary my-4 p-4 border border-[#EDEAE8] dark:border-[#353535] rounded-3xl text-2xl md:p-8 flex items-center justify-between",
              {
                "md:col-span-2": field === "events" || field === "description",
              }
            )}
          >
            <span className="text-2xl md:mr-4">{langData.INPUT[field]}</span>
            <ControlledInput control={control} name={field} placeholder={""} type="text" />
          </div>
        ))}
        <div className="bg-light-bg-accent dark:bg-dark-bg-secondary p-4 px-2 my-4 rounded-3xl border border-[#EDEAE8] dark:border-[#353535] text-2xl md:p-4 md:col-span-2">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between pl-5 pr-12 w-50 md:space-y-0 md:items-center md:space-x-8">
            <div className="text-white  text-center md:text-left">{langData.GENRE_SELECTION}</div>
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between md:gap-6 ">
              {langData.GENRE_STYLES.map((genre) => {
                return (
                  <div
                    key={genre.title}
                    className={clsx(
                      "group relative rounded-2xl overflow-hidden w-32 h-32 cursor-pointer transition-transform-shadow duration-500",
                      {
                        "shadow-lg -translate-y-2  shadow-summer": selectedGenre === genre.value,
                      }
                    )}
                    onClick={() =>
                      setSelectedGenre(selectedGenre === genre.value ? null : genre.value)
                    }
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
                          "text-summer": selectedGenre === genre.value,
                          "group-hover:text-summer": selectedGenre !== genre.value,
                        }
                      )}
                    >
                      {genre.title}
                    </div>

                    <BookCheckbox
                      className="absolute bg-light-bg  top-2 right-2 pointer-events-none"
                      isChecked={selectedGenre === genre.value}
                      onToggle={() =>
                        setSelectedGenre(selectedGenre === genre.value ? null : genre.value)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-light-bg-accent dark:bg-dark-bg-secondary p-4 px-2 my-4 rounded-3xl border border-[#EDEAE8] dark:border-[#353535] text-2xl md:p-4 md:col-span-2">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between pl-5 pr-12  w-50 md:space-y-0 md:items-center md:space-x-8">
            <div className="text-white text-center md:text-left">
              {langData.PICTURE_STYLE_SELECTION}
            </div>

            <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between md:gap-6">
              {langData.PICTURE_STYLES.map(
                (style: { title: string; image: string | StaticImageData }, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "group relative rounded-2xl overflow-hidden w-32 h-32 cursor-pointer transition-transform-shadow duration-500",
                      {
                        "shadow-lg -translate-y-2 shadow-summer": selectedPictureStyle === index,
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
            type="submit"
            className="btn-primary px-6 py-2"
            disabled={isLoading}
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "generate_book_click", {
                  event_category: "Book Generation",
                  event_label: "Generate Book Button",
                });
              }
            }}
          >
            {isLoading ? "Загрузка" : langData.GENERATE_BUTTON}
          </button>
        </div>
      </div>
    </form>
  );
};
