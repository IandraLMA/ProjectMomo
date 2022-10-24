import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {
  @Input()message=null;
  @Input()errors:string[];

  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  setMessage(message:string){
    this.message = message;
  }
  setErros(errors:string[]){
    this.errors = errors;
  }
}
