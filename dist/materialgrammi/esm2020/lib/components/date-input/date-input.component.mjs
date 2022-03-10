import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../input/input.component";
import * as i3 from "../calendar/calendar.component";
const _c0 = function () { return []; };
export class DateInputComponent {
    constructor() {
        this.input = {
            theme: "success",
            style: "control",
            control: new FormControl(''),
            darkmode: false,
            class: ""
        };
        this.label = "Select Date";
        this.class = "";
        this.calendar = {
            disabled: [],
            theme: "success",
            abbreviation: true
        };
        this.disabledRange = {
            before: false,
            after: false
        };
        this.icons = {
            close: `<i class="fas fa-times"></i>`
        };
        this.format = "dd-MM-yyyy";
        this.getdate = new EventEmitter();
        this.active = false;
        this.textValue = "";
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
    }
    calendarClass() {
        let classes = "";
        classes += this.active ? "active" : "";
        return classes;
    }
    inputFocused(event) {
        if (event) {
            this.active = event;
        }
        else {
            let $this = this;
            setTimeout(function () {
                $this.active = event;
            }, 100);
        }
    }
    dateSelected(event) {
        if (event && event.dateFormatted) {
            this.textValue = event.dateFormatted;
            this.getdate.emit(this.textValue);
        }
    }
}
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(); };
DateInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateInputComponent, selectors: [["mg-date"]], inputs: { input: "input", label: "label", class: "class", calendar: "calendar", disabledRange: "disabledRange", icons: "icons", format: "format" }, outputs: { getdate: "getdate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 20, consts: [[3, "ngClass", "click", "focusin", "mouseleave"], ["type", "text", 3, "theme", "label", "placeholder", "control", "textValue", "onDark"], [1, "calendar-input", "pad-10", 3, "ngClass"], [1, "text-right"], [1, "font-20", "grey3", "text-grey8", "hover-grey2", "text-hover-grey10", "shadow-1", "padH-13", "radius-50", "padV-5", 2, "position", "absolute", "right", "20px", "margin-top", "-10px", 3, "innerHtml", "click"], [3, "theme", "disabled", "events", "abbreviation", "format", "disabledRange", "dayIsClicked"]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DateInputComponent_Template_div_click_0_listener() { return ctx.active = true; })("focusin", function DateInputComponent_Template_div_focusin_0_listener() { return ctx.inputFocused(true); })("mouseleave", function DateInputComponent_Template_div_mouseleave_0_listener() { return ctx.inputFocused(false); });
        i0.ɵɵelement(1, "mg-input", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "p", 3);
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵlistener("click", function DateInputComponent_Template_a_click_4_listener() { return ctx.active = false; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mg-calendar", 5);
        i0.ɵɵlistener("dayIsClicked", function DateInputComponent_Template_mg_calendar_dayIsClicked_5_listener($event) { return ctx.dateSelected($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.input.style);
        i0.ɵɵclassMap(ctx.input.class);
        i0.ɵɵproperty("theme", ctx.input.theme)("label", ctx.label)("placeholder", ctx.format)("control", ctx.input.control)("textValue", ctx.textValue)("onDark", ctx.input.darkmode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.calendarClass());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.icons.close, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("theme", ctx.calendar.theme)("disabled", ctx.calendar.disabled)("events", i0.ɵɵpureFunction0(19, _c0))("abbreviation", ctx.calendar.abbreviation)("format", ctx.format)("disabledRange", ctx.disabledRange);
    } }, directives: [i1.NgClass, i2.InputComponent, i3.CalendarComponent], styles: [".calendar-input[_ngcontent-%COMP%]{display:none}.calendar-input.active[_ngcontent-%COMP%]{display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateInputComponent, [{
        type: Component,
        args: [{ selector: 'mg-date', template: "<div (click)=\"active = true\"  (focusin)=\"inputFocused(true)\" (mouseleave)=\"inputFocused(false)\" [ngClass]=\"class\">\n    <mg-input [theme]=\"input.theme\" [style]=\"input.style\" [label]=\"label\" \n    [placeholder] = \"format\" [control]=\"input.control\" type=\"text\" \n    [textValue]=\"textValue\" [onDark]=\"input.darkmode\" [class]=\"input.class\"></mg-input>\n    <div class=\"calendar-input pad-10\" [ngClass]=\"calendarClass()\">\n        <p class=\"text-right\">\n            <a [innerHtml]=\"icons.close\" \n            class=\"font-20 grey3 text-grey8 \n            hover-grey2 text-hover-grey10 \n            shadow-1 padH-13 radius-50 padV-5\" \n            style=\"position: absolute; right: 20px; margin-top: -10px;\" \n            (click)=\"active = false\"></a>\n        </p>\n        \n        <mg-calendar (dayIsClicked)=\"dateSelected($event)\" [theme]=\"calendar.theme\" \n        [disabled]=\"calendar.disabled\" [events]=\"[]\" [abbreviation] = \"calendar.abbreviation\"\n        [format]=\"format\" [disabledRange]=\"disabledRange\"></mg-calendar>\n    </div>\n</div>\n\n\n", styles: [".calendar-input{display:none}.calendar-input.active{display:block}\n"] }]
    }], function () { return []; }, { input: [{
            type: Input
        }], label: [{
            type: Input
        }], class: [{
            type: Input
        }], calendar: [{
            type: Input
        }], disabledRange: [{
            type: Input
        }], icons: [{
            type: Input
        }], format: [{
            type: Input
        }], getdate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS1pbnB1dC9kYXRlLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kYXRlLWlucHV0L2RhdGUtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBUTdDLE1BQU0sT0FBTyxrQkFBa0I7SUFvQzdCO1FBbkNTLFVBQUssR0FBRztZQUNmLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDNUIsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFFTyxVQUFLLEdBQUcsYUFBYSxDQUFDO1FBRXRCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxhQUFRLEdBQXlCO1lBQ3hDLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLFNBQVM7WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUlPLGtCQUFhLEdBQWtCO1lBQ3RDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDO1FBRU8sVUFBSyxHQUFHO1lBQ2YsS0FBSyxFQUFFLDhCQUE4QjtTQUN0QyxDQUFDO1FBRU8sV0FBTSxHQUFHLFlBQVksQ0FBQztRQUVyQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUUvQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFDbEMsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsVUFBVSxDQUFDO2dCQUNULEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7O29GQWxFVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ1QvQiw4QkFBa0g7UUFBN0cseUdBQWtCLElBQUksSUFBQyxtRkFBYSxpQkFBYSxJQUFJLENBQUMsSUFBL0IseUZBQStDLGlCQUFhLEtBQUssQ0FBQyxJQUFsRTtRQUN4Qiw4QkFFbUY7UUFDbkYsOEJBQStEO1FBQzNELDRCQUFzQjtRQUNsQiw0QkFLeUI7UUFBekIsdUdBQWtCLEtBQUssSUFBQztRQUFDLGlCQUFJO1FBQ2pDLGlCQUFJO1FBRUosc0NBRWtEO1FBRnJDLHdIQUFnQix3QkFBb0IsSUFBQztRQUVBLGlCQUFjO1FBQ3BFLGlCQUFNO1FBQ1YsaUJBQU07O1FBbEIwRixtQ0FBaUI7UUFDN0UsZUFBcUI7UUFBckIsOEJBQXFCO1FBRUgsOEJBQXFCO1FBRjdELHVDQUFxQixvQkFBQSwyQkFBQSw4QkFBQSw0QkFBQSw4QkFBQTtRQUdJLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUVuRCxlQUF5QjtRQUF6Qiw4REFBeUI7UUFRbUIsZUFBd0I7UUFBeEIsMENBQXdCLG1DQUFBLHVDQUFBLDJDQUFBLHNCQUFBLG9DQUFBOzt1RkRMdEUsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0UsU0FBUztzQ0FLVixLQUFLO2tCQUFiLEtBQUs7WUFRRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxRQUFRO2tCQUFoQixLQUFLO1lBUUcsYUFBYTtrQkFBckIsS0FBSztZQUtHLEtBQUs7a0JBQWIsS0FBSztZQUlHLE1BQU07a0JBQWQsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJGb3JEYXRlSW5wdXQsIERpc2FibGVkUmFuZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpbnB1dCA9IHtcbiAgICB0aGVtZTogXCJzdWNjZXNzXCIsXG4gICAgc3R5bGU6IFwiY29udHJvbFwiLFxuICAgIGNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbCgnJyksXG4gICAgZGFya21vZGU6IGZhbHNlLFxuICAgIGNsYXNzOiBcIlwiXG4gIH07XG5cbiAgQElucHV0KCkgbGFiZWwgPSBcIlNlbGVjdCBEYXRlXCI7XG5cbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBDYWxlbmRhckZvckRhdGVJbnB1dCA9IHtcbiAgICBkaXNhYmxlZDogW10sXG4gICAgdGhlbWU6IFwic3VjY2Vzc1wiLFxuICAgIGFiYnJldmlhdGlvbjogdHJ1ZVxuICB9O1xuXG4gIFxuXG4gIEBJbnB1dCgpIGRpc2FibGVkUmFuZ2U6IERpc2FibGVkUmFuZ2UgPSB7XG4gICAgYmVmb3JlOiBmYWxzZSwgXG4gICAgYWZ0ZXI6IGZhbHNlXG4gIH07XG5cbiAgQElucHV0KCkgaWNvbnMgPSB7XG4gICAgY2xvc2U6IGA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5gXG4gIH07XG5cbiAgQElucHV0KCkgZm9ybWF0ID0gXCJkZC1NTS15eXl5XCI7XG5cbiAgQE91dHB1dCgpIGdldGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPFN0cmluZz4oKTtcblxuICBhY3RpdmUgPSBmYWxzZTtcbiAgdGV4dFZhbHVlID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgfVxuXG4gIGNhbGVuZGFyQ2xhc3MoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBcIlwiO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGlucHV0Rm9jdXNlZChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0aGlzLmFjdGl2ZSA9IGV2ZW50O1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBkYXRlU2VsZWN0ZWQoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudCAmJiBldmVudC5kYXRlRm9ybWF0dGVkKSB7XG4gICAgICB0aGlzLnRleHRWYWx1ZSA9IGV2ZW50LmRhdGVGb3JtYXR0ZWQ7XG4gICAgICB0aGlzLmdldGRhdGUuZW1pdCh0aGlzLnRleHRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkaXYgKGNsaWNrKT1cImFjdGl2ZSA9IHRydWVcIiAgKGZvY3VzaW4pPVwiaW5wdXRGb2N1c2VkKHRydWUpXCIgKG1vdXNlbGVhdmUpPVwiaW5wdXRGb2N1c2VkKGZhbHNlKVwiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gICAgPG1nLWlucHV0IFt0aGVtZV09XCJpbnB1dC50aGVtZVwiIFtzdHlsZV09XCJpbnB1dC5zdHlsZVwiIFtsYWJlbF09XCJsYWJlbFwiIFxuICAgIFtwbGFjZWhvbGRlcl0gPSBcImZvcm1hdFwiIFtjb250cm9sXT1cImlucHV0LmNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIFxuICAgIFt0ZXh0VmFsdWVdPVwidGV4dFZhbHVlXCIgW29uRGFya109XCJpbnB1dC5kYXJrbW9kZVwiIFtjbGFzc109XCJpbnB1dC5jbGFzc1wiPjwvbWctaW5wdXQ+XG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWlucHV0IHBhZC0xMFwiIFtuZ0NsYXNzXT1cImNhbGVuZGFyQ2xhc3MoKVwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxhIFtpbm5lckh0bWxdPVwiaWNvbnMuY2xvc2VcIiBcbiAgICAgICAgICAgIGNsYXNzPVwiZm9udC0yMCBncmV5MyB0ZXh0LWdyZXk4IFxuICAgICAgICAgICAgaG92ZXItZ3JleTIgdGV4dC1ob3Zlci1ncmV5MTAgXG4gICAgICAgICAgICBzaGFkb3ctMSBwYWRILTEzIHJhZGl1cy01MCBwYWRWLTVcIiBcbiAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMjBweDsgbWFyZ2luLXRvcDogLTEwcHg7XCIgXG4gICAgICAgICAgICAoY2xpY2spPVwiYWN0aXZlID0gZmFsc2VcIj48L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgXG4gICAgICAgIDxtZy1jYWxlbmRhciAoZGF5SXNDbGlja2VkKT1cImRhdGVTZWxlY3RlZCgkZXZlbnQpXCIgW3RoZW1lXT1cImNhbGVuZGFyLnRoZW1lXCIgXG4gICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlZFwiIFtldmVudHNdPVwiW11cIiBbYWJicmV2aWF0aW9uXSA9IFwiY2FsZW5kYXIuYWJicmV2aWF0aW9uXCJcbiAgICAgICAgW2Zvcm1hdF09XCJmb3JtYXRcIiBbZGlzYWJsZWRSYW5nZV09XCJkaXNhYmxlZFJhbmdlXCI+PC9tZy1jYWxlbmRhcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG5cbiJdfQ==