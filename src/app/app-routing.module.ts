import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeScreenComponent } from '../homeScreen/homeScreen.component';
import { AuthGuard } from '../_helper/authGuard';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent, canActivate :[AuthGuard] },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'register',
    component: RegisterComponent
    }
    ,{
    path: "welcome",
    component: HomeScreenComponent
  },
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
