import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";

import { Hero, Principles, Reviews, Services, Works } from "@widgets/landing";
//import {Reviews} from '@widgets/layout'
import { Layout } from "@widgets/layout";

export function Home() {
	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main>
				<Hero />
				<Services />
				<Works />
				<Principles />
				{/* <Reviews /> */}
				<Connect />
			</Layout.Main>
			<Layout.Footer showAddress />
		</Layout>
	);
}

export default Home;
