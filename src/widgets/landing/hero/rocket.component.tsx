import React from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useAnimationStore } from "@shared/lib/store";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const RocketComponent = () => {

  const {shouldAnimate} = useAnimationStore()

  return (
    <button
      className={clsx(
      "absolute bottom-[5.375rem] left-[10.5rem] w-10 p-2 t-xs:bottom-2 t-xs:left-6",
        shouldAnimate && "animate-hero-icons-fade-in"
      )}
    >
      <IconComponent name="rocket" className={iconClassnameByTheme} />
    </button>
  );
};

export default RocketComponent;