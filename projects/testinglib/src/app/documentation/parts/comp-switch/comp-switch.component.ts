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
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "options",
    allowed: "{left: html, right: html}",
    type: "object",
    default: "",
    definition: ``
  }, {
    name: "type",
    allowed: "filled | empty",
    type: "string",
    default: "filled",
    definition: ``
  }, {
    name: "size",
    allowed: "s | m | l | xl",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "showChoices",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "onDark",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "selected",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
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
