import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-sidebar',
  templateUrl: './comp-sidebar.component.html',
  styleUrls: ['./comp-sidebar.component.css']
})
export class CompSidebarComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "alignCenter",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }];

  selector = "mg-sidebar";

  title = "Sidebar";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
