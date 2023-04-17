// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tokens from '@/data/tokens.json';

type Data = {
  token: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.body.id;
  const token = tokens.filter((t: any) => t.id === id)[0].token;
  res.status(200).json({ token })
}
