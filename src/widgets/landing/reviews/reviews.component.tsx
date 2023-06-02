import { ReviewsEN, ReviewsRU } from "@shared/i18n";
import { CASES } from "@shared/lib";
import { useInterval } from "@shared/lib/hooks/useInterval.hook";
import { ICase } from "@shared/lib/types";
import { WorksCard } from "@widgets/works-card";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

function Timer({ duration }: { duration: number }) {
  const [timeLeft, setTimeLeft] = useState(duration * 0.65);
  const { theme, systemTheme } = useTheme();
  const _theme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (timeLeft / (duration * 0.65)) * circumference;

  return (
    <svg width="32" height="32">
      <circle
        cx="16"
        cy="16"
        r={radius}
        stroke={_theme === "light" ? "#000" : "#fff"}
        opacity={0.2}
        strokeWidth="8"
        fill="none"
      />
      <circle
        cx="16"
        cy="16"
        r={radius}
        stroke={_theme === "light" ? "#000" : "#fff"}
        strokeWidth="8"
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 16 16)"
      />
    </svg>
  );
}

export default Timer;

const setGasMonstersOnFirstPlace = (a: ICase, b: ICase) =>
  a.id === "gas-monsters" ? -1 : b.id === "gas-monsters" ? 1 : 0;
const reviewsData = CASES.filter((c) => c.review).sort(setGasMonstersOnFirstPlace);

const timerDuration = 20000;

export function Reviews() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const { locale } = useRouter();

  const text = useMemo(() => {
    if (locale === "ru") {
      return ReviewsRU;
    }

    return ReviewsEN;
  }, [locale]);

  const nextSlide = useCallback(() => {
    setActiveReviewIndex((activeReviewIndex) => {
      if (activeReviewIndex === reviewsData.length - 1) {
        return 0;
      }

      return activeReviewIndex + 1;
    });
  }, [activeReviewIndex]);

  useInterval(nextSlide, timerDuration, [activeReviewIndex]);

  return (
    <section className="container pt-20 pb-[7.5rem]">
      <h2 className="text-2xl leading-none mb-10 t-xs:mb-8 lg:text-5xl font-bold lg:leading-[3.25rem]">
        {text.title.beforeHighlight}
        <span
          className="text-primary-s"
          dangerouslySetInnerHTML={{ __html: text.title.highlight }}
        ></span>
        {text.title.afterHighlight}
      </h2>

      <div className="lg:grid gap-10 grid-cols-[1fr_25rem]">
        <article className="py-6 lg:py-10 px-4 lg:px-16 bg-light-surface dark:bg-dark-surface rounded-sm flex flex-col h-[35rem] t-xs:h-[28rem] justify-between">
          <p
            className="text-base leading-6 lg:text-2xl lg:leading-10"
            dangerouslySetInnerHTML={{
              __html:
                locale === "ru"
                  ? reviewsData[activeReviewIndex]?.review?.text.ru ?? ""
                  : reviewsData[activeReviewIndex]?.review?.text.en ?? "",
            }}
          ></p>
          <span className="text-sm leading-5 lg:text-xl font-medium mt-auto lg:mt-4">
            <span className="font-bold lg:whitespace-nowrap">
              {locale === "ru" && reviewsData[activeReviewIndex]?.review?.author.name.ru}
              {locale === "en" && reviewsData[activeReviewIndex]?.review?.author.name.en}
            </span>{" "}
            <span className="mr-2">
              {locale === "ru" && reviewsData[activeReviewIndex]?.review?.author.position.ru}
              {locale === "en" && reviewsData[activeReviewIndex]?.review?.author.position.en}
            </span>
            <span>
              {reviewsData[activeReviewIndex]?.review?.author.company ===
                "«Consensus-base Inc.»" && <br className="hidden lg:block" />}
              {reviewsData[activeReviewIndex]?.review?.author.company ===
                "«BP Networking & Design Inc.»" && <br />}
              {reviewsData[activeReviewIndex]?.review?.author.company}
            </span>
          </span>
        </article>
        <div className="hidden lg:block">
          <WorksCard work={reviewsData[activeReviewIndex]!} isLargeImage={false} />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-6">
        {reviewsData.map((r, idx) => (
          <button
            key={idx}
            className="py-3 px-4 bg-light-surface dark:bg-dark-surface text-base lg:text-2xl rounded-sm flex items-center "
            onClick={() => setActiveReviewIndex(idx)}
          >
            {activeReviewIndex === idx && <Timer duration={timerDuration} />}
            <span
              className={clsx(
                "opacity-50 h-[32px] flex items-center",
                activeReviewIndex === idx && "opacity-100 font-bold  ml-[18px]"
              )}
            >
              {r?.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
