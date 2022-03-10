import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() theme = "danger";
  @Input() show = true;
  @Input() alignCenter = false;
  @Input() closeBtn = true;
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }
  hide() {
    this.show = false;
  }
}
