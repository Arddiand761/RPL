import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AnimationContext } from "./AnimationContext";

const transitionVariants = {
  slide: {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
    transition: { duration: 0.5 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },
  // Tambahkan tipe animasi lain jika diperlukan
};

export default function TransitionWrapper({ children }) {
  const location = useLocation();
  const { transitionType } = useContext(AnimationContext);
  const transition = location.state?.transition || transitionType;

  return (
    <motion.div
      key={location.pathname}
      initial={
        transitionVariants[transition]?.initial ||
        transitionVariants.fade.initial
      }
      animate={
        transitionVariants[transition]?.animate ||
        transitionVariants.fade.animate
      }
      exit={
        transitionVariants[transition]?.exit || transitionVariants.fade.exit
      }
      transition={
        transitionVariants[transition]?.transition ||
        transitionVariants.fade.transition
      }
    >
      {children}
    </motion.div>
  );
}
