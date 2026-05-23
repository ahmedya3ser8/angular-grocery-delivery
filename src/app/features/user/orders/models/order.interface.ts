export interface Order {
  orderId:string;
  date: string;
  status: 'Delivered' | 'Out for Delivery' | 'Placed' | 'All Orders' | 'Confirmed';
  images?: string[];
  items?: number;
  price?: number;
  total?: number;
  user?: {
    name: string;
    email: string;
  }
}
