import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-button',
  templateUrl: './comp-button.component.html',
  styleUrls: ['./comp-button.component.css']
})
export class CompButtonComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "default",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "taskType",
    allowed: "link | modal | offCanvas | slideShow | wizard | collapse | overlay | slideshowV2",
    type: "string",
    default: "none",
    definition: ``
  }, {
    name: "btnStyle",
    allowed: "solid | outline",
    type: "string",
    default: "solid",
    definition: ``
  }, {
    name: "task",
    allowed: "open | close",
    type: "string",
    default: "open",
    definition: ``
  }, {
    name: "target",
    allowed: "/",
    type: "string",
    default: "/",
    definition: ``
  }, {
    name: "class",
    allowed: "css classes",
    type: "string",
    default: "",
    definition: ``
  }, {
    name: "btnSize",
    allowed: "sm | md | lg",
    type: "string",
    default: "md",
    definition: ``
  }, {
    name: "isBlock",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "round",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "allowMargin",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "allowShrink",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "options",
    allowed: "",
    type: "boolean",
    default: "{}",
    definition: ``
  }, {
    name: "isExtended",
    allowed: "true | false",
    type: "boolean",
    default: "open",
    definition: ``
  }, {
    name: "newTab",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }];

  selector = "mg-button";

  title = "Button";

  outputOptions = [{
    name: "clicked",
    type: "boolean"
  }, {
    name: "active",
    type: "boolean"
  }];

  code = `<h4>Solid</h4>
  <div class="padY-10">
      <mg-button theme="primary">Primary button</mg-button>
      <mg-button theme="success">Success button</mg-button>
      <mg-button theme="danger">Danger button</mg-button>
      <mg-button theme="warning">Warning button</mg-button>
      <mg-button theme="lite">Lite button</mg-button>
      <mg-button theme="dark">Dark button</mg-button>
  </div>
  <div class="padY-10">
      <mg-button btnStyle="outline" theme="primary">Primary button</mg-button>
      <mg-button btnStyle="outline" theme="success">Success button</mg-button>
      <mg-button btnStyle="outline" theme="danger">Danger button</mg-button>
      <mg-button btnStyle="outline" theme="warning">Warning button</mg-button>
      <mg-button btnStyle="outline" theme="lite">Lite button</mg-button>
      <mg-button btnStyle="outline" theme="dark">Dark button</mg-button>
  </div>
  <div class="padY-10">
      <mg-button btnStyle="link" theme="primary">Primary button</mg-button>
      <mg-button btnStyle="link" theme="success">Success button</mg-button>
      <mg-button btnStyle="link" theme="danger">Danger button</mg-button>
      <mg-button btnStyle="link" theme="warning">Warning button</mg-button>
      <mg-button btnStyle="link" theme="lite">Lite button</mg-button>
      <mg-button btnStyle="link" theme="dark">Dark button</mg-button>
  </div>`;
  optionsApplied = {}
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Button");
  }

}
