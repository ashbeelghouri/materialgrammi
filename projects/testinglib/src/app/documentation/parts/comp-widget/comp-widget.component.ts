import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-widget',
  templateUrl: './comp-widget.component.html',
  styleUrls: ['./comp-widget.component.css']
})
export class CompWidgetComponent implements OnInit {
  inputOptions = [{
    name: "id",
    allowed: "string",
    type: "string",
    default: ""
  }, {
    name: "parent",
    allowed: "string",
    type: "string",
    default: "general-parent-1"
  }, {
    name: "type",
    allowed: "general",
    type: "string ",
    default: "general"
  }, {
    name: "options",
    allowed: "any",
    type: "any",
    default: "false"
  }, {
    name: "status",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "standalone",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }];

  selector = "mg-widget";

  title = "Widget";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [{
    name: "triggered",
    value: "{ status: boolean, options: object }"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
