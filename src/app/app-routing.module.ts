import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { NavbarComponent } from './template/navbar/navbar.component';


import { SidebarComponent } from './template/sidebar/sidebar.component';




const routes: Routes = [


  { path: 'login' , component: LoginFormComponent},
    { path: '', component: LayoutComponent , children:[
       { path:'home', component: HomeComponent}
      ]
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
