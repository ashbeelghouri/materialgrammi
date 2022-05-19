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
      default: "dark",
      definition: `This property implements the color scheme which includes background as well as text color.`
    }, {
      name: "searchOpt",
      allowed: "FormControl",
      type: "FormControl",
      default: "FormControl('')",
      definition: ``
    }, {
      name: "selectTitle",
      allowed: "any string",
      type: "string",
      default: "Select",
      definition: ``
    }, {
      name: "selectType",
      allowed: "control",
      type: "string",
      default: "control",
      definition: ``
    }, {
      name: "enableSearch",
      allowed: "true | false",
      type: "boolean",
      default: "false",
      definition: ``
    }, {
      name: "options",
      allowed: "[{name: html, val: string}]",
      type: "array of objects",
      default: "[ ]",
      definition: ``
    }],
    multiple: [{
      name: "theme",
      allowed: "primary | success | warning | danger | info | lite | dark",
      type: "string",
      default: "dark",
      definition: `This property implements the color scheme which includes background as well as text color.`
    }, {
      name: "options",
      allowed: "[{name: string, value: string}]",
      type: "array of objects",
      default: "[]",
      definition: ``
    }, {
      name: "title",
      allowed: "any string",
      type: "string",
      default: "multi select title",
      definition: ``
    }, {
      name: "placeholder",
      allowed: "any string",
      type: "string",
      default: "click here",
      definition: ``
    }, {
      name: "removeIcon",
      allowed: "html",
      type: "string",
      default: '<i class="fas fa-times"></i>',
      definition: ``
    }, {
      name: "allowDuplicates",
      allowed: "true | false",
      type: "boolean",
      default: "false",
      definition: ``
    }, {
      name: "viewType",
      allowed: "option | value",
      type: "string",
      default: "option",
      definition: ``
    }, {
      name: "enableSearch",
      allowed: "true | false",
      type: "boolean",
      default: "false",
      definition: ``
    }]
  };

  selector = {
    single: "mg-select",
    multiple: "mg-muliselect"
  };

  title = { 
    single: "Single Select",
    multiple: "Multi Select"
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
