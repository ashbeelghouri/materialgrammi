import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-pagination',
  templateUrl: './comp-pagination.component.html',
  styleUrls: ['./comp-pagination.component.css']
})
export class CompPaginationComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "data",
    allowed: "[any object]",
    type: "array of objects",
    default: "[ ]"
  }, {
    name: "fullDataMode",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "perPage",
    allowed: "number",
    type: "number",
    default: "10"
  }, {
    name: "currentPage",
    allowed: "number",
    type: "number",
    default: "1"
  }, {
    name: "icons",
    allowed: "{next: html, previous: html}",
    type: "object",
    default: ""
  }];

  selector = "mg-pagination";

  title = "Pagination";
  code = `<mg-pagination [data]="optionsApplied.data" [perPage]="5" [currentPage]="1"></mg-pagination>`;

  optionsApplied = {
    data: [{
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }, {
      name: "Material grammi"
    }]
  }

  outputOptions = [{
    name: "page",
    type: "number"
  }, {
    name: "data",
    type: "any"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
