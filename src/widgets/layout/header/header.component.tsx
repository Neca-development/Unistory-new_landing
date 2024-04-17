import { ROUTESEN, ROUTESRU } from "@shared/i18n/constants";
import { useScrollDirection } from "@shared/lib/hooks/useScrollDirection.hook";
import { useAnimationStore } from "@shared/lib/store";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";

import { Logo } from "./logo.component";
import { MenuBtn } from "./menu-btn.component";
import { MobileMenu } from "./mobile-menu";
import { useMounted } from "@shared/lib/hooks/useMounted";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props;
  // const router = useRouter()\
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenuDown, setIsMenuDown] = useState(false);
  // const [isLoad, setIsLoad] = useState(false);
  const { shouldAnimate } = useAnimationStore();
  const isMounted = useMounted();

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
    const scrollFunction = () => {
      if (window.scrollY > 100) {
        setIsMenuDown(true);
      } else {
        setIsMenuDown(false);
      }
    };

    // const timeout = setTimeout(() => {
    //   setIsLoad(true);
    // }, 300);

    document.addEventListener("scroll", scrollFunction);

    return () => {
      document.removeEventListener("scroll", scrollFunction);
      // clearTimeout(timeout);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header
      {...props}
      className={clsx("relative z-50 flex w-full justify-center", className)}
      style={{
        paddingLeft: shouldAnimate ? width : 0,
      }}
    >
      <div
        className={clsx(
          "fixed z-10 flex w-full justify-center transition-all duration-300",
          "mx-auto w-full px-[0.5rem] md:max-w-[790px] lg:max-w-[90rem] lg:px-[3rem] m-l:max-w-full",
          isMenuVisible ? "top-4" : "top-[-6rem] shadow-navbar"
        )}
      >
        <div
          className={clsx(
            "relative flex w-full items-center justify-between py-4 px-[0.5rem] transition-all duration-500 lg:px-[2rem]",
            isMenuDown &&
              "bg-light-bg-accent shadow-navbar dark:border-[#2b2b2b] dark:bg-dark-surface t-xs:py-2"
          )}
        >
          <Link
            href={"/"}
            className={clsx(
              "h-[31px] w-[8.625rem] lg:h-[36px] 2xl:h-[40px]",
              !shouldAnimate && "relative",
              !isHome && "relative"
            )}
          >
            <Logo />
          </Link>

          <div
            className={clsx(
              "hidden items-center space-x-4 lg:flex",
              currentPage === "/" && shouldAnimate && "animate-header-links-opacity"
            )}
            style={{
              marginRight: shouldAnimate ? width : 0,
            }}
          >
            <Link
              className="flex items-center btn-secondary px-4 lg:h-[36px] 2xl:h-[40px]"
              href={ROUTES.CASES.route}
            >
              {ROUTES.CASES.label}
            </Link>
            <Link
              className="flex items-center btn-secondary px-4 lg:h-[36px] 2xl:h-[40px]"
              href={ROUTES.COMPANY.route}
            >
              {ROUTES.COMPANY.label}
            </Link>
            <Link
              className="flex items-center btn-secondary px-4 lg:h-[36px] 2xl:h-[40px]"
              href={ROUTES.CONTACTS.route}
            >
              {ROUTES.CONTACTS.label}
            </Link>
            <Link
              className="flex items-center btn-primary px-4 lg:h-[36px] 2xl:h-[40px]"
              href={ROUTES.CTA.route}
            >
              {ROUTES.CTA.label}
            </Link>
          </div>

          <MobileMenu active={isMenuOpen} routes={ROUTES} onClose={closeMenu} />

          <button
            onClick={openMenu}
            className={clsx(
              "lg:hidden",
              currentPage === "/" && shouldAnimate && "animate-header-links-opacity"
            )}
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
