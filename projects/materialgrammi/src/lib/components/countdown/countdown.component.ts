import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'mg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements AfterContentInit {
  @Input() till = "25 December 2050";
  @Input() expiredText = "expired";
  @Input() parseProperties = {
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes",
    second: "second",
    seconds: "seconds"
  };
  @Input() class = "";

  @Output() timeover = new EventEmitter(false);

  endDate = new Date();

  display = "";


  constructor() { }

  ngAfterContentInit(): void {
    this.endDate = new Date(this.till);  
    this.count();
  }

  count() {
    var _this = this;
    var x = setInterval(function () {
      var dateNow = new Date();
      var now = new Date().getTime();
      var distance = _this.endDate.getTime() - now;

      var days = _this.getDays();
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      _this.display = "<span class='countdown-days'>" + days + " " + _this.updateDisplay(days, "d") + "</span><span class='countdown-hours'> " + hours + " " + _this.updateDisplay(hours, "h") + " </span><span class='countdown-minutes'>"
        + minutes + " " + _this.updateDisplay(minutes, "m") + "</span><span class='countdown-seconds'> " + seconds + " " + _this.updateDisplay(seconds, "s") + "</span>";
      if (distance < 0) {
        clearInterval(x);
        _this.display = _this.expiredText;
      }
    }, 1000);
  }

  getDays() {
    // One day Time in ms (milliseconds)
    var one_day = 1000 * 60 * 60 * 24

    // To set present_dates to two variables
    var present_date = new Date();

    // 0-11 is Month in JavaScript
    var christmas_day = this.endDate;

    // To Calculate next year's Christmas if passed already.
    if (present_date.getMonth() == 11 && present_date.getDate() > 25)
      christmas_day.setFullYear(christmas_day.getFullYear() + 1)

    // To Calculate the result in milliseconds and then converting into days
    var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);

    // To remove the decimals from the (Result) resulting days value
    return parseInt((Result).toFixed(0));
  }

  updateDisplay(amount: number, unit: string = "d") {
    if (unit == "d") {
      return amount > 1 ? this.parseProperties.days : this.parseProperties.day;
    }
    if (unit == "h") {
      return amount > 1 ? this.parseProperties.hours : this.parseProperties.hour;
    }
    if (unit == "m") {
      return amount > 1 ? this.parseProperties.minutes : this.parseProperties.minute;
    }
    if (unit == "s") {
      return amount > 1 ? this.parseProperties.seconds : this.parseProperties.second;
    }
    return "";
  }


}
