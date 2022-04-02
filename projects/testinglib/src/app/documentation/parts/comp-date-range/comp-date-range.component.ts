import { Component, OnInit } from '@angular/core';
import { RangeSelected } from 'projects/materialgrammi/src/lib/interfaces';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-date-range',
  templateUrl: './comp-date-range.component.html',
  styleUrls: ['./comp-date-range.component.css']
})
export class CompDateRangeComponent implements OnInit {
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

  selector = "mg-date-range";

  title = "Date Range";

  selected: RangeSelected = {
    startdate: false,
    enddate: false
  };

  selectRange(event: RangeSelected){
    this.selected = event;
  }

  code = `<mg-daterange (range)="selectRange($event)"></mg-daterange>
  <p class="font-20 padV-20" *ngIf="selected.startdate && selected.enddate">Dates Selected are from {{selected.startdate}} to {{selected.enddate}}</p>
  
  selectRange(event: RangeSelected){
    this.selected = event;
  }
  
  `;

  outputOptions = [{
    name: "range",
    type: "{startdate: string, enddate: string}"
  }];


  optionsApplied = {
    till: "27 February 2022 10:20 AM",
    selected: this.selected,
    selectRange: this.selectRange
  }

  
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Date Range");
  }

}
