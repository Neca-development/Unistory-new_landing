import { CASES } from "@shared/lib";
import { Meta } from "@shared/meta";
import { Connect } from "@widgets/connect";
import { Layout } from "@widgets/layout";
import { useRouter } from "next/router";
import { CaseMainInfo } from "./ui/case-main-info.component";
import { CaseHero } from "./ui/hero.component";
import { Stack } from "./ui/stack.component";
import { Team } from "./ui/team.component";

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
				<Stack data={caseData?.technologies} />
				<CaseMainInfo data={caseData?.main} />
				<Team data={caseData?.team} />
				<Connect />
			</Layout.Main>
			<Layout.Footer showAddress />
		</Layout>
	);
}

export default Case;
