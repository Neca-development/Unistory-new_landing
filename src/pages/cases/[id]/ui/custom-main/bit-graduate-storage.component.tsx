import React from "react";
import BgImage from "@public/assets/images/cases/bit-graduate/storage-bg.jpg";
import MacbookImage from "@public/assets/images/cases/bit-graduate/storage-macbook.png";
import InfoImage from "@public/assets/images/cases/bit-graduate/storage-info.png";
import Image from "next/image";

export const BitGraduateStorage = () => {
  return (
    <div className="relative mt-10">
      <Image src={BgImage} alt="Bg" fill className="w-full object-cover" />

      <div className="container relative flex justify-end items-start pt-32 pb-[17.75rem] z-10">
        <Image
          src={MacbookImage}
          alt="Macbook"
          width={1440}
          height={960}
          className="absolute -top-10 -left-[14rem] pointer-events-none"
        />
        <div className="w-[20.625rem] h-[26.875rem] hover:scale-110 transition-transform duration-500 ease-in-out origin-top">
          <Image src={InfoImage} alt="Info" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};
