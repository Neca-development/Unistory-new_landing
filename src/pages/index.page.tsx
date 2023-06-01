import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";

import { Hero, Principles, Reviews, Services, Works } from "@widgets/landing";
import { Layout } from "@widgets/layout";
import { useEffect } from "react";
import { useAnimationStore } from "@shared/lib/store";

export function Home() {
	const {setShouldAnimate, shouldAnimate} = useAnimationStore()

	useEffect(() => {
		if(!shouldAnimate) return
		document.body.style.overflow = 'hidden'

		const timeout = setTimeout(() => {
			document.body.style.overflow = ''
			setShouldAnimate()
		}, 6000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main>
				{
					shouldAnimate && <div className="animate-headerHeight"/>
				}
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
