import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../types';
@Component({
  selector: 'mg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() theme: Theme = "primary";
  @Input() show = true;
  @Input() alignCenter = false;
  @Input() closeBtn = "";
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }
  hide() {
    this.show = false;
  }
}
