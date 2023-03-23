import { ROUTESEN, ROUTESRU } from "@shared/i18n/constants";
import clsx from "clsx";
import Link from "next/link";
import router, { useRouter } from "next/router";
// import { useRouter } from 'next/router'
import * as React from "react";
import { Logo } from "./logo.component";

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
	const { className, children } = props;
	// const router = useRouter()

	const { locale, pathname } = useRouter();

	const ROUTES = React.useMemo(() => {
		if (locale === "ru") {
			return ROUTESRU;
		}

		return ROUTESEN;
	}, [locale]);
	console.log(pathname);
	return (
		<header {...props} className={clsx("relative flex w-full", className)}>
			<div className="container flex justify-between py-4">
				<Link href={"/"} className="w-[8.625rem]">
					<Logo />
				</Link>

				<div className="flex items-center space-x-10">
					{ROUTES.map(({ label, route }, index) => {
						return (
							<Link
								key={index}
								className={clsx(
									"text-light-text-secondary dark:text-dark-text-secondary"
									// pathname.includes(route)
									// 	? "text-light-text-primary dark:text-dark-text-primary underline"
									// 	: "text-light-text-secondary dark:text-dark-text-secondary"
								)}
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
