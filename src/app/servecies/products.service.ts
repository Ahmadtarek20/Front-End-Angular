import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + 'Product');
  }
  getProduct(id):Observable<Product>{
    return this.http.get<Product>(this.baseUrl + 'Product/' + id);
  }
  getCategurys():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
  getCategury(id):Observable<Category>{
    return this.http.get<Category>(this.baseUrl + 'categories/' + id);
  }


  AddProduct(model:any){
    return this.http.post('https://localhost:44352/api/product' , model );
  }
}
