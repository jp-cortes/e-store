import { getStripe } from '../store/getStripe';
import { addItemsToOrder, createOrder } from '../services';


type Props = {
    items: CartItemType[]
}

export function ButtonStripe({ items }: Props) {
      //payment with stripe
async function handleCheckoutStripe() {

    const stripe =  await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      cache: 'no-cache',
      body: JSON.stringify(items),
    });

    if(response.status === 500) return;

    const data = await response.json();
    
   if(data.session){
    const order = await createOrder({ 
      paid: true,
      status: 'on the way'
    });

  //this will add the products to  the order
  //making the relation N:N in the data base
    items.forEach((item) => 
    addItemsToOrder({
      orderId: order.id, 
      productId: item.id, 
      amount: item.quantity  
    })
    );

    await stripe?.redirectToCheckout({ sessionId: data.session.id });

   }
    
  }

  return (
    <button
    onClick={handleCheckoutStripe}
    className="flex justify-center w-52 px-4 py-2 rounded-xl bg-black text-white font-medium mx-auto my-6 disabled:opacity-50 disabled:cursor-not-allowed"
   
  >
    Pay with Stripe
  </button>
  )
}

