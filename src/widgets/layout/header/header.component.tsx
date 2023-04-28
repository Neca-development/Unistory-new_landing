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

export interface IHeaderProperties extends React.ComponentProps<"header"> {}

export const Header = React.memo((props: IHeaderProperties) => {
	const { className, children } = props;
	// const router = useRouter()\
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMenuDown, setIsMenuDown] = useState(false)

	const { locale } = useRouter();
	const scrollDir = useScrollDirection()

	const isMenuVisible = useMemo(() => {
		if (scrollDir === "down") {
			return false
		}
		return true
	}, [scrollDir])

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
			if(window.scrollY > 100) {
				setIsMenuDown(true)
			} else {
				setIsMenuDown(false)
			}
		}

		document.addEventListener('scroll', scrollFunc)

		return () => {
			document.removeEventListener('scroll', scrollFunc)
		}
	}, [])

	return (
		<header {...props} className={clsx("relative flex w-full justify-center", className)}>
			<div
				className={clsx(
					"container flex justify-between w-full items-center fixed z-10 !px-[0.5rem] lg:!px-[3rem] transition-all duration-300",
					isMenuVisible ? 'top-2' : "top-[-6rem] shadow-navbar"
				)}

			>
				<div className={clsx("w-full flex justify-between py-4 lg:px-[2rem] px-[0.5rem] transition-all duration-500", isMenuDown && "bg-transparent t-xs:py-0 ")}>
					<Link href={"/"} className="w-[8.625rem] min-h-[2.5rem]">
						<Logo />
					</Link>

					<div className="hidden lg:flex items-center space-x-10">
						{ROUTES.map(({ label, route }, index) => {
							return (
								<Link
									key={index}
									className={clsx(
										"text-light-text-secondary dark:text-dark-text-secondary"
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
