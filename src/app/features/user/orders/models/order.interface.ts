export interface Order {
  orderId:string;
  date: string;
  status: 'Delivered' | 'Out for Delivery' | 'Placed' | 'All Orders';
  images: string[];
  items: number;
  price: number;
}
