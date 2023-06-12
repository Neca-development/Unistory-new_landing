import React, { useEffect } from "react";
import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { useAnimationStore } from "@shared/lib/store";

const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const SunComponent = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  let _theme = theme === "system" ? systemTheme : theme;
  const { shouldAnimate } = useAnimationStore();

  const toggleThemeHandler = () => {
    console.log("До изменения", _theme, theme, systemTheme);
    setTheme(_theme == "light" ? "dark" : "light");
    console.log("После изменения", _theme, theme, systemTheme);
  };

  useEffect(() => {
    _theme = theme === "system" ? systemTheme : theme;
    console.log("После монтэйна", _theme, theme, systemTheme);
  }, []);

  return (
    <button
      onClick={toggleThemeHandler}
      className={clsx(
        "absolute bottom-8 right-[28rem] w-10 h-10 t-xs:right-0 t-xs:-bottom-16",
        shouldAnimate && "animate-hero-icons-fade-in"
      )}
    >
      <IconComponent
        name="sunset"
        className={clsx(
          iconClassnameByTheme,
          "absolute",
          _theme === "dark"
            ? "animate-zoom-in opacity-100 duration-300"
            : "animate-zoom-out opacity-0 duration-300"
        )}
      />
      <IconComponent
        name="sun"
        className={clsx(
          iconClassnameByTheme,
          "absolute",
          _theme === "light"
            ? "animate-zoom-out opacity-100 duration-300"
            : "animate-zoom-in opacity-0 duration-300"
        )}
      />
    </button>
  );
};

export default SunComponent;
