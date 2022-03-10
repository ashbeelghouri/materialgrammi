import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
const _c0 = ["*"];
export class DropdownComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.active = false;
        this.position = {
            hotizontal: "right",
            vertical: "bottom"
        };
        this.class = "";
    }
    ngOnInit() {
        this.service.registerDropDown(this.id, this.active);
        if (this.active) {
            this.service.openDropDown(this.id);
        }
        this.watch();
    }
    watch() {
        this.service.watchDropDown(this.id).subscribe((data) => {
            console.log("Dropdown triggered", data);
            this.active = data;
        });
    }
    openDropDown() {
        this.service.openDropDown(this.id);
    }
    closeDropDown() {
        this.service.closeDropDown(this.id);
    }
    dropdownClasses() {
        let results = "";
        results += this.active ? 'active' : '';
        results += " " + this.position.hotizontal + " " + this.position.vertical;
        return results;
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
DropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["mg-dropdown"]], inputs: { id: "id", active: "active", position: "position", class: "class" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "main", 2, "position", "relative", 3, "ngClass"], [1, "dropdown-container", 3, "ngClass", "mouseover", "mouseleave"], [1, "dropdown-content"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("mouseover", function DropdownComponent_Template_div_mouseover_1_listener() { return ctx.openDropDown(); })("mouseleave", function DropdownComponent_Template_div_mouseleave_1_listener() { return ctx.closeDropDown(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.dropdownClasses());
    } }, directives: [i2.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{ selector: 'mg-dropdown', template: "<div class=\"main\" style=\"position: relative;\" [ngClass]=\"class\">\n  <div class=\"dropdown-container\" [ngClass]=\"dropdownClasses()\" (mouseover)=\"openDropDown()\"\n    (mouseleave)=\"closeDropDown()\">\n    <div class=\"dropdown-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { id: [{
            type: Input
        }], active: [{
            type: Input
        }], position: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRekQsTUFBTSxPQUFPLGlCQUFpQjtJQVE1QixZQUFvQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQVB6QyxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRztZQUNsQixVQUFVLEVBQUUsT0FBTztZQUNuQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBQ08sVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNrQyxDQUFDO0lBRXZELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWEsRUFBRSxFQUFFO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDekUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7a0ZBdENVLGlCQUFpQjtvRUFBakIsaUJBQWlCOztRQ1I5Qiw4QkFBZ0U7UUFDOUQsOEJBQ2lDO1FBRDZCLG1HQUFhLGtCQUFjLElBQUMsd0ZBQzFFLG1CQUFlLElBRDJEO1FBRXhGLDhCQUE4QjtRQUM1QixrQkFBeUI7UUFDM0IsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQVB3QyxtQ0FBaUI7UUFDN0IsZUFBNkI7UUFBN0IsK0NBQTZCOzt1RkRPbEQsaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UsYUFBYTt3RUFLZCxFQUFFO2tCQUFWLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBSUcsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpZCA9IFwiMVwiO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcG9zaXRpb24gPSB7XG4gICAgaG90aXpvbnRhbDogXCJyaWdodFwiLFxuICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiXG4gIH07XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlckRyb3BEb3duKHRoaXMuaWQsIHRoaXMuYWN0aXZlKTtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2VydmljZS5vcGVuRHJvcERvd24odGhpcy5pZCk7XG4gICAgfVxuICAgIHRoaXMud2F0Y2goKTtcbiAgfVxuXG4gIHdhdGNoKCkge1xuICAgIHRoaXMuc2VydmljZS53YXRjaERyb3BEb3duKHRoaXMuaWQpLnN1YnNjcmliZSgoZGF0YTogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJEcm9wZG93biB0cmlnZ2VyZWRcIiwgZGF0YSk7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRHJvcERvd24oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLm9wZW5Ecm9wRG93bih0aGlzLmlkKTtcbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNsb3NlRHJvcERvd24odGhpcy5pZCk7XG4gIH1cblxuICBkcm9wZG93bkNsYXNzZXMoKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnO1xuICAgIHJlc3VsdHMgKz0gXCIgXCIgKyB0aGlzLnBvc2l0aW9uLmhvdGl6b250YWwgKyBcIiBcIiArIHRoaXMucG9zaXRpb24udmVydGljYWw7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW5cIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiZHJvcGRvd25DbGFzc2VzKClcIiAobW91c2VvdmVyKT1cIm9wZW5Ecm9wRG93bigpXCJcbiAgICAobW91c2VsZWF2ZSk9XCJjbG9zZURyb3BEb3duKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19