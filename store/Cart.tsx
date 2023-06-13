'use client'

import { ReactNode, createContext, useState } from 'react';


export const ShoppingCartContext = createContext();// To do create a a default state


export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
    return(
        <ShoppingCartContext.Provider value={{
          count, 
          setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

