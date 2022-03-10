import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-breadcrumb',
  templateUrl: './comp-breadcrumb.component.html',
  styleUrls: ['./comp-breadcrumb.component.css']
})
export class CompBreadcrumbComponent implements OnInit {
  inputOptions = [{
    name: "links",
    allowed: "[{name: string, url: string}]",
    type: "string",
    default: "[]"
  }, {
    name: "darkmode",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "devider",
    allowed: "any string",
    type: "string",
    default: "/"
  }];

  selector = "mg-breadcrumb";

  title = "Breadcrumb";

  code = `<mg-breadcrumb [links]="optionsApplied.links" [devider]="optionsApplied.devider"></mg-breadcrumb>`;

  optionsApplied = {
    links: [{
      name: "Home",
      url: "/home",
      active: true
    }, {
      name: "Next Link",
      url: "/next-link"
    }, {
      name: "3rd Link",
      url: "/third-link"
    }],
    devider: " * "
  }

  outputOptions = [];


  constructor() { }

  ngOnInit(): void {
  }

}
