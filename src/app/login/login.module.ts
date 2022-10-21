import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule , NgForm} from '@angular/forms';




@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule
 
  ],
  exports : [
     FormsModule
    
  ]
})
export class LoginModule { }
