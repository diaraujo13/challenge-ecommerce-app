export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Record<string, any>;
}

export { default as ProductList } from './List';
export { default as ProductDetails } from './Detail';
