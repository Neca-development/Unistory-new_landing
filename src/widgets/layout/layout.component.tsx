import { useAnimationStore } from "@shared/lib/store";
import type { Meta } from "@shared/meta";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";
import useScrollbarSize from "react-scrollbar-size";

import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export interface ILayoutProperties extends React.ComponentProps<"div"> {
  Meta: React.ReactElement<typeof Meta>;
}

export const Layout = (props: ILayoutProperties) => {
  const { children, Meta, ...rest } = props;
  const { width } = useScrollbarSize();
  const { shouldAnimate } = useAnimationStore();

  const { asPath } = useRouter();
  const baseRoute = asPath.split("?")[0];
  const isHome = baseRoute === "/";

  return (
    <div>
      <div
        className="h-full bg-light-bg transition duration-300 dark:bg-dark-bg"
        style={{ paddingRight: shouldAnimate && isHome ? width : 0 }}
      >
        {Meta}
        <div
          {...rest}
          className={clsx(
            "flex min-h-screen flex-col",
            shouldAnimate && isHome && "pointer-events-none"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Main = Main;
