const leftToRight = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const rightToLeft = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const topToBottom = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const popIn = {
  hidden: { scale: 1.2, opacity: 0.5 },
  show: { scale: 1, opacity: 1 },
};

export { leftToRight, rightToLeft, topToBottom, popIn };
