import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";

import { Hero, Principles, Reviews, Services, Works } from "@widgets/landing";
import { Layout } from "@widgets/layout";
import { useEffect } from "react";
import { useAnimationStore } from "@shared/lib/store";
import { LOGO_ENTER_ANIMATION_DURATION } from "@shared/lib/constants/animation.constants";
import clsx from "clsx";

export function Home() {
	const {setShouldAnimate, shouldAnimate} = useAnimationStore()

	useEffect(() => {
		if(!shouldAnimate) return
		document.body.style.overflow = 'hidden'
		window.scrollTo(0, -400)

		const timeout = setTimeout(() => {
			document.body.style.overflow = ''
			setShouldAnimate()
		}, LOGO_ENTER_ANIMATION_DURATION + 1)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main>
				<div className={clsx(shouldAnimate && "animate-header-height will-change-[height]")}/>
				<Hero />
				<Services />
				<Works />
				<Principles />
				<Reviews />
				<Connect />
			</Layout.Main>
			<Layout.Footer showAddress />
		</Layout>
	);
}

export default Home;
