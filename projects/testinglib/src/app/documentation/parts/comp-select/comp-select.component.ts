import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-select',
  templateUrl: './comp-select.component.html',
  styleUrls: ['./comp-select.component.css']
})
export class CompSelectComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "searchOpt",
    allowed: "FormControl",
    type: "FormControl",
    default: "FormControl('')"
  }, {
    name: "selectTitle",
    allowed: "any string",
    type: "string",
    default: "Select"
  }, {
    name: "selectType",
    allowed: "control",
    type: "string",
    default: "control"
  }, {
    name: "enableSearch",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "options",
    allowed: "[{name: html, val: string}]",
    type: "array of objects",
    default: "[ ]"
  }];

  selector = "mg-select";

  title = "Select";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [{
    name: "value",
    type: "string"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Select");
  }

}
