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
import { useAnimationStore } from "@shared/lib/store";
import useScrollbarSize from "react-scrollbar-size";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props;
  // const router = useRouter()\
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenuDown, setIsMenuDown] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const { theme, systemTheme } = useTheme();
  const _theme = theme === "system" ? systemTheme : theme;
  const { shouldAnimate } = useAnimationStore();

  const { locale } = useRouter();
  const scrollDir = useScrollDirection();
  const { width } = useScrollbarSize();

  const { asPath } = useRouter();
  const currentPage = asPath;

  const isHome = asPath === "/";

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
    <header
      {...props}
      className={clsx("relative flex w-full justify-center", className)}
      style={{
        paddingLeft: shouldAnimate ? width : 0,
      }}
    >
      <div
        className={clsx(
          "flex w-full justify-center fixed z-10 transition-all duration-300",
          "w-full px-[0.5rem] md:max-w-[790px] lg:max-w-[80rem] lg:px-[3rem] 2xl:max-w-[90rem] mx-auto m-l:max-w-full",
          isMenuVisible ? "top-4" : "top-[-6rem] shadow-navbar"
        )}
      >
        <div
          className={clsx(
            "w-full flex justify-between py-4 lg:px-[2rem] px-[0.5rem] transition-all duration-500 relative",
            isMenuDown &&
              "t-xs:py-2 bg-light-bg-accent shadow-navbar dark:bg-dark-surface dark:border-[#2b2b2b]"
          )}
        >
          <Link
            href={"/"}
            className={clsx(
              "w-[8.625rem] h-[31px] lg:h-[36px]",
              !shouldAnimate && "relative",
              !isHome && "relative"
            )}
          >
            <Logo />
          </Link>

          <div
            className={clsx(
              "hidden lg:flex items-center space-x-10",
              currentPage === "/" && shouldAnimate && "animate-header-links-opacity"
            )}
            style={{
              marginRight: shouldAnimate ? width : 0,
            }}
          >
            {ROUTES.map(({ label, route }, index) => {
              return (
                <Link
                  key={index}
                  className={clsx(
                    " dark:text-light-bg-accent/[.5] transition duration-300 relative lg:text-lg 2xl:text-xl",
                    !isLoad && "after:opacity-0",
                    _theme === "light" ? "after:bg-dark-bg" : "after:bg-light-bg",
                    route === "#become-customer"
                      ? "text-light-text-primary dark:text-light-bg-accent font-bold	hover:!text-[#ec5f3b]"
                      : "text-light-text-primary/[.5] dark:text-light-bg-accent/[.5] after:content-[''] after:absolute after:-bottom-1 hover:after:animate-link-hover-on after:h-0.5 after:animate-link-hover-off",
                    currentPage.replace(/\/+$/, "") == route && "after:animate-link-hover-on"
                  )}
                  href={route}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <MobileMenu active={isMenuOpen} routes={ROUTES} onClose={closeMenu} />

          <button
            onClick={openMenu}
            className="lg:hidden animate-header-links-opacity"
            style={{
              marginRight: shouldAnimate ? width : 0,
            }}
          >
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
