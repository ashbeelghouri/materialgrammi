import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class ComponentComponent {
    constructor() {
        this.size = "n";
        this.class = "";
    }
    ngOnInit() {
    }
    containerClass() {
        let results = "";
        results += this.size == "s" ? "pad-10" : "";
        results += this.size == "m" ? "pad-30" : "";
        results += this.size == "l" ? "pad-50" : "";
        results += this.size == "xl" ? "pad-80" : "";
        return results;
    }
}
ComponentComponent.ɵfac = function ComponentComponent_Factory(t) { return new (t || ComponentComponent)(); };
ComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentComponent, selectors: [["mg-component"]], inputs: { size: "size", class: "class" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "container", 3, "ngClass"]], template: function ComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.containerClass() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentComponent, [{
        type: Component,
        args: [{ selector: 'mg-component', template: "<div class=\"container\" [ngClass]=\"containerClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { size: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb21wb25lbnQvY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb21wb25lbnQvY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFHN0I7UUFGUyxTQUFJLEdBQVcsR0FBRyxDQUFDO1FBQ25CLFVBQUssR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O29GQWZVLGtCQUFrQjtxRUFBbEIsa0JBQWtCOztRQ1AvQiw4QkFBa0U7UUFDaEUsa0JBQXlCO1FBQzNCLGlCQUFNOztRQUZpQixnRUFBMEM7O3VGRE9wRCxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxjQUFjO3NDQUtmLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSBcIm5cIjtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5zaXplID09IFwic1wiID8gXCJwYWQtMTBcIiA6IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLnNpemUgPT0gXCJtXCIgPyBcInBhZC0zMFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2l6ZSA9PSBcImxcIiA/IFwicGFkLTUwXCIgOiBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5zaXplID09IFwieGxcIiA/IFwicGFkLTgwXCIgOiBcIlwiO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpICsgJyAnICsgY2xhc3NcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=