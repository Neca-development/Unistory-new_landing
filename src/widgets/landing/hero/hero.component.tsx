import { HeroRu, HeroEn } from "@shared/i18n";
import { useThemeContext } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import * as React from "react";
import CloudComponent from "./cloud.component";
import RocketComponent from "./rocket.component";
import { useEffect, useState } from "react";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";

const plusSignClasses =
  "absolute -top-[1.1rem] text-[3rem] text-primary-s m-xl:text-4xl m-xl:top-2";

export function Hero() {
  const { textClassName, temperatureTheme, setTemperatureTheme } = useThemeContext();
  const { setTheme, theme } = useTheme();
  const [earthColor, setEarthColor] = useState(false)
  const [mounted, setMounted] = useState(false)

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleTemperatureThemeHandler = () => {
    setTemperatureTheme(temperatureTheme === "summer" ? "winter" : "summer");
  };

  const toggleEarthColor = () => {
    setEarthColor(prevState => !prevState)
  }

  const { locale } = useRouter();

  const text = React.useMemo(() => {
    if (locale === "ru") {
      return HeroRu;
    }

    return HeroEn;
  }, [locale]);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={clsx("container pt-[7.125rem] t-xs:pt-12 pb-16")}>
      <section className="relative pb-[8.875rem] t-xs:pb-16">
        <h1 className={clsx(textClassName, "pr-24 text-h1 t-xs:text-mob-h1 t-xs:pr-0")}>
          {text?.description.first} <br />
          {text?.description.second}
          <button className="relative top-[-0.5rem] w-10 p-2 t-xs:absolute t-xs:top-16 t-xs:right-[0.4rem]" onClick={toggleEarthColor}>
            <IconComponent name={earthColor ? "earthColor" : "earth"} className={iconClassnameByTheme}/>
          </button>
          <span className="font-roboto font-light italic inline-block text-light-text-primary dark:text-dark-text-primary">
            {text?.description.third}
          </span>
          <br />
          {text?.description.fourth}
        </h1>

        <CloudComponent />

        <button
          onClick={toggleTemperatureThemeHandler}
          className="absolute top-[2rem] right-[3rem] w-10 p-2 t-xs:top-[31rem]"
        >
          <IconComponent
            name={temperatureTheme}
            className={clsx(
              "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent"
            )}
          />
        </button>

        <RocketComponent />

        <button
          onClick={toggleThemeHandler}
          className="absolute bottom-8 right-[28rem] w-10 t-xs:right-0 t-xs:-bottom-16"
        >
          <IconComponent name={theme === 'light' ? "sun" : "sunset"} className={iconClassnameByTheme} />
        </button>
      </section>

      <section className="flex items-center justify-between t-xs:block">
        <article className="flex items-center text-2xl t-xs:mb-8 font-medium">
          <p className="relative mr-[2.75rem] m-xl:w-[4.875rem] text-[5rem] m-xl:text-[3rem] font-bold leading-[5rem] m-xl:mr-4">
            25
            <span className={plusSignClasses}>+</span>
          </p>
          <span
            className="text-2xl m-xl:text-base"
            dangerouslySetInnerHTML={{ __html: text?.params?.teamSize }}
          />
        </article>

        <article className="flex items-center text-2xl t-xs:mb-8 font-medium">
          <p className="relative mr-[2.75rem] m-xl:w-[4.875rem] text-[5rem] m-xl:text-[3rem] font-bold leading-[5rem] m-xl:mr-4">
            70
            <span className={plusSignClasses}>+</span>
          </p>
          <span
            className="text-2xl m-xl:text-base"
            dangerouslySetInnerHTML={{ __html: text?.params?.projects }}
          />
        </article>

        <article className="flex items-center text-2xl font-medium">
          <p className="relative mr-4 m-xl:w-[4.875rem] text-[5rem] m-xl:text-[3rem] font-bold leading-[5rem]">
            4.9
          </p>
          <span
            className="text-2xl m-xl:text-base"
            dangerouslySetInnerHTML={{ __html: text?.params?.rating }}
          />
        </article>
      </section>
    </div>
  );
}
