import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-switch',
  templateUrl: './comp-switch.component.html',
  styleUrls: ['./comp-switch.component.css']
})
export class CompSwitchComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "options",
    allowed: "{left: html, right: html}",
    type: "object",
    default: ""
  }, {
    name: "type",
    allowed: "filled | empty",
    type: "string",
    default: "filled"
  }, {
    name: "size",
    allowed: "s | m | l | xl",
    type: "boolean",
    default: "true"
  }, {
    name: "showChoices",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "onDark",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "selected",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }];

  selector = "mg-switch";

  title = "Switch";
  code = `<mg-switch></mg-switch>`;

  optionsApplied = {}

  outputOptions = [{
    name: "value",
    type: "boolean"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Switch");
  }

}
