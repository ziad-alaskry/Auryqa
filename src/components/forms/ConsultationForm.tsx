import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const res = await fetch('/api/consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      form.reset()
    }
  }

  if (success) {
    return (
      <p className="text-silver">
        Thank you. We’ll contact you shortly.
      </p>
    )
  }


  return (
    <form onSubmit={handleSubmit}
    className='space-y-6 max-w-xl' 
    >
        <input 
        name='name'
        placeholder='Your name'
        className='w-full bg-transparent border-b border-silver/20 
        py-3 outline-none'
        required />
        
        <input
         name='email'
         type='email'
         placeholder='Email address'
         className='w-full bg-transparent bg-none border-b border-silver/20 
        py-3 outline-none'
        required />

        <textarea 
        name='message' 
        placeholder='Tell us about your space'
        rows={3}
        className='w-full bg-transparent border-b border-silver/20 py-3 outline-none'
        required />

        <Button>
            {loading? 'Sending...' : 'Request Consultation'}
        </Button>

    </form>
  )

}