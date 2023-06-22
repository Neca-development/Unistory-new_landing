import React from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useThemeContext } from "@shared/lib";
import { useAnimationStore } from "@shared/lib/store";

const TemperatureComponent = () => {
  const { temperatureTheme, setTemperatureTheme } = useThemeContext();
  const { shouldAnimate } = useAnimationStore();
  const toggleTemperatureThemeHandler = () => {
    setTemperatureTheme(temperatureTheme === "summer" ? "winter" : "summer");
  };

  return (
    <button
      onClick={toggleTemperatureThemeHandler}
      className={clsx(
        "absolute top-[2rem] right-[3rem] w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 t-xs:top-[31rem] lg:hover:scale-125 duration-150",
        shouldAnimate && "animate-hero-icons-fade-in"
      )}
    >
      <IconComponent
        name="winter"
        className={clsx(
          "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent block absolute top-0 left-0 w-6 lg:w-7 2xl:w-9 ",
          temperatureTheme === "winter" ? "opacity-100" : "opacity-0"
        )}
      />
      <IconComponent
        name="summer"
        className={clsx(
          "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent block absolute top-0 left-0 w-6 lg:w-7 2xl:w-9 ",
          temperatureTheme === "summer" ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  );
};

export default TemperatureComponent;
