import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AlertComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function AlertComponent_div_0_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(2); return ctx_r2.hide(); });
    i0.ɵɵtext(1, "x");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "text-center block": a0 }; };
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_div_0_a_1_Template, 2, 0, "a", 2);
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("alert ", ctx_r0.theme, "");
    i0.ɵɵproperty("ngClass", ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.closeBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r0.alignCenter === true));
} }
const _c1 = ["*"];
export class AlertComponent {
    constructor() {
        this.theme = "danger";
        this.show = true;
        this.alignCenter = false;
        this.closeBtn = true;
        this.class = "";
    }
    ngOnInit() {
    }
    hide() {
        this.show = false;
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["mg-alert"]], inputs: { theme: "theme", show: "show", alignCenter: "alignCenter", closeBtn: "closeBtn", class: "class" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "closealert", 3, "click", 4, "ngIf"], [1, "closealert", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 4, 8, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [i1.NgIf, i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{ selector: 'mg-alert', template: "<div class=\"alert {{theme}}\" *ngIf=\"show\" [ngClass]=\"class\">\n  <a class=\"closealert\" (click)=\"hide()\" *ngIf=\"closeBtn\">x</a>\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], show: [{
            type: Input
        }], alignCenter: [{
            type: Input
        }], closeBtn: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdkQsNEJBQXdEO0lBQWxDLDJKQUFTLGFBQU0sSUFBQztJQUFrQixpQkFBQztJQUFBLGlCQUFJOzs7O0lBRC9ELDhCQUE0RDtJQUMxRCxpRUFBNkQ7SUFDN0QsK0JBQStEO0lBQzdELGtCQUF5QjtJQUMzQixpQkFBTztJQUNULGlCQUFNOzs7SUFMRCxxREFBdUI7SUFBYyxzQ0FBaUI7SUFDakIsZUFBYztJQUFkLHNDQUFjO0lBQ2hELGVBQXdEO0lBQXhELGlGQUF3RDs7O0FESWhFLE1BQU0sT0FBTyxjQUFjO0lBTXpCO1FBTFMsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs0RUFaVSxjQUFjO2lFQUFkLGNBQWM7O1FDTjNCLCtEQUtNOztRQUx3QiwrQkFBVTs7dUZETTNCLGNBQWM7Y0FMMUIsU0FBUzsyQkFDRSxVQUFVO3NDQUtYLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkYW5nZXJcIjtcbiAgQElucHV0KCkgc2hvdyA9IHRydWU7XG4gIEBJbnB1dCgpIGFsaWduQ2VudGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsb3NlQnRuID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGVydCB7e3RoZW1lfX1cIiAqbmdJZj1cInNob3dcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8YSBjbGFzcz1cImNsb3NlYWxlcnRcIiAoY2xpY2spPVwiaGlkZSgpXCIgKm5nSWY9XCJjbG9zZUJ0blwiPng8L2E+XG4gIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1jZW50ZXIgYmxvY2snIDogYWxpZ25DZW50ZXIgPT09IHRydWV9XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==