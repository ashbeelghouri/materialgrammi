import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-cowntdown',
  templateUrl: './comp-cowntdown.component.html',
  styleUrls: ['./comp-cowntdown.component.css']
})
export class CompCowntdownComponent implements OnInit {
  inputOptions = [{
    name: "till",
    allowed: "any date string compatible with JS date object",
    type: "string",
    default: "25 December 2050",
    definition: ``
  }, {
    name: "expiredText",
    allowed: "string",
    type: "string",
    default: "expired",
    definition: ``
  }, {
    name: "parseProperties",
    allowed: "{day: string, days: string, hour: string, hours: string, minute: string, minutes: string, second: string, seconds: string}",
    type: "string",
    default: "",
    definition: ``
  }];

  selector = "mg-countdown";

  title = "Countdown";
  code = `<mg-countdown [till]="optionsApplied.till"></mg-countdown>`;

  optionsApplied = {
    till: "27 December 2022 10:20 AM"
  }

  outputOptions = [{
    name: "timeover",
    type: "boolean"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Countdown");
  }

}
