import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function ConsultationPage() {
  return (
    <main className="bg-black text-silver">
      <Section>
        <Container>
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            Design your smart space
          </h1>

          <p className="max-w-2xl text-steel text-lg mb-16">
            Every home is different.  
            We start with understanding your space, your lifestyle,
            and what you want technology to do for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div>
              <h3 className="mb-3">01 — Consultation</h3>
              <p className="text-steel text-sm">
                We learn about your space, priorities, and expectations.
              </p>
            </div>

            <div>
              <h3 className="mb-3">02 — System Design</h3>
              <p className="text-steel text-sm">
                A custom smart home plan built around long-term reliability.
              </p>
            </div>

            <div>
              <h3 className="mb-3">03 — Installation & Support</h3>
              <p className="text-steel text-sm">
                Professional execution with guidance before and after.
              </p>
            </div>
          </div>
          <Link href='/consultation/request'>
            <Button>
                Request a consultation
            </Button>
          </Link>
        </Container>
      </Section>
    </main>
  )
}
