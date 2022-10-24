import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';


@NgModule({
  declarations: [DialogMessageComponent],
  imports: [
    CommonModule,
    DialogRoutingModule
  ],
  exports:[
    DialogMessageComponent
  ]
})
export class DialogModule { }
