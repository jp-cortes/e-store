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
    
    type Ctx = {
        req: NextApiRequest;
        };

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
   
}