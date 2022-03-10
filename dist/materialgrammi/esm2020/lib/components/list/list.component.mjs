import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ListComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 3);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", item_r2, i0.ɵɵsanitizeHtml);
} }
function ListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1);
    i0.ɵɵtemplate(1, ListComponent_ul_0_li_1_Template, 1, 1, "li", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("mg-list ", ctx_r0.theme, "");
    i0.ɵɵproperty("ngClass", ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items);
} }
export class ListComponent {
    constructor() {
        this.items = [];
        this.theme = "dark";
        this.class = "";
    }
    ngOnInit() {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["mg-list"]], inputs: { items: "items", theme: "theme", class: "class" }, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "item", 3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "item", 3, "innerHtml"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListComponent_ul_0_Template, 2, 5, "ul", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.items.length > 0);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{ selector: 'mg-list', template: "<ul *ngIf=\"items.length > 0\" class=\"mg-list {{theme}}\" [ngClass]=\"class\">\n  <li *ngFor=\"let item of items\" [innerHtml]=\"item\" class=\"item\"></li>\n</ul>\n", styles: [""] }]
    }], function () { return []; }, { items: [{
            type: Input
        }], theme: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7SUNDdkQsd0JBQW9FOzs7SUFBckMsc0RBQWtCOzs7SUFEbkQsNkJBQXlFO0lBQ3ZFLGlFQUFvRTtJQUN0RSxpQkFBSzs7O0lBRndCLHVEQUF5QjtJQUFDLHNDQUFpQjtJQUNqRCxlQUFRO0lBQVIsc0NBQVE7O0FETS9CLE1BQU0sT0FBTyxhQUFhO0lBSXhCO1FBSFMsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQVcsTUFBTSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzswRUFQVSxhQUFhO2dFQUFiLGFBQWE7UUNQMUIsNERBRUs7O1FBRkEsMkNBQXNCOzt1RkRPZCxhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsU0FBUztzQ0FLVixLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnkgPSBbXTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHVsICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gMFwiIGNsYXNzPVwibWctbGlzdCB7e3RoZW1lfX1cIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbaW5uZXJIdG1sXT1cIml0ZW1cIiBjbGFzcz1cIml0ZW1cIj48L2xpPlxuPC91bD5cbiJdfQ==