import LLMChatBotAvatar from "@public/assets/images/homepage/llm-avatar.png";
import LLMChatLine from "@public/assets/images/homepage/llm-chat-line.png";

import Image from "next/image";

export const LLMAnimatedBlock = () => {
  return (
    <div className="relative h-40 overflow-hidden ml-8 text-[0.5rem] w-3/5">
      <div className="llm-row-1">
        <div className="flex">
          <Image src={LLMChatBotAvatar} alt="" className="w-5 h-5" />
          <div className="bg-light-bg-accent py-2 px-3 shadow-lg rounded-md ml-2 w-44 dark:bg-dark-bg-secondary">
            /////////// //// /////////////////////////// //////////// ////////////// /////
            ///////////////////// // /////////////////////////
          </div>
        </div>
        <div className="ml-12 mt-4 flex space-x-1 relative">
          <Image className="absolute w-8 h-8 -left-[2.4rem] -top-6" src={LLMChatLine} alt="" />
          <div className="bg-light-bg-accent/[0.5] dark:bg-dark-bg-secondary/[0.5] py-1 px-2 rounded-full shadow-lg">
            ////////// Image
          </div>
          <div className="bg-light-bg-accent/[0.5] dark:bg-dark-bg-secondary/[0.5] py-1 px-2 rounded-full shadow-lg">
            //// //////////
          </div>
          <div className="bg-light-bg-accent/[0.5] dark:bg-dark-bg-secondary/[0.5] py-1 px-2 rounded-full shadow-lg">
            ////////// ////
          </div>
        </div>
      </div>
      <div className="llm-row-2 mt-4">
        <div className="py-1 px-2 bg-[#FC4700] w-fit rounded-full ml-auto text-[#000000] dark:text-[#000000]">
          //// //////////
        </div>
      </div>
      <div className="llm-row-3">
        <div className="flex">
          <Image src={LLMChatBotAvatar} alt="" className="w-5 h-5" />
          <div className="bg-light-bg-accent py-2 px-3 shadow-lg rounded-md ml-2 w-44 dark:bg-dark-bg-secondary">
            /////////// //// /////////////////////////// //////////// ////////////// /////
            ///////////////////// // /////////////////////////
          </div>
        </div>
        <div className="ml-12 mt-4 flex space-x-1 relative">
          <Image className="absolute w-8 h-8 -left-[2.4rem] -top-6" src={LLMChatLine} alt="" />
          <div className="bg-light-bg-accent/[0.5] dark:bg-dark-bg-secondary/[0.5] py-1 px-2 rounded-full shadow-lg">
            ////////// Image
          </div>
          <div className="bg-light-bg-accent/[0.5] dark:bg-dark-bg-secondary/[0.5] py-1 px-2 rounded-full shadow-lg">
            //// //////////
          </div>
          <div className="bg-light-bg-accent/[0.5] dark:bg-dark-bg-secondary/[0.5] py-1 px-2 rounded-full shadow-lg">
            ////////// ////
          </div>
        </div>
      </div>
    </div>
  );
};
