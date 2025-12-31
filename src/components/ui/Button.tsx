import {motion} from 'framer-motion'
import {cn} from '@/lib/utils'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'ghost'
}

export default function Button ({children, variant='primary'}:ButtonProps) {
    return (
        <motion.button
            whileHover={{y:-1}}
            whileTap={{scale:0.98}}
            transition={{duration:0.2, ease: 'easeOut'}}
            className={cn(
                'rounded-full px-8 py-4 text-sm tracking-wide transition',
                variant === 'primary' && 
                'border border-silver/30 hover:border-silver hover:bg-silver/5',
                variant === 'ghost' &&
                'text-steal hover:text-silver'
            )}
        >
            {children}
        </motion.button>
    )
} 