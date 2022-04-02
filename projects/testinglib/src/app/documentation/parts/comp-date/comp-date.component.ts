import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-date',
  templateUrl: './comp-date.component.html',
  styleUrls: ['./comp-date.component.css']
})
export class CompDateComponent implements OnInit {
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

  selector = "mg-date";

  title = "Date";

  code = `<mg-countdown [till]="optionsApplied.till"></mg-countdown>`;

  optionsApplied = {
    till: "27 February 2022 10:20 AM"
  }

  outputOptions = [{
    name: "getdate",
    type: "string"
  }];

  
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Date");
  }

}
