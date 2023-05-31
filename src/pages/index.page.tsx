import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";

import { Hero, Principles, Reviews, Services, Works } from "@widgets/landing";
import { Layout } from "@widgets/layout";
import { useEffect } from "react";

export function Home() {

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		setTimeout(() => {
			document.body.style.overflow = ''
		}, 5000)
	}, [])

	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main>
				<div className="animate-headerHeight"/>
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
