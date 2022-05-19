import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

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
    default: "",
    definition: ``
  }, {
    name: "parent",
    allowed: "string",
    type: "string",
    default: "general-parent-1",
    definition: ``
  }, {
    name: "type",
    allowed: "general",
    type: "string ",
    default: "general",
    definition: ``
  }, {
    name: "options",
    allowed: "any",
    type: "any",
    default: "false",
    definition: ``
  }, {
    name: "status",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "standalone",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
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

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Widget");
  }

}
