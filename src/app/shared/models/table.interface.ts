export interface Column {
  field: string;
  header: string;
  isStatus?: boolean;
  isCustomer?: boolean;
  isDate?: boolean;
  isPrice?: boolean;
  isItems?: boolean;
  isOrderId?: boolean;
  isProduct?: boolean;
  isStock?: boolean;
  isAction?: boolean;
  isOrderDetails?: boolean;
}
