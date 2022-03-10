import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class ChipComponent {
    constructor() {
        this.theme = "dark";
        this.outline = false;
        this.class = "";
    }
    ngOnInit() {
    }
    chipClass() {
        let results = "";
        results += this.theme;
        results += this.outline ? " outlined" : "";
        return results;
    }
}
ChipComponent.ɵfac = function ChipComponent_Factory(t) { return new (t || ChipComponent)(); };
ChipComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipComponent, selectors: [["mg-chip"]], inputs: { theme: "theme", outline: "outline", class: "class" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "chip", 3, "ngClass"]], template: function ChipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.chipClass() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipComponent, [{
        type: Component,
        args: [{ selector: 'mg-chip', template: "<div class=\"chip\" [ngClass]=\"chipClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], outline: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvY2hpcC9jaGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jaGlwL2NoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPekQsTUFBTSxPQUFPLGFBQWE7SUFJeEI7UUFIUyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTNDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OzBFQWhCVSxhQUFhO2dFQUFiLGFBQWE7O1FDUDFCLDhCQUF3RDtRQUN0RCxrQkFBeUI7UUFDM0IsaUJBQU07O1FBRlksMkRBQXFDOzt1RkRPMUMsYUFBYTtjQUx6QixTQUFTOzJCQUNFLFNBQVM7c0NBS1YsS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWNoaXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoaXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGNoaXBDbGFzcygpe1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMudGhlbWU7XG5cbiAgICByZXN1bHRzICs9IHRoaXMub3V0bGluZSA/IFwiIG91dGxpbmVkXCIgOiBcIlwiO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNoaXBcIiBbbmdDbGFzc109XCJjaGlwQ2xhc3MoKSArICcgJyArIGNsYXNzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19