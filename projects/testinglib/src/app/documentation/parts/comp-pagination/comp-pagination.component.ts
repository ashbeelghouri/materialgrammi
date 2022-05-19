import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

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
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "data",
    allowed: "[any object]",
    type: "array of objects",
    default: "[ ]",
    definition: ``
  }, {
    name: "fullDataMode",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "perPage",
    allowed: "number",
    type: "number",
    default: "10",
    definition: ``
  }, {
    name: "currentPage",
    allowed: "number",
    type: "number",
    default: "1",
    definition: ``
  }, {
    name: "icons",
    allowed: "{next: html, previous: html}",
    type: "object",
    default: "",
    definition: ``
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

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Pagination");
  }

}
