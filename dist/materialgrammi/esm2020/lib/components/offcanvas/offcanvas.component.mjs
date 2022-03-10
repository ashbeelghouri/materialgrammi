import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
const _c0 = [[["", "mg-data", "sidebar"]], "*"];
const _c1 = ["[mg-data=sidebar]", "*"];
export class OffcanvasComponent {
    constructor(service) {
        this.service = service;
        this.active = false;
        this.id = this.service.makeid(10, this.service.makeid(10, "offcanvas"));
        this.widgetID = "";
    }
    ngOnInit() {
        this.service.registerOffCanvas(this.id, this.active);
        this.watch();
    }
    mainClasses() {
        let results = "";
        results += this.active ? " active" : "";
        return results;
    }
    open() {
        this.service.openCanvas(this.id);
    }
    close() {
        this.service.closeCanvas(this.id);
    }
    watch() {
        this.service.watchCanvas(this.id).subscribe((data) => {
            this.active = data;
        });
    }
}
OffcanvasComponent.ɵfac = function OffcanvasComponent_Factory(t) { return new (t || OffcanvasComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
OffcanvasComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OffcanvasComponent, selectors: [["mg-offcanvas"]], inputs: { active: "active", id: "id" }, ngContentSelectors: _c1, decls: 5, vars: 1, consts: [[1, "offcanvas", 3, "ngClass"], [1, "sidebar-wrapper"], [1, "content-wrapper"]], template: function OffcanvasComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵprojection(4, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
    } }, directives: [i2.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OffcanvasComponent, [{
        type: Component,
        args: [{ selector: 'mg-offcanvas', template: "<div class=\"offcanvas\" [ngClass]=\"mainClasses()\">\n  <div class=\"sidebar-wrapper\">\n    <ng-content select=\"[mg-data=sidebar]\"></ng-content>\n  </div>\n  <div class=\"content-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { active: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9vZmZjYW52YXMvb2ZmY2FudmFzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9vZmZjYW52YXMvb2ZmY2FudmFzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRekQsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUFxQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUoxQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsT0FBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUU1RSxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzBDLENBQUM7SUFFekQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7b0ZBOUJVLGtCQUFrQjtxRUFBbEIsa0JBQWtCOztRQ1IvQiw4QkFBaUQ7UUFDL0MsOEJBQTZCO1FBQzNCLGtCQUFvRDtRQUN0RCxpQkFBTTtRQUNOLDhCQUE2QjtRQUMzQixxQkFBeUI7UUFDM0IsaUJBQU07UUFDUixpQkFBTTs7UUFQaUIsMkNBQXlCOzt1RkRRbkMsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0UsY0FBYzt3RUFLZixNQUFNO2tCQUFkLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1vZmZjYW52YXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb2ZmY2FudmFzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb2ZmY2FudmFzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPZmZjYW52YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQgPSB0aGlzLnNlcnZpY2UubWFrZWlkKDEwLCB0aGlzLnNlcnZpY2UubWFrZWlkKDEwLCBcIm9mZmNhbnZhc1wiKSk7XG5cbiAgd2lkZ2V0SUQgPSBcIlwiO1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJPZmZDYW52YXModGhpcy5pZCwgdGhpcy5hY3RpdmUpO1xuICAgIHRoaXMud2F0Y2goKTtcbiAgfVxuXG4gIG1haW5DbGFzc2VzKCl7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5hY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBvcGVuKCl7XG4gICAgdGhpcy5zZXJ2aWNlLm9wZW5DYW52YXModGhpcy5pZCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNlcnZpY2UuY2xvc2VDYW52YXModGhpcy5pZCk7XG4gIH1cblxuICB3YXRjaCgpe1xuICAgIHRoaXMuc2VydmljZS53YXRjaENhbnZhcyh0aGlzLmlkKS5zdWJzY3JpYmUoKGRhdGE6Ym9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwib2ZmY2FudmFzXCIgW25nQ2xhc3NdPVwibWFpbkNsYXNzZXMoKVwiPlxuICA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21nLWRhdGE9c2lkZWJhcl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19