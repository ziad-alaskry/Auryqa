import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import {sendAdminNotification,sendUserConfirmation} from '@/lib/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const consultation = await prisma.consultation.create({
      data: {
        name,
        email,
        message,
      },
    })
       sendAdminNotification({ name, email, message }).catch(() => {})
       sendUserConfirmation({ name, email }).catch(() => {})
    return res.status(200).json({ success: true, consultation })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save consultation' })
  }

}
