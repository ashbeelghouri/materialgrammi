import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DaterService } from '../../dater.service';
import { DisabledRange } from '../../interfaces';
import { MaterialgrammiService } from '../../materialgrammi.service';
import { Theme } from '../../types';

@Component({
  selector: 'mg-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() abbreviation = false;
  @Input() bookEvents = false;
  @Input() theme: Theme = "primary";
  @Input() disabled: string[] = [];
  @Input() size = 1;
  @Input() disabledRange: DisabledRange = {
    before: false,
    after: false
  };
  // "31 January 2022"
  @Input() events: any = [{
    name: "Meeting with Ali",
    date: "17 January 2022 08:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buzz: true
  }, {
    name: "PUBG",
    date: "17 January 2022 10:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buzz: true
  }, {
    name: "PHP",
    date: "18 January 2022 10:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buzz: false
  }, {
    name: "Birthday Party",
    date: "20 February 2022 10:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buzz: true
  }];
  @Input() format = "dd-MM-yyyy";
  @Input() icons = {
    month: {
      next: `<i class="fas fa-angle-right"></i>`,
      previous: `<i class="fas fa-angle-left"></i>`
    },
    year: {
      next: `<i class="fas fa-angle-double-right"></i>`,
      previous: `<i class="fas fa-angle-double-left"></i>`
    }
  };
  @Input() controls = true;
  @Input() class = "";

  @Output() dayIsClicked = new EventEmitter();
  @Output() dayDrop = new EventEmitter();
  @Output() newEvent = new EventEmitter();

  months_long: any;
  months_short: any;

  months: any;

  weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

  days: any = [];
  toggleEvent = false;


  current: any = {}

  inView: any = {};

  toggleSelect: any = false;

  isHoveredWithData = "";

  id = "";

  activateNewEvent = false;

  clickedOn = "";

  bookEvent = {
    name: "",
    description: "",
    on: <any>{}
  };

  droppedData: any = {};

  dropOnDate: any = {};

  constructor(private dater: DaterService, private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.executeAll();
    this.id = this.service.makeid(4, "createNewEventOverlay");
  }

  ngOnChanges(): void {
    console.log("Disabled? ", this.disabledRange);
    this.executeAll();
  }

  executeAll() {
    this.initializeStates();
    this.updateDays(this.inView.year);
    this.formatEventDates();
  }

  initializeStates() {
    this.current = {
      month: this.dater.getMonth(),
      monthInWords: this.dater.getMonths(this.dater.getMonth()),
      date: this.dater.getDate(),
      year: this.dater.getYear(),
      dayInNum: this.dater.getDay(),
      weekDay: this.dater.getWeekDay(),
      hour: this.dater.getHour(),
      min: this.dater.getMinute(),
      sec: this.dater.getSeconds()
    };
    this.months_long = this.dater.getMonthsLong();
    this.months_short = this.dater.getMonths();

    this.months = this.abbreviation ? this.months_short : this.months_long;
    this.inView = {
      month: this.current.month,
      year: this.current.year
    };
  }

  formatEventDates() {
    for (let i = 0; i < this.events.length; i++) {
      this.events[i].dateObject = {
        date: this.dater.getDate(this.dater.dater(this.events[i].date)),
        month: this.dater.getMonth(this.dater.dater(this.events[i].date)),
        year: this.dater.getYear(this.dater.dater(this.events[i].date))
      };
    }
  }

  isDisabled(d: number, m: number, y: number) {
    for (let i = 0; i < this.disabled.length; i++) {
      let disabled_date = this.dater.dater(this.disabled[i]);
      if (d == this.dater.getDate(disabled_date) && (m - 1) == this.dater.getMonth(disabled_date) && y == this.dater.getYear(disabled_date)) {
        return true;
      }
    }

    return false;
  }

  pushDisabled(d: number, m: number, y: number) {
    let date = `${d} ${this.months[m - 1]} ${y}`;
    if (typeof this.disabledRange.after == "string" &&
      this.dater.isGreater(date, this.disabledRange.after) &&
      !this.disabled.includes(date)) {
      this.disabled.push(date);
    }
    if (typeof this.disabledRange.before == "string" &&
      this.dater.isLessThan(date, this.disabledRange.before) &&
      !this.disabled.includes(date)) {
      this.disabled.push(date);
    }
  }


  updateDays(year: number = this.current.year) {
    this.days = [];
    for (let i = 1; i < this.months.length + 1; i++) {
      let onMonth: any = {};
      let firstDate = this.dater.dater(`1-${this.months[i - 1]}-${year}`);
      onMonth.totalDays = this.dater.daysInMonth(i, year);
      onMonth.name = this.months[i - 1];
      onMonth.month = i;
      onMonth.dates = [];
      onMonth.startDay = this.dater.getDay(firstDate);

      for (let k = 0; k < onMonth.startDay; k++) {
        let myDaY = {
          num: 0,
          weekday: this.weekDays[k],
          weekDayNum: k,
          month: i,
          disabled: false
        };
        onMonth.dates.push(myDaY);

      }
      for (let j = 1; j <= onMonth.totalDays; j++) {
        this.pushDisabled(j, i, year);
        let mydate = this.dater.dater(`${j} ${this.months[i - 1]} ${year}`);
        let myDaY = {
          num: j,
          weekday: this.weekDays[this.dater.getDay(mydate)],
          weekDayNum: this.dater.getDay(mydate),
          month: i,
          disabled: this.isDisabled(j, i, year)
        };
        onMonth.dates.push(myDaY);
      }
      this.days.push(onMonth);
    }
  }

  isEvented(d: number, m: number, y: number) {
    let allEvents: any = [];
    for (let i = 0; i < this.events.length; i++) {
      if (d === this.events[i].dateObject.date && (m - 1) === this.events[i].dateObject.month && y === this.events[i].dateObject.year) {
        allEvents.push(this.events[i]);
      }
    }
    return allEvents.length > 0 ? allEvents : false;
  }

  doBuzz(eventDetails: any = []) {
    for (let i = 0; i < eventDetails.length; i++) {
      if (eventDetails[i].buzz) {
        return true;
      }
    }
    return false;
  }

  getSize() {
    if (this.size === 1) {
      return "padV-10";
    } else if (this.size === 2) {
      return "padV-20";
    } else if (this.size === 3) {
      return "padV-30";
    } else if (this.size === 4) {
      return "padV-40";
    } else {
      return "padV-50";
    }
  }

  dayClass(d: number, m: number, y: number, disabled = false) {
    let results = "";
    results += ` ${this.getSize()}`;
    results += this.dropzoneClass(d, m, y) ? " scale-3 shadow-3 outline-grey10" : "";
    results += d == 0 ? " day-disabled" : "";
    results += d == this.current.date && m - 1 == this.current.month && y == this.current.year ? " active-day" : "";
    let eventdetails = this.isEvented(d, m, y);
    results += !disabled && eventdetails ? " haveEvent" : "";
    results += !disabled && this.doBuzz(eventdetails) ? " buzz" : "";
    results += disabled ? " day-diabled" : "";
    return results;
  }



  nextMonth() {
    if (this.inView.month >= 11) {
      this.inView.month = 0;
      this.nextYear();
    } else {
      this.inView.month++;
    }
  }

  prevMonth() {
    if (this.inView.month <= 0) {
      this.inView.month = 11;
      this.prevYear();
    } else {
      this.inView.month--;
    }
  }



  nextYear() {
    this.inView.year++;
    this.updateDays(this.inView.year);
  }

  prevYear() {
    this.inView.year--;
    this.updateDays(this.inView.year);
  }



  clickOnDay(d: number, m: number, y: number, disabled = false) {
    if (!disabled) {
      let date = new Date(`${d} ${this.months[m - 1]} ${y}`);
      let dateTobeSent = this.dater.format(date, this.format);
      this.dayIsClicked.emit({
        date: d,
        month: m,
        year: y,
        dateFormatted: dateTobeSent
      });

      this.eventDetailsToggle(d, m, y);
      if (!this.toggleEvent) {
        if (this.bookEvents) {
          this.openNewEvent();
          this.bookEvent.on.date = d;
          this.bookEvent.on.month = m;
          this.bookEvent.on.year = y;
        }
        this.clickedOn = this.dater.format(date, "dd-MM-yyyy");
      }
    }
  }




  setBookEvent(event: any, type: string) {
    if (type == "name") {
      this.bookEvent.name = event.target.value;
    }
    if (type == "desc") {
      this.bookEvent.description = event.target.value;
    }
  }

  createNewEvent() {
    this.newEvent.emit(this.bookEvent);
    this.activateNewEvent = false;
  }


  openNewEvent() {
    this.activateNewEvent = true;
  }

  closeNewEvent() {
    this.activateNewEvent = false;
  }

  updateOnDay(event: any) {
    this.droppedData = event;
    this.dayDrop.emit({
      data: this.droppedData,
      dropon: this.dropOnDate
    });
  }

  handleDropZone(event: any, obj: any = {}) {
    if (event && !event.dropped && event.dragEntered) {
      this.isHoveredWithData = obj && obj.date && obj.month && obj.year ? `${obj.date}-${obj.month}-${obj.year}` : "";
    } else if (event && event.dragLeft) {
      this.isHoveredWithData = "";
    } else if (event.dropped) {
      this.isHoveredWithData = "";
      this.dropOnDate = obj;
    }
  }

  dropzoneClass(d: number, m: number, y: number) {
    if (`${d}-${m}-${y}` === this.isHoveredWithData) {
      return true;
    }
    return false;
  }

  eventDetailsToggle(d: number, m: number, y: number) {
    if ((!this.toggleSelect) || !(this.toggleSelect.date == d && this.toggleSelect.month == m && this.toggleSelect.year == y)) {
      let eventdetail = this.isEvented(d, m, y);
      this.toggleSelect = {
        date: d,
        month: m,
        year: y,
        data: eventdetail
      };
      if (eventdetail) {
        this.toggleEvent = true;
        this.toggleSelect.data = eventdetail;
      } else {
        this.toggleEvent = false;
      }
    }
  }

}
