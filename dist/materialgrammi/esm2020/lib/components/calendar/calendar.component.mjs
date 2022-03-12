import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../dater.service";
import * as i2 from "../../materialgrammi.service";
import * as i3 from "../dropable/dropable.component";
import * as i4 from "../dragable/dragable.component";
import * as i5 from "../overlay/overlay.component";
import * as i6 from "../input/input.component";
import * as i7 from "../text-input/text-input.component";
import * as i8 from "../button/button.component";
import * as i9 from "@angular/common";
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
CalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarComponent, deps: [{ token: i1.DaterService }, { token: i2.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
CalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CalendarComponent, selector: "mg-calendar", inputs: { abbreviation: "abbreviation", bookEvents: "bookEvents", theme: "theme", disabled: "disabled", size: "size", disabledRange: "disabledRange", events: "events", format: "format", icons: "icons", controls: "controls", class: "class" }, outputs: { dayIsClicked: "dayIsClicked", dayDrop: "dayDrop", newEvent: "newEvent" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"calendar\" [ngClass]=\"(toggleEvent == true ? theme + ' activatedEvent' : theme) + ' ' + class\">\n    <div class=\"month-wrapper\">\n      <div class=\"month\" *ngFor=\"let month of months; let i = index\" [ngClass]=\"i == inView.month ? 'active': ''\">\n        <div class=\"calendar-info\" *ngIf=\"controls\">\n          <div class=\"previous-year\">\n            <a (click)=\"prevYear()\" [innerHtml]=\"icons.year.previous\"></a>\n          </div>\n          <div class=\"previous-month\">\n            <a (click)=\"prevMonth()\" [innerHtml]=\"icons.month.previous\"></a>\n          </div>\n          <div class=\"month-name\">\n            <span class=\"monthSpan\">{{month}}</span><span class=\"yearName\">{{inView.year}}</span>\n          </div>\n          <div class=\"next-month\">\n            <a (click)=\"nextMonth()\" [innerHtml]=\"icons.month.next\"></a>\n          </div>\n          <div class=\"next-year\">\n            <a (click)=\"nextYear()  \" [innerHtml]=\"icons.year.next\"></a>\n          </div>\n        </div>\n        <div class=\"weekdays\">\n          <p *ngFor=\"let wkday of weekDays\">{{wkday}}</p>\n        </div>\n        <div class=\"month-days\">\n          <ng-container *ngFor=\"let d of days[i].dates\">\n            <mg-dropable (dataRecieved)=\"updateOnDay($event)\" (onEvent)=\"handleDropZone($event, {date: d.num, month: d.month, year: inView.year})\">\n              <div class=\"day\" [ngClass]=\"dayClass(d.num, d.month, inView.year, d.disabled)\"\n              (click)=\"clickOnDay(d.num, d.month, inView.year, d.disabled)\">\n                <ng-container *ngIf=\"d.num == 0\"></ng-container>\n                <ng-container *ngIf=\"d.num != 0\">{{d.num}}</ng-container>\n              </div>\n            </mg-dropable>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"event-details\">\n      <ng-container *ngIf=\"toggleSelect.data\">\n        <ng-container *ngFor=\"let eventData of toggleSelect.data\">\n            <div class=\"event-info-wrapper\">\n              <mg-dragable [draggable]=\"true\" [data]=\"eventData\">\n                <div class=\"event-detail-title\" [innerHtml]=\"eventData.name\"></div>\n                <div class=\"event-detail-date\" [innerHtml]=\"eventData.date\"></div>\n              </mg-dragable>\n              \n              <div class=\"event-detail-description\" [innerHtml]=\"eventData.description\"></div>\n            </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n\n  <mg-overlay bgClass=\"grey2\" [id]=\"id\" canvasPosition=\"bottom\" offSize=\"2\" [active]=\"activateNewEvent\" (isClosed)=\"closeNewEvent()\">\n    <div class=\"pad-10\">\n      <h2 class=\"text-grey8 marginV-15\">Book an event on <small class=\"font-15 text-red8\">{{ clickedOn }}</small> </h2>\n      <div class=\"row col m12 l12 s12\">\n        <mg-input label=\"Event Name\" fStyle=\"material\" class=\"marginT-5\" (keyup)=\"setBookEvent($event, 'name')\"></mg-input>\n      </div>\n      <div class=\"row col m12 l12 s12\">\n        <mg-text label=\"Event Description\" fStyle=\"material\" class=\"margin-5\" (keyup)=\"setBookEvent($event, 'desc')\"></mg-text>\n      </div>\n      <div class=\"col m12 l12 s12 text-right\">\n        <mg-button (click)=\"createNewEvent()\" theme=\"success\">Book an event <i class=\"fas fa-angle-double-right\"></i></mg-button>\n      </div>\n    </div>\n  </mg-overlay>", styles: [""], components: [{ type: i3.DropableComponent, selector: "mg-dropable", inputs: ["dropFiles", "class"], outputs: ["onEvent", "dataRecieved"] }, { type: i4.DragableComponent, selector: "mg-dragable", inputs: ["dragable", "data", "class"], outputs: ["onEvent"] }, { type: i5.OverlayComponent, selector: "mg-overlay", inputs: ["bgClass", "overlayClass", "offSize", "canvasPosition", "id", "active"], outputs: ["isClosed"] }, { type: i6.InputComponent, selector: "mg-input", inputs: ["theme", "fStyle", "label", "placeholder", "control", "type", "onDark", "class", "textValue", "rounded"], outputs: ["value", "isFocused", "keyup"] }, { type: i7.TextInputComponent, selector: "mg-text", inputs: ["theme", "fStyle", "on_dark", "label", "control"], outputs: ["value", "isFocused", "keyup"] }, { type: i8.ButtonComponent, selector: "mg-button", inputs: ["taskType", "btnStyle", "task", "target", "theme", "class", "btnSize", "isBlock", "round", "allowMargin", "link", "allowShrink", "options", "isExternalLink", "newTab"], outputs: ["clicked", "active"] }], directives: [{ type: i9.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-calendar', template: "<div class=\"calendar\" [ngClass]=\"(toggleEvent == true ? theme + ' activatedEvent' : theme) + ' ' + class\">\n    <div class=\"month-wrapper\">\n      <div class=\"month\" *ngFor=\"let month of months; let i = index\" [ngClass]=\"i == inView.month ? 'active': ''\">\n        <div class=\"calendar-info\" *ngIf=\"controls\">\n          <div class=\"previous-year\">\n            <a (click)=\"prevYear()\" [innerHtml]=\"icons.year.previous\"></a>\n          </div>\n          <div class=\"previous-month\">\n            <a (click)=\"prevMonth()\" [innerHtml]=\"icons.month.previous\"></a>\n          </div>\n          <div class=\"month-name\">\n            <span class=\"monthSpan\">{{month}}</span><span class=\"yearName\">{{inView.year}}</span>\n          </div>\n          <div class=\"next-month\">\n            <a (click)=\"nextMonth()\" [innerHtml]=\"icons.month.next\"></a>\n          </div>\n          <div class=\"next-year\">\n            <a (click)=\"nextYear()  \" [innerHtml]=\"icons.year.next\"></a>\n          </div>\n        </div>\n        <div class=\"weekdays\">\n          <p *ngFor=\"let wkday of weekDays\">{{wkday}}</p>\n        </div>\n        <div class=\"month-days\">\n          <ng-container *ngFor=\"let d of days[i].dates\">\n            <mg-dropable (dataRecieved)=\"updateOnDay($event)\" (onEvent)=\"handleDropZone($event, {date: d.num, month: d.month, year: inView.year})\">\n              <div class=\"day\" [ngClass]=\"dayClass(d.num, d.month, inView.year, d.disabled)\"\n              (click)=\"clickOnDay(d.num, d.month, inView.year, d.disabled)\">\n                <ng-container *ngIf=\"d.num == 0\"></ng-container>\n                <ng-container *ngIf=\"d.num != 0\">{{d.num}}</ng-container>\n              </div>\n            </mg-dropable>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"event-details\">\n      <ng-container *ngIf=\"toggleSelect.data\">\n        <ng-container *ngFor=\"let eventData of toggleSelect.data\">\n            <div class=\"event-info-wrapper\">\n              <mg-dragable [draggable]=\"true\" [data]=\"eventData\">\n                <div class=\"event-detail-title\" [innerHtml]=\"eventData.name\"></div>\n                <div class=\"event-detail-date\" [innerHtml]=\"eventData.date\"></div>\n              </mg-dragable>\n              \n              <div class=\"event-detail-description\" [innerHtml]=\"eventData.description\"></div>\n            </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n\n  <mg-overlay bgClass=\"grey2\" [id]=\"id\" canvasPosition=\"bottom\" offSize=\"2\" [active]=\"activateNewEvent\" (isClosed)=\"closeNewEvent()\">\n    <div class=\"pad-10\">\n      <h2 class=\"text-grey8 marginV-15\">Book an event on <small class=\"font-15 text-red8\">{{ clickedOn }}</small> </h2>\n      <div class=\"row col m12 l12 s12\">\n        <mg-input label=\"Event Name\" fStyle=\"material\" class=\"marginT-5\" (keyup)=\"setBookEvent($event, 'name')\"></mg-input>\n      </div>\n      <div class=\"row col m12 l12 s12\">\n        <mg-text label=\"Event Description\" fStyle=\"material\" class=\"margin-5\" (keyup)=\"setBookEvent($event, 'desc')\"></mg-text>\n      </div>\n      <div class=\"col m12 l12 s12 text-right\">\n        <mg-button (click)=\"createNewEvent()\" theme=\"success\">Book an event <i class=\"fas fa-angle-double-right\"></i></mg-button>\n      </div>\n    </div>\n  </mg-overlay>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.DaterService }, { type: i2.MaterialgrammiService }]; }, propDecorators: { abbreviation: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBVXpHLE1BQU0sT0FBTyxpQkFBaUI7SUE4RjVCLFlBQW9CLEtBQW1CLEVBQVUsT0FBOEI7UUFBM0QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBNUZ0RSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxrQkFBYSxHQUFrQjtZQUN0QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQztRQUNGLG9CQUFvQjtRQUNYLFdBQU0sR0FBUSxDQUFDO2dCQUN0QixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsMEJBQTBCO2dCQUNoQyxXQUFXLEVBQUUsNkhBQTZIO2dCQUMxSSxJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLDBCQUEwQjtnQkFDaEMsV0FBVyxFQUFFLDZIQUE2SDtnQkFDMUksSUFBSSxFQUFFLElBQUk7YUFD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QixDQUFDO1lBQ0YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7OEdBNVhVLGlCQUFpQjtrR0FBakIsaUJBQWlCLCtZQ1Y5QiwrM0dBaUVlOzJGRHZERixpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsYUFBYTt1SUFNZCxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBS0csTUFBTTtzQkFBZCxLQUFLO2dCQXFCRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQVVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVJLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9kYXRlci5zZXJ2aWNlJztcbmltcG9ydCB7IERpc2FibGVkUmFuZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBhYmJyZXZpYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgYm9va0V2ZW50cyA9IGZhbHNlO1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBkaXNhYmxlZDogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgc2l6ZSA9IDE7XG4gIEBJbnB1dCgpIGRpc2FibGVkUmFuZ2U6IERpc2FibGVkUmFuZ2UgPSB7XG4gICAgYmVmb3JlOiBmYWxzZSxcbiAgICBhZnRlcjogZmFsc2VcbiAgfTtcbiAgLy8gXCIzMSBKYW51YXJ5IDIwMjJcIlxuICBASW5wdXQoKSBldmVudHM6IGFueSA9IFt7XG4gICAgbmFtZTogXCJNZWV0aW5nIHdpdGggQWxpXCIsXG4gICAgZGF0ZTogXCIxNyBKYW51YXJ5IDIwMjIgMDg6MDAgUE1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBidXp6OiB0cnVlXG4gIH0sIHtcbiAgICBuYW1lOiBcIlBVQkdcIixcbiAgICBkYXRlOiBcIjE3IEphbnVhcnkgMjAyMiAxMDowMCBQTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIGJ1eno6IHRydWVcbiAgfSwge1xuICAgIG5hbWU6IFwiUEhQXCIsXG4gICAgZGF0ZTogXCIxOCBKYW51YXJ5IDIwMjIgMTA6MDAgUE1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBidXp6OiBmYWxzZVxuICB9LCB7XG4gICAgbmFtZTogXCJCaXJ0aGRheSBQYXJ0eVwiLFxuICAgIGRhdGU6IFwiMjAgRmVicnVhcnkgMjAyMiAxMDowMCBQTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIGJ1eno6IHRydWVcbiAgfV07XG4gIEBJbnB1dCgpIGZvcm1hdCA9IFwiZGQtTU0teXl5eVwiO1xuICBASW5wdXQoKSBpY29ucyA9IHtcbiAgICBtb250aDoge1xuICAgICAgbmV4dDogYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPmAsXG4gICAgICBwcmV2aW91czogYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIj48L2k+YFxuICAgIH0sXG4gICAgeWVhcjoge1xuICAgICAgbmV4dDogYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5gLFxuICAgICAgcHJldmlvdXM6IGA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtbGVmdFwiPjwvaT5gXG4gICAgfVxuICB9O1xuICBASW5wdXQoKSBjb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcblxuICBAT3V0cHV0KCkgZGF5SXNDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGF5RHJvcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG5ld0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1vbnRoc19sb25nOiBhbnk7XG4gIG1vbnRoc19zaG9ydDogYW55O1xuXG4gIG1vbnRoczogYW55O1xuXG4gIHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsXG4gICAgXCJNb25cIixcbiAgICBcIlR1ZVwiLFxuICAgIFwiV2VkXCIsXG4gICAgXCJUaHVcIixcbiAgICBcIkZyaVwiLFxuICAgIFwiU2F0XCJcbiAgXTtcblxuICBkYXlzOiBhbnkgPSBbXTtcbiAgdG9nZ2xlRXZlbnQgPSBmYWxzZTtcblxuXG4gIGN1cnJlbnQ6IGFueSA9IHt9XG5cbiAgaW5WaWV3OiBhbnkgPSB7fTtcblxuICB0b2dnbGVTZWxlY3Q6IGFueSA9IGZhbHNlO1xuXG4gIGlzSG92ZXJlZFdpdGhEYXRhID0gXCJcIjtcblxuICBpZCA9IFwiXCI7XG5cbiAgYWN0aXZhdGVOZXdFdmVudCA9IGZhbHNlO1xuXG4gIGNsaWNrZWRPbiA9IFwiXCI7XG5cbiAgYm9va0V2ZW50ID0ge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgb246IDxhbnk+e31cbiAgfTtcblxuICBkcm9wcGVkRGF0YTogYW55ID0ge307XG5cbiAgZHJvcE9uRGF0ZTogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlcjogRGF0ZXJTZXJ2aWNlLCBwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5leGVjdXRlQWxsKCk7XG4gICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZS5tYWtlaWQoNCwgXCJjcmVhdGVOZXdFdmVudE92ZXJsYXlcIik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIkRpc2FibGVkPyBcIiwgdGhpcy5kaXNhYmxlZFJhbmdlKTtcbiAgICB0aGlzLmV4ZWN1dGVBbGwoKTtcbiAgfVxuXG4gIGV4ZWN1dGVBbGwoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplU3RhdGVzKCk7XG4gICAgdGhpcy51cGRhdGVEYXlzKHRoaXMuaW5WaWV3LnllYXIpO1xuICAgIHRoaXMuZm9ybWF0RXZlbnREYXRlcygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVN0YXRlcygpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB7XG4gICAgICBtb250aDogdGhpcy5kYXRlci5nZXRNb250aCgpLFxuICAgICAgbW9udGhJbldvcmRzOiB0aGlzLmRhdGVyLmdldE1vbnRocyh0aGlzLmRhdGVyLmdldE1vbnRoKCkpLFxuICAgICAgZGF0ZTogdGhpcy5kYXRlci5nZXREYXRlKCksXG4gICAgICB5ZWFyOiB0aGlzLmRhdGVyLmdldFllYXIoKSxcbiAgICAgIGRheUluTnVtOiB0aGlzLmRhdGVyLmdldERheSgpLFxuICAgICAgd2Vla0RheTogdGhpcy5kYXRlci5nZXRXZWVrRGF5KCksXG4gICAgICBob3VyOiB0aGlzLmRhdGVyLmdldEhvdXIoKSxcbiAgICAgIG1pbjogdGhpcy5kYXRlci5nZXRNaW51dGUoKSxcbiAgICAgIHNlYzogdGhpcy5kYXRlci5nZXRTZWNvbmRzKClcbiAgICB9O1xuICAgIHRoaXMubW9udGhzX2xvbmcgPSB0aGlzLmRhdGVyLmdldE1vbnRoc0xvbmcoKTtcbiAgICB0aGlzLm1vbnRoc19zaG9ydCA9IHRoaXMuZGF0ZXIuZ2V0TW9udGhzKCk7XG5cbiAgICB0aGlzLm1vbnRocyA9IHRoaXMuYWJicmV2aWF0aW9uID8gdGhpcy5tb250aHNfc2hvcnQgOiB0aGlzLm1vbnRoc19sb25nO1xuICAgIHRoaXMuaW5WaWV3ID0ge1xuICAgICAgbW9udGg6IHRoaXMuY3VycmVudC5tb250aCxcbiAgICAgIHllYXI6IHRoaXMuY3VycmVudC55ZWFyXG4gICAgfTtcbiAgfVxuXG4gIGZvcm1hdEV2ZW50RGF0ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ldmVudHNbaV0uZGF0ZU9iamVjdCA9IHtcbiAgICAgICAgZGF0ZTogdGhpcy5kYXRlci5nZXREYXRlKHRoaXMuZGF0ZXIuZGF0ZXIodGhpcy5ldmVudHNbaV0uZGF0ZSkpLFxuICAgICAgICBtb250aDogdGhpcy5kYXRlci5nZXRNb250aCh0aGlzLmRhdGVyLmRhdGVyKHRoaXMuZXZlbnRzW2ldLmRhdGUpKSxcbiAgICAgICAgeWVhcjogdGhpcy5kYXRlci5nZXRZZWFyKHRoaXMuZGF0ZXIuZGF0ZXIodGhpcy5ldmVudHNbaV0uZGF0ZSkpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGlzRGlzYWJsZWQoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaXNhYmxlZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpc2FibGVkX2RhdGUgPSB0aGlzLmRhdGVyLmRhdGVyKHRoaXMuZGlzYWJsZWRbaV0pO1xuICAgICAgaWYgKGQgPT0gdGhpcy5kYXRlci5nZXREYXRlKGRpc2FibGVkX2RhdGUpICYmIChtIC0gMSkgPT0gdGhpcy5kYXRlci5nZXRNb250aChkaXNhYmxlZF9kYXRlKSAmJiB5ID09IHRoaXMuZGF0ZXIuZ2V0WWVhcihkaXNhYmxlZF9kYXRlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdXNoRGlzYWJsZWQoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGxldCBkYXRlID0gYCR7ZH0gJHt0aGlzLm1vbnRoc1ttIC0gMV19ICR7eX1gO1xuICAgIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlZFJhbmdlLmFmdGVyID09IFwic3RyaW5nXCIgJiZcbiAgICAgIHRoaXMuZGF0ZXIuaXNHcmVhdGVyKGRhdGUsIHRoaXMuZGlzYWJsZWRSYW5nZS5hZnRlcikgJiZcbiAgICAgICF0aGlzLmRpc2FibGVkLmluY2x1ZGVzKGRhdGUpKSB7XG4gICAgICB0aGlzLmRpc2FibGVkLnB1c2goZGF0ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlZFJhbmdlLmJlZm9yZSA9PSBcInN0cmluZ1wiICYmXG4gICAgICB0aGlzLmRhdGVyLmlzTGVzc1RoYW4oZGF0ZSwgdGhpcy5kaXNhYmxlZFJhbmdlLmJlZm9yZSkgJiZcbiAgICAgICF0aGlzLmRpc2FibGVkLmluY2x1ZGVzKGRhdGUpKSB7XG4gICAgICB0aGlzLmRpc2FibGVkLnB1c2goZGF0ZSk7XG4gICAgfVxuICB9XG5cblxuICB1cGRhdGVEYXlzKHllYXI6IG51bWJlciA9IHRoaXMuY3VycmVudC55ZWFyKSB7XG4gICAgdGhpcy5kYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLm1vbnRocy5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIGxldCBvbk1vbnRoOiBhbnkgPSB7fTtcbiAgICAgIGxldCBmaXJzdERhdGUgPSB0aGlzLmRhdGVyLmRhdGVyKGAxLSR7dGhpcy5tb250aHNbaSAtIDFdfS0ke3llYXJ9YCk7XG4gICAgICBvbk1vbnRoLnRvdGFsRGF5cyA9IHRoaXMuZGF0ZXIuZGF5c0luTW9udGgoaSwgeWVhcik7XG4gICAgICBvbk1vbnRoLm5hbWUgPSB0aGlzLm1vbnRoc1tpIC0gMV07XG4gICAgICBvbk1vbnRoLm1vbnRoID0gaTtcbiAgICAgIG9uTW9udGguZGF0ZXMgPSBbXTtcbiAgICAgIG9uTW9udGguc3RhcnREYXkgPSB0aGlzLmRhdGVyLmdldERheShmaXJzdERhdGUpO1xuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG9uTW9udGguc3RhcnREYXk7IGsrKykge1xuICAgICAgICBsZXQgbXlEYVkgPSB7XG4gICAgICAgICAgbnVtOiAwLFxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMud2Vla0RheXNba10sXG4gICAgICAgICAgd2Vla0RheU51bTogayxcbiAgICAgICAgICBtb250aDogaSxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgb25Nb250aC5kYXRlcy5wdXNoKG15RGFZKTtcblxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gb25Nb250aC50b3RhbERheXM7IGorKykge1xuICAgICAgICB0aGlzLnB1c2hEaXNhYmxlZChqLCBpLCB5ZWFyKTtcbiAgICAgICAgbGV0IG15ZGF0ZSA9IHRoaXMuZGF0ZXIuZGF0ZXIoYCR7an0gJHt0aGlzLm1vbnRoc1tpIC0gMV19ICR7eWVhcn1gKTtcbiAgICAgICAgbGV0IG15RGFZID0ge1xuICAgICAgICAgIG51bTogaixcbiAgICAgICAgICB3ZWVrZGF5OiB0aGlzLndlZWtEYXlzW3RoaXMuZGF0ZXIuZ2V0RGF5KG15ZGF0ZSldLFxuICAgICAgICAgIHdlZWtEYXlOdW06IHRoaXMuZGF0ZXIuZ2V0RGF5KG15ZGF0ZSksXG4gICAgICAgICAgbW9udGg6IGksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZChqLCBpLCB5ZWFyKVxuICAgICAgICB9O1xuICAgICAgICBvbk1vbnRoLmRhdGVzLnB1c2gobXlEYVkpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXlzLnB1c2gob25Nb250aCk7XG4gICAgfVxuICB9XG5cbiAgaXNFdmVudGVkKGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBsZXQgYWxsRXZlbnRzOiBhbnkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZCA9PT0gdGhpcy5ldmVudHNbaV0uZGF0ZU9iamVjdC5kYXRlICYmIChtIC0gMSkgPT09IHRoaXMuZXZlbnRzW2ldLmRhdGVPYmplY3QubW9udGggJiYgeSA9PT0gdGhpcy5ldmVudHNbaV0uZGF0ZU9iamVjdC55ZWFyKSB7XG4gICAgICAgIGFsbEV2ZW50cy5wdXNoKHRoaXMuZXZlbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbEV2ZW50cy5sZW5ndGggPiAwID8gYWxsRXZlbnRzIDogZmFsc2U7XG4gIH1cblxuICBkb0J1enooZXZlbnREZXRhaWxzOiBhbnkgPSBbXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnREZXRhaWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZXZlbnREZXRhaWxzW2ldLmJ1enopIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIFwicGFkVi0xMFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09PSAyKSB7XG4gICAgICByZXR1cm4gXCJwYWRWLTIwXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNpemUgPT09IDMpIHtcbiAgICAgIHJldHVybiBcInBhZFYtMzBcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSA9PT0gNCkge1xuICAgICAgcmV0dXJuIFwicGFkVi00MFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJwYWRWLTUwXCI7XG4gICAgfVxuICB9XG5cbiAgZGF5Q2xhc3MoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlciwgZGlzYWJsZWQgPSBmYWxzZSkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IGAgJHt0aGlzLmdldFNpemUoKX1gO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5kcm9wem9uZUNsYXNzKGQsIG0sIHkpID8gXCIgc2NhbGUtMyBzaGFkb3ctMyBvdXRsaW5lLWdyZXkxMFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IGQgPT0gMCA/IFwiIGRheS1kaXNhYmxlZFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IGQgPT0gdGhpcy5jdXJyZW50LmRhdGUgJiYgbSAtIDEgPT0gdGhpcy5jdXJyZW50Lm1vbnRoICYmIHkgPT0gdGhpcy5jdXJyZW50LnllYXIgPyBcIiBhY3RpdmUtZGF5XCIgOiBcIlwiO1xuICAgIGxldCBldmVudGRldGFpbHMgPSB0aGlzLmlzRXZlbnRlZChkLCBtLCB5KTtcbiAgICByZXN1bHRzICs9ICFkaXNhYmxlZCAmJiBldmVudGRldGFpbHMgPyBcIiBoYXZlRXZlbnRcIiA6IFwiXCI7XG4gICAgcmVzdWx0cyArPSAhZGlzYWJsZWQgJiYgdGhpcy5kb0J1enooZXZlbnRkZXRhaWxzKSA/IFwiIGJ1enpcIiA6IFwiXCI7XG4gICAgcmVzdWx0cyArPSBkaXNhYmxlZCA/IFwiIGRheS1kaWFibGVkXCIgOiBcIlwiO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cblxuXG4gIG5leHRNb250aCgpIHtcbiAgICBpZiAodGhpcy5pblZpZXcubW9udGggPj0gMTEpIHtcbiAgICAgIHRoaXMuaW5WaWV3Lm1vbnRoID0gMDtcbiAgICAgIHRoaXMubmV4dFllYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pblZpZXcubW9udGgrKztcbiAgICB9XG4gIH1cblxuICBwcmV2TW9udGgoKSB7XG4gICAgaWYgKHRoaXMuaW5WaWV3Lm1vbnRoIDw9IDApIHtcbiAgICAgIHRoaXMuaW5WaWV3Lm1vbnRoID0gMTE7XG4gICAgICB0aGlzLnByZXZZZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5WaWV3Lm1vbnRoLS07XG4gICAgfVxuICB9XG5cblxuXG4gIG5leHRZZWFyKCkge1xuICAgIHRoaXMuaW5WaWV3LnllYXIrKztcbiAgICB0aGlzLnVwZGF0ZURheXModGhpcy5pblZpZXcueWVhcik7XG4gIH1cblxuICBwcmV2WWVhcigpIHtcbiAgICB0aGlzLmluVmlldy55ZWFyLS07XG4gICAgdGhpcy51cGRhdGVEYXlzKHRoaXMuaW5WaWV3LnllYXIpO1xuICB9XG5cblxuXG4gIGNsaWNrT25EYXkoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlciwgZGlzYWJsZWQgPSBmYWxzZSkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoYCR7ZH0gJHt0aGlzLm1vbnRoc1ttIC0gMV19ICR7eX1gKTtcbiAgICAgIGxldCBkYXRlVG9iZVNlbnQgPSB0aGlzLmRhdGVyLmZvcm1hdChkYXRlLCB0aGlzLmZvcm1hdCk7XG4gICAgICB0aGlzLmRheUlzQ2xpY2tlZC5lbWl0KHtcbiAgICAgICAgZGF0ZTogZCxcbiAgICAgICAgbW9udGg6IG0sXG4gICAgICAgIHllYXI6IHksXG4gICAgICAgIGRhdGVGb3JtYXR0ZWQ6IGRhdGVUb2JlU2VudFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXZlbnREZXRhaWxzVG9nZ2xlKGQsIG0sIHkpO1xuICAgICAgaWYgKCF0aGlzLnRvZ2dsZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmJvb2tFdmVudHMpIHtcbiAgICAgICAgICB0aGlzLm9wZW5OZXdFdmVudCgpO1xuICAgICAgICAgIHRoaXMuYm9va0V2ZW50Lm9uLmRhdGUgPSBkO1xuICAgICAgICAgIHRoaXMuYm9va0V2ZW50Lm9uLm1vbnRoID0gbTtcbiAgICAgICAgICB0aGlzLmJvb2tFdmVudC5vbi55ZWFyID0geTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWNrZWRPbiA9IHRoaXMuZGF0ZXIuZm9ybWF0KGRhdGUsIFwiZGQtTU0teXl5eVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cblxuICBzZXRCb29rRXZlbnQoZXZlbnQ6IGFueSwgdHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGUgPT0gXCJuYW1lXCIpIHtcbiAgICAgIHRoaXMuYm9va0V2ZW50Lm5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFwiZGVzY1wiKSB7XG4gICAgICB0aGlzLmJvb2tFdmVudC5kZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVOZXdFdmVudCgpIHtcbiAgICB0aGlzLm5ld0V2ZW50LmVtaXQodGhpcy5ib29rRXZlbnQpO1xuICAgIHRoaXMuYWN0aXZhdGVOZXdFdmVudCA9IGZhbHNlO1xuICB9XG5cblxuICBvcGVuTmV3RXZlbnQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZU5ld0V2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlTmV3RXZlbnQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZU5ld0V2ZW50ID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVPbkRheShldmVudDogYW55KSB7XG4gICAgdGhpcy5kcm9wcGVkRGF0YSA9IGV2ZW50O1xuICAgIHRoaXMuZGF5RHJvcC5lbWl0KHtcbiAgICAgIGRhdGE6IHRoaXMuZHJvcHBlZERhdGEsXG4gICAgICBkcm9wb246IHRoaXMuZHJvcE9uRGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRHJvcFpvbmUoZXZlbnQ6IGFueSwgb2JqOiBhbnkgPSB7fSkge1xuICAgIGlmIChldmVudCAmJiAhZXZlbnQuZHJvcHBlZCAmJiBldmVudC5kcmFnRW50ZXJlZCkge1xuICAgICAgdGhpcy5pc0hvdmVyZWRXaXRoRGF0YSA9IG9iaiAmJiBvYmouZGF0ZSAmJiBvYmoubW9udGggJiYgb2JqLnllYXIgPyBgJHtvYmouZGF0ZX0tJHtvYmoubW9udGh9LSR7b2JqLnllYXJ9YCA6IFwiXCI7XG4gICAgfSBlbHNlIGlmIChldmVudCAmJiBldmVudC5kcmFnTGVmdCkge1xuICAgICAgdGhpcy5pc0hvdmVyZWRXaXRoRGF0YSA9IFwiXCI7XG4gICAgfSBlbHNlIGlmIChldmVudC5kcm9wcGVkKSB7XG4gICAgICB0aGlzLmlzSG92ZXJlZFdpdGhEYXRhID0gXCJcIjtcbiAgICAgIHRoaXMuZHJvcE9uRGF0ZSA9IG9iajtcbiAgICB9XG4gIH1cblxuICBkcm9wem9uZUNsYXNzKGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBpZiAoYCR7ZH0tJHttfS0ke3l9YCA9PT0gdGhpcy5pc0hvdmVyZWRXaXRoRGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV2ZW50RGV0YWlsc1RvZ2dsZShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKCghdGhpcy50b2dnbGVTZWxlY3QpIHx8ICEodGhpcy50b2dnbGVTZWxlY3QuZGF0ZSA9PSBkICYmIHRoaXMudG9nZ2xlU2VsZWN0Lm1vbnRoID09IG0gJiYgdGhpcy50b2dnbGVTZWxlY3QueWVhciA9PSB5KSkge1xuICAgICAgbGV0IGV2ZW50ZGV0YWlsID0gdGhpcy5pc0V2ZW50ZWQoZCwgbSwgeSk7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdCA9IHtcbiAgICAgICAgZGF0ZTogZCxcbiAgICAgICAgbW9udGg6IG0sXG4gICAgICAgIHllYXI6IHksXG4gICAgICAgIGRhdGE6IGV2ZW50ZGV0YWlsXG4gICAgICB9O1xuICAgICAgaWYgKGV2ZW50ZGV0YWlsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRXZlbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdC5kYXRhID0gZXZlbnRkZXRhaWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvZ2dsZUV2ZW50ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYWxlbmRhclwiIFtuZ0NsYXNzXT1cIih0b2dnbGVFdmVudCA9PSB0cnVlID8gdGhlbWUgKyAnIGFjdGl2YXRlZEV2ZW50JyA6IHRoZW1lKSArICcgJyArIGNsYXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vbnRoLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb250aFwiICpuZ0Zvcj1cImxldCBtb250aCBvZiBtb250aHM7IGxldCBpID0gaW5kZXhcIiBbbmdDbGFzc109XCJpID09IGluVmlldy5tb250aCA/ICdhY3RpdmUnOiAnJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaW5mb1wiICpuZ0lmPVwiY29udHJvbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlvdXMteWVhclwiPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cInByZXZZZWFyKClcIiBbaW5uZXJIdG1sXT1cImljb25zLnllYXIucHJldmlvdXNcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpb3VzLW1vbnRoXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwicHJldk1vbnRoKClcIiBbaW5uZXJIdG1sXT1cImljb25zLm1vbnRoLnByZXZpb3VzXCI+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb250aC1uYW1lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbnRoU3BhblwiPnt7bW9udGh9fTwvc3Bhbj48c3BhbiBjbGFzcz1cInllYXJOYW1lXCI+e3tpblZpZXcueWVhcn19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXh0LW1vbnRoXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwibmV4dE1vbnRoKClcIiBbaW5uZXJIdG1sXT1cImljb25zLm1vbnRoLm5leHRcIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5leHQteWVhclwiPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm5leHRZZWFyKCkgIFwiIFtpbm5lckh0bWxdPVwiaWNvbnMueWVhci5uZXh0XCI+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWtkYXlzXCI+XG4gICAgICAgICAgPHAgKm5nRm9yPVwibGV0IHdrZGF5IG9mIHdlZWtEYXlzXCI+e3t3a2RheX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLWRheXNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkIG9mIGRheXNbaV0uZGF0ZXNcIj5cbiAgICAgICAgICAgIDxtZy1kcm9wYWJsZSAoZGF0YVJlY2lldmVkKT1cInVwZGF0ZU9uRGF5KCRldmVudClcIiAob25FdmVudCk9XCJoYW5kbGVEcm9wWm9uZSgkZXZlbnQsIHtkYXRlOiBkLm51bSwgbW9udGg6IGQubW9udGgsIHllYXI6IGluVmlldy55ZWFyfSlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheVwiIFtuZ0NsYXNzXT1cImRheUNsYXNzKGQubnVtLCBkLm1vbnRoLCBpblZpZXcueWVhciwgZC5kaXNhYmxlZClcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tPbkRheShkLm51bSwgZC5tb250aCwgaW5WaWV3LnllYXIsIGQuZGlzYWJsZWQpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImQubnVtID09IDBcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZC5udW0gIT0gMFwiPnt7ZC5udW19fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWctZHJvcGFibGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV2ZW50LWRldGFpbHNcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b2dnbGVTZWxlY3QuZGF0YVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBldmVudERhdGEgb2YgdG9nZ2xlU2VsZWN0LmRhdGFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1pbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPG1nLWRyYWdhYmxlIFtkcmFnZ2FibGVdPVwidHJ1ZVwiIFtkYXRhXT1cImV2ZW50RGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1kZXRhaWwtdGl0bGVcIiBbaW5uZXJIdG1sXT1cImV2ZW50RGF0YS5uYW1lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWRldGFpbC1kYXRlXCIgW2lubmVySHRtbF09XCJldmVudERhdGEuZGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L21nLWRyYWdhYmxlPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWRldGFpbC1kZXNjcmlwdGlvblwiIFtpbm5lckh0bWxdPVwiZXZlbnREYXRhLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPG1nLW92ZXJsYXkgYmdDbGFzcz1cImdyZXkyXCIgW2lkXT1cImlkXCIgY2FudmFzUG9zaXRpb249XCJib3R0b21cIiBvZmZTaXplPVwiMlwiIFthY3RpdmVdPVwiYWN0aXZhdGVOZXdFdmVudFwiIChpc0Nsb3NlZCk9XCJjbG9zZU5ld0V2ZW50KClcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFkLTEwXCI+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWdyZXk4IG1hcmdpblYtMTVcIj5Cb29rIGFuIGV2ZW50IG9uIDxzbWFsbCBjbGFzcz1cImZvbnQtMTUgdGV4dC1yZWQ4XCI+e3sgY2xpY2tlZE9uIH19PC9zbWFsbD4gPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sIG0xMiBsMTIgczEyXCI+XG4gICAgICAgIDxtZy1pbnB1dCBsYWJlbD1cIkV2ZW50IE5hbWVcIiBmU3R5bGU9XCJtYXRlcmlhbFwiIGNsYXNzPVwibWFyZ2luVC01XCIgKGtleXVwKT1cInNldEJvb2tFdmVudCgkZXZlbnQsICduYW1lJylcIj48L21nLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbCBtMTIgbDEyIHMxMlwiPlxuICAgICAgICA8bWctdGV4dCBsYWJlbD1cIkV2ZW50IERlc2NyaXB0aW9uXCIgZlN0eWxlPVwibWF0ZXJpYWxcIiBjbGFzcz1cIm1hcmdpbi01XCIgKGtleXVwKT1cInNldEJvb2tFdmVudCgkZXZlbnQsICdkZXNjJylcIj48L21nLXRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbTEyIGwxMiBzMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICA8bWctYnV0dG9uIChjbGljayk9XCJjcmVhdGVOZXdFdmVudCgpXCIgdGhlbWU9XCJzdWNjZXNzXCI+Qm9vayBhbiBldmVudCA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+PC9tZy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9tZy1vdmVybGF5PiJdfQ==