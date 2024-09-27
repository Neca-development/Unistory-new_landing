import React from "react";
import { Advantage } from "./advantage.component";
import { useRouter } from "next/router";

const advantages = [
  {
    text: "Топ-10 разработчиков корпоративных решений",
    textEN: "Winner of Hackathon",
    advantageNumber: "10",
    advantageNumberEN: "5.0",
    link: "https://ratingruneta.ru/corporate/erp-integration/",
    linkEN: "https://devpost.com/unistory/challenges",
    icon: "crown",
  },
  {
    text: "Топ-5 разработчиков ПО на международном рынке",
    textEN: "Clutch Rating 5.0",
    advantageNumber: "5",
    advantageNumberEN: "5.0",
    link: "https://ratingruneta.ru/foreign/",
    linkEN: "https://clutch.co/profile/unistory",
  },
  {
    text: "Наши разработчики — победители хакатонов",
    textEN: "Upwork Rating 5.0",
    advantageNumber: "1",
    advantageNumberEN: "5.0",
    link: "https://devpost.com/unistory/challenges",
    linkEN: "https://www.upwork.com/agencies/unistory/",
  },
];

export const Advantages: React.FC = () => {
  const { locale } = useRouter();

  return (
    <div className="flex mx-40 gap-6 mt-10 mb-10 m-md:mx-[1.125rem] m-md:mr-0 m-md:min-w-[13.6875rem] justify-center m-md:justify-start scroll-container m-md:overflow-x-scroll m-md:overflow-y-hidden m-md:no-scrollbar">
      {advantages.map((item) => (
        <Advantage
          key={item.advantageNumber}
          text={locale === "ru" ? item.text : item.textEN}
          advantageNumber={locale === "ru" ? item.advantageNumber : item.advantageNumberEN}
          link={locale === "ru" ? item.link : item.linkEN}
          icon={item.icon}
          lang={locale}
        />
      ))}
    </div>
  );
};
