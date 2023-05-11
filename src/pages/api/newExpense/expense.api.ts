import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const bodySchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.string(),
  type: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "POST") return res.status(405).end()
  
  const session = await getServerSession(
     req,
     res,
    buildNextAuthOptions(req, res),
  )

  if (!session) return res.status(401).end()


  const { category, description, price, type } = bodySchema.parse(req.body)

  await prisma.newExpense.create({
    data: {
      description,
      category,
      price,
      type,
    }
  })
    
  return res.status(201).end()
}