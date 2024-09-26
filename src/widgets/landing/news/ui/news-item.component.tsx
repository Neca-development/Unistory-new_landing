import { IconComponent } from "@shared/ui";
import { News } from "../lib/types";

interface NewsItemProps {
  item: News;
  lang: "ru" | "en";
}

export const NewsItem: React.FC<NewsItemProps> = ({ item, lang }) => (
  <a href={item.link}>
    <div className="dark:bg-dark-bg-secondary bg-light-bg-accent rounded-xl p-3 m-md:flex m-md:w-full m-md:flex-row-reverse m-md:mt-4">
      <img src={item.image} alt="" className="m-md:h-[7.5rem] m-md:w-24" />
      <div className="pr-1">
        <p className="text-lg font-semibold dark:text-[white] leading-[1.375rem] mt-4 h-12 m-md:text-sm m-md:h-[3.75rem]">
          {item.title}
        </p>
        <div className="flex justify-between items-center mt-12 m-md:justify-start m-md:mt-[1rem]">
          <div className="bg-light-bg dark:bg-dark-bg rounded-[0.25rem] dark:text-dark-text-secondary px-2 py-1 text-sm">
            {item.site}
          </div>
          {lang === "ru" && (
            <div className="flex items-center dark:text-dark-text-secondary m-md:ml-3">
              <IconComponent name="eyeIcon" className="mr-1" />
              {item.views}k
            </div>
          )}
        </div>
      </div>
    </div>
  </a>
);
