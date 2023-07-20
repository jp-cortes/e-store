import { type } from "os"

declare global {
  
 
     type Category = {
            id: number;
            name: string;
            image: string;
            createdAt: string;
        
     }

    type Product = {
            id: number;
            name: string;
            description: string;
            image: string;
            price: string;
            categoryId: number;
            createdAt: string;
            category: Category;
        }

   

    type Products = Product[];
    
    
    type Customer = {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    avatar: string;
    createdAt: string;
    userId: number;
  }


  type NewCustomer = {
    name: string;
    lastName: string;
    phone: string;
    avatar?: string;
    user: {
      email: string;
      password: string;
      
    }
  }
  
  type PaypalButton = {
    currency: string;
    showSpinner: boolean
  };
  
  type ResumeOrder = {
  id: number;
  status: string;
  paid: boolean;
  paymentMethod: string;
  shippingAddress: string | null;
  customerId: number;
  createdAt: string;
  customer: Customer;
  
}
 type ChartData = {
  datasets: [
    {
    label: string;
    data: {};
    borderWidth: number;
    backgroundColor: string[];
  }
]
 }

 type Cart = {
  quantity: number;
  total: number;
  products: Product[];
};


}