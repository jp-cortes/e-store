import Cookie  from 'js-cookie';
import { endPoints } from "./endPoints";




export async function getOrders() {

    const token = Cookie.get('token');
    //Set the Authorization header with the token
      if(token) {
        const headers = {
          'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          };
    
      const response = await fetch(`${endPoints.orders.allOrders}`, 
      {
        method: 'GET',
        headers: headers,
        cache: 'no-cache',
      } 
      );
      const data = await response.json();
    //  console.log(data, 'dataa')
     return data;
      }
   
}

export async function createOrder(orderData: { paid: boolean, status: string }) {
  const { paid, status }= orderData
  
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
        status
    })
  } 
  );
  const data = await response.json();
  // console.log(data, 'is updated');
 return data;
}


export async function addItemsToOrder(item: { orderId: number, productId: number, amount: number }) {
  const { orderId, productId, amount }= item;

    const token = Cookie.get('token');
    
  //Set the Authorization header with the token
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };

  const response = await fetch(`${endPoints.orders.addItem}`, 
  {
    method: 'POST',
    headers: headers,
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      orderId,
      productId,
      amount
    })
  } 
  );
  const data = await response.json();
  // console.log(data, 'is updated');
 return data;
}


export async function getOrdersById(id: string): Promise<OrderDetail> {

  
    const token = Cookie.get('token');
    //Set the Authorization header with the token
  
    const headers = {
         'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };
      
  const response = await fetch(`${endPoints.orders.order(id)}`, {
    method: 'GET',
    // cache: 'no-store',
    headers: headers
  });
  const data = await response.json();
  
 return data;
  
 
  
  }

  
export async function getOrdersByCustomer() {

  
  const id =  Cookie.get('userId') as string;
    const token = Cookie.get('token');
    
    if(id && token) {
    //Set the Authorization header with the token
  
    const headers = {
        Authorization: `Bearer ${token}`
      };
      
  const response = await fetch(`${endPoints.orders.myOrders(id)}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: headers
  });
  const data = await response.json();
  // console.log(data, ' all orders')
  return data;
}
  
  }
  