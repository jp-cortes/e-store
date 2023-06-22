const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // console.log(req.body)
    try {
        const params = {
            
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1MlAawHdG9PE3RLIORXL8Y4g' },
                { shipping_rate: 'shr_1MlAdnHdG9PE3RLIHx1bLgXi' },
            ],
            line_items: req.body.map((items: { name: string; image: string; price: number; quantity: number; }) => {
             let amount = Math.ceil(items.price)
                // console.log('img',items.quantity)
                return {
                    price_data: {
                    currency: 'eur',
                    product_data: {
                        name: items.name,
                        images: [items.image],
                    },
                    unit_amount: amount * 100,
                },
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1
                }, 
                quantity: items.quantity,
                }
            }),
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/canceled`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
      // console.log(session, 'session')
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}