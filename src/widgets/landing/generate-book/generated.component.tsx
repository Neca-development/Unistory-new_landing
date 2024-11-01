import Link from "next/link";
import Image from "next/image";
import { GenerateBookTextEn, GenerateBookText } from "@shared/i18n/generate-book/en.text";
import { GenerateBookTextRu } from "@shared/i18n/generate-book/ru.text";
import { useRouter } from "next/router";
import { useMemo } from "react";

import generatedImage from "@public/assets/images/generate-book/generated-image.png";

const GeneratedComponent = () => {
  const { locale } = useRouter();

  const langData: GenerateBookText = useMemo(() => {
    return locale === "ru" ? GenerateBookTextRu : GenerateBookTextEn;
  }, [locale]);

  return (
    <div className="container p-6  px-4text-white rounded-3xl shadow-lg">
      <div
        className="rounded-3xl bg-light-bg-accent dark:bg-dark-bg-secondary p-6"
        style={{
          background: "radial-gradient(circle at 0% 20%, rgba(255, 72, 0, 0.5), transparent 50%)",
        }}
      >
        <h1 className="text-center text-2xl font-bold mb-6">{langData.GENERATED.heading}</h1>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-full md:w-1/2 text-base leading-relaxed text-left">
            {langData.GENERATED.sampleText}
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={generatedImage}
              alt="Generated image"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-end p-6 gap-4 mt-8">
          <Link href="#" className="btn-primary px-6 py-1 bg-gray-600 text-white rounded">
            {locale === "ru" ? "Назад" : "Back"}
          </Link>
          <Link href="#" className="btn-primary px-6 py-1 bg-blue-600 text-white rounded">
            {locale === "ru" ? "Вперёд" : "Next"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
