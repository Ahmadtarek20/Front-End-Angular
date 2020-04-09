import { Category } from './Category';

export interface ProductCard{
  id?: number;
  Name?: string;
  Price?: number;
  HasDiscount?: boolean;
  DiscountAmount?: number;
  Category?: Category;
  PhotoPath?:  string;

}
