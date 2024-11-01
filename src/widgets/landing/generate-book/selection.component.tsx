import Link from "next/link";
import { GenerateBookTextEn, GenerateBookText } from "@shared/i18n/generate-book/en.text";
import { useRouter } from "next/router";
import { useMemo } from "react";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { GenerateBookTextRu } from "@shared/i18n/generate-book/ru.text";

const SelectionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { locale } = useRouter();

  const langData: GenerateBookText = useMemo(() => {
    return locale === "ru" ? GenerateBookTextRu : GenerateBookTextEn;
  }, [locale]);

  return (
    <div className="container py-9 grid gap-4 md:gap-6 md:grid-cols-2 md:py-16">
      {(Object.keys(langData.INPUT) as (keyof typeof langData.INPUT)[]).map((field) => (
        <div
          key={field}
          className={clsx(
            "bg-light-bg-accent dark:bg-dark-bg-secondary p-4 rounded-lg border border-[#EDEAE8] dark:border-[#353535] rounded-3xl text-2xl md:p-8 flex items-center justify-between",
            {
              "md:col-span-2": field === "events",
            }
          )}
        >
          <span className="text-2xl mr-4">{langData.INPUT[field]}</span>
          <textarea
            placeholder=""
            className="bg-[inherit] w-full max-w-[60%] outline-none h-8 resize-none border-b-2 border-dark-text-primary"
          />
        </div>
      ))}

      <div className="bg-light-bg-accent dark:bg-dark-bg-secondary py-8 rounded-3xl border border-[#EDEAE8] dark:border-[#353535] text-2xl md:p-10 md:col-span-2">
        <div className="flex justify-around items-center space-x-8">
          <div className="text-white">{langData.GENRE_SELECTION}</div>
          <div className="flex  justify-between gap-6 flex-wrap">
            {langData.GENRE_STYLES.map(
              (genre: { title: string; image: string | StaticImageData }, index: number) => (
                <div
                  key={index}
                  className="relative  flex justify-between rounded-2xl overflow-hidden w-32 h-32"
                >
                  <img
                    src={typeof genre.image === "string" ? genre.image : genre.image.src}
                    alt={genre.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-1 right-1 bg-white text-black text-sm rounded-full shadow-md transition-colors duration-300 hover:text-summer">
                    {genre.title}
                  </div>

                  <input
                    type="checkbox"
                    className="absolute top-1 right-1 w-4 h-4 bg-white border border-gray-300 rounded-full"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="bg-light-bg-accent dark:bg-dark-bg-secondary p-4 rounded-3xl border border-[#EDEAE8] dark:border-[#353535] text-2xl md:p-10 md:col-span-2">
        <div className="flex justify-evenly items-center space-x-8">
          <div className="text-white">{langData.PICTURE_STYLE_SELECTION}</div>
          <div className="flex justify-between gap-6 flex-wrap">
            {langData.PICTURE_STYLES.map(
              (style: { title: string; image: string | StaticImageData }, index: number) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden w-32 h-32 cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={typeof style.image === "string" ? style.image : style.image.src}
                    alt={style.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-white text-black text-sm rounded-full shadow-md transition-colors duration-300 hover:text-summer">
                    {style.title}
                  </div>

                  <input
                    type="checkbox"
                    checked={selectedIndex === index}
                    onChange={() => setSelectedIndex(index)}
                    className="absolute top-1 right-1 w-4 h-4 bg-white border border-gray-300 rounded-xl pointer-events-none"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex pt-8 justify-end">
        <Link href="#" className="btn-primary px-6 py-1">
          {langData.GENERATE_BUTTON}
        </Link>
      </div>
    </div>
  );
};

export default SelectionComponent;
