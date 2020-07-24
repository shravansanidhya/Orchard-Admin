import { Component, OnInit } from '@angular/core';
import { AdminService } from "src/app/admin.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { Data } from "src/app/Data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   role: string;
   datas: Data[] = [];

  loginForm = new FormGroup({
    mid: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
       this.adminService.getData().subscribe(
          res=>{
            this.datas = res as Data[]
            console.log(this.datas);   
          },
          error=>{
            console.log("error",error);   
          }
          );
  }

   getRoleByMID(id: string): string{
     for(let data in this.datas){
     //  console.log(this.datas[data]);
       if(id==this.datas[data].mid){
         return this.datas[data].role;
       }
              
     }
      return this.role;     
   }

  onLogin() {
    this.role = this.getRoleByMID(this.loginForm.value.mid);
    if (this.role == "Lead" &&  this.loginForm.value.password=="admin123") {
      alert("Login Successfully");
      this.adminService.role = this.role;
    } else if(this.role=="CampusMind" && this.loginForm.value.password=="mind123"){
      alert("Login Successfully");      
      this.adminService.role = this.role;
    }
     else {
      alert("Invalid Credentials");
    }
  }

}


