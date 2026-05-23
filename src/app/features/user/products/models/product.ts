export interface Product {
  id: number;
  image: string;
  title: string;
  category?: string;
  description?: string;
  ratingAvg: number;
  review: number;
  unit: string;
  discount: string;
  price: number;
  originalPrice: number;
  stock?: number;
  isOrganic?: boolean;
}
