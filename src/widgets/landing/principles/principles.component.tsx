import { MessageToggler } from "@shared/ui";
import clsx from "clsx";
import React, { useState } from "react";

const principleTitles = ["Communication", "Expetise", "Talant"];

const messageData = {
	author: "Nursultan Begenov",
	avatar: "/assets/images/nursultan.jpg",
	message:
		"Unistory — is approach, culture and a focus on performance. We tell you how teamwork works",
	date: "recently",
};

export function Principles() {
	const [activeIdx, setActiveIdx] = useState(0);

	const renderContent = () => {
		switch (activeIdx) {
			case 0:
				return (
					<p className="font-bold text-5xl leading-[3.5rem]">
						<span className="text-primary-s">Communication is important and we know that.</span>{" "}
						We help you decide on the details of your project, answer all your questions,
						propose the best solution and keep you informed of all the developments
						on the project.
					</p>
				);
			case 1:
				return (
					<p className="font-bold text-5xl leading-[3.5rem]">
						Planning{" "}
						<span className="text-primary-s">
							a complex service or adoption of the latest technologies?
						</span>{" "}
						We can help you to implement your ambitious plans, whether it's an international
						B2B marketplace or a new product with AI.
					</p>
				);
			case 2:
				return (
					<p className="font-bold text-5xl leading-[3.5rem]">
						Deadline – is a cut-off date for a task and something we don't break.{" "}
						<span className="text-primary-s">
							our plans will not be disrupted by poor work organization,
						</span>
						, COVIDa or a UFO attack, because we are responsible.
					</p>
				);
			default:
				return null;
		}
	};

	return (
		<section className="container pt-20 pb-40">
			<div className="flex items-center space-x-4">
				{principleTitles.map((t, index) => (
					<React.Fragment key={t}>
						<button
							className={clsx(
								"text-2xl p-2 font-medium",
								activeIdx === index && "text-primary-s"
							)}
							onClick={() => setActiveIdx(index)}
						>
							{t}
						</button>
						{index < principleTitles.length - 1 && (
							<span className="text-5xl leading-none block -mt-1">&sdot;</span>
						)}
					</React.Fragment>
				))}
			</div>

			<div className="mt-12 relative">
				<MessageToggler
					toggleClassName="absolute top-[-1.5rem] left-[39.2rem]"
					messageData={messageData}
				/>
				{renderContent()}
			</div>
		</section>
	);
}
