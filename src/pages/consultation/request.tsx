import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ConsultationForm from '@/components/forms/ConsultationForm' 


export default function ConsultationRequestPage() {

 
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-light mb-8">
          Design your smart home
        </h1>
        <ConsultationForm />
      </Container>
    </Section>
  )
}
