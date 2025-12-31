import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { motion } from 'framer-motion'

export default function DevicesPage() {
  return (
    <main className="bg-black text-silver mt-12 mb-52">
      <Section>
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            Smart devices, curated with intent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl text-steel text-lg">
            We don’t list everything.  
            We select what integrates well, performs reliably,
            and fits into a long-term smart living system.
          </motion.p>
        </Container>
      </Section>
    </main>
  )
}
