import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';

import { LoginModule } from './login/login.module';
import { MessagesPropertiesComponent } from './messages-properties/messages-properties.component';
import { LayoutComponent } from './layout/layout.component';





 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesPropertiesComponent,
    LayoutComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    LoginModule
  ],
  providers: [
    ClientesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
