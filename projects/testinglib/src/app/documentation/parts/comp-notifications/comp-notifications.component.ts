import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-notifications',
  templateUrl: './comp-notifications.component.html',
  styleUrls: ['./comp-notifications.component.css']
})
export class CompNotificationsComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "alignCenter",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }];

  selector = "mg-notification";

  title = "Notification";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
