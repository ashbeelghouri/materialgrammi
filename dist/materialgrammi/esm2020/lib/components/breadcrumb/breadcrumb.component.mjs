import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function BreadcrumbComponent_div_0_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHtml", ctx_r4.devider, i0.ɵɵsanitizeHtml);
} }
function BreadcrumbComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BreadcrumbComponent_div_0_ng_container_1_span_3_Template, 1, 1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", link_r2.url)("ngClass", ctx_r1.active(link_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r2.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.links[i_r3 + 1]);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, BreadcrumbComponent_div_0_ng_container_1_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.showDarkMode() + " " + ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.links);
} }
export class BreadcrumbComponent {
    constructor() {
        this.links = [];
        this.darkmode = false;
        this.devider = "/";
        this.class = "";
    }
    ngOnInit() {
    }
    showDarkMode() {
        return this.darkmode ? "dark" : "lite";
    }
    active(link) {
        return link.active ? 'active' : '';
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["mg-breadcrumb"]], inputs: { links: "links", darkmode: "darkmode", devider: "devider", class: "class" }, decls: 1, vars: 1, consts: [["class", "breadcrumb-wrapper", 3, "ngClass", 4, "ngIf"], [1, "breadcrumb-wrapper", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "breadcrumb", 3, "routerLink", "ngClass"], ["class", "marginL-5 marginR-5", 3, "innerHtml", 4, "ngIf"], [1, "marginL-5", "marginR-5", 3, "innerHtml"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BreadcrumbComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.links.length > 0);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.RouterLinkWithHref], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'mg-breadcrumb', template: "<div class=\"breadcrumb-wrapper\" [ngClass]=\"showDarkMode() + ' ' + class\" *ngIf=\"links.length > 0\">\n  <ng-container *ngFor=\"let link of links; let i = index;\">\n    <a [routerLink]=\"link.url\" class=\"breadcrumb\" [ngClass]=\"active(link)\">{{link.name}}</a>\n    <span class=\"marginL-5 marginR-5\" *ngIf=\"links[i+1]\" [innerHtml]=\"devider\"></span>\n  </ng-container>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { links: [{
            type: Input
        }], darkmode: [{
            type: Input
        }], devider: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDR3JELDBCQUFrRjs7O0lBQTdCLDZEQUFxQjs7O0lBRjVFLDZCQUF5RDtJQUN2RCw0QkFBdUU7SUFBQSxZQUFhO0lBQUEsaUJBQUk7SUFDeEYsMkZBQWtGO0lBQ3BGLDBCQUFlOzs7OztJQUZWLGVBQXVCO0lBQXZCLHdDQUF1QixtQ0FBQTtJQUE2QyxlQUFhO0lBQWIsa0NBQWE7SUFDakQsZUFBZ0I7SUFBaEIsNkNBQWdCOzs7SUFIdkQsOEJBQWtHO0lBQ2hHLDRGQUdlO0lBQ2pCLGlCQUFNOzs7SUFMMEIsb0VBQXdDO0lBQ3ZDLGVBQVU7SUFBVixzQ0FBVTs7QURNM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUpTLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O3NGQWhCVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1BoQyxvRUFLTTs7UUFMb0UsMkNBQXNCOzt1RkRPbkYsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0UsZUFBZTtzQ0FLaEIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGlua3M6IGFueSA9IFtdO1xuICBASW5wdXQoKSBkYXJrbW9kZSA9IGZhbHNlO1xuICBASW5wdXQoKSBkZXZpZGVyID0gXCIvXCI7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNob3dEYXJrTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXJrbW9kZSA/IFwiZGFya1wiIDogXCJsaXRlXCI7XG4gIH1cblxuICBhY3RpdmUobGluazogYW55KSB7XG4gICAgcmV0dXJuIGxpbmsuYWN0aXZlID8gJ2FjdGl2ZScgOiAnJztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYnJlYWRjcnVtYi13cmFwcGVyXCIgW25nQ2xhc3NdPVwic2hvd0RhcmtNb2RlKCkgKyAnICcgKyBjbGFzc1wiICpuZ0lmPVwibGlua3MubGVuZ3RoID4gMFwiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBsaW5rIG9mIGxpbmtzOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cImxpbmsudXJsXCIgY2xhc3M9XCJicmVhZGNydW1iXCIgW25nQ2xhc3NdPVwiYWN0aXZlKGxpbmspXCI+e3tsaW5rLm5hbWV9fTwvYT5cbiAgICA8c3BhbiBjbGFzcz1cIm1hcmdpbkwtNSBtYXJnaW5SLTVcIiAqbmdJZj1cImxpbmtzW2krMV1cIiBbaW5uZXJIdG1sXT1cImRldmlkZXJcIj48L3NwYW4+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=