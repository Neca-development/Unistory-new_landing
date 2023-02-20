import { useThemeContext } from "@shared/lib";
import type { Meta } from "@shared/meta";
import { useTheme } from "next-themes";
import * as React from "react";
import { Footer } from "./footer";

import { Header } from "./header";
import { Main } from "./main";
export interface ILayoutProperties extends React.ComponentProps<"div"> {
  Meta: React.ReactElement<typeof Meta>;
}

export const Layout = (props: ILayoutProperties) => {
  const { children, Meta, ...rest } = props;
  const { temperatureTheme } = useThemeContext();

  return (
    <div className={temperatureTheme}>
      <div className="">
        <div className="bg-[url('/assets/images/Patern.png')] h-full">
          {Meta}
          <div {...rest} className="flex min-h-screen flex-col justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Main = Main;
