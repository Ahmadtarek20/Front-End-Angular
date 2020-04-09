import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { AlertifyService } from '../servecies/alertify.service';
import { Router } from '@angular/router';
import { Login } from '../Models/Login';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  model:Login;

  constructor(public authService: AuthService , private aleartfy: AlertifyService ,
     private router: Router) {


  }

  ngOnInit() {
    this.model = {Password: '', Email: ''};
  }

  logiin(){
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      //this.aleartfy.successs('Loggined in done');
      console.log('Done')
    },error => {
     // this.aleartfy.error("Filed Login")
     console.log('error')
    }, () => {
      this.router.navigate(['/products']);
    });
  }
  AdminLogin(){
   localStorage.getItem('email');
   if( localStorage.getItem('email') == "Admin@yahoo.com")
   this.router.navigate(['/add-product']);
  }

  loggedin(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    //this.aleartfy.successs('Logged Out');
    this.router.navigate(['/home']);
  }

}
