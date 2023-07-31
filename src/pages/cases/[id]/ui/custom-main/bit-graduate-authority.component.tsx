import React, { useMemo, useState } from "react";
import BgImage from "@public/assets/images/cases/bit-graduate/authority-bg.jpg";
import DiplomaIcon from "@public/assets/images/cases/bit-graduate/diploma-icon.png";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";

const cards = [
  {
    id: 1,
    date: "14/07/2022",
    institute: "Harvard University",
    career: "Consensus Protocols",
    certificateId: "6a527ba5-01ee-46e8-a013-30b9876a8237",
    isFake: true,
  },
  {
    id: 2,
    date: "20/06/2022",
    institute: "Stanford University",
    career: "Graphic design",
    certificateId: "30b9876a8237-6a527ba5-01ee-46e8-a013",
    isFake: false,
  },
  {
    id: 3,
    date: "27/04/2023",
    institute: "MIT",
    career: "Theoretical Physics",
    certificateId: "46e8-a013-6a527ba5-01ee-30b9876a8237",
    isFake: true,
  },
  {
    id: 4,
    date: "28/07/2023",
    institute: "CSUSM",
    career: "Master of Art",
    certificateId: "01ee-46e8-6a527ba5-a013-30b9876a8237",
    isFake: true,
  },
  {
    id: 5,
    date: "14/07/2022",
    institute: "Harvard University",
    career: "Consensus Protocols",
    certificateId: "6a527ba5-01ee-46e8-a013-30b9876a8237",
    isFake: true,
  },
  {
    id: 6,
    date: "20/06/2022",
    institute: "Stanford University",
    career: "Graphic design",
    certificateId: "30b9876a8237-6a527ba5-01ee-46e8-a013",
    isFake: false,
  },
  {
    id: 7,
    date: "27/04/2023",
    institute: "MIT",
    career: "Theoretical Physics",
    certificateId: "46e8-a013-6a527ba5-01ee-30b9876a8237",
    isFake: false,
  },
  {
    id: 8,
    date: "28/07/2023",
    institute: "CSUSM",
    career: "Master of Art",
    certificateId: "01ee-46e8-6a527ba5-a013-30b9876a8237",
    isFake: true,
  },
];

export const BitGraduateAuthority = () => {
  const [showResultCardId, setShowResultCardId] = useState<number | null>(null);
  const { locale } = useRouter();

  const renderTitle = useMemo(() => {
    if (locale === "ru") {
      return "Наведите на диплом чтобы проверить его подлинность";
    } else {
      return "Hover over the diploma to check its authenticity";
    }
  }, [locale]);

  return (
    <div className="relative mt-10">
      <Image src={BgImage} alt="Bg" fill className="w-full object-cover" />

      <div className="container relative py-[3.75rem]">
        <p className="text-3xl font-light text-center">{renderTitle}</p>
        <div className="grid grid-cols-4 gap-x-10 gap-y-20 mt-20">
          {cards.map((card) => (
            <article
              key={card.id}
              className="rounded-[0.625rem] border-[0.3125rem] border-[#DADADA] bg-light-bg shadow-2xl px-5 py-3 text-[#136BFE] min-h-[12.5rem]"
              onMouseEnter={() => setShowResultCardId(card.id)}
              onMouseLeave={() => setShowResultCardId(null)}
            >
              <div className="flex justify-between items-center pb-2 mb-2 border-b-[0.0625rem]">
                <div className="flex items-center">
                  <Image src={DiplomaIcon} alt="Diploma" width={28} height={28} />
                  <p className="uppercase text-xs font-semibold ml-3">diploma</p>
                </div>
                <div className="text-[0.625rem]">{card.date}</div>
              </div>

              {card.id === showResultCardId ? (
                <div>
                  <p className="text-xs text-black-text font-medium">Result:</p>
                  <div
                    className={clsx(
                      "text-4xl text-center font-semibold mt-4",
                      card.isFake ? "text-[#ff0000]" : "text-[#83C93D]"
                    )}
                  >
                    {card.isFake ? "Fake" : "Authentic"}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-[0.625rem]">
                  <p className="text-[0.5rem]">
                    Academic Institution
                    <span className="block mt-1 text-xs font-medium">{card.institute}</span>
                  </p>
                  <p className="text-[0.5rem]">
                    Career
                    <span className="block mt-1 text-[0.5625rem] font-medium">{card.career}</span>
                  </p>
                  <p className="text-[0.5rem]">
                    Certificate ID:
                    <span className="block mt-1 text-[0.5625rem] font-medium">
                      {card.certificateId}
                    </span>
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
