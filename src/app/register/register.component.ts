import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Register } from '../Models/Register';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../servecies/auth.service';
import { AlertifyService } from '../servecies/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();


  model:Register;
  registerForm: FormGroup;

  constructor(private authService : AuthService ,
    private fb: FormBuilder, private aleartfy: AlertifyService ,  private router: Router ) {
    this.model = {Email: '',Password: '', ConfirmPassword : ''};
 }

  ngOnInit() {
    //this.creatRegister();
  }
  creatRegister(){
    this.registerForm = new FormGroup({
      Email: new FormControl('',Validators.required),
      Password:  new FormControl('',
      [Validators.required,Validators.minLength(6),Validators.maxLength(9)]),
      ConfirmPassword:  new FormControl('',Validators.required)
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g:FormGroup){
    return g.get('Password').value === g.get('ConfirmPassword').value ? null : {'mismatch':true}
  }

  register(){

   /* if(this.registerForm.valid){
      this.model = Object.assign({},this.registerForm.value);
      this.authService.register(this.model).subscribe(()=>{
        this.router.navigate(['/products']);
      },error =>{
        this.router.navigate(['/register'])
      });
    }*/
    console.log(this.model);
   this.authService.register(this.model).subscribe(()=> {
    this.router.navigate(['/products']);
     }, error =>{
    this.router.navigate(['/register'])
   });
 }

 cancel(){
   this.cancelRegister.emit(false);
 }

}
