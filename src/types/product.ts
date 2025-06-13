export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CreateProductRequest {
  product: Product;
}

export interface GetProductRequest {
  id: number;
}

export interface ProductResponse {
  product: Product;
}

export interface ListProductsResponse {
  products: Product[];
}

export interface Empty {}