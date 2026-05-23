export interface Stats {
  id: number;
  title: string;
  icon:string;
  value: number;
}

export interface RecentOrder {
  orderId:string;
  date: Date;
  status: 'Delivered' | 'Out for Delivery' | 'Placed' | 'Confirmed' | 'Packed';
  total: number;
  items: number;
  user: {
    name: string;
    email: string;
  }
}
