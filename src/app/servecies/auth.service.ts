import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url = environment.apiUrl + 'auth/';
  decodedToken: any;  // ana lazem hbaseha string 3la 4an el cart ??
  jwtHelper = new JwtHelperService ();


  constructor(private http: HttpClient) { }
  login(model: any){
    // debugger;
     return this.http.post(this.Url + 'login', model , {headers:new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
       map((response: any)=> {
        // debugger;
        const user = response;
        if(user){
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          localStorage.setItem("id", this.decodedToken.nameid);  // hea findid de leha 3laka bel ano string
          console.log(this.decodedToken);
         }
       })
     );
   }
  register(model:any){
    return this.http.post(this.Url + 'register' , model , {headers:new HttpHeaders({'Content-Type': 'application/json'})});
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }
  gettoken(){
    const decodedToken = this.jwtHelper.decodeToken('token');
    console.log(decodedToken)
    localStorage.setItem("email",decodedToken.nameid)
    localStorage.setItem("id",decodedToken.nameid)
    return this.jwtHelper.urlBase64Decode(decodedToken);

// login keda yasta

  }
}

