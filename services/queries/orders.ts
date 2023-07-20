import Cookie  from 'js-cookie';
import { endPoints } from "./endPoints";




export async function createOrder(orderData: { paid: boolean, status: string, paymentMethod: string, shippingAddress: string }) {
  const { paid, status, paymentMethod,shippingAddress }= orderData
  
    const token = Cookie.get('token');
    
  //Set the Authorization header with the token
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };

  const response = await fetch(`${endPoints.orders.createOrder}`, 
  {
    method: 'POST',
    headers: headers,
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
        paid, 
        status,
        paymentMethod,
        shippingAddress
    })
  } 
  );
  const data = await response.json();
  // console.log(data, 'is updated');
 return data;
}


export async function getOrdersByCustomer(id: string): Promise<ResumeOrder[]> {

  
    const token = Cookie.get('token');
    //Set the Authorization header with the token
  
    const headers = {
        Authorization: `Bearer ${token}`
      };
      
  const response = await fetch(`${endPoints.orders.myOrders(id)}`, {
    method: 'GET',
    headers: headers
  });
  const data = await response.json();
  // console.log(data, ' all orders')
  return data;
  
  
  }
  