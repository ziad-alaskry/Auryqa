import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Principles from '@/components/sections/Principles'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-silver selection:bg-silver/20">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,204,214,0.08),transparent_60%)]" />

      {/* Hero */}
      <Section>
        <Container>
          <div className="relative">
            {/* subtle accent line */}
            <div className="mb-6 h-px w-24 bg-silver/30" />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="max-w-3xl text-5xl md:text-7xl font-light leading-tight"
            >
              Smart living,<br />designed around you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
              className="mt-8 max-w-xl text-steel text-lg"
            >
              Curated smart devices, elegant system design, and professional installation —
              brought together as one seamless experience.
            </motion.p>

            <div className="mt-16 mb-4">
              <Button>
                Request a Smart Home Plan
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      
      {/* Pillars */}
<Section>
  <Container>
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-light mb-4">
        Smart systems, carefully selected
      </h2>
      <p className="text-steel max-w-xl">
        Each category is curated for performance, reliability, and long-term integration.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
      {[
        { title: 'Lighting', desc: 'Adaptive lighting for comfort, focus, and atmosphere.' },
        { title: 'Security', desc: 'Cameras, locks, and sensors working as one system.' },
        { title: 'Climate', desc: 'Smart control of temperature, air, and energy usage.' },
        { title: 'Entertainment', desc: 'Audio and media, seamlessly integrated.' },
      ].map((item, i) => (
        <Link key={item.title} href={`/devices/${item.title.toLowerCase()}`}>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-silver/10 bg-graphite/20 p-8 transition"
          >
            <h3 className="text-lg mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-steel leading-relaxed">
              {item.desc}
            </p>

            <div className="mt-6 h-px w-8 bg-silver/30 group-hover:w-12 transition-all" />
          </motion.div>
        </Link>
      ))}
      
    </div>
  </Container>
</Section>

{/* trust layer */}
      <Principles />
    </main>
  )
}
