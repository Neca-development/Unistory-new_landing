import Image from "next/image";
import React from "react";
import Phone1 from "@public/assets/images/cases/bit-graduate/phone-1.png";
import Phone2 from "@public/assets/images/cases/bit-graduate/phone-2.png";
import Phone3 from "@public/assets/images/cases/bit-graduate/phone-3.png";
import Bg from "@public/assets/images/cases/bit-graduate/verifcation-bg.jpg";
import clsx from "clsx";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";

const phoneClasses =
  "w-full relative hover:scale-105 transition-transform duration-500 ease-in-out origin-top-left";
const underShadowClasses =
  "absolute left-1/2 top-1/2 w-[98%] h-[98%] -translate-x-1/2 -translate-y-1/2 shadow-24dp rounded-[3rem] pointer-events-none";

export const BitGraduateVerification = () => {
  const isMobile = useDetectDeviceType();

  return (
    <div className="relative overflow-hidden mt-10">
      <Image src={Bg} alt="Bg" fill className="w-full object-cover t-xs:object-fill" />

      <div className="container justify-between items-start pt-10 pb-[4.375rem] relative grid grid-flow-col gap-36 t-xs:gap-4 t-xs:py-5">
        <div className={phoneClasses}>
          <Image src={Phone1} alt="Phone" style={{ objectFit: "contain" }} />
          <div className={underShadowClasses}></div>
        </div>

        <div className={clsx("mt-20", phoneClasses)}>
          <Image src={isMobile ? Phone3 : Phone2} alt="Phone" style={{ objectFit: "contain" }} />
          <div
            className={clsx(
              underShadowClasses,
              "shadow-[-10rem_9.375rem_12.5rem_0rem_rgba(0,0,0,0.16)]"
            )}
          ></div>
        </div>

        <div className={phoneClasses}>
          <Image
            src={Phone3}
            alt="Phone"
            style={{ objectFit: "contain" }}
            className="t-xs:hidden"
          />
          <div className={underShadowClasses}></div>
        </div>
      </div>
    </div>
  );
};
