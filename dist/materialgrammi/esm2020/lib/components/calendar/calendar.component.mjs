import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../dater.service";
import * as i2 from "../../materialgrammi.service";
import * as i3 from "@angular/common";
import * as i4 from "../overlay/overlay.component";
import * as i5 from "../input/input.component";
import * as i6 from "../text-input/text-input.component";
import * as i7 from "../button/button.component";
import * as i8 from "../dropable/dropable.component";
import * as i9 from "../dragable/dragable.component";
function CalendarComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelementStart(2, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.prevYear(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelementStart(4, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.prevMonth(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 24);
    i0.ɵɵelementStart(6, "span", 25);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 26);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 27);
    i0.ɵɵelementStart(11, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_11_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.nextMonth(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 28);
    i0.ɵɵelementStart(13, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.nextYear(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.year.previous, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.month.previous, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(month_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.inView.year);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.month.next, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.year.next, i0.ɵɵsanitizeHtml);
} }
function CalendarComponent_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const wkday_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(wkday_r13);
} }
function CalendarComponent_div_2_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarComponent_div_2_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const d_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(d_r14.num);
} }
function CalendarComponent_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mg-dropable", 29);
    i0.ɵɵlistener("dataRecieved", function CalendarComponent_div_2_ng_container_5_Template_mg_dropable_dataRecieved_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.updateOnDay($event); })("onEvent", function CalendarComponent_div_2_ng_container_5_Template_mg_dropable_onEvent_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.handleDropZone($event, { date: d_r14.num, month: d_r14.month, year: ctx_r20.inView.year }); });
    i0.ɵɵelementStart(2, "div", 30);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_ng_container_5_Template_div_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.clickOnDay(d_r14.num, d_r14.month, ctx_r21.inView.year, d_r14.disabled); });
    i0.ɵɵtemplate(3, CalendarComponent_div_2_ng_container_5_ng_container_3_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(4, CalendarComponent_div_2_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r6.dayClass(d_r14.num, d_r14.month, ctx_r6.inView.year, d_r14.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r14.num == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r14.num != 0);
} }
function CalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CalendarComponent_div_2_div_1_Template, 14, 6, "div", 16);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵtemplate(3, CalendarComponent_div_2_p_3_Template, 2, 1, "p", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 19);
    i0.ɵɵtemplate(5, CalendarComponent_div_2_ng_container_5_Template, 5, 3, "ng-container", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i_r3 == ctx_r0.inView.month ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.controls);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.weekDays);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.days[i_r3].dates);
} }
function CalendarComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵelementStart(2, "mg-dragable", 32);
    i0.ɵɵelement(3, "div", 33);
    i0.ɵɵelement(4, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const eventData_r23 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("draggable", true)("data", eventData_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", eventData_r23.name, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", eventData_r23.date, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", eventData_r23.description, i0.ɵɵsanitizeHtml);
} }
function CalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CalendarComponent_ng_container_4_ng_container_1_Template, 6, 5, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.toggleSelect.data);
} }
export class CalendarComponent {
    constructor(dater, service) {
        this.dater = dater;
        this.service = service;
        this.abbreviation = false;
        this.bookEvents = false;
        this.theme = "dark";
        this.disabled = [];
        this.size = 1;
        this.disabledRange = {
            before: false,
            after: false
        };
        // "31 January 2022"
        this.events = [{
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
        this.format = "dd-MM-yyyy";
        this.icons = {
            month: {
                next: `<i class="fas fa-angle-right"></i>`,
                previous: `<i class="fas fa-angle-left"></i>`
            },
            year: {
                next: `<i class="fas fa-angle-double-right"></i>`,
                previous: `<i class="fas fa-angle-double-left"></i>`
            }
        };
        this.controls = true;
        this.class = "";
        this.dayIsClicked = new EventEmitter();
        this.dayDrop = new EventEmitter();
        this.newEvent = new EventEmitter();
        this.weekDays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        this.days = [];
        this.toggleEvent = false;
        this.current = {};
        this.inView = {};
        this.toggleSelect = false;
        this.isHoveredWithData = "";
        this.id = "";
        this.activateNewEvent = false;
        this.clickedOn = "";
        this.bookEvent = {
            name: "",
            description: "",
            on: {}
        };
        this.droppedData = {};
        this.dropOnDate = {};
    }
    ngOnInit() {
        this.executeAll();
        this.id = this.service.makeid(4, "createNewEventOverlay");
    }
    ngOnChanges() {
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
    isDisabled(d, m, y) {
        for (let i = 0; i < this.disabled.length; i++) {
            let disabled_date = this.dater.dater(this.disabled[i]);
            if (d == this.dater.getDate(disabled_date) && (m - 1) == this.dater.getMonth(disabled_date) && y == this.dater.getYear(disabled_date)) {
                return true;
            }
        }
        return false;
    }
    pushDisabled(d, m, y) {
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
    updateDays(year = this.current.year) {
        this.days = [];
        for (let i = 1; i < this.months.length + 1; i++) {
            let onMonth = {};
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
    isEvented(d, m, y) {
        let allEvents = [];
        for (let i = 0; i < this.events.length; i++) {
            if (d === this.events[i].dateObject.date && (m - 1) === this.events[i].dateObject.month && y === this.events[i].dateObject.year) {
                allEvents.push(this.events[i]);
            }
        }
        return allEvents.length > 0 ? allEvents : false;
    }
    doBuzz(eventDetails = []) {
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
        }
        else if (this.size === 2) {
            return "padV-20";
        }
        else if (this.size === 3) {
            return "padV-30";
        }
        else if (this.size === 4) {
            return "padV-40";
        }
        else {
            return "padV-50";
        }
    }
    dayClass(d, m, y, disabled = false) {
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
        }
        else {
            this.inView.month++;
        }
    }
    prevMonth() {
        if (this.inView.month <= 0) {
            this.inView.month = 11;
            this.prevYear();
        }
        else {
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
    clickOnDay(d, m, y, disabled = false) {
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
    setBookEvent(event, type) {
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
    updateOnDay(event) {
        this.droppedData = event;
        this.dayDrop.emit({
            data: this.droppedData,
            dropon: this.dropOnDate
        });
    }
    handleDropZone(event, obj = {}) {
        if (event && !event.dropped && event.dragEntered) {
            this.isHoveredWithData = obj && obj.date && obj.month && obj.year ? `${obj.date}-${obj.month}-${obj.year}` : "";
        }
        else if (event && event.dragLeft) {
            this.isHoveredWithData = "";
        }
        else if (event.dropped) {
            this.isHoveredWithData = "";
            this.dropOnDate = obj;
        }
    }
    dropzoneClass(d, m, y) {
        if (`${d}-${m}-${y}` === this.isHoveredWithData) {
            return true;
        }
        return false;
    }
    eventDetailsToggle(d, m, y) {
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
            }
            else {
                this.toggleEvent = false;
            }
        }
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(i0.ɵɵdirectiveInject(i1.DaterService), i0.ɵɵdirectiveInject(i2.MaterialgrammiService)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["mg-calendar"]], inputs: { abbreviation: "abbreviation", bookEvents: "bookEvents", theme: "theme", disabled: "disabled", size: "size", disabledRange: "disabledRange", events: "events", format: "format", icons: "icons", controls: "controls", class: "class" }, outputs: { dayIsClicked: "dayIsClicked", dayDrop: "dayDrop", newEvent: "newEvent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 19, vars: 6, consts: [[1, "calendar", 3, "ngClass"], [1, "month-wrapper"], ["class", "month", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "event-details"], [4, "ngIf"], ["bgClass", "grey2", "canvasPosition", "bottom", "offSize", "2", 3, "id", "active", "isClosed"], [1, "pad-10"], [1, "text-grey8", "marginV-15"], [1, "font-15", "text-red8"], [1, "row", "col", "m12", "l12", "s12"], ["label", "Event Name", "fStyle", "material", 1, "marginT-5", 3, "keyup"], ["label", "Event Description", "fStyle", "material", 1, "margin-5", 3, "keyup"], [1, "col", "m12", "l12", "s12", "text-right"], ["theme", "success", 3, "click"], [1, "fas", "fa-angle-double-right"], [1, "month", 3, "ngClass"], ["class", "calendar-info", 4, "ngIf"], [1, "weekdays"], [4, "ngFor", "ngForOf"], [1, "month-days"], [1, "calendar-info"], [1, "previous-year"], [3, "innerHtml", "click"], [1, "previous-month"], [1, "month-name"], [1, "monthSpan"], [1, "yearName"], [1, "next-month"], [1, "next-year"], [3, "dataRecieved", "onEvent"], [1, "day", 3, "ngClass", "click"], [1, "event-info-wrapper"], [3, "draggable", "data"], [1, "event-detail-title", 3, "innerHtml"], [1, "event-detail-date", 3, "innerHtml"], [1, "event-detail-description", 3, "innerHtml"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CalendarComponent_div_2_Template, 6, 4, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CalendarComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mg-overlay", 5);
        i0.ɵɵlistener("isClosed", function CalendarComponent_Template_mg_overlay_isClosed_5_listener() { return ctx.closeNewEvent(); });
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelementStart(7, "h2", 7);
        i0.ɵɵtext(8, "Book an event on ");
        i0.ɵɵelementStart(9, "small", 8);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵelementStart(12, "mg-input", 10);
        i0.ɵɵlistener("keyup", function CalendarComponent_Template_mg_input_keyup_12_listener($event) { return ctx.setBookEvent($event, "name"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelementStart(14, "mg-text", 11);
        i0.ɵɵlistener("keyup", function CalendarComponent_Template_mg_text_keyup_14_listener($event) { return ctx.setBookEvent($event, "desc"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 12);
        i0.ɵɵelementStart(16, "mg-button", 13);
        i0.ɵɵlistener("click", function CalendarComponent_Template_mg_button_click_16_listener() { return ctx.createNewEvent(); });
        i0.ɵɵtext(17, "Book an event ");
        i0.ɵɵelement(18, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", (ctx.toggleEvent == true ? ctx.theme + " activatedEvent" : ctx.theme) + " " + ctx.class);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.months);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.toggleSelect.data);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id)("active", ctx.activateNewEvent);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.clickedOn);
    } }, directives: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.OverlayComponent, i5.InputComponent, i6.TextInputComponent, i7.ButtonComponent, i8.DropableComponent, i9.DragableComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarComponent, [{
        type: Component,
        args: [{ selector: 'mg-calendar', template: "<div class=\"calendar\" [ngClass]=\"(toggleEvent == true ? theme + ' activatedEvent' : theme) + ' ' + class\">\n    <div class=\"month-wrapper\">\n      <div class=\"month\" *ngFor=\"let month of months; let i = index\" [ngClass]=\"i == inView.month ? 'active': ''\">\n        <div class=\"calendar-info\" *ngIf=\"controls\">\n          <div class=\"previous-year\">\n            <a (click)=\"prevYear()\" [innerHtml]=\"icons.year.previous\"></a>\n          </div>\n          <div class=\"previous-month\">\n            <a (click)=\"prevMonth()\" [innerHtml]=\"icons.month.previous\"></a>\n          </div>\n          <div class=\"month-name\">\n            <span class=\"monthSpan\">{{month}}</span><span class=\"yearName\">{{inView.year}}</span>\n          </div>\n          <div class=\"next-month\">\n            <a (click)=\"nextMonth()\" [innerHtml]=\"icons.month.next\"></a>\n          </div>\n          <div class=\"next-year\">\n            <a (click)=\"nextYear()  \" [innerHtml]=\"icons.year.next\"></a>\n          </div>\n        </div>\n        <div class=\"weekdays\">\n          <p *ngFor=\"let wkday of weekDays\">{{wkday}}</p>\n        </div>\n        <div class=\"month-days\">\n          <ng-container *ngFor=\"let d of days[i].dates\">\n            <mg-dropable (dataRecieved)=\"updateOnDay($event)\" (onEvent)=\"handleDropZone($event, {date: d.num, month: d.month, year: inView.year})\">\n              <div class=\"day\" [ngClass]=\"dayClass(d.num, d.month, inView.year, d.disabled)\"\n              (click)=\"clickOnDay(d.num, d.month, inView.year, d.disabled)\">\n                <ng-container *ngIf=\"d.num == 0\"></ng-container>\n                <ng-container *ngIf=\"d.num != 0\">{{d.num}}</ng-container>\n              </div>\n            </mg-dropable>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"event-details\">\n      <ng-container *ngIf=\"toggleSelect.data\">\n        <ng-container *ngFor=\"let eventData of toggleSelect.data\">\n            <div class=\"event-info-wrapper\">\n              <mg-dragable [draggable]=\"true\" [data]=\"eventData\">\n                <div class=\"event-detail-title\" [innerHtml]=\"eventData.name\"></div>\n                <div class=\"event-detail-date\" [innerHtml]=\"eventData.date\"></div>\n              </mg-dragable>\n              \n              <div class=\"event-detail-description\" [innerHtml]=\"eventData.description\"></div>\n            </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n\n  <mg-overlay bgClass=\"grey2\" [id]=\"id\" canvasPosition=\"bottom\" offSize=\"2\" [active]=\"activateNewEvent\" (isClosed)=\"closeNewEvent()\">\n    <div class=\"pad-10\">\n      <h2 class=\"text-grey8 marginV-15\">Book an event on <small class=\"font-15 text-red8\">{{ clickedOn }}</small> </h2>\n      <div class=\"row col m12 l12 s12\">\n        <mg-input label=\"Event Name\" fStyle=\"material\" class=\"marginT-5\" (keyup)=\"setBookEvent($event, 'name')\"></mg-input>\n      </div>\n      <div class=\"row col m12 l12 s12\">\n        <mg-text label=\"Event Description\" fStyle=\"material\" class=\"margin-5\" (keyup)=\"setBookEvent($event, 'desc')\"></mg-text>\n      </div>\n      <div class=\"col m12 l12 s12 text-right\">\n        <mg-button (click)=\"createNewEvent()\" theme=\"success\">Book an event <i class=\"fas fa-angle-double-right\"></i></mg-button>\n      </div>\n    </div>\n  </mg-overlay>", styles: [""] }]
    }], function () { return [{ type: i1.DaterService }, { type: i2.MaterialgrammiService }]; }, { abbreviation: [{
            type: Input
        }], bookEvents: [{
            type: Input
        }], theme: [{
            type: Input
        }], disabled: [{
            type: Input
        }], size: [{
            type: Input
        }], disabledRange: [{
            type: Input
        }], events: [{
            type: Input
        }], format: [{
            type: Input
        }], icons: [{
            type: Input
        }], controls: [{
            type: Input
        }], class: [{
            type: Input
        }], dayIsClicked: [{
            type: Output
        }], dayDrop: [{
            type: Output
        }], newEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNHakcsK0JBQTRDO0lBQzFDLCtCQUEyQjtJQUN6Qiw2QkFBMEQ7SUFBdkQsZ0tBQVMsaUJBQVUsSUFBQztJQUFtQyxpQkFBSTtJQUNoRSxpQkFBTTtJQUNOLCtCQUE0QjtJQUMxQiw2QkFBNEQ7SUFBekQsZ0tBQVMsa0JBQVcsSUFBQztJQUFvQyxpQkFBSTtJQUNsRSxpQkFBTTtJQUNOLCtCQUF3QjtJQUN0QixnQ0FBd0I7SUFBQSxZQUFTO0lBQUEsaUJBQU87SUFBQSxnQ0FBdUI7SUFBQSxZQUFlO0lBQUEsaUJBQU87SUFDdkYsaUJBQU07SUFDTixnQ0FBd0I7SUFDdEIsOEJBQXdEO0lBQXJELGtLQUFTLG1CQUFXLElBQUM7SUFBZ0MsaUJBQUk7SUFDOUQsaUJBQU07SUFDTixnQ0FBdUI7SUFDckIsOEJBQXdEO0lBQXJELGtLQUFTLGtCQUFVLElBQUc7SUFBK0IsaUJBQUk7SUFDOUQsaUJBQU07SUFDUixpQkFBTTs7OztJQWRzQixlQUFpQztJQUFqQyx5RUFBaUM7SUFHaEMsZUFBa0M7SUFBbEMsMEVBQWtDO0lBR25DLGVBQVM7SUFBVCw4QkFBUztJQUE4QixlQUFlO0lBQWYsd0NBQWU7SUFHckQsZUFBOEI7SUFBOUIsc0VBQThCO0lBRzdC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UUFBQSxnQ0FBaUM7UUFBQSxhQUFlO1FBQUEsaUJBQVE7UUFBQyxpQkFBSztRQUNqSCwrQkFBaUM7UUFDL0IscUNBQXdHO1FBQXZDLHVHQUFTLHlCQUFxQixNQUFNLENBQUMsSUFBQztRQUFDLGlCQUFXO1FBQ3JILGlCQUFNO1FBQ04sK0JBQWlDO1FBQy9CLG9DQUE2RztRQUF2QyxzR0FBUyx5QkFBcUIsTUFBTSxDQUFDLElBQUM7UUFBQyxpQkFBVTtRQUN6SCxpQkFBTTtRQUNOLGdDQUF3QztRQUN0QyxzQ0FBc0Q7UUFBM0Msa0dBQVMsb0JBQWdCLElBQUM7UUFBaUIsK0JBQWM7UUFBQSx5QkFBeUM7UUFBQSxpQkFBWTtRQUMzSCxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQWE7O1FBakVPLGlIQUFtRjtRQUU5RCxlQUFXO1FBQVgsb0NBQVc7UUFtQ2pDLGVBQXVCO1FBQXZCLDRDQUF1QjtRQWVkLGVBQVM7UUFBVCwyQkFBUyxnQ0FBQTtRQUVtRCxlQUFlO1FBQWYsbUNBQWU7O3VGRDVDNUYsaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UsYUFBYTttR0FNZCxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBS0csTUFBTTtrQkFBZCxLQUFLO1lBcUJHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQVVHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL2RhdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlzYWJsZWRSYW5nZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTWF0ZXJpYWxncmFtbWlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWF0ZXJpYWxncmFtbWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGFiYnJldmlhdGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBib29rRXZlbnRzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkYXJrXCI7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBzaXplID0gMTtcbiAgQElucHV0KCkgZGlzYWJsZWRSYW5nZTogRGlzYWJsZWRSYW5nZSA9IHtcbiAgICBiZWZvcmU6IGZhbHNlLFxuICAgIGFmdGVyOiBmYWxzZVxuICB9O1xuICAvLyBcIjMxIEphbnVhcnkgMjAyMlwiXG4gIEBJbnB1dCgpIGV2ZW50czogYW55ID0gW3tcbiAgICBuYW1lOiBcIk1lZXRpbmcgd2l0aCBBbGlcIixcbiAgICBkYXRlOiBcIjE3IEphbnVhcnkgMjAyMiAwODowMCBQTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIGJ1eno6IHRydWVcbiAgfSwge1xuICAgIG5hbWU6IFwiUFVCR1wiLFxuICAgIGRhdGU6IFwiMTcgSmFudWFyeSAyMDIyIDEwOjAwIFBNXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgYnV6ejogdHJ1ZVxuICB9LCB7XG4gICAgbmFtZTogXCJQSFBcIixcbiAgICBkYXRlOiBcIjE4IEphbnVhcnkgMjAyMiAxMDowMCBQTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIGJ1eno6IGZhbHNlXG4gIH0sIHtcbiAgICBuYW1lOiBcIkJpcnRoZGF5IFBhcnR5XCIsXG4gICAgZGF0ZTogXCIyMCBGZWJydWFyeSAyMDIyIDEwOjAwIFBNXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgYnV6ejogdHJ1ZVxuICB9XTtcbiAgQElucHV0KCkgZm9ybWF0ID0gXCJkZC1NTS15eXl5XCI7XG4gIEBJbnB1dCgpIGljb25zID0ge1xuICAgIG1vbnRoOiB7XG4gICAgICBuZXh0OiBgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L2k+YCxcbiAgICAgIHByZXZpb3VzOiBgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtbGVmdFwiPjwvaT5gXG4gICAgfSxcbiAgICB5ZWFyOiB7XG4gICAgICBuZXh0OiBgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPmAsXG4gICAgICBwcmV2aW91czogYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCI+PC9pPmBcbiAgICB9XG4gIH07XG4gIEBJbnB1dCgpIGNvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSBkYXlJc0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYXlEcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbmV3RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbW9udGhzX2xvbmc6IGFueTtcbiAgbW9udGhzX3Nob3J0OiBhbnk7XG5cbiAgbW9udGhzOiBhbnk7XG5cbiAgd2Vla0RheXMgPSBbXG4gICAgXCJTdW5cIixcbiAgICBcIk1vblwiLFxuICAgIFwiVHVlXCIsXG4gICAgXCJXZWRcIixcbiAgICBcIlRodVwiLFxuICAgIFwiRnJpXCIsXG4gICAgXCJTYXRcIlxuICBdO1xuXG4gIGRheXM6IGFueSA9IFtdO1xuICB0b2dnbGVFdmVudCA9IGZhbHNlO1xuXG5cbiAgY3VycmVudDogYW55ID0ge31cblxuICBpblZpZXc6IGFueSA9IHt9O1xuXG4gIHRvZ2dsZVNlbGVjdDogYW55ID0gZmFsc2U7XG5cbiAgaXNIb3ZlcmVkV2l0aERhdGEgPSBcIlwiO1xuXG4gIGlkID0gXCJcIjtcblxuICBhY3RpdmF0ZU5ld0V2ZW50ID0gZmFsc2U7XG5cbiAgY2xpY2tlZE9uID0gXCJcIjtcblxuICBib29rRXZlbnQgPSB7XG4gICAgbmFtZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBvbjogPGFueT57fVxuICB9O1xuXG4gIGRyb3BwZWREYXRhOiBhbnkgPSB7fTtcblxuICBkcm9wT25EYXRlOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVyOiBEYXRlclNlcnZpY2UsIHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWN1dGVBbGwoKTtcbiAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlLm1ha2VpZCg0LCBcImNyZWF0ZU5ld0V2ZW50T3ZlcmxheVwiKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiRGlzYWJsZWQ/IFwiLCB0aGlzLmRpc2FibGVkUmFuZ2UpO1xuICAgIHRoaXMuZXhlY3V0ZUFsbCgpO1xuICB9XG5cbiAgZXhlY3V0ZUFsbCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVTdGF0ZXMoKTtcbiAgICB0aGlzLnVwZGF0ZURheXModGhpcy5pblZpZXcueWVhcik7XG4gICAgdGhpcy5mb3JtYXRFdmVudERhdGVzKCk7XG4gIH1cblxuICBpbml0aWFsaXplU3RhdGVzKCkge1xuICAgIHRoaXMuY3VycmVudCA9IHtcbiAgICAgIG1vbnRoOiB0aGlzLmRhdGVyLmdldE1vbnRoKCksXG4gICAgICBtb250aEluV29yZHM6IHRoaXMuZGF0ZXIuZ2V0TW9udGhzKHRoaXMuZGF0ZXIuZ2V0TW9udGgoKSksXG4gICAgICBkYXRlOiB0aGlzLmRhdGVyLmdldERhdGUoKSxcbiAgICAgIHllYXI6IHRoaXMuZGF0ZXIuZ2V0WWVhcigpLFxuICAgICAgZGF5SW5OdW06IHRoaXMuZGF0ZXIuZ2V0RGF5KCksXG4gICAgICB3ZWVrRGF5OiB0aGlzLmRhdGVyLmdldFdlZWtEYXkoKSxcbiAgICAgIGhvdXI6IHRoaXMuZGF0ZXIuZ2V0SG91cigpLFxuICAgICAgbWluOiB0aGlzLmRhdGVyLmdldE1pbnV0ZSgpLFxuICAgICAgc2VjOiB0aGlzLmRhdGVyLmdldFNlY29uZHMoKVxuICAgIH07XG4gICAgdGhpcy5tb250aHNfbG9uZyA9IHRoaXMuZGF0ZXIuZ2V0TW9udGhzTG9uZygpO1xuICAgIHRoaXMubW9udGhzX3Nob3J0ID0gdGhpcy5kYXRlci5nZXRNb250aHMoKTtcblxuICAgIHRoaXMubW9udGhzID0gdGhpcy5hYmJyZXZpYXRpb24gPyB0aGlzLm1vbnRoc19zaG9ydCA6IHRoaXMubW9udGhzX2xvbmc7XG4gICAgdGhpcy5pblZpZXcgPSB7XG4gICAgICBtb250aDogdGhpcy5jdXJyZW50Lm1vbnRoLFxuICAgICAgeWVhcjogdGhpcy5jdXJyZW50LnllYXJcbiAgICB9O1xuICB9XG5cbiAgZm9ybWF0RXZlbnREYXRlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmV2ZW50c1tpXS5kYXRlT2JqZWN0ID0ge1xuICAgICAgICBkYXRlOiB0aGlzLmRhdGVyLmdldERhdGUodGhpcy5kYXRlci5kYXRlcih0aGlzLmV2ZW50c1tpXS5kYXRlKSksXG4gICAgICAgIG1vbnRoOiB0aGlzLmRhdGVyLmdldE1vbnRoKHRoaXMuZGF0ZXIuZGF0ZXIodGhpcy5ldmVudHNbaV0uZGF0ZSkpLFxuICAgICAgICB5ZWFyOiB0aGlzLmRhdGVyLmdldFllYXIodGhpcy5kYXRlci5kYXRlcih0aGlzLmV2ZW50c1tpXS5kYXRlKSlcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgaXNEaXNhYmxlZChkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpc2FibGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGlzYWJsZWRfZGF0ZSA9IHRoaXMuZGF0ZXIuZGF0ZXIodGhpcy5kaXNhYmxlZFtpXSk7XG4gICAgICBpZiAoZCA9PSB0aGlzLmRhdGVyLmdldERhdGUoZGlzYWJsZWRfZGF0ZSkgJiYgKG0gLSAxKSA9PSB0aGlzLmRhdGVyLmdldE1vbnRoKGRpc2FibGVkX2RhdGUpICYmIHkgPT0gdGhpcy5kYXRlci5nZXRZZWFyKGRpc2FibGVkX2RhdGUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1c2hEaXNhYmxlZChkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgbGV0IGRhdGUgPSBgJHtkfSAke3RoaXMubW9udGhzW20gLSAxXX0gJHt5fWA7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmRpc2FibGVkUmFuZ2UuYWZ0ZXIgPT0gXCJzdHJpbmdcIiAmJlxuICAgICAgdGhpcy5kYXRlci5pc0dyZWF0ZXIoZGF0ZSwgdGhpcy5kaXNhYmxlZFJhbmdlLmFmdGVyKSAmJlxuICAgICAgIXRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoZGF0ZSkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQucHVzaChkYXRlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLmRpc2FibGVkUmFuZ2UuYmVmb3JlID09IFwic3RyaW5nXCIgJiZcbiAgICAgIHRoaXMuZGF0ZXIuaXNMZXNzVGhhbihkYXRlLCB0aGlzLmRpc2FibGVkUmFuZ2UuYmVmb3JlKSAmJlxuICAgICAgIXRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoZGF0ZSkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQucHVzaChkYXRlKTtcbiAgICB9XG4gIH1cblxuXG4gIHVwZGF0ZURheXMoeWVhcjogbnVtYmVyID0gdGhpcy5jdXJyZW50LnllYXIpIHtcbiAgICB0aGlzLmRheXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubW9udGhzLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgbGV0IG9uTW9udGg6IGFueSA9IHt9O1xuICAgICAgbGV0IGZpcnN0RGF0ZSA9IHRoaXMuZGF0ZXIuZGF0ZXIoYDEtJHt0aGlzLm1vbnRoc1tpIC0gMV19LSR7eWVhcn1gKTtcbiAgICAgIG9uTW9udGgudG90YWxEYXlzID0gdGhpcy5kYXRlci5kYXlzSW5Nb250aChpLCB5ZWFyKTtcbiAgICAgIG9uTW9udGgubmFtZSA9IHRoaXMubW9udGhzW2kgLSAxXTtcbiAgICAgIG9uTW9udGgubW9udGggPSBpO1xuICAgICAgb25Nb250aC5kYXRlcyA9IFtdO1xuICAgICAgb25Nb250aC5zdGFydERheSA9IHRoaXMuZGF0ZXIuZ2V0RGF5KGZpcnN0RGF0ZSk7XG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgb25Nb250aC5zdGFydERheTsgaysrKSB7XG4gICAgICAgIGxldCBteURhWSA9IHtcbiAgICAgICAgICBudW06IDAsXG4gICAgICAgICAgd2Vla2RheTogdGhpcy53ZWVrRGF5c1trXSxcbiAgICAgICAgICB3ZWVrRGF5TnVtOiBrLFxuICAgICAgICAgIG1vbnRoOiBpLFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBvbk1vbnRoLmRhdGVzLnB1c2gobXlEYVkpO1xuXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBvbk1vbnRoLnRvdGFsRGF5czsgaisrKSB7XG4gICAgICAgIHRoaXMucHVzaERpc2FibGVkKGosIGksIHllYXIpO1xuICAgICAgICBsZXQgbXlkYXRlID0gdGhpcy5kYXRlci5kYXRlcihgJHtqfSAke3RoaXMubW9udGhzW2kgLSAxXX0gJHt5ZWFyfWApO1xuICAgICAgICBsZXQgbXlEYVkgPSB7XG4gICAgICAgICAgbnVtOiBqLFxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMud2Vla0RheXNbdGhpcy5kYXRlci5nZXREYXkobXlkYXRlKV0sXG4gICAgICAgICAgd2Vla0RheU51bTogdGhpcy5kYXRlci5nZXREYXkobXlkYXRlKSxcbiAgICAgICAgICBtb250aDogaSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkKGosIGksIHllYXIpXG4gICAgICAgIH07XG4gICAgICAgIG9uTW9udGguZGF0ZXMucHVzaChteURhWSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRheXMucHVzaChvbk1vbnRoKTtcbiAgICB9XG4gIH1cblxuICBpc0V2ZW50ZWQoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGxldCBhbGxFdmVudHM6IGFueSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkID09PSB0aGlzLmV2ZW50c1tpXS5kYXRlT2JqZWN0LmRhdGUgJiYgKG0gLSAxKSA9PT0gdGhpcy5ldmVudHNbaV0uZGF0ZU9iamVjdC5tb250aCAmJiB5ID09PSB0aGlzLmV2ZW50c1tpXS5kYXRlT2JqZWN0LnllYXIpIHtcbiAgICAgICAgYWxsRXZlbnRzLnB1c2godGhpcy5ldmVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsRXZlbnRzLmxlbmd0aCA+IDAgPyBhbGxFdmVudHMgOiBmYWxzZTtcbiAgfVxuXG4gIGRvQnV6eihldmVudERldGFpbHM6IGFueSA9IFtdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudERldGFpbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChldmVudERldGFpbHNbaV0uYnV6eikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gXCJwYWRWLTEwXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNpemUgPT09IDIpIHtcbiAgICAgIHJldHVybiBcInBhZFYtMjBcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSA9PT0gMykge1xuICAgICAgcmV0dXJuIFwicGFkVi0zMFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09PSA0KSB7XG4gICAgICByZXR1cm4gXCJwYWRWLTQwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcInBhZFYtNTBcIjtcbiAgICB9XG4gIH1cblxuICBkYXlDbGFzcyhkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIHJlc3VsdHMgKz0gYCAke3RoaXMuZ2V0U2l6ZSgpfWA7XG4gICAgcmVzdWx0cyArPSB0aGlzLmRyb3B6b25lQ2xhc3MoZCwgbSwgeSkgPyBcIiBzY2FsZS0zIHNoYWRvdy0zIG91dGxpbmUtZ3JleTEwXCIgOiBcIlwiO1xuICAgIHJlc3VsdHMgKz0gZCA9PSAwID8gXCIgZGF5LWRpc2FibGVkXCIgOiBcIlwiO1xuICAgIHJlc3VsdHMgKz0gZCA9PSB0aGlzLmN1cnJlbnQuZGF0ZSAmJiBtIC0gMSA9PSB0aGlzLmN1cnJlbnQubW9udGggJiYgeSA9PSB0aGlzLmN1cnJlbnQueWVhciA/IFwiIGFjdGl2ZS1kYXlcIiA6IFwiXCI7XG4gICAgbGV0IGV2ZW50ZGV0YWlscyA9IHRoaXMuaXNFdmVudGVkKGQsIG0sIHkpO1xuICAgIHJlc3VsdHMgKz0gIWRpc2FibGVkICYmIGV2ZW50ZGV0YWlscyA/IFwiIGhhdmVFdmVudFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9ICFkaXNhYmxlZCAmJiB0aGlzLmRvQnV6eihldmVudGRldGFpbHMpID8gXCIgYnV6elwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IGRpc2FibGVkID8gXCIgZGF5LWRpYWJsZWRcIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuXG5cbiAgbmV4dE1vbnRoKCkge1xuICAgIGlmICh0aGlzLmluVmlldy5tb250aCA+PSAxMSkge1xuICAgICAgdGhpcy5pblZpZXcubW9udGggPSAwO1xuICAgICAgdGhpcy5uZXh0WWVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluVmlldy5tb250aCsrO1xuICAgIH1cbiAgfVxuXG4gIHByZXZNb250aCgpIHtcbiAgICBpZiAodGhpcy5pblZpZXcubW9udGggPD0gMCkge1xuICAgICAgdGhpcy5pblZpZXcubW9udGggPSAxMTtcbiAgICAgIHRoaXMucHJldlllYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pblZpZXcubW9udGgtLTtcbiAgICB9XG4gIH1cblxuXG5cbiAgbmV4dFllYXIoKSB7XG4gICAgdGhpcy5pblZpZXcueWVhcisrO1xuICAgIHRoaXMudXBkYXRlRGF5cyh0aGlzLmluVmlldy55ZWFyKTtcbiAgfVxuXG4gIHByZXZZZWFyKCkge1xuICAgIHRoaXMuaW5WaWV3LnllYXItLTtcbiAgICB0aGlzLnVwZGF0ZURheXModGhpcy5pblZpZXcueWVhcik7XG4gIH1cblxuXG5cbiAgY2xpY2tPbkRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShgJHtkfSAke3RoaXMubW9udGhzW20gLSAxXX0gJHt5fWApO1xuICAgICAgbGV0IGRhdGVUb2JlU2VudCA9IHRoaXMuZGF0ZXIuZm9ybWF0KGRhdGUsIHRoaXMuZm9ybWF0KTtcbiAgICAgIHRoaXMuZGF5SXNDbGlja2VkLmVtaXQoe1xuICAgICAgICBkYXRlOiBkLFxuICAgICAgICBtb250aDogbSxcbiAgICAgICAgeWVhcjogeSxcbiAgICAgICAgZGF0ZUZvcm1hdHRlZDogZGF0ZVRvYmVTZW50XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ldmVudERldGFpbHNUb2dnbGUoZCwgbSwgeSk7XG4gICAgICBpZiAoIXRoaXMudG9nZ2xlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9va0V2ZW50cykge1xuICAgICAgICAgIHRoaXMub3Blbk5ld0V2ZW50KCk7XG4gICAgICAgICAgdGhpcy5ib29rRXZlbnQub24uZGF0ZSA9IGQ7XG4gICAgICAgICAgdGhpcy5ib29rRXZlbnQub24ubW9udGggPSBtO1xuICAgICAgICAgIHRoaXMuYm9va0V2ZW50Lm9uLnllYXIgPSB5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xpY2tlZE9uID0gdGhpcy5kYXRlci5mb3JtYXQoZGF0ZSwgXCJkZC1NTS15eXl5XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIHNldEJvb2tFdmVudChldmVudDogYW55LCB0eXBlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZSA9PSBcIm5hbWVcIikge1xuICAgICAgdGhpcy5ib29rRXZlbnQubmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gXCJkZXNjXCIpIHtcbiAgICAgIHRoaXMuYm9va0V2ZW50LmRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU5ld0V2ZW50KCkge1xuICAgIHRoaXMubmV3RXZlbnQuZW1pdCh0aGlzLmJvb2tFdmVudCk7XG4gICAgdGhpcy5hY3RpdmF0ZU5ld0V2ZW50ID0gZmFsc2U7XG4gIH1cblxuXG4gIG9wZW5OZXdFdmVudCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlTmV3RXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VOZXdFdmVudCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlTmV3RXZlbnQgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZU9uRGF5KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmRyb3BwZWREYXRhID0gZXZlbnQ7XG4gICAgdGhpcy5kYXlEcm9wLmVtaXQoe1xuICAgICAgZGF0YTogdGhpcy5kcm9wcGVkRGF0YSxcbiAgICAgIGRyb3BvbjogdGhpcy5kcm9wT25EYXRlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcm9wWm9uZShldmVudDogYW55LCBvYmo6IGFueSA9IHt9KSB7XG4gICAgaWYgKGV2ZW50ICYmICFldmVudC5kcm9wcGVkICYmIGV2ZW50LmRyYWdFbnRlcmVkKSB7XG4gICAgICB0aGlzLmlzSG92ZXJlZFdpdGhEYXRhID0gb2JqICYmIG9iai5kYXRlICYmIG9iai5tb250aCAmJiBvYmoueWVhciA/IGAke29iai5kYXRlfS0ke29iai5tb250aH0tJHtvYmoueWVhcn1gIDogXCJcIjtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ICYmIGV2ZW50LmRyYWdMZWZ0KSB7XG4gICAgICB0aGlzLmlzSG92ZXJlZFdpdGhEYXRhID0gXCJcIjtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmRyb3BwZWQpIHtcbiAgICAgIHRoaXMuaXNIb3ZlcmVkV2l0aERhdGEgPSBcIlwiO1xuICAgICAgdGhpcy5kcm9wT25EYXRlID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIGRyb3B6b25lQ2xhc3MoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGlmIChgJHtkfS0ke219LSR7eX1gID09PSB0aGlzLmlzSG92ZXJlZFdpdGhEYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXZlbnREZXRhaWxzVG9nZ2xlKGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBpZiAoKCF0aGlzLnRvZ2dsZVNlbGVjdCkgfHwgISh0aGlzLnRvZ2dsZVNlbGVjdC5kYXRlID09IGQgJiYgdGhpcy50b2dnbGVTZWxlY3QubW9udGggPT0gbSAmJiB0aGlzLnRvZ2dsZVNlbGVjdC55ZWFyID09IHkpKSB7XG4gICAgICBsZXQgZXZlbnRkZXRhaWwgPSB0aGlzLmlzRXZlbnRlZChkLCBtLCB5KTtcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ID0ge1xuICAgICAgICBkYXRlOiBkLFxuICAgICAgICBtb250aDogbSxcbiAgICAgICAgeWVhcjogeSxcbiAgICAgICAgZGF0YTogZXZlbnRkZXRhaWxcbiAgICAgIH07XG4gICAgICBpZiAoZXZlbnRkZXRhaWwpIHtcbiAgICAgICAgdGhpcy50b2dnbGVFdmVudCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0LmRhdGEgPSBldmVudGRldGFpbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRXZlbnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgW25nQ2xhc3NdPVwiKHRvZ2dsZUV2ZW50ID09IHRydWUgPyB0aGVtZSArICcgYWN0aXZhdGVkRXZlbnQnIDogdGhlbWUpICsgJyAnICsgY2xhc3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9udGgtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoXCIgKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRoczsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cImkgPT0gaW5WaWV3Lm1vbnRoID8gJ2FjdGl2ZSc6ICcnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1pbmZvXCIgKm5nSWY9XCJjb250cm9sc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aW91cy15ZWFyXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwicHJldlllYXIoKVwiIFtpbm5lckh0bWxdPVwiaWNvbnMueWVhci5wcmV2aW91c1wiPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlvdXMtbW9udGhcIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJwcmV2TW9udGgoKVwiIFtpbm5lckh0bWxdPVwiaWNvbnMubW9udGgucHJldmlvdXNcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLW5hbWVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9udGhTcGFuXCI+e3ttb250aH19PC9zcGFuPjxzcGFuIGNsYXNzPVwieWVhck5hbWVcIj57e2luVmlldy55ZWFyfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5leHQtbW9udGhcIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJuZXh0TW9udGgoKVwiIFtpbm5lckh0bWxdPVwiaWNvbnMubW9udGgubmV4dFwiPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC15ZWFyXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwibmV4dFllYXIoKSAgXCIgW2lubmVySHRtbF09XCJpY29ucy55ZWFyLm5leHRcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheXNcIj5cbiAgICAgICAgICA8cCAqbmdGb3I9XCJsZXQgd2tkYXkgb2Ygd2Vla0RheXNcIj57e3drZGF5fX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9udGgtZGF5c1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGQgb2YgZGF5c1tpXS5kYXRlc1wiPlxuICAgICAgICAgICAgPG1nLWRyb3BhYmxlIChkYXRhUmVjaWV2ZWQpPVwidXBkYXRlT25EYXkoJGV2ZW50KVwiIChvbkV2ZW50KT1cImhhbmRsZURyb3Bab25lKCRldmVudCwge2RhdGU6IGQubnVtLCBtb250aDogZC5tb250aCwgeWVhcjogaW5WaWV3LnllYXJ9KVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5XCIgW25nQ2xhc3NdPVwiZGF5Q2xhc3MoZC5udW0sIGQubW9udGgsIGluVmlldy55ZWFyLCBkLmRpc2FibGVkKVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJjbGlja09uRGF5KGQubnVtLCBkLm1vbnRoLCBpblZpZXcueWVhciwgZC5kaXNhYmxlZClcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZC5udW0gPT0gMFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkLm51bSAhPSAwXCI+e3tkLm51bX19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZy1kcm9wYWJsZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtZGV0YWlsc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvZ2dsZVNlbGVjdC5kYXRhXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGV2ZW50RGF0YSBvZiB0b2dnbGVTZWxlY3QuZGF0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWluZm8td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8bWctZHJhZ2FibGUgW2RyYWdnYWJsZV09XCJ0cnVlXCIgW2RhdGFdPVwiZXZlbnREYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWRldGFpbC10aXRsZVwiIFtpbm5lckh0bWxdPVwiZXZlbnREYXRhLm5hbWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtZGV0YWlsLWRhdGVcIiBbaW5uZXJIdG1sXT1cImV2ZW50RGF0YS5kYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvbWctZHJhZ2FibGU+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtZGV0YWlsLWRlc2NyaXB0aW9uXCIgW2lubmVySHRtbF09XCJldmVudERhdGEuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8bWctb3ZlcmxheSBiZ0NsYXNzPVwiZ3JleTJcIiBbaWRdPVwiaWRcIiBjYW52YXNQb3NpdGlvbj1cImJvdHRvbVwiIG9mZlNpemU9XCIyXCIgW2FjdGl2ZV09XCJhY3RpdmF0ZU5ld0V2ZW50XCIgKGlzQ2xvc2VkKT1cImNsb3NlTmV3RXZlbnQoKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYWQtMTBcIj5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQtZ3JleTggbWFyZ2luVi0xNVwiPkJvb2sgYW4gZXZlbnQgb24gPHNtYWxsIGNsYXNzPVwiZm9udC0xNSB0ZXh0LXJlZDhcIj57eyBjbGlja2VkT24gfX08L3NtYWxsPiA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb2wgbTEyIGwxMiBzMTJcIj5cbiAgICAgICAgPG1nLWlucHV0IGxhYmVsPVwiRXZlbnQgTmFtZVwiIGZTdHlsZT1cIm1hdGVyaWFsXCIgY2xhc3M9XCJtYXJnaW5ULTVcIiAoa2V5dXApPVwic2V0Qm9va0V2ZW50KCRldmVudCwgJ25hbWUnKVwiPjwvbWctaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sIG0xMiBsMTIgczEyXCI+XG4gICAgICAgIDxtZy10ZXh0IGxhYmVsPVwiRXZlbnQgRGVzY3JpcHRpb25cIiBmU3R5bGU9XCJtYXRlcmlhbFwiIGNsYXNzPVwibWFyZ2luLTVcIiAoa2V5dXApPVwic2V0Qm9va0V2ZW50KCRldmVudCwgJ2Rlc2MnKVwiPjwvbWctdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBtMTIgbDEyIHMxMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgIDxtZy1idXR0b24gKGNsaWNrKT1cImNyZWF0ZU5ld0V2ZW50KClcIiB0aGVtZT1cInN1Y2Nlc3NcIj5Cb29rIGFuIGV2ZW50IDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT48L21nLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21nLW92ZXJsYXk+Il19