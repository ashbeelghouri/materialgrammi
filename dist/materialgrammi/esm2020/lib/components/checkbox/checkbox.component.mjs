import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
const _c0 = ["*"];
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
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["mg-checkbox"]], inputs: { size: "size", theme: "theme", onDark: "onDark", isSelected: "isSelected", class: "class" }, outputs: { isChecked: "isChecked" }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[1, "checkbox", 3, "ngClass"], ["type", "checkbox", 2, "opacity", "0", "position", "absolute", 3, "id", "checked"], [1, "check", 3, "for", "click"], [1, "label", 3, "for", "ngClass", "click"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵlistener("click", function CheckboxComponent_Template_label_click_2_listener() { return ctx.toggleCheck(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label", 3);
        i0.ɵɵlistener("click", function CheckboxComponent_Template_label_click_3_listener() { return ctx.toggleCheck(); });
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses() + " " + ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id)("checked", ctx.isSelected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", ctx.id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", ctx.id)("ngClass", ctx.labelClass());
    } }, directives: [i2.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mg-checkbox', template: "<div class=\"checkbox\" [ngClass]=\"mainClasses() + ' ' + class\">\n  <input [id]=\"id\" type=\"checkbox\" [checked]=\"isSelected\" style=\"opacity: 0; position: absolute;\"/>\n  <label class=\"check\" [for]=\"id\" (click)=\"toggleCheck()\"></label>\n  <label class=\"label\" [for]=\"id\" [ngClass]=\"labelClass()\"\n    (click)=\"toggleCheck()\"><ng-content></ng-content></label>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { size: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVEvRSxNQUFNLE9BQU8saUJBQWlCO0lBVzVCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBVnpDLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdWLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixhQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMyQixDQUFDO0lBRXZELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUUsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7a0ZBbkNVLGlCQUFpQjtvRUFBakIsaUJBQWlCOztRQ1I5Qiw4QkFBOEQ7UUFDNUQsMkJBQWlHO1FBQ2pHLGdDQUF3RDtRQUF4Qiw2RkFBUyxpQkFBYSxJQUFDO1FBQUMsaUJBQVE7UUFDaEUsZ0NBQzBCO1FBQXhCLDZGQUFTLGlCQUFhLElBQUM7UUFBQyxrQkFBeUI7UUFBQSxpQkFBUTtRQUM3RCxpQkFBTTs7UUFMZ0IsNkRBQXVDO1FBQ3BELGVBQVM7UUFBVCwyQkFBUywyQkFBQTtRQUNLLGVBQVU7UUFBViw0QkFBVTtRQUNWLGVBQVU7UUFBViw0QkFBVSw2QkFBQTs7dUZES3BCLGlCQUFpQjtjQUw3QixTQUFTOzJCQUNFLGFBQWE7d0VBS2QsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUdJLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaXplID0gXCJtXCI7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJpbmZvXCI7XG4gIEBJbnB1dCgpIG9uRGFyayA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1NlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcblxuXG4gIEBPdXRwdXQoKSBpc0NoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlkID0gXCJcIjtcbiAgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQ7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZC5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQ7XG4gICAgdGhpcy5pZCA9IFwiaW5wdXQtY2hlY2tib3gtXCIgKyB0aGlzLnNlcnZpY2UubWFrZWlkKDEwLCBcImNoZWNrYm94XCIpO1xuICB9XG4gIG1haW5DbGFzc2VzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2l6ZSA9PSBcInNcIiA/IFwic21hbGxcIiA6IHRoaXMuc2l6ZSA9PSBcIm1cIiA/IFwibWVkaXVtXCIgOiBcImxhcmdlXCI7XG4gICAgcmVzdWx0cyArPSBcIiBcIiArIHRoaXMudGhlbWU7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBsYWJlbENsYXNzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMub25EYXJrID8gXCJsaXRlXCIgOiBcImRhcmtcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2VsZWN0ZWQgPyBcIiBhY3RpdmVcIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICB0b2dnbGVDaGVjaygpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgdGhpcy5pc0NoZWNrZWQuZW1pdCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIiBbbmdDbGFzc109XCJtYWluQ2xhc3NlcygpICsgJyAnICsgY2xhc3NcIj5cbiAgPGlucHV0IFtpZF09XCJpZFwiIHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzU2VsZWN0ZWRcIiBzdHlsZT1cIm9wYWNpdHk6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcIi8+XG4gIDxsYWJlbCBjbGFzcz1cImNoZWNrXCIgW2Zvcl09XCJpZFwiIChjbGljayk9XCJ0b2dnbGVDaGVjaygpXCI+PC9sYWJlbD5cbiAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBbZm9yXT1cImlkXCIgW25nQ2xhc3NdPVwibGFiZWxDbGFzcygpXCJcbiAgICAoY2xpY2spPVwidG9nZ2xlQ2hlY2soKVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2xhYmVsPlxuPC9kaXY+XG4iXX0=