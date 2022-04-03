import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-text-input',
  templateUrl: './comp-text-input.component.html',
  styleUrls: ['./comp-text-input.component.css']
})
export class CompTextInputComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "form",
    allowed: "control | material",
    type: "string",
    default: "control"
  }, {
    name: "dark",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "control",
    allowed: "FormControl",
    type: "FormControl",
    default: "new FormControl('')"
  }, {
    name: "filled",
    allowed: "Boolean",
    type: "boolean",
    default: "true"
  }];

  selector = "mg-text";

  title = "Text Input";
  code = `  <mg-text form="control">TEXT AREA</mg-text>
  <br/>
  <mg-text form="material">TEXT AREA</mg-text>`;

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
    this.seo.setTitle("Materialgrammi | Text Input");
  }

}
