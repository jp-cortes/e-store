
import Cookie  from 'js-cookie';
import { endPoints } from "./endPoints";




export async function getOrders(): Promise<OrderDetail[] | undefined> {

  
      try {
        const token = Cookie.get('token');
    
    //Set the Authorization header with the token
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
   
      } catch (error) {
        console.error(error);
        
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

export async function updateOrderStatus(orderStatus: { id: number, status: string }): Promise<ResumeOrder | undefined> {
  const { status, id }= orderStatus;
  try {
    
    const token = Cookie.get('token');
    
  //Set the Authorization header with the token
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };

  const response = await fetch(`${endPoints.orders.updateOrder(id)}`, 
  {
    method: 'PATCH',
    headers: headers,
    cache: 'no-cache',
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
        status
    })
  } 
  );
  const data = await response.json();
   return data;
  } catch (error) {
    
    console.error(error);
  }
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


export async function getOrdersById(id: string): Promise<OrderDetail | undefined> {

  
   try {
    const token =  Cookie.get('token');
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
   } catch (error) {
    console.error(error, 'error');
   }
  
  }

  
export async function getOrdersByCustomer() {

  
  
    const token = Cookie.get('token');
    
    if(token) {
    //Set the Authorization header with the token
  
    const headers = {
        Authorization: `Bearer ${token}`
      };
      
  const response = await fetch(`${endPoints.orders.myOrders}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: headers
  });
  const data = await response.json();
  // console.log(data, ' all orders')
  return data;
}
  
  }
  