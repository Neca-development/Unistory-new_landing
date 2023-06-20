import { IconComponent } from "@shared/ui";
import { useTheme } from "next-themes";
import { useThemeContext } from "@shared/lib";
import clsx from "clsx";
import { useMounted } from "@shared/lib/hooks/useMounted";
import { useAnimationStore } from "@shared/lib/store";
import { useRouter } from "next/router";

interface ILogoProps {
  mobileMenu?: boolean;
}

export function Logo(props: ILogoProps) {
  const { theme, systemTheme } = useTheme();
  const { temperatureTheme } = useThemeContext();
  const _theme = theme === "system" ? systemTheme : theme;
  const mounted = useMounted();

  const { asPath } = useRouter();
  const isHome = asPath === "/";
  const { shouldAnimate } = useAnimationStore();

  const { mobileMenu } = props;

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
        !shouldAnimate && "w-[128px] h-[31px] lg:w-[150px] lg:h-[36px] 2xl:w-[166px] 2xl:h-[40px]",
        mobileMenu && "relative"
      )}
    >
      <div
        className={clsx(
          "overflow-hidden flex flex-col",
          isHome &&
            shouldAnimate &&
            "animate-logo-overflow-mobile lg:animate-logo-overflow-lg will-change-[transform,width]",
          !shouldAnimate && "w-full h-full"
        )}
      >
        <IconComponent
          key="logoLight"
          name="logoLight"
          className={clsx(
            "duration-300 min-w-[128px] lg:min-w-[150px] 2xl:min-w-[166px]",
            isHome &&
              shouldAnimate &&
              "animate-main-logo-width-mobile lg:animate-main-logo-width-lg will-change-[width]",
            _theme !== "light" && "opacity-0",
            shouldAnimate && _theme !== "light" && "hidden",
            !shouldAnimate && "absolute top-0 left-0 w-full h-full",
            temperatureTheme === "winter" ? "fill-winter" : "fill-summer"
          )}
        />
        <IconComponent
          key="logoDark"
          name="logoDark"
          className={clsx(
            "duration-300 min-w-[128px] lg:min-w-[150px] 2xl:min-w-[166px]",
            isHome &&
              shouldAnimate &&
              "animate-main-logo-width-mobile lg:animate-main-logo-width-lg will-change-[width]",
            _theme !== "dark" && "opacity-0",
            shouldAnimate && _theme !== "dark" && "hidden",
            !shouldAnimate && "absolute top-0 left-0 w-full h-full",
            temperatureTheme === "winter" ? "fill-winter" : "fill-summer"
          )}
        />
      </div>
    </div>
  );
}
