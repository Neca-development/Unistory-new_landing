import { useThemeContext } from "@shared/lib";
import clsx from "clsx";
import { useTheme } from "next-themes";
import * as React from "react";
import { IconComponent } from "../icon.component";

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  const { textClassName, temperatureTheme, setTemperatureTheme } =
    useThemeContext();
  const { setTheme, theme } = useTheme();

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const toggleTemperatureThemeHandler = () => {
    setTemperatureTheme(temperatureTheme === "summer" ? "winter" : "summer");
  };

  return (
    <div
      className={clsx(
        "text-h1 container font-manrope relative",
        textClassName
      )}
    >
      <div className={clsx(textClassName)}>
        Разрабатываем приложения со сложными{" "}
        <span className="text-light-text-primary dark:text-dark-text-primary italic font-light font-roboto">
          интеграциями
        </span>
        <br />
        для web & mobile
      </div>
      <button onClick={toggleThemeHandler}>
        <IconComponent
          name="sun"
          className="absolute -bottom-20 right-96 [&>*]:stroke-icon-accent dark:[&>*]:stroke-icon-on-primary"
        />
      </button>
      <button onClick={toggleTemperatureThemeHandler}>
        <IconComponent
          name={temperatureTheme}
          className={clsx(
            "absolute -top-20 left-96 first:[&>path]:stroke-icon-accent first:dark:[&>*]:stroke-icon-on-primary"
          )}
        />
      </button>
    </div>
  );
}
