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
}