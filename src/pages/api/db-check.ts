import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const leadCount = await prisma.lead.count()

    res.status(200).json({ leadCount })
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' })
  }
}
