import React, { useRef } from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useAnimationStore } from "@shared/lib/store";
import gsap from "gsap";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const RocketComponent = () => {
  const { shouldAnimate } = useAnimationStore();
  const rocketScope = useRef<HTMLDivElement>(null);

  function rocketLaunch() {
    let ctx = gsap.context(() => {
      let gsapTL = gsap.timeline();
      gsapTL.to(".rocket", { x: 100, duration: 2 });
      gsapTL.to(".rocket", { x: 200, duration: 2 });
      gsapTL.to(".rocket", { x: 100, duration: 2 });
      gsapTL.to(".rocket", { x: 0, duration: 2 });
    }, rocketScope);

    return () => ctx.revert();
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
      </button>
      <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg" className="hidden">
        <circle cx="100" cy="100" r="3" />
        <circle cx="300" cy="20" r="3" />
        <path
          id="path"
          d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"
        />
        <g id="rect">
          <rect width="85" height="30" fill="dodgerblue" />
          <text x="10" y="19" font-size="14">
            SVG &lt;rect&gt;
          </text>
        </g>
      </svg>
    </div>
  );
};

export default RocketComponent;
