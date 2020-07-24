import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/app/login/login.component";
import { LeadComponent } from "src/app/lead/lead.component";
import { CampusmindsComponent } from "src/app/campusminds/campusminds.component";
import { CapabilitiesComponent } from "src/app/capabilities/capabilities.component";
import { AuthGuard } from "src/app/auth.guard";
import { HomeComponent } from "src/app/home/home.component";
import { Auth2Guard } from "src/app/auth2.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: 'lead',
    component: LeadComponent,
    canActivate: [AuthGuard]
  },
   {
    path: "campusminds",
    component:CampusmindsComponent,
    canActivate: [Auth2Guard]
  },
  {
     path: "capabilities",
     component:CapabilitiesComponent,
     canActivate: [Auth2Guard]
       
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
