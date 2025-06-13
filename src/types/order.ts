export enum OrderStatus {
  PENDING = 0,
  COMPLETED = 1,
  CANCELLED = 2,
}

export interface OrderItem {
  orderId: number;
  productId: number;
  quantity: number;
  productName: string;
  price: number;
  subAmount: number;
}

export interface Order {
  orderId: number;
  userId: number;
  orderItems: OrderItem[];
  status: OrderStatus;
  orderDate: string;
  deliveryDate: string;
  paymentMethod: string;
  shippingAddress: string;
  billingAddress: string;
  totalAmount: number;
}

export interface CreateOrderRequest {
  orderId: number;
  userId: number;
  orderItems: OrderItem[];
  status: OrderStatus;
  orderDate: string;
  deliveryDate: string;
  paymentMethod: string;
  shippingAddress: string;
  billingAddress: string;
  totalAmount: number;
}

export interface GetOrderRequest {
  orderId: number;
  userId: number;
  status: OrderStatus;
}

export interface OrderResponse {
  order: Order;
  orders: Order[];
  success: boolean;
}