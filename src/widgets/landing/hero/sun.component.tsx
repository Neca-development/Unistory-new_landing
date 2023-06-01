import React from "react";
import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import clsx from "clsx";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const SunComponent = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  const _theme = theme === "system" ? systemTheme : theme;

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={toggleThemeHandler}
      className="absolute bottom-8 right-[28rem] w-10 h-10 t-xs:right-0 t-xs:-bottom-16"
    >
      <IconComponent
        name="sunset"
        className={clsx(
          iconClassnameByTheme,
          "absolute",
          _theme=== 'dark' ? 'animate-zoomIn opacity-100 duration-300' : 'animate-zoomOut opacity-0 duration-300'
        )} />
      <IconComponent
        name="sun"
        className={clsx(
          iconClassnameByTheme,
          "absolute",
          theme=== 'light' ? 'animate-zoomOut opacity-100 duration-300' : 'animate-zoomIn opacity-0 duration-300'
        )} />
    </button>
  );
};

export default SunComponent;