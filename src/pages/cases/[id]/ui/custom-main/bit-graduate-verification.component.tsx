import Image from "next/image";
import React from "react";
import Phone1 from "@public/assets/images/cases/bit-graduate/phone-1.png";
import Phone2 from "@public/assets/images/cases/bit-graduate/phone-2.png";
import Phone3 from "@public/assets/images/cases/bit-graduate/phone-3.png";
import Bg from "@public/assets/images/cases/bit-graduate/verifcation-bg.jpg";
import clsx from "clsx";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";

const imageClasses =
  "hover:scale-[1.07] transition-transform duration-500 ease-in-out origin-top-left drop-shadow-2xl";

export const BitGraduateVerification = () => {
  const isMobile = useDetectDeviceType();

  return (
    <div className="relative overflow-hidden mt-10">
      <Image src={Bg} alt="Bg" fill className="w-full object-cover t-xs:object-fill" />

      <div className="container justify-between items-start pt-10 pb-7 relative grid grid-flow-col gap-36 t-xs:gap-4 t-xs:py-5">
        <Image src={Phone1} alt="Phone" width={326} height={650} className={imageClasses} />
        <Image
          src={isMobile ? Phone3 : Phone2}
          alt="Phone"
          width={326}
          height={650}
          className={clsx(imageClasses, "mt-20")}
        />
        <Image
          src={Phone3}
          alt="Phone"
          width={326}
          height={650}
          className={clsx(imageClasses, "t-xs:hidden")}
        />
      </div>
    </div>
  );
};
