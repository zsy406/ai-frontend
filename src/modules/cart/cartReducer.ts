import { CartItem } from '../../types/cart';

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string } // payload is the item id
  | { type: 'CLEAR_CART' };

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};