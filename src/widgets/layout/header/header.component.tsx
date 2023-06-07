import { ROUTESEN, ROUTESRU } from "@shared/i18n/constants";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Logo } from "./logo.component";
import { MobileMenu } from "./mobile-menu";
import { MenuBtn } from "./menu-btn.component";
import { useEffect, useMemo, useState } from "react";
import { useScrollDirection } from "@shared/lib/hooks/useScrollDirection.hook";
import { useTheme } from "next-themes";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props;
  // const router = useRouter()\
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenuDown, setIsMenuDown] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const { theme, systemTheme } = useTheme();
  const _theme = theme === "system" ? systemTheme : theme;

  const { locale } = useRouter();
  const scrollDir = useScrollDirection();

  const isMenuVisible = useMemo(() => {
    return scrollDir !== "down";
  }, [scrollDir]);

  const ROUTES = React.useMemo(() => {
    if (locale === "ru") {
      return ROUTESRU;
    }

    return ROUTESEN;
  }, [locale]);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const scrollFunc = () => {
      if (window.scrollY > 100) {
        setIsMenuDown(true);
      } else {
        setIsMenuDown(false);
      }
    };

    const timeout = setTimeout(() => {
      setIsLoad(true);
    }, 300);

    document.addEventListener("scroll", scrollFunc);

    return () => {
      document.removeEventListener("scroll", scrollFunc);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header {...props} className={clsx("relative flex w-full justify-center", className)}>
      <div
        className={clsx(
          "flex inset-x-4 justify-center fixed z-10 transition-all duration-300",
          isMenuVisible ? "top-4" : "top-[-6rem] shadow-navbar"
        )}
      >
        <div
          className={clsx(
            "w-full rounded-sm flex justify-between max-w-[85rem] py-4 lg:px-10 px-[0.5rem] transition-all duration-500 border border-transparent",
            isMenuDown &&
              "t-xs:py-2 bg-light-bg-accent shadow-navbar dark:bg-dark-surface dark:border-[#2b2b2b]"
          )}
        >
          <Link href={"/"} className="w-[8.625rem] min-h-[2.5rem]">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {ROUTES.map(({ label, route }, index) => {
              return (
                <Link
                  key={index}
                  className={clsx(
                    "text-light-text-primary/[.5] dark:text-light-bg-accent/[.5] transition duration-300 relative",
                    !isLoad && "after:opacity-0",
                    _theme === "light" ? "after:bg-dark-bg" : "after:bg-light-bg",
                    route === "#become-customer"
                      ? "font-bold	hover:!text-[#ec5f3b]"
                      : "after:content-[''] after:absolute after:-bottom-1 hover:after:animate-link-hover-on after:h-0.5 after:animate-link-hover-off"
                  )}
                  href={route}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <MobileMenu active={isMenuOpen} routes={ROUTES} onClose={closeMenu} />

          <button onClick={openMenu} className="lg:hidden">
            <MenuBtn />
          </button>

          {children}
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
