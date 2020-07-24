import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from "@angular/router";
import { AdminService } from "src/app/admin.service";

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

constructor(private adminService: AdminService){}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
    
    if(this.adminService.role=="CampusMind"){
      return true;
    }else if(this.adminService.role=="Lead"){
      return true;
    }
    else {
      alert('Access Denied!! You are not allowed to visit this page');
      return false;
    }

       

  }

}
