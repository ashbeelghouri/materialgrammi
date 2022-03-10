import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [[["", "header", ""]], "*", [["", "footer", ""]]];
const _c1 = ["[header]", "*", "[footer]"];
export class CardComponent {
    constructor() {
        this.class = ``;
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["mg-card"]], inputs: { class: "class" }, ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "card", 3, "ngClass"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵprojection(2, 1);
        i0.ɵɵprojection(3, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'mg-card', template: "<div class=\"card\" [ngClass]=\"class\">\n  <ng-content select=\"[header]\"></ng-content>\n  <ng-content></ng-content>\n  <ng-content select=\"[footer]\"></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3pELE1BQU0sT0FBTyxhQUFhO0lBRXhCO1FBRFMsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBFQUxVLGFBQWE7Z0VBQWIsYUFBYTs7UUNQMUIsOEJBQW9DO1FBQ2xDLGtCQUEyQztRQUMzQyxxQkFBeUI7UUFDekIscUJBQTJDO1FBQzdDLGlCQUFNOztRQUpZLG1DQUFpQjs7dUZET3RCLGFBQWE7Y0FMekIsU0FBUzsyQkFDRSxTQUFTO3NDQUtWLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2xhc3MgPSBgYDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=