import cubeImage from "@public/assets/images/homepage/cube.png";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

import Image from "next/image";
import { useRef } from "react";

export const SolutionAnimatedBlock = () => {
  const bigCircle = useRef<HTMLDivElement>(null);

  return (
    <div className="relative ml-4 mb-8 mt-12">
      <div
        ref={bigCircle}
        className="animate-solution-big-circle absolute top-[40px] left-[40px] w-7 h-7 rounded-full blur bg-[#000]"
        // style={{
        //   background: "radial-gradient(at center, #00000000, #010101)",
        // }}
      ></div>
      <Image src={cubeImage} alt="Custom Solution" className="relative z-[1] w-[140px] h-[140px]" />
    </div>
    // <motion.div/*
    //   ref={rootRef}
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={controls}
    //   className="absolute bottom-3 left-14 w-[70%] flex items-center p-3 overflow-hidden border-text-dark-text-secondary rounded-lg border-[#EDEAE8] bg-[#EDEAE8]/[0.6]"
    // >
    //   <div className="text-[0.65rem] leading-tight w-[calc(100%_-_1rem)] ml-2 md:text-base xl:text-[0.65rem] xl:leading-tight">
    //     <div className="flex justify-between text-[#000000] font-semibold">
    //       <span>Converted ETH</span>
    //       <span>+0.063 BTC</span>
    //     </div>
    //     <div className="text-light-text-secondary">-0.6 ETH</div>
    //   </div>
    // </motion.div>
  );
};
