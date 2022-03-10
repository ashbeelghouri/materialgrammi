import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
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
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(); };
ToastComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["mg-toast"]], inputs: { show: "show", position: "position", theme: "theme", timeout: "timeout" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "toast", 3, "ngClass"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵlistener("click", function ToastComponent_Template_a_click_1_listener() { return ctx.close(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.showToast());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{ selector: 'mg-toast', template: "<div class=\"toast\" [ngClass]=\"showToast()\">\n  <a class=\"close-btn\" (click)=\"close()\"><i class=\"fas fa-times\"></i></a>\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { show: [{
            type: Input
        }], position: [{
            type: Input
        }], theme: [{
            type: Input
        }], timeout: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7QUFPcEUsTUFBTSxPQUFPLGNBQWM7SUFLekI7UUFKUyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztJQUNSLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixVQUFVLENBQUM7Z0JBQ1QsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDM0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7OzRFQS9CVSxjQUFjO2lFQUFkLGNBQWM7O1FDUDNCLDhCQUEyQztRQUN6Qyw0QkFBdUM7UUFBbEIsc0ZBQVMsV0FBTyxJQUFDO1FBQUMsdUJBQTRCO1FBQUEsaUJBQUk7UUFDdkUsa0JBQXlCO1FBQzNCLGlCQUFNOztRQUhhLHlDQUF1Qjs7dUZETzdCLGNBQWM7Y0FMMUIsU0FBUzsyQkFDRSxVQUFVO3NDQUtYLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2hvdyA9IHRydWU7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gXCJib3R0b21cIjtcbiAgQElucHV0KCkgdGhlbWUgPSBcImRhcmtcIjtcbiAgQElucHV0KCkgdGltZW91dCA9IDQwMDA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1RvYXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNob3cgPyBcImFjdGl2ZSBcIiArIHRoaXMudGhlbWUgKyBcIiB0b2FzdC1cIiArIHRoaXMucG9zaXRpb24gOiB0aGlzLnRoZW1lICsgXCIgdG9hc3QtXCIgKyB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gIH1cblxuICBzZXRUaW1lcigpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSAwKSB7XG4gICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0aGlzLnNob3cgPSAhJHRoaXMuc2hvdztcbiAgICAgIH0sICR0aGlzLnRpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwidG9hc3RcIiBbbmdDbGFzc109XCJzaG93VG9hc3QoKVwiPlxuICA8YSBjbGFzcz1cImNsb3NlLWJ0blwiIChjbGljayk9XCJjbG9zZSgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9hPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==