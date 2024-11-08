import Image from "next/image";
import { GenerateBookTextEn, GenerateBookText } from "@shared/i18n/generate-book/en.text";
import { GenerateBookTextRu } from "@shared/i18n/generate-book/ru.text";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import { useBookStore } from "@shared/lib/store/book/book.store";

export const GeneratedComponent = () => {
  const { locale } = useRouter();

  const langData: GenerateBookText = useMemo(() => {
    return locale === "ru" ? GenerateBookTextRu : GenerateBookTextEn;
  }, [locale]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { bookImage, paragraphs } = useBookStore();

  const onBtnClick = (num: number) => {
    setCurrentIndex((i) => {
      if (i + num >= paragraphs.length) return i;
      if (i + num < 0) return 0;

      return i + num;
    });
  };
  console.log(bookImage);

  return (
    <div className="container p-6  px-4text-white rounded-3xl shadow-lg">
      <div className="relative rounded-3xl bg-light-bg-accent dark:bg-dark-bg-secondary  border border-[#EDEAE8] dark:border-[#353535] overflow-hidden">
        <div
          className="rounded-3xl bg-light-bg-accent dark:bg-dark-bg-secondary p-6"
          style={{
            background:
              "radial-gradient(ellipse 75% 340% at 0% 20%, rgba(255, 72, 0, 0.5), transparent 27%)",
          }}
        >
          <h1 className="text-center sm:py-2 py-12 text-3xl font-bold mb-6">
            {paragraphs[currentIndex]?.paragraph_title || ""}
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-full md:w-1/2 text-lg  text-bold leading-relaxed text-left">
              {paragraphs[currentIndex]?.paragraph_text || ""}
            </div>
            <div className="w-full py-4 md:w-1/2">
              <Image
                src={`data:image/jpeg;base64,${bookImage || ""}`}
                alt="Generated image"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-end p-6 gap-4 ">
            <button
              className="btn-primary px-6 py-1 bg-gray-600 text-white rounded"
              onClick={() => onBtnClick(-1)}
            >
              {langData.GENERATED.backButton}
            </button>
            <button
              className="btn-primary px-6 py-1 bg-blue-600 text-white rounded"
              onClick={() => onBtnClick(1)}
            >
              {langData.GENERATED.nextButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
