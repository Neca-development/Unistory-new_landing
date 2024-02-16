import { useAnimationStore } from "@shared/lib/store";
import { useAnimation, motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ILazyShow {
  children: ReactNode;
}
export const LazyShow = (props: ILazyShow) => {
  const { children } = props;
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef);
  const { shouldAnimate } = useAnimationStore();

  useEffect(() => {
    if (isInView && !shouldAnimate) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, controls, shouldAnimate]);

  return (
    <motion.div ref={rootRef} initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};
