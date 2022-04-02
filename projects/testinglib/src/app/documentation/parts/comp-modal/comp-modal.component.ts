import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-modal',
  templateUrl: './comp-modal.component.html',
  styleUrls: ['./comp-modal.component.css']
})
export class CompModalComponent implements OnInit {
  inputOptions = [{
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "id",
    allowed: "string",
    type: "string",
    default: "0"
  }, {
    name: "position",
    allowed: "top | bottom",
    type: "boolean",
    default: "top"
  }, {
    name: "modalSize",
    allowed: "sm | md | lg",
    type: "boolean",
    default: "md"
  }, {
    name: "overlayClass",
    allowed: "any class for overlay",
    type: "string",
    default: "grey8"
  }];

  selector = "mg-modal";

  title = "Modal";
  code = `<mg-button taskType="modal" task="open" target="example-modal">Open Modal</mg-button>
  <mg-modal id="example-modal">
      <p class="grey3 pad-30">Hello world</p>
  </mg-modal>`;

  optionsApplied = {}

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Modal");
  }

}
