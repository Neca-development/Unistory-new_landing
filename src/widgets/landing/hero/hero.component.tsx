import { HeroRu, HeroEn } from "@shared/i18n";
import { useThemeContext } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";
import CloudComponent from "./cloud.component";
import RocketComponent from "./rocket.component";
import { useState } from "react";
import TemperatureComponent from "./temperature.component";
import SunComponent from "@widgets/landing/hero/sun.component";
import { useMounted } from "@shared/lib/hooks/useMounted";
import { useAnimationStore } from "@shared/lib/store";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent first:[&>path]:transition first:[&>path]:duration-300";

const plusSignClasses =
  "absolute -top-[1.1rem] text-[3rem] text-primary-s m-xl:text-4xl m-xl:top-2 duration-300";

export function Hero() {
  const { textClassName } = useThemeContext();
  const [earthColor, setEarthColor] = useState(false);
  const mounted = useMounted();
  const { shouldAnimate } = useAnimationStore();

  const toggleEarthColor = () => {
    setEarthColor((prevState) => !prevState);
  };

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
        "container pt-[3.5rem] t-xs:pt-12 pb-14 lg:pb-8 lg:flex lg:flex-col justify-center lg:min-h-[91vh]"
      )}
    >
      <section className="relative pb-[5rem] lg:mb-[10vh] t-xs:pb-16">
        <h1
          className={clsx(
            textClassName,
            "pr-24 text-h1 2xl:text-large-h1 t-xs:text-mob-h1 text-center t-xs:pr-0 duration-300"
          )}
        >
          {text?.description.first} <br />
          <span className="t-xs:mr-2">{text?.description.second}</span>
          <button
            className={clsx(
              "relative top-[-0.5rem] w-10 p-2 t-xs:absolute t-xs:top-32 2xl:w-12 t-xs:right-[0.4rem]",
              shouldAnimate && "animate-hero-icons-fade-in"
            )}
            onClick={toggleEarthColor}
          >
            <IconComponent
              name={earthColor ? "earthColor" : "earth"}
              className={iconClassnameByTheme}
            />
          </button>
          <span className="font-roboto font-light italic inline-block text-light-text-primary dark:text-dark-text-primary duration-300">
            {text?.description.third}
          </span>
          {" " + text?.description.fourth + " "}
          <br className={clsx(locale === "en" && "t-xs:hidden")} />
          {text?.description.fifth}
        </h1>

        <CloudComponent />

        <TemperatureComponent />

        <RocketComponent />

        <SunComponent />
      </section>

      <section className="flex items-center justify-between t-xs:block t-xs:ml-8">
        <article className="flex items-center text-2xl t-xs:mb-8 font-medium">
          <p className="relative mr-[2.75rem] m-xl:w-[4.875rem] text-[5rem] 2xl:text-8xl m-xl:text-[3rem] font-bold leading-[5rem] m-xl:mr-4">
            25
            <span className={plusSignClasses}>+</span>
          </p>
          <span
            className="text-2xl m-xl:text-base 2xl:text-3xl"
            dangerouslySetInnerHTML={{ __html: text?.params?.teamSize }}
          />
        </article>

        <article className="flex items-center text-2xl t-xs:mb-8 font-medium">
          <p className="relative mr-[2.75rem] m-xl:w-[4.875rem] text-[5rem] 2xl:text-8xl m-xl:text-[3rem] font-bold leading-[5rem] m-xl:mr-4">
            70
            <span className={plusSignClasses}>+</span>
          </p>
          <span
            className="text-2xl m-xl:text-base 2xl:text-3xl"
            dangerouslySetInnerHTML={{ __html: text?.params?.projects }}
          />
        </article>

        <article className="flex items-center text-2xl font-medium">
          <p className="relative mr-[2.5rem] m-xl:w-[4.875rem] text-[5rem] 2xl:text-8xl m-xl:text-[3rem] font-bold leading-[5rem] m-xl:mr-5">
            <span>5</span>
            <span className="-mr-[5px]">.</span>
            <span>0</span>
            <span className="absolute top-3 -right-6 text-primary-s 2xl:top-0 m-xl:-right-2 m-xl:top-5">
              <IconComponent name="clutchStar" className="w-6 h-6 m-xl:w-4 m-xl:h-4" />
            </span>
          </p>
          <span
            className="text-2xl m-xl:text-base 2xl:text-3xl"
            dangerouslySetInnerHTML={{ __html: text?.params?.rating }}
          />
        </article>
      </section>
    </div>
  );
}
