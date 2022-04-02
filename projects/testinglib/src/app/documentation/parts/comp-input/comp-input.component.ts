import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-input',
  templateUrl: './comp-input.component.html',
  styleUrls: ['./comp-input.component.css']
})
export class CompInputComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "success"
  }, {
    name: "style",
    allowed: "control | material",
    type: "string",
    default: "control"
  }, {
    name: "label",
    allowed: "any string",
    type: "string",
    default: "Input Value"
  }, {
    name: "placeholder",
    allowed: "any string",
    type: "string",
    default: ""
  }, {
    name: "control",
    allowed: "FormControl",
    type: "FormControl",
    default: "new FormControl('')"
  }, {
    name: "type",
    allowed: "Input Type",
    type: "string",
    default: "text"
  }, {
    name: "onDark",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "inputCustomClasses",
    allowed: "css class",
    type: "string",
    default: ""
  }, {
    name: "textValue",
    allowed: "any string",
    type: "string",
    default: ""
  }];

  selector = "mg-input";

  title = "Input";

  code = `<mg-input label="Control"></mg-input>
  <br/>
  <mg-input label="Material Form" fStyle="material"></mg-input>`;

  optionsApplied = {}

  outputOptions = [{
    name: "value",
    type: "FormControl"
  }, {
    name: "isFocused",
    type: "boolean"
  }, {
    name: "keyup",
    type: "string"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Input");
  }

}
