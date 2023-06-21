import React, { useState } from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useAnimationStore } from "@shared/lib/store";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const RocketComponent = () => {
  const { shouldAnimate } = useAnimationStore();
  const [launch, setLaunch] = useState(false);

  function rocketLaunch() {
    if (launch) return;

    setLaunch(true);

    setTimeout(() => {
      setLaunch(false);
    }, 10000);
  }

  return (
    <button
      onClick={rocketLaunch}
      className={clsx(
        "rocket absolute bottom-[1.5rem] left-[10.5rem] w-10 2xl:w-12 p-2 t-xs:bottom-2 t-xs:left-6",
        shouldAnimate && "animate-hero-icons-fade-in"
        // launch && "lg:animate-rocket-flight-lg"
      )}
    >
      <IconComponent name="rocket" className={iconClassnameByTheme} />
    </button>
  );
};

export default RocketComponent;
