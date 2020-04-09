import { Category } from './Category';

export interface Product{
  id?: number;
  Name?: string;
  Price?: number;
  HasDiscount?: boolean;
  DiscountAmount?: number;
  CategoryId?: Category;
  Photo?:  File;

}
