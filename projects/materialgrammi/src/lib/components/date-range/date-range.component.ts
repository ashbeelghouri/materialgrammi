import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RangeSelected } from '../../interfaces';
import { InputStyle, Theme } from '../../types';

export interface DisabledRange {
  before: false | string | Date,
  after: false | string | Date
}

@Component({
  selector: 'mg-daterange',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit, OnChanges {

  @Input() dark = false;

  @Input() labels = {
    start: "start date",
    end: "end date"
  };

  @Input() startTheme: Theme = "primary";
  @Input() startStyle: InputStyle = "control";
  @Input() startClass = "";

  @Input() endTheme: Theme = "primary";
  @Input() endStyle: InputStyle = "control";
  @Input() endClass = "";

  @Input() info = {
    type: "success",
    msg: ""
  };

  formattedInput?:any;


  disable_range_start: DisabledRange = {
    before: false,
    after: false
  };

  disable_range_end: DisabledRange = {
    before: false,
    after: false
  };

  selected: RangeSelected = {
    startdate: false,
    enddate: false
  }

  @Output() range = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  selectedStartDate(event: any){
    this.disable_range_end.before = event;
    this.selected.startdate = event;
    this.range.emit(this.selected);
  }

  selectedEndDate(event: any){
    this.disable_range_start.after = event;
    this.selected.enddate = event;
    this.range.emit(this.selected);
  }

}
