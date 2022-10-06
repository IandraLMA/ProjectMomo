import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { MomoComponent } from './momo/momo.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    MomoComponent,
    HelloComponent

  ],
  imports: [
    BrowserModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
