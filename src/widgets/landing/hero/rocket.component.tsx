import React, { useRef } from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useAnimationStore } from "@shared/lib/store";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const RocketComponent = () => {
  const { shouldAnimate } = useAnimationStore();
  const rocketScope = useRef<HTMLDivElement>(null);
  //const [rocketFly, setRocketFly] = useState<boolean>(false);

  // function tlComplete() {
  //   setRocketFly(false);
  // }

  // function rocketLaunch() {
  //   if (rocketFly == true) return;

  //   setRocketFly(true);

  //   let ctx = gsap.context(() => {
  //     let gsapTL = gsap.timeline({ onComplete: tlComplete });
  //     if (window.innerWidth >= 992) {
  //       gsapTL.to(".rocket", 3, {
  //         motionPath: [
  //           { x: 200, y: -200 },
  //           { x: 100, y: -300 },
  //           { x: 400, y: -300 },
  //           { x: 500, y: -100 },
  //           { x: 0, y: 0 },
  //         ],
  //         ease: Linear.easeInOut,
  //       });
  //     } else {
  //       gsapTL.to(".rocket", 3, {
  //         motionPath: [
  //           { x: 50, y: -100 },
  //           { x: 100, y: -150 },
  //           { x: 150, y: -200 },
  //           { x: 200, y: -150 },
  //           { x: 0, y: 0 },
  //         ],
  //         ease: Linear.easeInOut,
  //       });
  //     }
  //   }, rocketScope);

  //   return () => ctx.revert();
  // }

  return (
    <div ref={rocketScope}>
      <button
        // onClick={rocketLaunch}
        className={clsx(
          "rocket absolute bottom-[1.5rem] left-[10.5rem] w-7 2xl:w-9 t-xs:bottom-2 t-xs:left-6 hover:scale-125 duration-150",
          shouldAnimate && "animate-hero-icons-fade-in"
        )}
      >
        <IconComponent name="rocket" className={iconClassnameByTheme} />
      </button>
    </div>
  );
};

export default RocketComponent;
