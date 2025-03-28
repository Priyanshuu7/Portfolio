export const backgroundAnimations = {
  blur: "animate-[enter_0.25s_ease-out_forwards]",
  unblur: "animate-[exit_0.25s_ease-out_forwards]",
};

export const fadeAnimations = {
  fadeIn: "animate-[fade-in_0.5s_ease-in-out_forwards]",
  fadeOut: "animate-[fade-out_0.5s_ease-in-out_forwards]",
  slideUp: "animate-[slide-up_0.5s_ease-in-out_forwards]",
  slideDown: "animate-[slide-down_0.5s_ease-in-out_forwards]",
  slideRight: "animate-[slide-right_0.5s_ease-in-out_forwards]",
  slideLeft: "animate-[slide-left_0.5s_ease-in-out_forwards]",
};

export const backgroundGradientColors = [
  "from-purple-900 via-violet-900 to-indigo-900",
  "from-blue-900 via-purple-900 to-pink-900",
  "from-indigo-900 via-purple-900 to-pink-900",
  "from-violet-900 via-purple-900 to-blue-900",
];

export const cardAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const featureAnimationDelay = (index: number): number => {
  return 0.1 + index * 0.05;
};

export const borderGradientAnimation = {
  backgroundSize: "400% 400%",
  animation: "gradient 6s ease infinite",
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
