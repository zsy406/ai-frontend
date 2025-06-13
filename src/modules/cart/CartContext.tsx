import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { cartReducer } from './cartReducer';
import { CartItem as CartItemType } from '../../types/cart';

interface CartState {
  items: CartItemType[];
}


export interface CartContextType {
  items: CartItemType[];
  addItem: (productId: string) => void;
  // other properties
}

export const CartContext = React.createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = React.useState<CartItemType[]>([]);

  const addItem = (productId: string) => {
    // implement add item logic here
  };

  // other logic

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};