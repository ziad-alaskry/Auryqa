import {motion} from 'framer-motion'

interface SectionProps {
    children: React.ReactNode
}

export default function Section ({children}:SectionProps) {
    return (
        <motion.section
            initial={{opacity:0, y:24}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.8, ease:'easeOut'}}
            className='space-y-4'
            >
                {children}
            </motion.section>
    )
}