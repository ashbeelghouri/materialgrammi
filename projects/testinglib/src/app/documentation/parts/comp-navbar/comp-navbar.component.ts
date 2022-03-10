import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-navbar',
  templateUrl: './comp-navbar.component.html',
  styleUrls: ['./comp-navbar.component.css']
})
export class CompNavbarComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "spaceAround",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "onSmallMenuButton",
    allowed: "html",
    type: "string",
    default: "="
  }, {
    name: "isFixed",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "partitionType",
    allowed: "1:1 | 1:2 | 2:1",
    type: "string",
    default: "2:1"
  }, {
    name: "navData",
    allowed: "{brand: {name: html, link: string} , left: {navType: input | links, data: {if input(btn: boolean, name: html, placeholder: string, id: string) | if links(name: html, link: string, active: boolean | type: dropdown -> links: [links])}}} - same for the right",
    type: "object",
    default: "{}"
  }];

  selector = "mg-navbar";

  title = "Navbar";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [{
    name: "searchedText",
    type: "string"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
