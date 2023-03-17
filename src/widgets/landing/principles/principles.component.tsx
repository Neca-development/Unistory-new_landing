import { MessageToggler } from "@shared/ui";
import clsx from "clsx";
import React, { useState } from "react";

const principleTitles = ["Всегда на связи", "Экспертиза", "Соблюдение сроков"];

const messageData = {
	author: "Нурсултан Бегенов",
	avatar: "/assets/images/nursultan.jpg",
	message:
		"Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
	date: "только что",
};

export function Principles() {
	const [activeIdx, setActiveIdx] = useState(0);

	const renderContent = () => {
		switch (activeIdx) {
			case 0:
				return (
					<p className="font-bold text-5xl leading-[3.5rem]">
						<span className="text-primary-s">Коммуникация важна и точка.</span>{" "}
						Мы ответим на все вопросы и поможем определиться с деталями проекта.
						Подскажем лучшее решение и будем держать в курсе всех событий на
						проекте.
					</p>
				);
			case 1:
				return (
					<p className="font-bold text-5xl leading-[3.5rem]">
						Планируете{" "}
						<span className="text-primary-s">
							сложный сервис или использование новейших технологии?
						</span>{" "}
						Поможем реализовать ваши амбициозные планы будь это международный
						B2B маркетплейс или новый продукт с AI.
					</p>
				);
			case 2:
				return (
					<p className="font-bold text-5xl leading-[3.5rem]">
						Дедлайн – крайний срок выполнения задачи и то, что мы не нарушаем.{" "}
						<span className="text-primary-s">
							Ваши планы не сорвутся из-за плохой организации работ
						</span>
						, COVIDa или атаки НЛО, потому что мы ответственные.
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
