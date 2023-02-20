import { ROUTES } from "@shared/lib";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props;
  const { theme } = useTheme();
  return (
    <header {...props} className={clsx("relative flex w-full", className)}>
      <div className="container flex justify-between">
        <IconComponent name={theme === "light" ? "logoLight" : "logoDark"} />
        <div className="flex">
          {ROUTES.map(({ label, route }, index) => {
            return (
              <Link
                key={index}
                className="text-light-text-secondary ml-10 dark:text-dark-text-secondary"
                href={route}
              >
                {label}
              </Link>
            );
          })}
        </div>
        {children}
      </div>
    </header>
  );
});
Header.displayName = "Header";

export default Header;
