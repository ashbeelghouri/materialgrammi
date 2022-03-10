import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CountdownComponent {
    constructor() {
        this.till = "25 December 2050";
        this.expiredText = "expired";
        this.parseProperties = {
            day: "day",
            days: "days",
            hour: "hour",
            hours: "hours",
            minute: "minute",
            minutes: "minutes",
            second: "second",
            seconds: "seconds"
        };
        this.class = "";
        this.timeover = new EventEmitter(false);
        this.endDate = new Date();
        this.display = "";
    }
    ngAfterContentInit() {
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
        var one_day = 1000 * 60 * 60 * 24;
        // To set present_dates to two variables
        var present_date = new Date();
        // 0-11 is Month in JavaScript
        var christmas_day = this.endDate;
        // To Calculate next year's Christmas if passed already.
        if (present_date.getMonth() == 11 && present_date.getDate() > 25)
            christmas_day.setFullYear(christmas_day.getFullYear() + 1);
        // To Calculate the result in milliseconds and then converting into days
        var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);
        // To remove the decimals from the (Result) resulting days value
        return parseInt((Result).toFixed(0));
    }
    updateDisplay(amount, unit = "d") {
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
CountdownComponent.ɵfac = function CountdownComponent_Factory(t) { return new (t || CountdownComponent)(); };
CountdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CountdownComponent, selectors: [["mg-countdown"]], inputs: { till: "till", expiredText: "expiredText", parseProperties: "parseProperties", class: "class" }, outputs: { timeover: "timeover" }, decls: 2, vars: 2, consts: [[3, "innerHtml", "ngClass"]], template: function CountdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelement(1, "span", 0);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.display, i0.ɵɵsanitizeHtml)("ngClass", ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountdownComponent, [{
        type: Component,
        args: [{ selector: 'mg-countdown', template: "<ng-container><span [innerHtml]=\"display\" [ngClass]=\"class\"></span></ng-container>\n", styles: [""] }]
    }], function () { return []; }, { till: [{
            type: Input
        }], expiredText: [{
            type: Input
        }], parseProperties: [{
            type: Input
        }], class: [{
            type: Input
        }], timeover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb3VudGRvd24vY291bnRkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb3VudGRvd24vY291bnRkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQW9CLE1BQU0sZUFBZSxDQUFDOzs7QUFPakcsTUFBTSxPQUFPLGtCQUFrQjtJQXNCN0I7UUFyQlMsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBQzFCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUc7WUFDekIsR0FBRyxFQUFFLEtBQUs7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsU0FBUztTQUNuQixDQUFDO1FBQ08sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVWLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxZQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVyQixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBR0csQ0FBQztJQUVqQixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FB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dXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1jb3VudGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRkb3duLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgdGlsbCA9IFwiMjUgRGVjZW1iZXIgMjA1MFwiO1xuICBASW5wdXQoKSBleHBpcmVkVGV4dCA9IFwiZXhwaXJlZFwiO1xuICBASW5wdXQoKSBwYXJzZVByb3BlcnRpZXMgPSB7XG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5c1wiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlc1wiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZHNcIlxuICB9O1xuICBASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG5cbiAgQE91dHB1dCgpIHRpbWVvdmVyID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgZGlzcGxheSA9IFwiXCI7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLnRpbGwpOyAgXG4gICAgdGhpcy5jb3VudCgpO1xuICB9XG5cbiAgY291bnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciBkaXN0YW5jZSA9IF90aGlzLmVuZERhdGUuZ2V0VGltZSgpIC0gbm93O1xuXG4gICAgICB2YXIgZGF5cyA9IF90aGlzLmdldERheXMoKTtcbiAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgX3RoaXMuZGlzcGxheSA9IFwiPHNwYW4gY2xhc3M9J2NvdW50ZG93bi1kYXlzJz5cIiArIGRheXMgKyBcIiBcIiArIF90aGlzLnVwZGF0ZURpc3BsYXkoZGF5cywgXCJkXCIpICsgXCI8L3NwYW4+PHNwYW4gY2xhc3M9J2NvdW50ZG93bi1ob3Vycyc+IFwiICsgaG91cnMgKyBcIiBcIiArIF90aGlzLnVwZGF0ZURpc3BsYXkoaG91cnMsIFwiaFwiKSArIFwiIDwvc3Bhbj48c3BhbiBjbGFzcz0nY291bnRkb3duLW1pbnV0ZXMnPlwiXG4gICAgICAgICsgbWludXRlcyArIFwiIFwiICsgX3RoaXMudXBkYXRlRGlzcGxheShtaW51dGVzLCBcIm1cIikgKyBcIjwvc3Bhbj48c3BhbiBjbGFzcz0nY291bnRkb3duLXNlY29uZHMnPiBcIiArIHNlY29uZHMgKyBcIiBcIiArIF90aGlzLnVwZGF0ZURpc3BsYXkoc2Vjb25kcywgXCJzXCIpICsgXCI8L3NwYW4+XCI7XG4gICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XG4gICAgICAgIF90aGlzLmRpc3BsYXkgPSBfdGhpcy5leHBpcmVkVGV4dDtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGdldERheXMoKSB7XG4gICAgLy8gT25lIGRheSBUaW1lIGluIG1zIChtaWxsaXNlY29uZHMpXG4gICAgdmFyIG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0XG5cbiAgICAvLyBUbyBzZXQgcHJlc2VudF9kYXRlcyB0byB0d28gdmFyaWFibGVzXG4gICAgdmFyIHByZXNlbnRfZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyAwLTExIGlzIE1vbnRoIGluIEphdmFTY3JpcHRcbiAgICB2YXIgY2hyaXN0bWFzX2RheSA9IHRoaXMuZW5kRGF0ZTtcblxuICAgIC8vIFRvIENhbGN1bGF0ZSBuZXh0IHllYXIncyBDaHJpc3RtYXMgaWYgcGFzc2VkIGFscmVhZHkuXG4gICAgaWYgKHByZXNlbnRfZGF0ZS5nZXRNb250aCgpID09IDExICYmIHByZXNlbnRfZGF0ZS5nZXREYXRlKCkgPiAyNSlcbiAgICAgIGNocmlzdG1hc19kYXkuc2V0RnVsbFllYXIoY2hyaXN0bWFzX2RheS5nZXRGdWxsWWVhcigpICsgMSlcblxuICAgIC8vIFRvIENhbGN1bGF0ZSB0aGUgcmVzdWx0IGluIG1pbGxpc2Vjb25kcyBhbmQgdGhlbiBjb252ZXJ0aW5nIGludG8gZGF5c1xuICAgIHZhciBSZXN1bHQgPSBNYXRoLnJvdW5kKGNocmlzdG1hc19kYXkuZ2V0VGltZSgpIC0gcHJlc2VudF9kYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSk7XG5cbiAgICAvLyBUbyByZW1vdmUgdGhlIGRlY2ltYWxzIGZyb20gdGhlIChSZXN1bHQpIHJlc3VsdGluZyBkYXlzIHZhbHVlXG4gICAgcmV0dXJuIHBhcnNlSW50KChSZXN1bHQpLnRvRml4ZWQoMCkpO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheShhbW91bnQ6IG51bWJlciwgdW5pdDogc3RyaW5nID0gXCJkXCIpIHtcbiAgICBpZiAodW5pdCA9PSBcImRcIikge1xuICAgICAgcmV0dXJuIGFtb3VudCA+IDEgPyB0aGlzLnBhcnNlUHJvcGVydGllcy5kYXlzIDogdGhpcy5wYXJzZVByb3BlcnRpZXMuZGF5O1xuICAgIH1cbiAgICBpZiAodW5pdCA9PSBcImhcIikge1xuICAgICAgcmV0dXJuIGFtb3VudCA+IDEgPyB0aGlzLnBhcnNlUHJvcGVydGllcy5ob3VycyA6IHRoaXMucGFyc2VQcm9wZXJ0aWVzLmhvdXI7XG4gICAgfVxuICAgIGlmICh1bml0ID09IFwibVwiKSB7XG4gICAgICByZXR1cm4gYW1vdW50ID4gMSA/IHRoaXMucGFyc2VQcm9wZXJ0aWVzLm1pbnV0ZXMgOiB0aGlzLnBhcnNlUHJvcGVydGllcy5taW51dGU7XG4gICAgfVxuICAgIGlmICh1bml0ID09IFwic1wiKSB7XG4gICAgICByZXR1cm4gYW1vdW50ID4gMSA/IHRoaXMucGFyc2VQcm9wZXJ0aWVzLnNlY29uZHMgOiB0aGlzLnBhcnNlUHJvcGVydGllcy5zZWNvbmQ7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cblxufVxuIiwiPG5nLWNvbnRhaW5lcj48c3BhbiBbaW5uZXJIdG1sXT1cImRpc3BsYXlcIiBbbmdDbGFzc109XCJjbGFzc1wiPjwvc3Bhbj48L25nLWNvbnRhaW5lcj5cbiJdfQ==