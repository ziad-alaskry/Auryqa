import { useRouter } from 'next/router'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import ProductCard from '@/components/ui/ProductCard'
import { lightingProducts,securityProducts,Product,AffiliateLink } from '@/data/products'





const CATEGORY_COPY: Record<string, { title: string; desc: string }> = {
  lighting: {
    title: 'Smart Lighting',
    desc:
      'Lighting systems designed to adapt to your routine, enhance comfort, and reduce energy waste.',
  },
  security: {
    title: 'Smart Security',
    desc:
      'Cameras, sensors, and locks that work together as one reliable protection layer.',
  },
  climate: {
    title: 'Climate Control',
    desc:
      'Temperature and air quality systems optimized for comfort and efficiency.',
  },
  entertainment: {
    title: 'Smart Entertainment',
    desc:
      'Audio and media systems integrated seamlessly throughout your space.',
  },
}

export default function DeviceCategoryPage() {
  const { query } = useRouter()
  const category = query.category as string

  const data = CATEGORY_COPY[category]

  if (!data) return null

  const products:Product[] = 
  category === 'lighting'
    ? lightingProducts
    : category === 'security'
    ? securityProducts
    : []


  return (
    <main className="bg-black text-silver">
      <Section>
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            {data.title}
          </motion.h1>

          <p className="max-w-2xl text-steel text-lg mb-20">
            {data.desc}
          </p>

          {/* Placeholder for future product grid */}
            {products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                <ProductCard
                    key={product.name}
                    name={product.name}
                    brand={product.brand}
                    description={product.description}
                    affiliateLinks={product.affiliateLinks}
                />
                ))}
            </div>
            )}

          <div className="mt-20">
            <Link href="/consultation">
              <Button>
                Discuss a system for your space
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  )
}
