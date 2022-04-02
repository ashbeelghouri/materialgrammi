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
    name: "style",
    allowed: "control | material",
    type: "string",
    default: "control"
  }, {
    name: "on_dark",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "label",
    allowed: "string",
    type: "string",
    default: "true"
  }, {
    name: "control",
    allowed: "FormControl",
    type: "FormControl",
    default: "new FormControl('')"
  }, {
    name: "label",
    allowed: "string",
    type: "string",
    default: "text area input"
  }];

  selector = "mg-text";

  title = "Text Input";
  code = `  <mg-text></mg-text>
  <br/>
  <mg-text fStyle="material"></mg-text>`;

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
