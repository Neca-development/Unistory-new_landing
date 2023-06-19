import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useThemeContext } from "@shared/lib";
import clsx from "clsx";
import { useMounted } from "@shared/lib/hooks/useMounted";
import { useAnimationStore } from "@shared/lib/store";
import { useRouter } from "next/router";

export function Logo() {
  const { theme, systemTheme } = useTheme();
  const { temperatureTheme } = useThemeContext();
  const _theme = theme === "system" ? systemTheme : theme;
  const mounted = useMounted();

  const { asPath } = useRouter();
  const isHome = asPath === "/";
  const { shouldAnimate } = useAnimationStore();

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "absolute top-0 left-0",
        isHome &&
          shouldAnimate &&
          "will-change-[top,left] animate-logo-enter-mobile lg:animate-logo-enter-lg",
        !shouldAnimate && "w-[138px] h-[33px]"
      )}
    >
      <div
        className={clsx(
          "overflow-hidden flex",
          _theme === "dark" ? "flex-col-reverse" : "flex-col",
          isHome &&
            shouldAnimate &&
            "animate-logo-overflow-mobile lg:animate-logo-overflow-lg will-change-[transform,width]",
          !shouldAnimate && "absolute w-full h-full"
        )}
      >
        <IconComponent
          key="logoLight"
          name="logoLight"
          width="138px"
          className={clsx(
            "duration-300",
            isHome &&
              shouldAnimate &&
              "animate-main-logo-width-mobile lg:animate-main-logo-width-lg will-change-[width]",
            _theme !== "light" && "opacity-0",
            !shouldAnimate && "absolute top-0 left-0 w-full h-full",
            temperatureTheme === "winter" ? "fill-winter" : "fill-summer"
          )}
        />
        <IconComponent
          key="logoDark"
          name="logoDark"
          width="138px"
          className={clsx(
            "duration-300",
            isHome &&
              shouldAnimate &&
              "animate-main-logo-width-mobile lg:animate-main-logo-width-lg will-change-[width]",
            _theme !== "dark" && "opacity-0",
            !shouldAnimate && "absolute top-0 left-0 w-full h-full",
            temperatureTheme === "winter" ? "fill-winter" : "fill-summer"
          )}
        />
      </div>
    </div>
  );
}
