import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-image',
  templateUrl: './comp-image.component.html',
  styleUrls: ['./comp-image.component.css']
})
export class CompImageComponent implements OnInit {
  inputOptions = [{
    name: "src",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "responsive",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "rounded",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "circled",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "shadowed",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "class",
    allowed: "css class",
    type: "string",
    default: ""
  }, {
    name: "filters",
    allowed: "{ blur: false | brightness: false | contrast: false | grayscale: false | invert: false | hue: false | opacity: false | saturate: false | sepia: false }",
    type: "object",
    default: " blur: false | brightness: false | contrast: false | grayscale: false | invert: false | hue: false | opacity: false | saturate: false | sepia: false }"
  }];

  selector = "mg-image";

  title = "Image";

  code = `<div class="row">
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <mg-image src="https://picsum.photos/300/300?random=1" [rounded]="true" [shadowed]="true" [filters]="optionsApplied.filters"></mg-image>
      </div>
  </div>
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <mg-image src="https://picsum.photos/300/300?random=2" [rounded]="true" [shadowed]="true" [filters]="optionsApplied.filters"></mg-image>
      </div>
  </div>
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <mg-image src="https://picsum.photos/300/300?random=3" [rounded]="true" [shadowed]="true" [filters]="optionsApplied.filters"></mg-image>
      </div>
  </div>`;

  optionsApplied = {
    filters: {
      brightness: 100,
      contrast: 120, 
      sepia: 10,
      hue: 30
    }
  }

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
