import { type } from "os"

declare global {
  type CartItemType = Product & { quantity: number, price: number};

 type CartState = {
  [key: string]: CartItemType;
};
 type CartAction = {
  type: "add" | "remove" | "clear";
  item: Product;
  quantity?: number;
};
 
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
 type User = {
  email: string;
  password: string; 
}

  type NewCustomer = {
    name: string;
    lastName: string;
    phone: string;
    avatar?: string;
    user: User;
  }
  
  type PaypalButton = {
    currency: string;
    showSpinner: boolean
  };
  
  type ResumeOrder = {
  id: number;
  status: string;
  paid: boolean;
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

type OrderProduct = {
  id: number;
  amount: number;
  createdAt: string;
  orderId: number;
  productId: number;
}

type ProductOrder = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  categoryId: number;
  createdAt: string;
  OrderProduct: OrderProduct;
}


type OrderDetail = {
  id: number;
  status: string;
  paid: boolean;
  createdAt: string;
  customerId: number;
  customer: NewCustomer;
  items: ProductOrder[]
}

type OrderDetailDashboard = {
  id: number;
  status: string;
  paid: boolean;
  createdAt: string;
  customer: Customer;
  items: Products;
}

type ResetPassword = {
  token: string;
  newPassword: string;
}

}