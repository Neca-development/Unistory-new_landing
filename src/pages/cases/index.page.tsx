import { Meta } from "@shared/meta";
import { Layout } from "@widgets/layout";

export function Cases() {
	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main></Layout.Main>
			<Layout.Footer showAddress />
		</Layout>
	);
}

export default Cases;
