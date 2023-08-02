import React, { useMemo } from "react";
import BgImage from "@public/assets/images/cases/bit-graduate/storage-bg.jpg";
import MacbookImage from "@public/assets/images/cases/bit-graduate/storage-macbook.png";
import InfoImage from "@public/assets/images/cases/bit-graduate/storage-info.png";
import Image from "next/image";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import MobileImage1 from "@public/assets/images/cases/bit-graduate/storage-mobile-1.png";
import MobileImage2 from "@public/assets/images/cases/bit-graduate/storage-mobile-2.png";
import MobileImage3 from "@public/assets/images/cases/bit-graduate/storage-mobile-3.png";
import MobileImage4 from "@public/assets/images/cases/bit-graduate/storage-mobile-4.png";
import clsx from "clsx";
import { useRouter } from "next/router";

const sliderArrowClasses =
  "bg-[#136BFE] py-2 px-4 text-xs text-dark-text-primary drop-shadow-xl font-medium";

export const BitGraduateStorage = () => {
  const isMobile = useDetectDeviceType();
  const { locale } = useRouter();

  const prevArrowName = useMemo(() => {
    if (locale === "ru") {
      return "Предыдущий";
    } else {
      return "Previous";
    }
  }, [locale]);

  const nextArrowName = useMemo(() => {
    if (locale === "ru") {
      return "Следующий";
    } else {
      return "Next";
    }
  }, [locale]);

  return (
    <div className="relative mt-10">
      <Image src={BgImage} alt="Bg" fill className="w-full object-cover t-xs:object-fill" />

      {isMobile ? (
        <Splide
          hasTrack={false}
          options={{
            gap: "4rem",
            pagination: false,
            padding: "3.5rem",
          }}
          className="pb-10"
          aria-label="BitGraduate Storage Mobile Slider"
        >
          <SplideTrack className="pb-10 pt-10">
            <SplideSlide className="drop-shadow-b">
              <Image src={MobileImage1} alt="Info" style={{ objectFit: "contain" }} />
            </SplideSlide>
            <SplideSlide className="drop-shadow-b">
              <Image src={MobileImage2} alt="Info" style={{ objectFit: "contain" }} />
            </SplideSlide>
            <SplideSlide className="drop-shadow-b">
              <Image src={MobileImage3} alt="Info" style={{ objectFit: "contain" }} />
            </SplideSlide>
            <SplideSlide className="drop-shadow-b">
              <Image src={MobileImage4} alt="Info" style={{ objectFit: "contain" }} />
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows relative h-8 grid grid-cols-2 max-w-[15.625rem] items-center mx-auto gap-1">
            <button
              className={clsx(
                sliderArrowClasses,
                "splide__arrow--prev rounded-[3.25rem_0.25rem_0.25rem_3.25rem]"
              )}
            >
              {prevArrowName}
            </button>
            <button
              className={clsx(
                sliderArrowClasses,
                "splide__arrow--next rounded-[0.25rem_3.25rem_3.25rem_0.25rem]"
              )}
            >
              {nextArrowName}
            </button>
          </div>
        </Splide>
      ) : (
        <div className="container relative flex justify-end items-start pt-32 pb-[17.75rem] z-10">
          <Image
            src={MacbookImage}
            alt="Macbook"
            width={1440}
            height={960}
            className="absolute -top-10 -left-[14rem] pointer-events-none"
          />
          <div className="w-[20.625rem] h-[26.875rem] hover:scale-110 transition-transform duration-500 ease-in-out origin-top">
            <Image src={InfoImage} alt="Info" style={{ objectFit: "contain" }} />
          </div>
        </div>
      )}
    </div>
  );
};
