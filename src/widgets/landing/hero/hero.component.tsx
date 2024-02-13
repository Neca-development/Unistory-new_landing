import { HeroEn, HeroRu } from "@shared/i18n";
import { useMounted } from "@shared/lib/hooks/useMounted";
import StarComponent from "@widgets/landing/hero/star.component";
import SunComponent from "@widgets/landing/hero/sun.component";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";

export function Hero() {
  const mounted = useMounted();

  const { locale } = useRouter();

  const text = React.useMemo(() => {
    if (locale === "ru") {
      return HeroRu;
    }

    return HeroEn;
  }, [locale]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "container justify-center pt-[3.5rem] pb-14 lg:flex lg:min-h-[91vh] lg:flex-col lg:pb-8 t-xs:pt-12"
      )}
    >
      <section className="relative pb-[5rem] lg:mb-[10vh] t-xs:pb-16">
        <h1 className="text-center text-4xl font-bold duration-300 md:text-[5.2rem] md:leading-[1.1] lg:text-[5rem]">
          <span className="text-primary-s">{text?.title.first}</span>
          <StarComponent />
          <br />
          <span className="duration-300 t-xs:mr-2">{text?.title.second}</span>
          <br />
          <span className="inline-block duration-300">{text?.title.third}</span>
        </h1>
        {process.env.NODE_ENV === "development" && <SunComponent />}
        <h2 className="text-center mt-5 text-light-text-secondary dark:text-dark-text-secondary md:text-3xl md:mt-16">
          {text?.subtitle}
        </h2>
      </section>
    </div>
  );
}
