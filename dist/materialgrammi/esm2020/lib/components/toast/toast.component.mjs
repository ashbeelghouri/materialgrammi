import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ToastComponent {
    constructor() {
        this.show = true;
        this.position = "bottom";
        this.theme = "dark";
        this.timeout = 4000;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.show) {
            this.setTimer();
        }
    }
    showToast() {
        return this.show ? "active " + this.theme + " toast-" + this.position : this.theme + " toast-" + this.position;
    }
    close() {
        this.show = false;
    }
    setTimer() {
        if (this.timeout !== 0) {
            var $this = this;
            setTimeout(function () {
                $this.show = !$this.show;
            }, $this.timeout);
        }
    }
}
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ToastComponent, selector: "mg-toast", inputs: { show: "show", position: "position", theme: "theme", timeout: "timeout" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"toast\" [ngClass]=\"showToast()\">\n  <a class=\"close-btn\" (click)=\"close()\"><i class=\"fas fa-times\"></i></a>\n  <ng-content></ng-content>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-toast', template: "<div class=\"toast\" [ngClass]=\"showToast()\">\n  <a class=\"close-btn\" (click)=\"close()\"><i class=\"fas fa-times\"></i></a>\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { show: [{
                type: Input
            }], position: [{
                type: Input
            }], theme: [{
                type: Input
            }], timeout: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7OztBQU9wRSxNQUFNLE9BQU8sY0FBYztJQUt6QjtRQUpTLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ1IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakgsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLFVBQVUsQ0FBQztnQkFDVCxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMzQixDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7MkdBL0JVLGNBQWM7K0ZBQWQsY0FBYyx5SkNQM0IseUtBSUE7MkZER2EsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxVQUFVOzBFQUtYLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2hvdyA9IHRydWU7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gXCJib3R0b21cIjtcbiAgQElucHV0KCkgdGhlbWUgPSBcImRhcmtcIjtcbiAgQElucHV0KCkgdGltZW91dCA9IDQwMDA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1RvYXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNob3cgPyBcImFjdGl2ZSBcIiArIHRoaXMudGhlbWUgKyBcIiB0b2FzdC1cIiArIHRoaXMucG9zaXRpb24gOiB0aGlzLnRoZW1lICsgXCIgdG9hc3QtXCIgKyB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gIH1cblxuICBzZXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSAwKSB7XG4gICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0aGlzLnNob3cgPSAhJHRoaXMuc2hvdztcbiAgICAgIH0sICR0aGlzLnRpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwidG9hc3RcIiBbbmdDbGFzc109XCJzaG93VG9hc3QoKVwiPlxuICA8YSBjbGFzcz1cImNsb3NlLWJ0blwiIChjbGljayk9XCJjbG9zZSgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9hPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==