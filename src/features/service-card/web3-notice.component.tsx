import convertImage from "@public/assets/images/homepage/web3-convert.png";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Web3AnimatedNotice = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: -5,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2,
      },
    });
  }, [controls]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="absolute bottom-3 left-14 w-[70%] flex items-center p-3 overflow-hidden border-text-dark-text-secondary rounded-lg"
      style={{
        background:
          "radial-gradient(at left bottom, rgba(232,232,232,0.9) 0%, rgba(240,240,240,0.3) 100%)",
      }}
    >
      <Image src={convertImage} alt="Web3 services" className="w-4 h-4" />
      <div className="text-[0.65rem] leading-tight w-[calc(100%_-_1rem)] ml-2 md:text-base xl:text-[0.65rem] xl:leading-tight">
        <div className="flex justify-between text-[#000000] font-semibold">
          <span>Converted ETH</span>
          <span>+0.063 BTC</span>
        </div>
        <div className="text-light-text-secondary">-0.6 ETH</div>
      </div>
    </motion.div>
  );
};
