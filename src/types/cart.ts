export interface CartItem {
  user_id: number;
  product_id: number;
  quantity: number;
  price: number;
  productName: string;
}

export interface AddItemRequest {
  item: CartItem;
}

export interface RemoveItemRequest {
  product_id: number;
}

export interface GetCartRequest {}

export interface CartResponse {
  success: boolean;
  message: string;
  items: CartItem[];
}