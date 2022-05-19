import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-calendar',
  templateUrl: './comp-calendar.component.html',
  styleUrls: ['./comp-calendar.component.css']
})
export class CompCalendarComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "abbreviations",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "disabledDates",
    allowed: "['date string here']",
    type: "array of strings",
    default: "[]",
    definition: ``
  }, {
    name: "events",
    allowed: "[{name: string, date: string, description: string, buzz: string}]",
    type: "array of objects",
    default: "[]",
    definition: ``
  }, {
    name: "icons",
    allowed: "{month: {next: 'string', previous: 'string'}, year: {next: 'string', previous: 'string'}}",
    type: "object",
    default: "",
    definition: ``
  }];

  selector = "mg-calendar";

  title = "Calendar";

  code = `<mg-calendar [events]="optionsApplied.events" [theme]="optionsApplied.theme" [disabled]="optionsApplied.disabled" ></mg-calendar>`;

  events = [{
    name: "Simple Event in Feb",
    date: "15 Feb 2022 10:00 AM",
    description: "Simple Event in feb",
    buzz: false
  }, {
    name: "Simple Event in Feb",
    date: "16 Feb 2022 10:00 AM",
    description: "Simple Event in feb",
    buzz: true
  }, {
    name: "Material Grammi Launch",
    date: "15 March 2022 10:00 AM",
    description: "We plan to launch materialgrammi officially on 15 March 2022",
    buzz: true
  }];

  disabledDates = ["18 Februrary 2022"];

  optionsApplied = {
    events: JSON.parse(JSON.stringify(this.events)),
    theme: "primary",
    disabled: JSON.parse(JSON.stringify(this.disabledDates)),
    bookEvents: true
  }

  outputOptions = [{
    name: "dayIsClicked",
    type: "{date: number, month: number, year: year, dateFormatted: string}"
  }, {
    name: "dayDrop",
    type: "{data: (data dropped into), dropon: {date: number, month: number, year: number} }"
  }, {
    name: "newEvent",
    type: "{ name: 'string', description: 'string', on: {date: number, month:number, year:number}"
  }];

  
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Calendar");
  }

}
