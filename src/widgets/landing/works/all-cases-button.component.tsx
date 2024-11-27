import React from "react";
import { IconComponent } from "@shared/ui";
import Link from "next/link";

interface AllCasesButton {
  text: string;
  className?: string;
}

export const AllCasesButton: React.FC<AllCasesButton> = ({ text, className }) => {
  return (
    <Link href={"/cases/"} className={`text-[inherit] ${className}`}>
      <div
        className="flex items-center bg-[white] dark:bg-dark-bg-secondary h-20 w-64 t-xs:w-48 t-xs:h-16
         rounded-full t-xs:mt-0 mt-132 cursor-pointer"
      >
        <span className="text-2xl font-medium leading-8 ml-10 t-xs:ml-8 t-xs:text-base">
          {text}
        </span>
        <div className=" bg-light-bg w-16 h-16 t-xs:h-11 t-xs:w-11 dark:bg-dark-bg flex items-center justify-center rounded-full ml-6">
          <IconComponent name="arrowRightIcon" className="text-[black] dark:text-[white]" />
        </div>
      </div>
    </Link>
  );
};
