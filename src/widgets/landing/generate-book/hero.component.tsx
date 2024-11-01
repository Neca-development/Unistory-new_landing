import { GenerateBookTextEn } from "@shared/i18n/generate-book/en.text";
import { GenerateBookTextRu } from "@shared/i18n/generate-book/ru.text";

import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import StarComponent from "../hero/star.component";

const GenerateBookHero = () => {
  const { locale } = useRouter();

  const langData = useMemo(() => {
    return locale === "ru" ? GenerateBookTextRu : GenerateBookTextEn;
  }, [locale]);

  return (
    <div className={clsx("container justify-center pt-14 lg:flex lg:flex-col t-xs:pt-12")}>
      <section className="relative pt-10">
        <h1 className="text-center text-4xl font-bold duration-300 md:text-[5.2rem] md:leading-[1.1] lg:text-[5rem]">
          <span className="text-primary-s">{langData.HERO.first}</span>
          <StarComponent />
          <br />
          <span className="duration-300 t-xs:mr-2">{langData.HERO.second}</span>
          <br />
        </h1>
      </section>
    </div>
  );
};

export default GenerateBookHero;
