import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-alert',
  templateUrl: './comp-alert.component.html',
  styleUrls: ['./comp-alert.component.css']
})
export class CompAlertComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "alignCenter",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "closeBtn",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }];

  selector = "mg-alert";

  title = "Alert";

  code = `<mg-alert theme="dark">This is a simple alert</mg-alert>`;

  optionsApplied = {
    theme: "dark"
  }

  outputOptions = [];


  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Alert");
  }

}
