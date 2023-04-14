import { ReviewsEN, ReviewsRU } from "@shared/i18n";
import { CASES } from "@shared/lib";
import { useInterval } from "@shared/lib/hooks/useInterval.hook";
import { WorksCard } from "@widgets/works-card";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

function Timer({ duration }: { duration: number }) {
	const [timeLeft, setTimeLeft] = useState(duration * 0.65);
	const { theme, systemTheme } = useTheme();
	const _theme = theme === "system" ? systemTheme : theme;

	useEffect(() => {
		if (timeLeft === 0) return;
		const intervalId = setInterval(() => {
			setTimeLeft((timeLeft) => timeLeft - 1);
		}, 1);
		return () => clearInterval(intervalId);
	}, [timeLeft]);

	const radius = 12;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset =
		circumference - (timeLeft / (duration * 0.65)) * circumference;

	return (
		<svg width="32" height="32">
			<circle
				cx="16"
				cy="16"
				r={radius}
				stroke={_theme === "light" ? "#000" : "#fff"}
				opacity={0.2}
				strokeWidth="8"
				fill="none"
			/>
			<circle
				cx="16"
				cy="16"
				r={radius}
				stroke={_theme === "light" ? "#000" : "#fff"}
				strokeWidth="8"
				fill="none"
				strokeDasharray={`${circumference} ${circumference}`}
				strokeDashoffset={strokeDashoffset}
				transform="rotate(-90 16 16)"
			/>
		</svg>
	);
}

export default Timer;

const reviewsData = CASES.filter((c) => c.review);
const timerDuration = 20000;

export function Reviews() {
	const [activeReviewIndex, setActiveReviewIndex] = useState(0);
	const { locale } = useRouter();

	const text = useMemo(() => {
		if (locale === "ru") {
			return ReviewsRU;
		}

		return ReviewsEN;
	}, [locale]);

	const nextSlide = useCallback(() => {
		setActiveReviewIndex((activeReviewIndex) => {
			if (activeReviewIndex === reviewsData.length - 1) {
				return 0;
			}

			return activeReviewIndex + 1;
		});
	}, [activeReviewIndex]);

	useInterval(nextSlide, timerDuration, [activeReviewIndex]);

	return (
		<section className="container pt-20 pb-[7.5rem]">
			<h2 className="text-2xl leading-none lg:text-5xl font-bold lg:leading-[3.25rem]">
				{text.title.beforeHighlight}
				<span
					className="text-primary-s"
					dangerouslySetInnerHTML={{ __html: text.title.highlight }}
				></span>
				{text.title.afterHighlight}
			</h2>

			<div className="lg:grid gap-10 grid-cols-[1fr_25rem] mt-10">
				<article className="py-6 lg:py-10 px-4 lg:px-16 bg-light-surface dark:bg-dark-surface rounded-sm flex flex-col">
					<p
						className="text-base leading-6 lg:text-2xl lg:leading-10"
						dangerouslySetInnerHTML={{
							__html:
								locale === "ru"
									? reviewsData[activeReviewIndex]?.review?.text.ru ?? ""
									: reviewsData[activeReviewIndex]?.review?.text.en ?? "",
						}}
					></p>
					<p className="text-sm leading-5 lg:text-xl font-medium mt-10 lg:mt-4 max-w-xl">
						<span className="font-bold">
							{locale === "ru"
								? reviewsData[activeReviewIndex]?.review?.author.name.ru
								: reviewsData[activeReviewIndex]?.review?.author.name.en}
						</span>
						,{" "}
						{locale === "ru"
							? reviewsData[activeReviewIndex]?.review?.author.position.ru
							: reviewsData[activeReviewIndex]?.review?.author.position.en}
					</p>
				</article>
				<div className="hidden lg:block">
					<WorksCard work={reviewsData[activeReviewIndex]!} />
				</div>
			</div>

			<div className="mt-10 flex flex-wrap gap-6">
				{reviewsData.map((r, idx) => (
					<button
						key={idx}
						className="py-4 px-6 bg-light-surface dark:bg-dark-surface text-base lg:text-2xl rounded-sm flex items-center "
						onClick={() => setActiveReviewIndex(idx)}
					>
						{activeReviewIndex === idx && <Timer duration={timerDuration} />}
						<span
							className={clsx(
								"opacity-50",
								activeReviewIndex === idx && "opacity-100 font-bold  ml-[18px]"
							)}
						>
							{r?.title}
						</span>
					</button>
				))}
			</div>
		</section>
	);
}
