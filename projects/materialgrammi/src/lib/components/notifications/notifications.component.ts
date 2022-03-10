import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() theme = "primary";
  @Input() id = "1";
  @Input() position = "right-top";

  @Input() timer = 2000;

  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {

  }

  

}
