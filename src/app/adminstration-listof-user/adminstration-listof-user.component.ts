import { Component, OnInit } from '@angular/core';
import { AdminstratiomService } from '../servecies/adminstratiom.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../servecies/auth.service';
import { UserRolesl } from '../Models/UserRolesl';

@Component({
  selector: 'app-adminstration-listof-user',
  templateUrl: './adminstration-listof-user.component.html',
  styleUrls: ['./adminstration-listof-user.component.css']
})
export class AdminstrationListofUserComponent implements OnInit {
   User : UserRolesl[];
   roleId : string ;

  constructor(private adminstraservise: AdminstratiomService
    , private router : Router ,private route: ActivatedRoute ,  private as: AuthService, ) { }

  ngOnInit() {

   this.loadRoles();
  }
  loadRoles(){
    this.adminstraservise.getUser().subscribe((User : UserRolesl[])=>{
       this.User =User ;
       console.log(User)
    },error =>{
      console.log("error")
    });
  }
  getUserInRolebyid(roleId){
    this.adminstraservise.getUserInRolebyid(roleId).subscribe(()=>{
    this.roleId = roleId;
   },error =>{
     console.log("error")
   });
  }

  Submit(){
    debugger
    let users = this.User.filter(function(User) {
      return User.IsSelected;
    });

    let model = {User : users ,
       roleId: (this.route.snapshot.params['id']) };

     console.log(model);


    this.adminstraservise.PostUserInrole(model).subscribe(()=> {
      console.log("Done")
       }, error =>{
        console.log(error)
     });
  }


  cancel(){
    this.router.navigate(['/adminstration'])
  }
}
