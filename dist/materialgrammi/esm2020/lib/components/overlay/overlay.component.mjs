import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
const _c0 = ["*"];
export class OverlayComponent {
    constructor(service) {
        this.service = service;
        this.bgClass = "grey1";
        this.overlayClass = "bg-b-3";
        this.offSize = "1";
        this.canvasPosition = "top";
        this.id = "1";
        this.active = false;
        this.isClosed = new EventEmitter();
    }
    ngOnInit() {
        this.service.registerOverlay(this.id, this.active);
        this.subscribe();
    }
    activator() {
        return this.active ? "active" : "";
    }
    subscribe() {
        this.service.watchOverlay(this.id).subscribe((data) => {
            this.active = data;
        });
    }
    mainClasses() {
        let classes = "";
        classes += ` ${this.activator()}`;
        classes += ` ${this.bgClass}`;
        return classes;
    }
    overlayClasses() {
        let classes = "";
        classes += this.active ? 'active' : '';
        classes += ` ${this.overlayClass}`;
        return classes;
    }
    close() {
        this.service.closeOverlay(this.id);
        this.isClosed.emit(true);
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
OverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["mg-overlay"]], inputs: { bgClass: "bgClass", overlayClass: "overlayClass", offSize: "offSize", canvasPosition: "canvasPosition", id: "id", active: "active" }, outputs: { isClosed: "isClosed" }, ngContentSelectors: _c0, decls: 3, vars: 6, consts: [[3, "ngClass"], [1, "off-overlay", "blur", 3, "ngClass", "click"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵlistener("click", function OverlayComponent_Template_div_click_2_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("overlay ", ctx.canvasPosition, " size-", ctx.offSize, "");
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.overlayClasses());
    } }, directives: [i2.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{ selector: 'mg-overlay', template: "<div class=\"overlay {{canvasPosition}} size-{{offSize}}\" [ngClass]=\"mainClasses()\">\n  <ng-content></ng-content>\n</div>\n<div (click)=\"close()\" class=\"off-overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { bgClass: [{
            type: Input
        }], overlayClass: [{
            type: Input
        }], offSize: [{
            type: Input
        }], canvasPosition: [{
            type: Input
        }], id: [{
            type: Input
        }], active: [{
            type: Input
        }], isClosed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRL0UsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixZQUFvQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQVR6QyxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsbUJBQWMsR0FBVyxLQUFLLENBQUM7UUFDL0IsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVjLENBQUM7SUFFdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztRQUVsQyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOztnRkEvQ1UsZ0JBQWdCO21FQUFoQixnQkFBZ0I7O1FDUjdCLDhCQUFtRjtRQUNqRixrQkFBeUI7UUFDM0IsaUJBQU07UUFDTiw4QkFBNkU7UUFBeEUsMEZBQVMsV0FBTyxJQUFDO1FBQXVELGlCQUFNOztRQUg5RSxvRkFBbUQ7UUFBQywyQ0FBeUI7UUFHbEMsZUFBNEI7UUFBNUIsOENBQTRCOzt1RkRLL0QsZ0JBQWdCO2NBTDVCLFNBQVM7MkJBQ0UsWUFBWTt3RUFLYixPQUFPO2tCQUFmLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUVJLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctb3ZlcmxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJnQ2xhc3MgPSBcImdyZXkxXCI7XG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzcyA9IFwiYmctYi0zXCI7XG4gIEBJbnB1dCgpIG9mZlNpemU6IHN0cmluZyA9IFwiMVwiO1xuICBASW5wdXQoKSBjYW52YXNQb3NpdGlvbjogc3RyaW5nID0gXCJ0b3BcIjtcbiAgQElucHV0KCkgaWQgPSBcIjFcIjtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGlzQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJPdmVybGF5KHRoaXMuaWQsIHRoaXMuYWN0aXZlKTtcbiAgICB0aGlzLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgYWN0aXZhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiO1xuICB9XG5cbiAgc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuc2VydmljZS53YXRjaE92ZXJsYXkodGhpcy5pZCkuc3Vic2NyaWJlKChkYXRhOmFueSkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgbWFpbkNsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBcIlwiO1xuXG4gICAgY2xhc3NlcyArPSBgICR7dGhpcy5hY3RpdmF0b3IoKX1gO1xuXG4gICAgY2xhc3NlcyArPSBgICR7dGhpcy5iZ0NsYXNzfWA7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIG92ZXJsYXlDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcbiAgICBjbGFzc2VzICs9IHRoaXMuYWN0aXZlID8gJ2FjdGl2ZScgOiAnJztcbiAgICBjbGFzc2VzICs9IGAgJHt0aGlzLm92ZXJsYXlDbGFzc31gO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNsb3NlT3ZlcmxheSh0aGlzLmlkKTtcbiAgICB0aGlzLmlzQ2xvc2VkLmVtaXQodHJ1ZSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm92ZXJsYXkge3tjYW52YXNQb3NpdGlvbn19IHNpemUte3tvZmZTaXplfX1cIiBbbmdDbGFzc109XCJtYWluQ2xhc3NlcygpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiAoY2xpY2spPVwiY2xvc2UoKVwiIGNsYXNzPVwib2ZmLW92ZXJsYXkgYmx1clwiIFtuZ0NsYXNzXT1cIm92ZXJsYXlDbGFzc2VzKClcIj48L2Rpdj5cbiJdfQ==