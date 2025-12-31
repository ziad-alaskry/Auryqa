import { easeOut } from "framer-motion"

export const fadeUp = {
    initial: {opacity:0, y:24},
    animate: {opacity:1, y:0},
}

export const transition = {
    duration: 0.8,
    ease: "easeOut",
}