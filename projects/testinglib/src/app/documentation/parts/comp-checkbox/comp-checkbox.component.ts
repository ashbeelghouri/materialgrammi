import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-checkbox',
  templateUrl: './comp-checkbox.component.html',
  styleUrls: ['./comp-checkbox.component.css']
})
export class CompCheckboxComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "size",
    allowed: "s | m | l | xl",
    type: "string",
    default: "m",
    definition: ``
  }, {
    name: "onDark",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "isSelected",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }];

  selector = "mg-checkbox";

  title = "Checkbox";

  code = `<mg-checkbox size="s" theme = "primary" [isSelected]="true">Small</mg-checkbox>`;

  optionsApplied = {}

  outputOptions = [{
    name: "isChecked",
    type: "boolean"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Checkbox");
  }

}
