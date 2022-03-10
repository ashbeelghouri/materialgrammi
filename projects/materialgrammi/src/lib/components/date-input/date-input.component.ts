import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalendarForDateInput, DisabledRange } from '../../interfaces';

@Component({
  selector: 'mg-date',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit, OnChanges {
  @Input() input = {
    theme: "success",
    style: "control",
    control: new FormControl(''),
    darkmode: false,
    class: ""
  };

  @Input() label = "Select Date";

  @Input() class = "";

  @Input() calendar: CalendarForDateInput = {
    disabled: [],
    theme: "success",
    abbreviation: true
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
  textValue = "";
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
      this.textValue = event.dateFormatted;
      this.getdate.emit(this.textValue);
    }
  }

}
