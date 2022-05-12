import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-select',
  templateUrl: './comp-select.component.html',
  styleUrls: ['./comp-select.component.css']
})
export class CompSelectComponent implements OnInit {

  inputOptions = {
    single: [{
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
    }],
    multiple: [{
      name: "theme",
      allowed: "primary | success | warning | danger | info | lite | dark",
      type: "string",
      default: "dark"
    }, {
      name: "options",
      allowed: "[{name: string, value: string}]",
      type: "array of objects",
      default: "[]"
    }, {
      name: "title",
      allowed: "any string",
      type: "string",
      default: "multi select title"
    }, {
      name: "placeholder",
      allowed: "any string",
      type: "string",
      default: "click here"
    }, {
      name: "removeIcon",
      allowed: "html",
      type: "string",
      default: '<i class="fas fa-times"></i>'
    }, {
      name: "allowDuplicates",
      allowed: "true | false",
      type: "boolean",
      default: "false"
    }, {
      name: "viewType",
      allowed: "option | value",
      type: "string",
      default: "option"
    }, {
      name: "enableSearch",
      allowed: "true | false",
      type: "boolean",
      default: "false"
    }]
  };

  selector = {
    single: "mg-select",
    multiple: "mg-muliselect"
  };

  title = { 
    single: "Select",
    multiple: "Multi-Select"
  };
  code = {
    single: `<mg-select  [enableSearch]="true" theme="primary"></mg-select>`,
    multiple: `<mg-muliselect></mg-muliselect>`
  };

  optionsApplied = { 
    single: {},
    multiple: {} 
  }

  outputOptions = {
    single: [{
      name: "value",
      type: "string"
    }],
    multiple: [{
      name: "data",
      type: "object"
    }]
  };

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Select");
  }

}
