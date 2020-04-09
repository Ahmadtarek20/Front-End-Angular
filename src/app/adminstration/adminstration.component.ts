import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminstratiomService } from '../servecies/adminstratiom.service';
import { AuthService } from '../servecies/auth.service';
import { EditeRole } from '../Models/EditeRole';

@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.css']
})
export class AdminstrationComponent implements OnInit {
  Roles : EditeRole[];
  roleId : string ;
  constructor(private adminstraservise: AdminstratiomService
   , private router : Router ,  private as: AuthService, ) { }

  ngOnInit() {
    this.loadRoles();
  }
  loadRoles(){
    this.adminstraservise.getRolse().subscribe((Roles : EditeRole[])=>{
       this.Roles =Roles ;
       console.log(Roles)
    },error =>{
      console.log("error")
    });
  }
  deletRole(id){

    this.adminstraservise.Deleterole(id).subscribe(result => {
      this.router.navigate(['/adminstration']);
    }),error =>{
     console.log(error)
    }
  }

  getUserInRolebyid(roleId){
    this.adminstraservise.getUserInRolebyid(roleId).subscribe(()=>{
   },error =>{
     console.log("error")
   });
  }
}
