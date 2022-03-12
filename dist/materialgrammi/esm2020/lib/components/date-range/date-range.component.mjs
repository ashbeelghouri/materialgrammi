import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../date-input/date-input.component";
import * as i2 from "@angular/common";
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
DateRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DateRangeComponent, selector: "mg-daterange", inputs: { labels: "labels", style: "style", class: "class" }, outputs: { range: "range" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"row\" [ngClass]=\"class\">\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padR-3\">\n            <mg-date [input]=\"formattedInput.one\" [label]=\"labels.start\" \n            [disabledRange] = \"disable_range_start\"\n            (getdate)=\"selectedStartDate($event)\"></mg-date>\n        </div>\n    </div>\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padL-3\">\n            <mg-date [input]=\"formattedInput.two\" \n            [disabledRange] = \"disable_range_end\"\n            [label]=\"labels.end\" (getdate)=\"selectedEndDate($event)\"></mg-date>\n        </div>\n    </div>\n</div>", styles: [""], components: [{ type: i1.DateInputComponent, selector: "mg-date", inputs: ["input", "label", "class", "calendar", "disabledRange", "icons", "format"], outputs: ["getdate"] }], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-daterange', template: "<div class=\"row\" [ngClass]=\"class\">\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padR-3\">\n            <mg-date [input]=\"formattedInput.one\" [label]=\"labels.start\" \n            [disabledRange] = \"disable_range_start\"\n            (getdate)=\"selectedStartDate($event)\"></mg-date>\n        </div>\n    </div>\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padL-3\">\n            <mg-date [input]=\"formattedInput.two\" \n            [disabledRange] = \"disable_range_end\"\n            [label]=\"labels.end\" (getdate)=\"selectedEndDate($event)\"></mg-date>\n        </div>\n    </div>\n</div>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { labels: [{
                type: Input
            }], style: [{
                type: Input
            }], class: [{
                type: Input
            }], range: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS1yYW5nZS9kYXRlLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kYXRlLXJhbmdlL2RhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWE3QyxNQUFNLE9BQU8sa0JBQWtCO0lBd0M3QjtRQXZDUyxXQUFNLEdBQUc7WUFDaEIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLFVBQVU7U0FDaEIsQ0FBQztRQUVPLFVBQUssR0FBRztZQUNmLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLFNBQVM7YUFDakI7U0FDRixDQUFDO1FBRU8sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUtwQix3QkFBbUIsR0FBa0I7WUFDbkMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7UUFFRixzQkFBaUIsR0FBa0I7WUFDakMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7UUFFRixhQUFRLEdBQWtCO1lBQ3hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQTtRQUVTLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsR0FBRyxFQUFFO2dCQUNILEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3BCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3BCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7K0dBekVVLGtCQUFrQjttR0FBbEIsa0JBQWtCLG9LQ2QvQixxbkJBZU07MkZERE8sa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLGNBQWM7MEVBS2YsTUFBTTtzQkFBZCxLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFhRyxLQUFLO3NCQUFiLEtBQUs7Z0JBb0JJLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSYW5nZVNlbGVjdGVkIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlzYWJsZWRSYW5nZSB7XG4gIGJlZm9yZTogZmFsc2UgfCBzdHJpbmcgfCBEYXRlLFxuICBhZnRlcjogZmFsc2UgfCBzdHJpbmcgfCBEYXRlXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWRhdGVyYW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1yYW5nZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsYWJlbHMgPSB7XG4gICAgc3RhcnQ6IFwic3RhcnQgZGF0ZVwiLFxuICAgIGVuZDogXCJlbmQgZGF0ZVwiXG4gIH07XG5cbiAgQElucHV0KCkgc3R5bGUgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIHRoZW1lOiBcInN1Y2Nlc3NcIixcbiAgICAgIHN0eWxlOiBcImNvbnRyb2xcIixcbiAgICAgIGRhcmttb2RlOiBmYWxzZSxcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgZGlzYWJsZWQ6IFtdLFxuICAgICAgdGhlbWU6IFwic3VjY2Vzc1wiXG4gICAgfVxuICB9O1xuXG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcblxuICBmb3JtYXR0ZWRJbnB1dD86YW55O1xuXG5cbiAgZGlzYWJsZV9yYW5nZV9zdGFydDogRGlzYWJsZWRSYW5nZSA9IHtcbiAgICBiZWZvcmU6IGZhbHNlLFxuICAgIGFmdGVyOiBmYWxzZVxuICB9O1xuXG4gIGRpc2FibGVfcmFuZ2VfZW5kOiBEaXNhYmxlZFJhbmdlID0ge1xuICAgIGJlZm9yZTogZmFsc2UsXG4gICAgYWZ0ZXI6IGZhbHNlXG4gIH07XG5cbiAgc2VsZWN0ZWQ6IFJhbmdlU2VsZWN0ZWQgPSB7XG4gICAgc3RhcnRkYXRlOiBmYWxzZSxcbiAgICBlbmRkYXRlOiBmYWxzZVxuICB9XG5cbiAgQE91dHB1dCgpIHJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdElucHV0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaW5pdElucHV0KCk7XG4gIH1cblxuICBpbml0SW5wdXQoKXtcbiAgICB0aGlzLmZvcm1hdHRlZElucHV0ID0ge1xuICAgICAgb25lOiB7XG4gICAgICAgIC4uLnRoaXMuc3R5bGUuaW5wdXRcbiAgICAgIH0sXG4gICAgICB0d286IHtcbiAgICAgICAgLi4udGhpcy5zdHlsZS5pbnB1dFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb3JtYXR0ZWRJbnB1dC5vbmUuY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgIHRoaXMuZm9ybWF0dGVkSW5wdXQudHdvLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgfVxuXG4gIHNlbGVjdGVkU3RhcnREYXRlKGV2ZW50OiBhbnkpe1xuICAgIHRoaXMuZGlzYWJsZV9yYW5nZV9lbmQuYmVmb3JlID0gZXZlbnQ7XG4gICAgdGhpcy5zZWxlY3RlZC5zdGFydGRhdGUgPSBldmVudDtcbiAgICB0aGlzLnJhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBzZWxlY3RlZEVuZERhdGUoZXZlbnQ6IGFueSl7XG4gICAgdGhpcy5kaXNhYmxlX3JhbmdlX3N0YXJ0LmFmdGVyID0gZXZlbnQ7XG4gICAgdGhpcy5zZWxlY3RlZC5lbmRkYXRlID0gZXZlbnQ7XG4gICAgdGhpcy5yYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgbTYgbDYgczEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWRSLTNcIj5cbiAgICAgICAgICAgIDxtZy1kYXRlIFtpbnB1dF09XCJmb3JtYXR0ZWRJbnB1dC5vbmVcIiBbbGFiZWxdPVwibGFiZWxzLnN0YXJ0XCIgXG4gICAgICAgICAgICBbZGlzYWJsZWRSYW5nZV0gPSBcImRpc2FibGVfcmFuZ2Vfc3RhcnRcIlxuICAgICAgICAgICAgKGdldGRhdGUpPVwic2VsZWN0ZWRTdGFydERhdGUoJGV2ZW50KVwiPjwvbWctZGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbCBtNiBsNiBzMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZEwtM1wiPlxuICAgICAgICAgICAgPG1nLWRhdGUgW2lucHV0XT1cImZvcm1hdHRlZElucHV0LnR3b1wiIFxuICAgICAgICAgICAgW2Rpc2FibGVkUmFuZ2VdID0gXCJkaXNhYmxlX3JhbmdlX2VuZFwiXG4gICAgICAgICAgICBbbGFiZWxdPVwibGFiZWxzLmVuZFwiIChnZXRkYXRlKT1cInNlbGVjdGVkRW5kRGF0ZSgkZXZlbnQpXCI+PC9tZy1kYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==