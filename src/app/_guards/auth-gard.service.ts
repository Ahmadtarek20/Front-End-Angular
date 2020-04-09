import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../servecies/alertify.service';
import { AuthService } from '../servecies/auth.service';
import { AdminstratiomService } from '../servecies/adminstratiom.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {
  constructor(private authService: AuthService ,private adminserv: AdminstratiomService ,
    private aleartfy: AlertifyService,
    private router: Router){}

  canActivate(): boolean {
    if(!this.authService.loggedIn()){
      return true;
    }
    // this.aleartfy.error('You Shall not Pass!!');
     this.router.navigate(['/home']);
     return false;

    }
}
