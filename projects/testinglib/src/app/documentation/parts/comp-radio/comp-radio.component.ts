import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-radio',
  templateUrl: './comp-radio.component.html',
  styleUrls: ['./comp-radio.component.css']
})
export class CompRadioComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "primary",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "options",
    allowed: "[{name: html, value: string}]",
    type: "array of objects",
    default: "[ ]",
    definition: ``
  }, {
    name: "radioName",
    allowed: "string",
    type: "string",
    default: "opt",
    definition: ``
  }, {
    name: "size",
    allowed: "s | m | l | xl",
    type: "string",
    default: "s",
    definition: ``
  }, {
    name: "isInline",
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
  }];

  selector = "mg-radio";

  title = "Radio";
  code = `<mg-radio [options]="optionsApplied.options" [theme]="optionsApplied.theme" 
  name="Radio Example"></mg-radio>`;

  optionsApplied = {
    options: [{
      name: "radio option 01",
      value: 1
    }, {
      name: "radio option 02",
      value: 2
    }, {
      name: "radio option 03",
      value: 3
    }, {
      name: "radio option 04",
      value: 4
    }, {
      name: "radio option 05",
      value: 5
    }],
    theme: "dark"
  }

  outputOptions = [{
    name: "value",
    type: "string"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Radio");
  }

}
