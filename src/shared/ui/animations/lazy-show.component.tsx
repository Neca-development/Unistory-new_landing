import { useOnScreen } from "@shared/lib/hooks/useOnScreen.hook";
import { useAnimationStore } from "@shared/lib/store";
import { useAnimation, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ILazyShow {
  children: ReactNode;
}
export const LazyShow = (props: ILazyShow) => {
  const { children } = props;
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef, "-25%");
  const { shouldAnimate } = useAnimationStore();

  useEffect(() => {
    if (onScreen && !shouldAnimate) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls, shouldAnimate]);

  return (
    <motion.div ref={rootRef} initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};
