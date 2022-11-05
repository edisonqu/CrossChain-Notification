// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// const url ="https://relic-production.up.railway.app"
const evm = "0x0000000000000000000000000000000000000000"

type Data = {
  name: string
}

export async function postEvm(data:any) {
  // make a post request to the evm api
  const response2 = await fetch(evm, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
