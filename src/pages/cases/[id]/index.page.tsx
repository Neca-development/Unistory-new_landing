import { CASES } from "@shared/lib";
import { Meta } from "@shared/meta";
import { Layout } from "@widgets/layout";
import { useRouter } from "next/router";
import { CaseMainInfo } from "./ui/case-main-info.component";
import { CaseHero } from "./ui/hero.component";
import { Technologies } from "./ui/technologies.component";

function getCaseData(id: string) {
	return CASES.find((item) => item.id === id);
}

export function Case() {
	const { id } = useRouter().query as {
		id: string;
	};

	const caseData = getCaseData(id);

	return (
		<Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
			<Layout.Header />
			<Layout.Main>
				<CaseHero data={caseData!} />
				<Technologies data={caseData?.technologies} />
				<CaseMainInfo data={caseData?.main} />
			</Layout.Main>
			<Layout.Footer showAddress />
		</Layout>
	);
}

export default Case;
