export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export function riseProps(reduce, delay = 0) {
  if (reduce) {
    return { initial: false, animate: { opacity: 1, y: 0 } };
  }
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: easeOut },
  };
}

export function inViewProps(reduce) {
  return {
    variants: fadeUp,
    initial: reduce ? "show" : "hidden",
    whileInView: "show",
    viewport: { once: true, margin: "0px 0px -40px 0px" },
  };
}

export function staggerProps(reduce) {
  return {
    variants: stagger,
    initial: reduce ? "show" : "hidden",
    whileInView: "show",
    viewport: { once: true, margin: "0px 0px -40px 0px" },
  };
}
