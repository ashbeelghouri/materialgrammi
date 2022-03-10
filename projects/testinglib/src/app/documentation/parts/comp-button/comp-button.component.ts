import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-button',
  templateUrl: './comp-button.component.html',
  styleUrls: ['./comp-button.component.css']
})
export class CompButtonComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "default"
  }, {
    name: "taskType",
    allowed: "",
    type: "string",
    default: "none"
  }, {
    name: "btnStyle",
    allowed: "solid | outline",
    type: "string",
    default: "solid"
  }, {
    name: "task",
    allowed: "open | close",
    type: "string",
    default: "open"
  }, {
    name: "target",
    allowed: "/",
    type: "string",
    default: "/"
  }, {
    name: "class",
    allowed: "css classes",
    type: "string",
    default: ""
  }, {
    name: "btnSize",
    allowed: "sm | md | lg",
    type: "string",
    default: "md"
  }, {
    name: "isBlock",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "round",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "allowMargin",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "link",
    allowed: "",
    type: "string",
    default: ""
  }, {
    name: "allowShrink",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "options",
    allowed: "",
    type: "boolean",
    default: "{}"
  }, {
    name: "isExtended",
    allowed: "true | false",
    type: "boolean",
    default: "open"
  }, {
    name: "newTab",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }];

  selector = "mg-button";

  title = "Button";

  outputOptions = [{
    name: "clicked",
    type: "boolean"
  }, {
    name: "active",
    type: "boolean"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
