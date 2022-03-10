import { Injectable } from '@angular/core';

export interface SplittedDate {
  date: number,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number
}


@Injectable({
  providedIn: 'root'
})
export class DaterService {
  now = new Date();

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  dateSplit?: SplittedDate;

  constructor() { }

  assign(dateString: string) {
    return new Date(dateString);
  }

  dater(dd: string | false = false){
    return !dd ? new Date() : new Date(dd);
  }

  getMonth(date: Date = this.dater()){
    return date.getMonth();
  }

  getDate(date: Date = this.dater()){
    return date.getDate();
  }

  getYear(date: Date = this.dater()){
    return date.getFullYear();
  }

  getDay(date: Date = this.dater()){
    return date.getDay();
  }

  getWeekDay(date: Date = this.dater()){
    return this.weekDays[date.getDay()];
  }

  getHour(date: Date = this.dater()){
    return date.getHours();
  }

  getMinute(date: Date = this.dater()){
    return date.getMinutes();
  }

  getSeconds(date: Date = this.dater()){
    return date.getSeconds();
  }

  format(date: Date, formatString: string) {
    let splitter:SplittedDate = this.splitDate(date);
    if(splitter && splitter.date !== undefined && splitter.day !== undefined 
      && splitter.hour !== undefined && splitter.minute !== undefined 
      && splitter.month !== undefined && splitter.second !== undefined && splitter.year !== undefined){
        formatString = formatString.split("dd").join(this.addZero(splitter.date, 1));
        formatString = formatString.split("d").join(`${splitter.date}`);
        formatString = formatString.split("MMMM").join(this.months[splitter.month] ? this.months[splitter.month] : "");
        formatString = formatString.split("MMM").join(this.firstDigits(this.months[splitter.month] ? this.months[splitter.month] : ""));
        formatString = formatString.split("MM").join(this.addZero(splitter.month+1, 1));
        formatString = formatString.split("M").join(`${splitter.month+1}`);
        formatString = formatString.split("YYYY").join(`${splitter.year}`);
        formatString = formatString.split("YY").join(this.firstDigits(`${splitter.year}`, 2));
        formatString = formatString.split("yyyy").join(`${splitter.year}`);
        formatString = formatString.split("yy").join(this.firstDigits(`${splitter.year}`, 2));
        formatString = formatString.split("DD").join(`${splitter.day}`);
        formatString = formatString.split("D").join(this.firstDigits(`${splitter.day}`, 3));
        formatString = formatString.split("HH").join(this.addZero(splitter.hour, 1));
        formatString = formatString.split("H").join(`${splitter.hour}`);
        formatString = formatString.split("hh").join(`${this.twelveHour(splitter.hour, true)}`);
        formatString = formatString.split("h").join(`${this.twelveHour(splitter.hour, false)}`);
        formatString = formatString.split("mm").join(this.addZero(splitter.minute, 1));
        formatString = formatString.split("m").join(`${splitter.minute}`);
        formatString = formatString.split("ss").join(this.addZero(splitter.second, 1));
        formatString = formatString.split("s").join(`${splitter.second}`);
        formatString = formatString.split("AP").join(this.getAp(splitter.hour));
        formatString = formatString.split("ap").join(this.getAp(splitter.hour, true));
        return formatString;
      }
    return ``;
  }

  twelveHour(dd: number, addZ = false) {
    let d: number = dd > 12 ? (dd - 12) : dd;
    return addZ ? this.addZero(d, 1) : d;
  }

  getAp(dd: number, sm = false) {
    let ap = {
      a: sm ? "am" : "AM",
      p: sm ? "pm" : "PM"
    };
    return dd > 12 ? ap.p : ap.a;
  }

  private firstDigits(str: string, num = 3) {
    let mystring = str.split("");
    let final = "";
    for (let i = 0; i < num; i++) {
      final += `${mystring[i]}`;
    }
    return final;
  }

  private addZero(d: number, numZ = 1) {
    let conc = ``;
    for (let i = 0; i < numZ; i++) {
      conc += `0`;
    }
    if (d < 10) {
      return conc + d;
    }
    return `${d}`;
  }

  initializeSplit () {
    return this.dateSplit = {
      date: 0,
      year: 0,
      month: 0, 
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    };
  }

  splitDate(date: Date) {
    this.dateSplit = this.initializeSplit();
    this.dateSplit.date = date.getDate();
    this.dateSplit.year = date.getFullYear();
    this.dateSplit.month = date.getMonth();
    this.dateSplit.day = date.getDay();
    this.dateSplit.hour = date.getHours();
    this.dateSplit.minute = date.getMinutes();
    this.dateSplit.second = date.getSeconds();
    return this.dateSplit;
  }

  getMonths(month: number | false = false) {
    if(month == false) {
      let mo = this.months.map(m => {
        return m.slice(0, 3);
      });
      return mo;
    }else {
      return this.months[month].slice(0, 3);
    }
    
  }

  getMonthsLong(month: number | false = false) { 
    return month ? this.months[month] : this.months;
  }

  daysInMonth(month: number, year:number = this.getYear(this.dater())) {
    let dd = this.splitDate(this.dater(`${this.months[month-1]} 01, ${year}`));
    return new Date(dd.year, dd.month + 1, 0).getDate();
  }

  isGreater(date1: string, date2: string){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return d1.getTime() > d2.getTime(); 
  }

  isLessThan(date1: string, date2: string){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return d1.getTime() < d2.getTime(); 
  }
}
