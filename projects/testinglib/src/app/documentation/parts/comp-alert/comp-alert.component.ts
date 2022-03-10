import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-alert',
  templateUrl: './comp-alert.component.html',
  styleUrls: ['./comp-alert.component.css']
})
export class CompAlertComponent implements OnInit {
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

  selector = "mg-alert";

  title = "Alert";

  code = `<mg-alert theme="dark">This is a simple alert</mg-alert>`;

  optionsApplied = {
    theme: "dark"
  }

  outputOptions = [];


  constructor() { }

  ngOnInit(): void {
  }

}
