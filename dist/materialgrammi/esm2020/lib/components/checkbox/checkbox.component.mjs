import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class CheckboxComponent {
    constructor(service) {
        this.service = service;
        this.size = "m";
        this.theme = "info";
        this.onDark = false;
        this.isSelected = false;
        this.class = "";
        this.isChecked = new EventEmitter();
        this.id = "";
        this.selected = this.isSelected;
    }
    ngOnInit() {
        this.isChecked.emit(this.selected);
        this.selected = this.isSelected;
        this.id = "input-checkbox-" + this.service.makeid(10, "checkbox");
    }
    mainClasses() {
        let results = "";
        results += this.size == "s" ? "small" : this.size == "m" ? "medium" : "large";
        results += " " + this.theme;
        return results;
    }
    labelClass() {
        let results = "";
        results += this.onDark ? "lite" : "dark";
        results += this.selected ? " active" : "";
        return results;
    }
    toggleCheck() {
        this.selected = !this.selected;
        this.isChecked.emit(this.selected);
    }
}
CheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckboxComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
CheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CheckboxComponent, selector: "mg-checkbox", inputs: { size: "size", theme: "theme", onDark: "onDark", isSelected: "isSelected", class: "class" }, outputs: { isChecked: "isChecked" }, ngImport: i0, template: "<div class=\"checkbox\" [ngClass]=\"mainClasses() + ' ' + class\">\n  <input [id]=\"id\" type=\"checkbox\" [checked]=\"isSelected\" style=\"opacity: 0; position: absolute;\"/>\n  <label class=\"check\" [for]=\"id\" (click)=\"toggleCheck()\"></label>\n  <label class=\"label\" [for]=\"id\" [ngClass]=\"labelClass()\"\n    (click)=\"toggleCheck()\"><ng-content></ng-content></label>\n</div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-checkbox', template: "<div class=\"checkbox\" [ngClass]=\"mainClasses() + ' ' + class\">\n  <input [id]=\"id\" type=\"checkbox\" [checked]=\"isSelected\" style=\"opacity: 0; position: absolute;\"/>\n  <label class=\"check\" [for]=\"id\" (click)=\"toggleCheck()\"></label>\n  <label class=\"label\" [for]=\"id\" [ngClass]=\"labelClass()\"\n    (click)=\"toggleCheck()\"><ng-content></ng-content></label>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { size: [{
                type: Input
            }], theme: [{
                type: Input
            }], onDark: [{
                type: Input
            }], isSelected: [{
                type: Input
            }], class: [{
                type: Input
            }], isChecked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUS9FLE1BQU0sT0FBTyxpQkFBaUI7SUFXNUIsWUFBb0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFWekMsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBR1YsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzJCLENBQUM7SUFFdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5RSxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs4R0FuQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsOExDUjlCLHdZQU1BOzJGREVhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxhQUFhOzRHQUtkLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUdJLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaXplID0gXCJtXCI7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJpbmZvXCI7XG4gIEBJbnB1dCgpIG9uRGFyayA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1NlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcblxuXG4gIEBPdXRwdXQoKSBpc0NoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlkID0gXCJcIjtcbiAgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZC5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQ7XG4gICAgdGhpcy5pZCA9IFwiaW5wdXQtY2hlY2tib3gtXCIgKyB0aGlzLnNlcnZpY2UubWFrZWlkKDEwLCBcImNoZWNrYm94XCIpO1xuICB9XG4gIG1haW5DbGFzc2VzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2l6ZSA9PSBcInNcIiA/IFwic21hbGxcIiA6IHRoaXMuc2l6ZSA9PSBcIm1cIiA/IFwibWVkaXVtXCIgOiBcImxhcmdlXCI7XG4gICAgcmVzdWx0cyArPSBcIiBcIiArIHRoaXMudGhlbWU7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBsYWJlbENsYXNzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMub25EYXJrID8gXCJsaXRlXCIgOiBcImRhcmtcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2VsZWN0ZWQgPyBcIiBhY3RpdmVcIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICB0b2dnbGVDaGVjaygpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgdGhpcy5pc0NoZWNrZWQuZW1pdCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIiBbbmdDbGFzc109XCJtYWluQ2xhc3NlcygpICsgJyAnICsgY2xhc3NcIj5cbiAgPGlucHV0IFtpZF09XCJpZFwiIHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzU2VsZWN0ZWRcIiBzdHlsZT1cIm9wYWNpdHk6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcIi8+XG4gIDxsYWJlbCBjbGFzcz1cImNoZWNrXCIgW2Zvcl09XCJpZFwiIChjbGljayk9XCJ0b2dnbGVDaGVjaygpXCI+PC9sYWJlbD5cbiAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBbZm9yXT1cImlkXCIgW25nQ2xhc3NdPVwibGFiZWxDbGFzcygpXCJcbiAgICAoY2xpY2spPVwidG9nZ2xlQ2hlY2soKVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2xhYmVsPlxuPC9kaXY+XG4iXX0=