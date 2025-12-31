import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { principles } from '@/data/principles'
import { motion } from 'framer-motion'

export default function Principles() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-8 mb-4">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg mb-4">{item.title}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
