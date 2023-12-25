"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const baseText = " Perjalanan Digital ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <>
      <span className="">
        <h1 className='text-4xl md:text-7xl font-bold'>
          Tempat Memulai
          <motion.span className='text-transparent bg-clip-text bg-gradient-to-t from-orange-600 to-orange-300'>
            {displayText}</motion.span> Mu.</h1>
      </span>
    </>
  );
}

