import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) return res.status(401).end()

  try {
    const bodySchema = z.object({
      description: z.string(),
      category: z.string(),
      price: z.number(),
      type: z.string(),
    })

    const { category, description, price, type } = bodySchema.parse(req.body)

    await prisma.newExpense.create({
      data: {
        description,
        category,
        price,
        type,
      },
    })

    return res.status(201).end()
  } catch (err) {
    console.log(err)
    return res.status(401).end()
  }
}
