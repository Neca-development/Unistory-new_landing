import { HeroEn, HeroRu } from "@shared/i18n";
import { useMounted } from "@shared/lib/hooks/useMounted";
import { LazyShow } from "@shared/ui/animations/lazy-show.component";
import SunComponent from "@widgets/landing/hero/sun.component";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";
import StarComponent from "./star.component";

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
        "container justify-center pt-14 pb-20 lg:flex lg:flex-col lg:pb-8 t-xs:pt-12"
      )}
    >
      <section className="relative">
        <LazyShow>
          <h1 className="text-center text-4xl font-bold duration-300 md:text-[5.2rem] md:leading-[1.1] lg:text-[5rem]">
            <span className="text-primary-s">{text?.title.first}</span>
            <StarComponent />
            <br />
            <span className="duration-300 t-xs:mr-2">{text?.title.second}</span>
            <br />
            <span className="inline-block duration-300">{text?.title.third}</span>
          </h1>
          {process.env.NODE_ENV === "development" && <SunComponent />}
          <div className="text-center mt-5 text-light-text-secondary dark:text-dark-text-secondary md:text-3xl md:mt-10">
            {text?.subtitle}
          </div>
        </LazyShow>
      </section>
    </div>
  );
}
