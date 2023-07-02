import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2022-11-15",
  typescript: true,
})


export async function POST(req: NextApiRequest, res: NextApiResponse) {

  console.log(req.body)
    try {
        const params = {
            
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1NOzfyJbIYxoAzg0uK6X3swk' },
                { shipping_rate: 'shr_1NOzibJbIYxoAzg0JUW5FLC1' },
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
            success_url: `${req.headers}/success`,
            cancel_url: `${req.headers}/canceled`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
      // console.log(session, 'session')
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
 
}

