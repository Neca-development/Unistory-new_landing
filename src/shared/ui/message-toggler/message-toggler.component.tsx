import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatedMessageIcon } from "./animated-message-icon.component";

export interface IMessage {
  author: string;
  avatar: string;
  date: string;
  message: string;
}

interface IMessageToggler {
  messageData: IMessage[];
  toggleClassName: string;
  noticeIndex: number;
}

const articleClasses =
  "absolute top-[-7.5rem] left-[1.3rem] t-xs:top-[1.5rem] t-xs:left-auto t-xs:right-[1.8rem] p-4 rounded-[1.25rem] rounded-bl-none t-xs:rounded-bl-[1.25rem] t-xs:rounded-br-none bg-light-surface dark:bg-dark-surface w-[21.125rem] flex items-start shadow-8dp";
export function MessageToggler(props: IMessageToggler) {
  const { messageData, toggleClassName, noticeIndex } = props;
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className={clsx(toggleClassName)}>
      <button onClick={toggleMessage} className="relative w-12 h-12">
        <AnimatedMessageIcon />
      </button>

      <article className={clsx(articleClasses, !showMessage && "hidden")}>
        {messageData &&
          messageData.map((message, index) => (
            <div key={index} className={clsx(index == noticeIndex ? "flex" : "hidden")}>
              <Image
                src={message.avatar}
                alt={message.author}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-3 text-sm font-normal">
                <div className="flex items-center">
                  <p className="font-bold">{message.author}</p>
                  <p className="ml-2 opacity-50">{message.date}</p>
                </div>
                <p className="mt-2">{message.message}</p>
              </div>
            </div>
          ))}
      </article>
    </div>
  );
}
