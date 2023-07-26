'use client'
import {  
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { addItemsToOrder, createOrder } from '../services';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    items: CartItemType[];
    subTotal: number;
}

 export async function ButtonPayPal({ items, subTotal }: Props) {

  const router = useRouter();
    
 //paypal
// This values are the props in the UI
const amount = `${subTotal}`;
const currency = "EUR";
const style = {"layout":"vertical"};

//payment with paypal
async function createOrderPayPal(orderData: { paid: boolean, status: string }) {
try {
const order = await createOrder(orderData);

//this will add the products to  the order
//making the relation N:N in the data base
items.forEach((item) => 
addItemsToOrder({
 orderId: order.id, 
 productId: item.id, 
 amount: item.quantity  
})
)

router.push('/my-orders')

} catch (error) {
console.log(error);
}

}
//button wrapper paypal  
function ButtonWrapper({ currency, showSpinner }: PaypalButton) {
 // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
 const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

 useEffect(() => {
     dispatch({
         type: "resetOptions",
         value: {
             ...options,
             currency: currency,
         },
     });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [currency, showSpinner]);


 return (<>
         { (showSpinner && isPending) && <div className="spinner" /> }
         <PayPalButtons
             style={{ layout: "vertical" }}
             disabled={false}
             forceReRender={[amount, currency, style]}
             fundingSource={undefined}
             createOrder={async (data, actions) => {
                 const orderId = await actions.order
                 .create({
                   purchase_units: [
                     {
                       amount: {
                         currency_code: currency,
                         value: amount,
                       },
                     },
                   ],
                 });
               return orderId;
             }}
             onApprove={async function ():Promise<void> {
                await createOrderPayPal(
                 { 
                   paid: true,
                   status: 'on the way'
                 }
                 );
            
             }}
         />
     </>
 );
}


  return (
    <>
      <PayPalScriptProvider
                options={{
                  clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
                  components: "buttons",
                  currency: "EUR",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
    </>
  )
}

