import { useOnScreen } from "@shared/lib/hooks/useOnScreen.hook";
import { useAnimationStore } from "@shared/lib/store";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface IServiceCard {
  title: string;
  subtitle: string;
  animationDuration: number;
  animationYOffset: number;
  children?: ReactNode;
  className?: string;
  animationDelay?: number;
}

export const ServiceCard = (props: IServiceCard) => {
  const {
    title,
    subtitle,
    children,
    className,
    animationDelay,
    animationDuration,
    animationYOffset,
  } = props;

  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef, "0%");
  const { shouldAnimate } = useAnimationStore();

  const animationInit = () => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeOut",
        delay: animationDelay,
      },
    });
  };

  useEffect(() => {
    if (onScreen && !shouldAnimate) {
      animationInit();
    }
  }, [onScreen, controls, shouldAnimate]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: animationYOffset }}
      animate={controls}
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
    </motion.div>
  );
};
