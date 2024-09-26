import { IconComponent } from "@shared/ui";
import { news } from "./lib";
import { NewsItem } from "./ui/news-item.component";
import { useRouter } from "next/router";

export const News = () => {
  const { locale } = useRouter();

  return (
    <div className="px-[5rem] m-md:mx-[1.125rem]  m-md:p-0">
      <div className="flex justify-between items-end m-md:block">
        <div className="text-[2.875rem] font-bold m-md:text-[1.75rem] leading-[3.375rem] m-md:leading-[2rem]">
          {locale === "ru" ? (
            <>
              <p>Рассказываем про работу в IT</p>
              <p>нейросети и web3</p>
            </>
          ) : (
            <>
              <div className="m-md:hidden">
                <p>We talk about working in IT,</p>
                <p>neural networks and web3</p>
              </div>
              <div className="md:hidden">
                <p>We talk about</p>
                <p>working in IT, neural networks and web3</p>
              </div>
            </>
          )}
        </div>
        <button className="rounded-full p-2 bg-light-bg-accent dark:bg-dark-bg-secondary flex items-center max-h-[3.75rem] m-md:max-h-10 m-md:mt-6">
          <span className="ml-9 mr-6 text-lg font-semibold m-md:text-sm m-md:ml-5">
            {locale === "ru" ? "Читать в телеграм" : "Read in telegram"}
          </span>
          <IconComponent name="telegramIcon" className="block m-md:hidden" />
          <IconComponent name="telegramIconSmall" className="lg:hidden" />
        </button>
      </div>
      <div className="flex justify-between mt-10 m-md:block">
        {news.map((item) => (
          <NewsItem item={item} lang={locale === "ru" ? "ru" : "en"} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="dark:bg-dark-bg-secondary bg-light-bg-accent rounded-md dark:text-dark-text-secondary text-sm px-4 py-1"
        >
          {locale === "ru" ? "Показать еще" : "Show more"}
        </button>
      </div>
    </div>
  );
};
