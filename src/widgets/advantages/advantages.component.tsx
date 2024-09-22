import React from "react";
import { Advantage } from "./advantage.component";
import { useRouter } from "next/router";

const advantages = [
  {
    text: "Топ-10 разработчиков корпоративных решений",
    textEN: "Top 10 developers of intelligent solutions",
    advantageNumber: 10,
  },
  {
    text: "Топ-5 разработчиков ПО на международном рынке",
    textEN: "Top 5 software developers on the international market",
    advantageNumber: 5,
  },
  {
    text: "Наши разработчики — победители хакатонов",
    textEN: "Our developers are winners of hackathons",
    advantageNumber: 1,
  },
];

export const Advantages: React.FC = () => {
  const { locale } = useRouter();

  return (
    <div className="flex mx-40 gap-6 mt-10 mb-10 m-md:mx-[1.125rem] m-md:mr-0 m-md:min-w-[13.6875rem] justify-center m-md:justify-start scroll-container m-md:overflow-x-scroll m-md:overflow-y-hidden m-md:no-scrollbar">
      {advantages.map((item) => (
        <Advantage
          text={locale === "ru" ? item.text : item.textEN}
          advantageNumber={item.advantageNumber}
        />
      ))}
    </div>
  );
};
