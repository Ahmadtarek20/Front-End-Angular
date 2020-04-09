import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserRolesl } from '../Models/UserRolesl';
import { EditeRole } from '../Models/EditeRole';

@Injectable({
  providedIn: 'root'
})
export class AdminstratiomService {
  Url = environment.apiUrl + 'adminstration/';


  constructor(private http: HttpClient) { }

  getRolse():Observable<EditeRole[]>{
    return this.http.get<EditeRole[]>(this.Url + 'ListRole');

  }

  Deleterole(id):Observable<EditeRole[]>{
    return this.http.post<EditeRole[]>('https://localhost:44352/api/adminstration/deletRoles?id='+ id, {headers:new HttpHeaders({'Content-Type': 'application/json'})});
  }

  getUser(){
    return this.http.get(this.Url + 'ListUsers');

  }
  getUserInRolebyid(roleId){
    return this.http.get(this.Url + 'EditUserInRole' , roleId);

  }

  PostUserInrole(model):Observable<UserRolesl[]>{
    return this.http.post<UserRolesl[]>(this.Url + 'EditUserInRole', model , {headers:new HttpHeaders({'Content-Type': 'application/json'})});

  }

}
