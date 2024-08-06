import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY ?? '';

const stripe = new Stripe(key, {
  apiVersion: '2022-11-15',
  typescript: true,
})


export async function POST(req: NextRequest) {
const body = await req.json();
  
    try {
      if(body.length > 0){
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
            
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
          { shipping_rate: 'shr_1NOzfyJbIYxoAzg0uK6X3swk' },
          { shipping_rate: 'shr_1NOzibJbIYxoAzg0JUW5FLC1' },
      ],
      invoice_creation: {
        enabled: true,
      },
      line_items: body.map((items: { name: string; image: string; price: number; quantity: number; }) => {
       let amount = Math.ceil(items.price)
    
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
      success_url: `${req.headers.get('origin')}/my-orders`,
      cancel_url: `${req.headers.get('origin')}/payment-canceled`,
    });
    return NextResponse.json({ session });
   
      } else {
        return NextResponse.json({ message: 'No data found'})
      }
     
    } catch (err: any) {
      return NextResponse.json(err.message);
    }
 
}

