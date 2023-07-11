import { ServicesEn, ServicesRu } from "@shared/i18n";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
// import { useInterval } from "@shared/lib/hooks/useInterval.hook";
import { useRouter } from "next/router";
import React, { useState } from "react";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent duration-300";

//const timerDuration = 20000;

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { locale } = useRouter();

  const data = React.useMemo(() => {
    if (locale === "ru") {
      return ServicesRu;
    }

    return ServicesEn;
  }, [locale]);

  /*
  const nextSlide = useCallback(() => {
    setActiveIndex((activeIndex) => {
      if (activeIndex === data.length - 1) {
        return 0;
      }

      return activeIndex + 1;
    });
  }, [activeIndex]); 
  */

  //useInterval(nextSlide, timerDuration, [activeIndex]);

  return (
    <section className="container pt-12 pb-20 t-xs:pb-10 t-xs:pt-2">
      <div className="grid grid-cols-[27.5rem_1fr] min-h-[31rem] lg:min-h-[32.5rem] t-xs:block rounded-sm bg-light-surface dark:bg-dark-surface duration-300">
        <div className="flex flex-col justify-center content-start border-r-2 border-light-bg p-4 lg:py-10 dark:border-dark-bg t-xs:pt-6 t-xs:border-r-0 duration-300">
          {data.map((s, index) => (
            <div
              key={s.id}
              className={clsx(
                "[&:not(:last-child)]:mb-8 flex cursor-pointer items-center rounded-sm px-4 py-6 hover:bg-bg-hover t-xs:p-4 duration-300",
                activeIndex === index && "bg-bg-s hover:bg-bg-s duration-300"
              )}
              onClick={() => setActiveIndex(index)}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <IconComponent name={s.icon} className={clsx("w-full", iconClassnameByTheme)} />
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

        <div className="py-10 min-h-[25.5rem] lg:h-auto t-xs:py-8 t-xs:px-[28px] pl-8 pr-5 t-xs:border-light-bg dark:border-dark-bg t-xs:border-t-2 border-solid">
          {data[activeIndex]!.header != "" && (
            <h3
              className="text-4xl font-bold t-xs:text-xl duration-300 mb-10 will-change-auto"
              dangerouslySetInnerHTML={{ __html: data[activeIndex]!.header }}
            />
          )}

          <div
            className="text-2xl leading-10 t-xs:text-base duration-300 will-change-auto"
            dangerouslySetInnerHTML={{ __html: data[activeIndex]!.description }}
          />
        </div>
      </div>
    </section>
  );
}
