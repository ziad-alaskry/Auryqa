import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {AnimatePresence, motion} from "framer-motion"
import SiteLayout from "@/components/layout/SiteLayout"


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SiteLayout>
      <AnimatePresence mode="wait">
        <motion.div 
        key={router.route}
        initial={{opacity:0, y:12}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-12}}
        transition={{duration:0.6, ease: 'easeOut'}}
        >
          <Component {...pageProps}/>
        </motion.div>
      </AnimatePresence>
    </SiteLayout>
  )
}
