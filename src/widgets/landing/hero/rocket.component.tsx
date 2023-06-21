import React, { useRef, useState } from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useAnimationStore } from "@shared/lib/store";
import gsap, { Linear } from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const RocketComponent = () => {
  const { shouldAnimate } = useAnimationStore();
  const rocketScope = useRef<HTMLDivElement>(null);
  const [rocketFly, setRocketFly] = useState<boolean>(false);

  function tlComplete() {
    setRocketFly(false);
  }

  function rocketLaunch() {
    if (window.innerWidth >= 992) {
      if (rocketFly == true) return;

      setRocketFly(true);

      let ctx = gsap.context(() => {
        let gsapTL = gsap.timeline({ onComplete: tlComplete });
        gsapTL.to(".rocket", 3, {
          motionPath: [
            { x: 200, y: -200 },
            { x: 100, y: -300 },
            { x: 400, y: -300 },
            { x: 500, y: -100, rotation: 180 },
            { x: 0, y: 0 },
          ],
          ease: Linear.easeInOut,
        });
      }, rocketScope);

      return () => ctx.revert();
    } else {
      return;
    }
  }

  return (
    <div ref={rocketScope}>
      <button
        onClick={rocketLaunch}
        className={clsx(
          "rocket absolute bottom-[1.5rem] left-[10.5rem] w-10 2xl:w-12 p-2 t-xs:bottom-2 t-xs:left-6",
          shouldAnimate && "animate-hero-icons-fade-in"
        )}
      >
        <IconComponent name="rocket" className={iconClassnameByTheme} />
        {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 15L9 12M12 15C13.3968 14.4687 14.7369 13.7987 16 13M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13M9 12H4C4 12 4.55 8.97 6 8C7.62 6.92 11 8 11 8"
            stroke="#0F1A20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5Z"
            stroke="#0F1A20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="red"
          />
        </svg> */}
      </button>
    </div>
  );
};

export default RocketComponent;
