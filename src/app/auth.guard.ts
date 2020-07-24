import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { AdminService } from "src/app/admin.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  constructor(private adminService: AdminService){} 
  
  canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean{
     
      if (this.adminService.role=="Lead") {
        return true;
      }
      else {
        alert('Access Denied!! You are not allowed to visit this page');
      }
     } 
}
