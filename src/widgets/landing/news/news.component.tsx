import { IconComponent } from "@shared/ui";
import { news, newsEN } from "./lib";
import { NewsItem } from "./ui/news-item.component";
import { useRouter } from "next/router";
import { useState } from "react";

export const News = () => {
  const { locale } = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const newsPerPage = 4;
  const newsData = locale === "ru" ? news : newsEN;
  const displayedNews = newsData.slice(0, newsPerPage * (currentPage + 1));

  return (
    <div className="container">
      <div className="flex justify-between items-end m-md:block">
        <div className="text-[2.875rem] font-bold m-md:text-[1.75rem] leading-[3.375rem] m-md:leading-[2rem]">
          {locale === "ru" ? (
            <>
              <p>Рассказываем про работу в IT,</p>
              <p>нейросети и web3</p>
            </>
          ) : (
            <>
              <p>Blog posts about web3 and AI</p>
            </>
          )}
        </div>
        {locale === "ru" && (
          <a href="https://t.me/unistory_app" target="_blank">
            <button className="rounded-full p-2 bg-light-bg-accent dark:bg-dark-bg-secondary flex items-center max-h-[3.75rem] m-md:max-h-10 m-md:mt-6">
              <span className="ml-9 mr-6 text-lg font-semibold m-md:text-sm m-md:ml-5 dark:text-[white]">
                Читать в телеграм
              </span>
              <IconComponent name="telegramIcon" className="block m-md:hidden" />
              <IconComponent name="telegramIconSmall" className="lg:hidden" />
            </button>
          </a>
        )}
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10 m-md:block">
        {displayedNews.map((item, index) => (
          <NewsItem key={index} item={item} lang={locale === "ru" ? "ru" : "en"} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {newsPerPage * (currentPage + 1) < newsData.length && (
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="dark:bg-dark-bg-secondary bg-light-bg-accent rounded-md dark:text-dark-text-secondary text-sm px-4 py-1"
          >
            {locale === "ru" ? "Показать еще" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};
