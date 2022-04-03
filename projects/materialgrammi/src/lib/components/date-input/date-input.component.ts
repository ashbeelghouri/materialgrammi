import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalendarForDateInput, DisabledRange } from '../../interfaces';
import { InputStyle, Theme } from '../../types';

@Component({
  selector: 'mg-date',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit, OnChanges {

  @Input() theme: Theme = "primary";
  @Input() style: InputStyle = "control";
  @Input() control: FormControl = new FormControl('');
  @Input() dark: boolean = false;

  @Input() class = "";

  @Input() calendar: CalendarForDateInput = {
    disabled: [],
    theme: "success",
    abbreviation: true
  };

  @Input() info = {
    type: "success",
    msg: ""
  };

  

  @Input() disabledRange: DisabledRange = {
    before: false, 
    after: false
  };

  @Input() icons = {
    close: `<i class="fas fa-times"></i>`
  };

  @Input() format = "dd-MM-yyyy";

  @Output() getdate = new EventEmitter<String>();

  active = false;
  value = "";
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  calendarClass() {
    let classes = "";
    classes += this.active ? "active" : "";
    return classes;
  }

  inputFocused(event: any) {
    if (event) {
      this.active = event;
    } else {
      let $this = this;
      setTimeout(function () {
        $this.active = event;
      }, 100);
    }
  }

  dateSelected(event: any) {
    if (event && event.dateFormatted) {
      this.value = event.dateFormatted;
      this.getdate.emit(this.value);
    }
  }

}
