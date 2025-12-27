// "use client";

// import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// interface BlurFadeProps {
//   children: React.ReactNode;
//   className?: string;
//   variant?: {
//     hidden: { y: number };
//     visible: { y: number };
//   };
//   duration?: number;
//   delay?: number;
//   yOffset?: number;
//   inView?: boolean;
//   inViewMargin?: string;
//   blur?: string;
// }
// const BlurFade = ({
//   children,
//   className,
//   variant,
//   duration = 0.4,
//   delay = 0,
//   yOffset = 6,
//   inView = false,
//   inViewMargin = "0px 0px -10% 0px",
//   blur = "6px",
// }: BlurFadeProps) => {
//   const ref = useRef(null);
//   const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
//   const isInView = !inView || inViewResult;
//   const defaultVariants: Variants = {
//     hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
//     visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
//   };
//   const combinedVariants = variant || defaultVariants;
//   return (
//     <AnimatePresence>
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         exit="hidden"
//         variants={combinedVariants}
//         transition={{
//           delay: 0.04 + delay,
//           duration,
//           ease: "easeOut",
//         }}
//         className={className}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default BlurFade;
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  inView?: boolean;
  inViewMargin?: string; // ✅ JUST A STRING
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 12,
  duration = 0.6,
  inView,
  inViewMargin = "0px 0px -10% 0px",
  blur = "8px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin as any,
  });

  const isInView = inView ?? inViewResult;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur})`,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}