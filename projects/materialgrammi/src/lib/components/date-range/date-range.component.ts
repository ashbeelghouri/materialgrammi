import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RangeSelected } from '../../interfaces';

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
  @Input() labels = {
    start: "start date",
    end: "end date"
  };

  @Input() style = {
    input: {
      theme: "primary",
      style: "control",
      darkmode: false,
      class: ""
    },
    calendar: {
      disabled: [],
      theme: "success"
    }
  };

  @Input() class = "";

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
    this.initInput();
  }

  ngOnChanges(): void {
      this.initInput();
  }

  initInput(){
    this.formattedInput = {
      one: {
        ...this.style.input
      },
      two: {
        ...this.style.input
      }
    };
    this.formattedInput.one.control = new FormControl();
    this.formattedInput.two.control = new FormControl();
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
