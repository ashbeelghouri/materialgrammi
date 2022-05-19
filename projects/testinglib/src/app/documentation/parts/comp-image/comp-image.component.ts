import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-image',
  templateUrl: './comp-image.component.html',
  styleUrls: ['./comp-image.component.css']
})
export class CompImageComponent implements OnInit {
  inputOptions = [{
    name: "src",
    allowed: "address of image",
    type: "string",
    default: "dark",
    definition: ``
  }, {
    name: "responsive",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "rounded",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "circled",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "shadowed",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "class",
    allowed: "css class",
    type: "string",
    default: "",
    definition: ``
  }, {
    name: "lazyLoad",
    allowed: "boolean",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "applyFilters",
    allowed: "boolean",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "lazyLoad",
    allowed: "boolean",
    type: "boolean",
    default: "true"
  }, {
    name: "applyFilters",
    allowed: "boolean",
    type: "boolean",
    default: "true"
  }, {
    name: "filters",
    allowed: "{ blur: false | brightness: false | contrast: false | grayscale: false | invert: false | hue: false | opacity: false | saturate: false | sepia: false }",
    type: "object",
    default: " blur: false | brightness: false | contrast: false | grayscale: false | invert: false | hue: false | opacity: false | saturate: false | sepia: false }",
    definition: ``
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
      brightness: 90,
      contrast: 110, 
      sepia: 10,
      hue: 10
    }
  }

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Image");
  }

}
