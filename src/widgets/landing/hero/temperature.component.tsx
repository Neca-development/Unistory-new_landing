import React from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useThemeContext } from "@shared/lib";

const TemperatureComponent = () => {
  const {temperatureTheme, setTemperatureTheme} = useThemeContext()
  const toggleTemperatureThemeHandler = () => {
    setTemperatureTheme(temperatureTheme === "summer" ? "winter" : "summer");
  };

  return (
    <button
      onClick={toggleTemperatureThemeHandler}
      className="absolute top-[2rem] right-[3rem] w-10 p-2 t-xs:top-[31rem]"
    >
      <IconComponent
        name="winter"
        className={clsx(
          "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent absolute",
          temperatureTheme === 'winter' ? 'opacity-100' : 'opacity-0'
        )}
      />
      <IconComponent
        name="summer"
        className={clsx(
          "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent absolute",
          temperatureTheme === 'summer' ? 'opacity-100' : 'opacity-0'
        )}
      />
    </button>
  );
};

export default TemperatureComponent;