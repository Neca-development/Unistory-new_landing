import node from "@public/assets/images/homepage/decentralized-node.png";
import nodeDark from "@public/assets/images/homepage/decentralized-node_dark.png";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import Image from "next/image";

const imageClasses = "absolute object-contain w-24";

export const DecentralizedAnimatedBlock = ({ theme }: { theme: string }) => {
  return (
    <div className="relative t-xs:scale-75 m-xl:scale-50 m-xl:-mr-20">
      <Image
        className={clsx("decentralized-1 bottom-[9.1rem] right-[21.65rem]", imageClasses)}
        src={theme === "dark" ? nodeDark : node}
        alt=""
      />
      <Image
        className={clsx("decentralized-2 bottom-[13rem] right-[10.9rem]", imageClasses)}
        src={theme === "dark" ? nodeDark : node}
        alt=""
      />
      <Image
        className={clsx("decentralized-3 bottom-[8.4rem] right-[11rem]", imageClasses)}
        src={theme === "dark" ? nodeDark : node}
        alt=""
      />
      <Image
        className={clsx("decentralized-4 bottom-40 right-6", imageClasses)}
        src={theme === "dark" ? nodeDark : node}
        alt=""
      />
      <Image
        className={clsx("decentralized-5 bottom-[6.3rem] right-[1.4rem]", imageClasses)}
        src={theme === "dark" ? nodeDark : node}
        alt=""
      />
      <Image
        className={clsx("decentralized-6 bottom-[3.5rem] right-[10.9rem]", imageClasses)}
        src={theme === "dark" ? nodeDark : node}
        alt=""
      />
      <IconComponent
        name="decLine1"
        className={clsx("absolute bottom-[9.8rem] right-[16.8rem] w-20")}
      />
      <IconComponent
        name="decLine2"
        className={clsx("decentralized-3 absolute bottom-[9.1rem] right-[16.8rem] w-[4.9rem]")}
      />
      <IconComponent
        name="decLine3"
        className={clsx("decentralized-4 absolute bottom-[10.7rem] right-[7.3rem] w-[3.8rem]")}
      />
      <IconComponent
        name="decLine4"
        className={clsx("absolute bottom-[7rem] right-[7.15rem] w-16")}
      />
      <IconComponent
        name="decLine5"
        className={clsx("decentralized-6 absolute bottom-[4.2rem] right-[7.4rem] w-[3.7rem]")}
      />
    </div>
  );
};
