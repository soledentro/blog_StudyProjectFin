export const cardVariants = {
    start: {
        opacity: 0,
        scale: 0,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
}


export const postListVariants = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delayChildren: 0.2,
            staggerChildren: 0.2,
        }
    },
}

export const postItemVariants = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1.2,
        },
    },
}

export const inputVariants = {
    start: {
      opasity: 0,
      x: -700,
    },
    end: {
      opasity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      }
    },
  }