import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Carts } from '../Models/Carts';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  baseUrl = environment.apiUrl;

  constructor( private http: HttpClient) { }

  addtocart(data: Carts):Observable<Carts>{
    return this.http.post<Carts>('https://localhost:44352/api/carts' , data);
    }

    Getcarts(UserId):Observable<Carts[]>{
      return this.http.get<Carts[]>(this.baseUrl + 'carts/' + UserId);
    }
    GetProductsdetals(ids):Observable<Carts[]>{
      return this.http.post<Carts[]>(this.baseUrl + 'carts/ProductDetails' , ids);
    }
    dropdata(productId):Observable<Carts[]>{
      return this.http.post<Carts[]>(this.baseUrl + 'carts/dropdata' , productId );
    }

}
