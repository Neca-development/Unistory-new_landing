import { Meta } from "@shared/meta";
import { Layout } from "@widgets/layout";
import { useRouter } from "next/router";

export function Case() {
	const { id } = useRouter().query as {
		id: string;
	};

	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main></Layout.Main>
			<Layout.Footer showAddress />
		</Layout>
	);
}

export default Case;
