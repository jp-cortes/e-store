'use client'

import { ReactNode, createContext, Dispatch, useContext, useReducer, useState, SetStateAction } from 'react';

export type CartItemType = Product & { quantity: number, price: number};

export type CartState = {
  [key: string]: CartItemType;
};

export type CartAction = {
  type: "add" | "remove";
  item: Product;
  quantity?: number;
};

export type ProductDetailState = {
  productDetail : boolean;
  openProductdetail: Function;
  closeProductdetail: Function;
  productToShow: object;  
  // setProductToShow: SetStateAction<Product>;  
};


//ShoppingCart context
const defaultShoppingCartState = {} as CartState;
const ShoppingCartContext = createContext(defaultShoppingCartState);
const ShoppingCartDispatchContext = createContext(
  (() => {}) as Dispatch<CartAction>
  );
const ProductDetailContext = createContext(defaultProductDetailState);


export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ShoppingCartReducers, defaultShoppingCartState);
 
 //product detail open/close
  const [productDetail, setProductDetail] = useState(false);
  const openProductdetail = () => setProductDetail(true);
  const closeProductdetail = () => setProductDetail(false);

  //product Datail  ShowProduct
   const [productToShow, setProductToShow] = useState({});

   return(
        <ShoppingCartContext.Provider value={{
          state,
          // productDetail,
          // openProductdetail,
          // closeProductdetail,
          // // productToShow, 
          // // setProductToShow,
          }}>
          <ShoppingCartDispatchContext.Provider value={dispatch}>
           
            {children}
           
          </ShoppingCartDispatchContext.Provider>
        </ShoppingCartContext.Provider>
    );
}

function ShoppingCartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingShoppingCartItem = state[item.id];

  switch (type) {
    case "add": {
      if (existingShoppingCartItem !== undefined) {
        const quantity = existingShoppingCartItem.quantity + qtyToAdd;
        return {
          ...state,
          [item.id]: {
            ...existingShoppingCartItem,
            quantity,
          },
        };
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      };
    }

    case "remove": {
      if (existingShoppingCartItem === undefined) {
        return state;
      }

      const quantity = existingShoppingCartItem.quantity - 1;
      if (quantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingShoppingCartItem,
            quantity,
          },
        };
      }

      const newShoppingCartItems = { ...state };
      delete newShoppingCartItems[item.id];
      return newShoppingCartItems;
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}


const getShoppingCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity;
  return sum;
};
const getShoppingCartCount = (sum: number, item: CartItemType) => sum + item.quantity;
/**
 * Fore more info about how is the context applied check the link below
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */
export function useShoppingCart() {
  const itemsById = useContext(ShoppingCartContext);
  const items = Object.values(itemsById);
  const count = items.reduce(getShoppingCartCount, 0);
  const subTotal = items.reduce(getShoppingCartSubTotal, 0);

  return {
    items,
    itemsById,
    count,
    subTotal,
  };
};
export function useShoppingCartMutations() {
  const dispatch = useContext(ShoppingCartDispatchContext);

  const addToShoppingCart = (product: Product, quantity?: number) =>
    dispatch({
      type: "add",
      item: product,
      quantity,
    });

  const removeFromShoppingCart = (product: Product) =>
    dispatch({
      type: "remove",
      item: product,
    });

  return {
    dispatch,
    addToShoppingCart,
    removeFromShoppingCart,
  };
};

export function useProductDetail() {
 const productDetails = useContext(ProductDetailContext);

 return {
  productDetails,
 }
}