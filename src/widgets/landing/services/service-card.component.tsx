import clsx from "clsx";
import { ReactNode } from "react";

interface IServiceCard {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export const ServiceCard = (props: IServiceCard) => {
  const { title, subtitle, children, className } = props;
  return (
    <div
      className={clsx(
        "flex flex-col bg-light-bg-accent dark:bg-dark-bg-secondary rounded-2xl border border-[#EDEAE8] dark:border-[#353535] overflow-hidden min-h-[20rem]",
        className
      )}
    >
      <div className="px-4 pt-7 pb-4">
        <h2 className="text-lg font-semibold mb-2 leading-tight md:text-[2.125rem] lg:text-2xl xl:text-xl">
          {title}
        </h2>
        <h3 className="text-lg leading-tight md:text-[1.65rem] lg:text-base">
          <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
        </h3>
      </div>
      <div className="w-full mt-auto">{children}</div>
    </div>
  );
};
