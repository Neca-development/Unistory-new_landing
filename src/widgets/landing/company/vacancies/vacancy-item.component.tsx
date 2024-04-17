import { IVacancy } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";

interface IVacancyItem {
  locale: "ru" | "en";
  vacancy: IVacancy;
  accordionOpenedId: number | undefined;
  onAccordionButtonCLick: () => void;
}

export const VacancyItem = (props: IVacancyItem) => {
  const { locale, vacancy, accordionOpenedId, onAccordionButtonCLick } = props;

  return (
    <div className="py-4 border-b-[1px] border-[#353535]">
      <div className="flex items-center justify-between">
        <div className="w-[calc(100%_-_3.5rem)] md:flex md:items-center md:space-x-3">
          <h3 className="block mb-1 text-lg font-semibold md:inline md:mb-0 md:w-2/5 lg:text-2xl">
            {vacancy.post[locale]}
          </h3>
          <p className="dark:text-dark-text-secondary text-xs mr-4 md:w-[30%] md:text-sm md:mr-0">
            {vacancy.location[locale]}
          </p>
          <p className="dark:text-dark-text-secondary text-xs md:w-[30%] md:text-sm">
            {vacancy.format[locale]}
          </p>
        </div>
        <div
          className={clsx(
            "w-10 h-10 cursor-pointer transition-all",
            accordionOpenedId === vacancy.id ? "rotate-180" : ""
          )}
          onClick={onAccordionButtonCLick}
        >
          <IconComponent name="accordionIcon" className="w-full h-full" />
        </div>
      </div>
      <div
        className={clsx(
          "mt-4 space-y-4 lg:space-y-8",
          accordionOpenedId === vacancy.id ? "block" : "hidden"
        )}
      >
        <div className="space-y-2 dark:text-dark-text-secondary text-xs md:text-sm">
          {vacancy.description[locale].map((descriptionString, index) => (
            <p key={`desc-${index}`}>{descriptionString}</p>
          ))}
        </div>
        <div className="space-y-4 lg:space-y-8">
          {vacancy.jobPoints[locale].map((point) => (
            <div>
              <p className="font-semibold mb-2 lg:mb-4 lg:text-lg">{point.title}</p>
              <ul className="text-xs dark:text-dark-text-secondary space-y-2 list-disc pl-4 md:text-sm">
                {point.listItems.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
