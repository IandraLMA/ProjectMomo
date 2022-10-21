import { Component, OnInit , Input} from '@angular/core';
import { messageProperties } from '../../environments/messages.config'
@Component({
  selector: 'messages',
  templateUrl: './messages-properties.component.html',
  styleUrls: ['./messages-properties.component.css']
})
export class MessagesPropertiesComponent implements OnInit {
  @Input() message;
  
  constructor() { }

  ngOnInit(): void {
    this.message =  messageProperties[this.message];
  }

}
