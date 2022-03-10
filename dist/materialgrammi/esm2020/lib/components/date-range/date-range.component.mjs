import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../date-input/date-input.component";
export class DateRangeComponent {
    constructor() {
        this.labels = {
            start: "start date",
            end: "end date"
        };
        this.style = {
            input: {
                theme: "success",
                style: "control",
                darkmode: false,
                class: ""
            },
            calendar: {
                disabled: [],
                theme: "success"
            }
        };
        this.class = "";
        this.disable_range_start = {
            before: false,
            after: false
        };
        this.disable_range_end = {
            before: false,
            after: false
        };
        this.selected = {
            startdate: false,
            enddate: false
        };
        this.range = new EventEmitter();
    }
    ngOnInit() {
        this.initInput();
    }
    ngOnChanges() {
        this.initInput();
    }
    initInput() {
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
    selectedStartDate(event) {
        this.disable_range_end.before = event;
        this.selected.startdate = event;
        this.range.emit(this.selected);
    }
    selectedEndDate(event) {
        this.disable_range_start.after = event;
        this.selected.enddate = event;
        this.range.emit(this.selected);
    }
}
DateRangeComponent.ɵfac = function DateRangeComponent_Factory(t) { return new (t || DateRangeComponent)(); };
DateRangeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateRangeComponent, selectors: [["mg-daterange"]], inputs: { labels: "labels", style: "style", class: "class" }, outputs: { range: "range" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 7, consts: [[1, "row", 3, "ngClass"], [1, "col", "m6", "l6", "s12"], [1, "padR-3"], [3, "input", "label", "disabledRange", "getdate"], [1, "padL-3"], [3, "input", "disabledRange", "label", "getdate"]], template: function DateRangeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "mg-date", 3);
        i0.ɵɵlistener("getdate", function DateRangeComponent_Template_mg_date_getdate_3_listener($event) { return ctx.selectedStartDate($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "mg-date", 5);
        i0.ɵɵlistener("getdate", function DateRangeComponent_Template_mg_date_getdate_6_listener($event) { return ctx.selectedEndDate($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("input", ctx.formattedInput.one)("label", ctx.labels.start)("disabledRange", ctx.disable_range_start);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("input", ctx.formattedInput.two)("disabledRange", ctx.disable_range_end)("label", ctx.labels.end);
    } }, directives: [i1.NgClass, i2.DateInputComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateRangeComponent, [{
        type: Component,
        args: [{ selector: 'mg-daterange', template: "<div class=\"row\" [ngClass]=\"class\">\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padR-3\">\n            <mg-date [input]=\"formattedInput.one\" [label]=\"labels.start\" \n            [disabledRange] = \"disable_range_start\"\n            (getdate)=\"selectedStartDate($event)\"></mg-date>\n        </div>\n    </div>\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padL-3\">\n            <mg-date [input]=\"formattedInput.two\" \n            [disabledRange] = \"disable_range_end\"\n            [label]=\"labels.end\" (getdate)=\"selectedEndDate($event)\"></mg-date>\n        </div>\n    </div>\n</div>", styles: [""] }]
    }], function () { return []; }, { labels: [{
            type: Input
        }], style: [{
            type: Input
        }], class: [{
            type: Input
        }], range: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS1yYW5nZS9kYXRlLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kYXRlLXJhbmdlL2RhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWE3QyxNQUFNLE9BQU8sa0JBQWtCO0lBd0M3QjtRQXZDUyxXQUFNLEdBQUc7WUFDaEIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLFVBQVU7U0FDaEIsQ0FBQztRQUVPLFVBQUssR0FBRztZQUNmLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLFNBQVM7YUFDakI7U0FDRixDQUFDO1FBRU8sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUtwQix3QkFBbUIsR0FBa0I7WUFDbkMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7UUFFRixzQkFBaUIsR0FBa0I7WUFDakMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7UUFFRixhQUFRLEdBQWtCO1lBQ3hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQTtRQUVTLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsR0FBRyxFQUFFO2dCQUNILEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3BCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3BCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7b0ZBekVVLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDZC9CLDhCQUFtQztRQUMvQiw4QkFBMkI7UUFDdkIsOEJBQW9CO1FBQ2hCLGtDQUVzQztRQUF0QywwR0FBVyw2QkFBeUIsSUFBQztRQUFDLGlCQUFVO1FBQ3BELGlCQUFNO1FBQ1YsaUJBQU07UUFDTiw4QkFBMkI7UUFDdkIsOEJBQW9CO1FBQ2hCLGtDQUV5RDtRQUFwQywwR0FBVywyQkFBdUIsSUFBQztRQUFDLGlCQUFVO1FBQ3ZFLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTs7UUFmVyxtQ0FBaUI7UUFHYixlQUE0QjtRQUE1Qiw4Q0FBNEIsMkJBQUEsMENBQUE7UUFPNUIsZUFBNEI7UUFBNUIsOENBQTRCLHdDQUFBLHlCQUFBOzt1RkRJcEMsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0UsY0FBYztzQ0FLZixNQUFNO2tCQUFkLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFhRyxLQUFLO2tCQUFiLEtBQUs7WUFvQkksS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJhbmdlU2VsZWN0ZWQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBEaXNhYmxlZFJhbmdlIHtcbiAgYmVmb3JlOiBmYWxzZSB8IHN0cmluZyB8IERhdGUsXG4gIGFmdGVyOiBmYWxzZSB8IHN0cmluZyB8IERhdGVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctZGF0ZXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXJhbmdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxhYmVscyA9IHtcbiAgICBzdGFydDogXCJzdGFydCBkYXRlXCIsXG4gICAgZW5kOiBcImVuZCBkYXRlXCJcbiAgfTtcblxuICBASW5wdXQoKSBzdHlsZSA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgdGhlbWU6IFwic3VjY2Vzc1wiLFxuICAgICAgc3R5bGU6IFwiY29udHJvbFwiLFxuICAgICAgZGFya21vZGU6IGZhbHNlLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIGNhbGVuZGFyOiB7XG4gICAgICBkaXNhYmxlZDogW10sXG4gICAgICB0aGVtZTogXCJzdWNjZXNzXCJcbiAgICB9XG4gIH07XG5cbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIGZvcm1hdHRlZElucHV0Pzphbnk7XG5cblxuICBkaXNhYmxlX3JhbmdlX3N0YXJ0OiBEaXNhYmxlZFJhbmdlID0ge1xuICAgIGJlZm9yZTogZmFsc2UsXG4gICAgYWZ0ZXI6IGZhbHNlXG4gIH07XG5cbiAgZGlzYWJsZV9yYW5nZV9lbmQ6IERpc2FibGVkUmFuZ2UgPSB7XG4gICAgYmVmb3JlOiBmYWxzZSxcbiAgICBhZnRlcjogZmFsc2VcbiAgfTtcblxuICBzZWxlY3RlZDogUmFuZ2VTZWxlY3RlZCA9IHtcbiAgICBzdGFydGRhdGU6IGZhbHNlLFxuICAgIGVuZGRhdGU6IGZhbHNlXG4gIH1cblxuICBAT3V0cHV0KCkgcmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0SW5wdXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5pbml0SW5wdXQoKTtcbiAgfVxuXG4gIGluaXRJbnB1dCgpe1xuICAgIHRoaXMuZm9ybWF0dGVkSW5wdXQgPSB7XG4gICAgICBvbmU6IHtcbiAgICAgICAgLi4udGhpcy5zdHlsZS5pbnB1dFxuICAgICAgfSxcbiAgICAgIHR3bzoge1xuICAgICAgICAuLi50aGlzLnN0eWxlLmlucHV0XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZvcm1hdHRlZElucHV0Lm9uZS5jb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgdGhpcy5mb3JtYXR0ZWRJbnB1dC50d28uY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICB9XG5cbiAgc2VsZWN0ZWRTdGFydERhdGUoZXZlbnQ6IGFueSl7XG4gICAgdGhpcy5kaXNhYmxlX3JhbmdlX2VuZC5iZWZvcmUgPSBldmVudDtcbiAgICB0aGlzLnNlbGVjdGVkLnN0YXJ0ZGF0ZSA9IGV2ZW50O1xuICAgIHRoaXMucmFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIHNlbGVjdGVkRW5kRGF0ZShldmVudDogYW55KXtcbiAgICB0aGlzLmRpc2FibGVfcmFuZ2Vfc3RhcnQuYWZ0ZXIgPSBldmVudDtcbiAgICB0aGlzLnNlbGVjdGVkLmVuZGRhdGUgPSBldmVudDtcbiAgICB0aGlzLnJhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInJvd1wiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbCBtNiBsNiBzMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZFItM1wiPlxuICAgICAgICAgICAgPG1nLWRhdGUgW2lucHV0XT1cImZvcm1hdHRlZElucHV0Lm9uZVwiIFtsYWJlbF09XCJsYWJlbHMuc3RhcnRcIiBcbiAgICAgICAgICAgIFtkaXNhYmxlZFJhbmdlXSA9IFwiZGlzYWJsZV9yYW5nZV9zdGFydFwiXG4gICAgICAgICAgICAoZ2V0ZGF0ZSk9XCJzZWxlY3RlZFN0YXJ0RGF0ZSgkZXZlbnQpXCI+PC9tZy1kYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIG02IGw2IHMxMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFkTC0zXCI+XG4gICAgICAgICAgICA8bWctZGF0ZSBbaW5wdXRdPVwiZm9ybWF0dGVkSW5wdXQudHdvXCIgXG4gICAgICAgICAgICBbZGlzYWJsZWRSYW5nZV0gPSBcImRpc2FibGVfcmFuZ2VfZW5kXCJcbiAgICAgICAgICAgIFtsYWJlbF09XCJsYWJlbHMuZW5kXCIgKGdldGRhdGUpPVwic2VsZWN0ZWRFbmREYXRlKCRldmVudClcIj48L21nLWRhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19