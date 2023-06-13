import { ServicesEn, ServicesRu } from "@shared/i18n";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useInterval } from "@shared/lib/hooks/useInterval.hook";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import Timer from "../reviews/reviews.component";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent duration-300";

const timerDuration = 20000;

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { locale } = useRouter();

  const data = React.useMemo(() => {
    if (locale === "ru") {
      return ServicesRu;
    }

    return ServicesEn;
  }, [locale]);

  const nextSlide = useCallback(() => {
    setActiveIndex((activeIndex) => {
      if (activeIndex === data.length - 1) {
        return 0;
      }

      return activeIndex + 1;
    });
  }, [activeIndex]);

  useInterval(nextSlide, timerDuration, [activeIndex]);

  return (
    <section className="container pt-12 pb-20 t-xs:pb-10 t-xs:pt-2">
      <div className="grid grid-cols-[27.5rem_1fr] lg:h-[30rem] t-xs:block rounded-sm bg-light-surface dark:bg-dark-surface duration-300">
        <div className="grid grid-cols-1 content-start gap-4 border-r-2 border-light-bg p-4 pt-10 dark:border-dark-bg t-xs:pt-6 t-xs:border-r-0 duration-300">
          {data.map((s, index) => (
            <div
              key={s.id}
              className={clsx(
                "flex cursor-pointer items-center rounded-sm px-4 py-6 hover:bg-bg-hover t-xs:p-4 duration-300",
                activeIndex === index && "bg-bg-s hover:bg-bg-s duration-300"
              )}
              onClick={() => setActiveIndex(index)}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {activeIndex === index ? (
                  <Timer className="min-w-[32px]" duration={timerDuration} />
                ) : (
                  <IconComponent name={s.icon} className={clsx("w-full", iconClassnameByTheme)} />
                )}
              </div>

              <h2
                className={clsx(
                  "ml-6 text-2xl font-semibold t-xs:text-base duration-300",
                  activeIndex === index && "text-primary-s"
                )}
              >
                {s.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="pt-12 pb-[3.75rem] min-h-[24.5rem] h-[10rem] lg:h-auto t-xs:py-8 t-xs:px-[28px] pl-16 pr-10 t-xs:border-light-bg dark:border-dark-bg t-xs:border-t-2 border-solid">
          <h3
            className="text-4xl font-bold t-xs:text-xl duration-300 will-change-auto"
            dangerouslySetInnerHTML={{ __html: data[activeIndex]!.header }}
          />
          <p
            className="mt-10 text-2xl leading-10 t-xs:text-base duration-300 will-change-auto"
            dangerouslySetInnerHTML={{ __html: data[activeIndex]!.description }}
          />
        </div>
      </div>
    </section>
  );
}
