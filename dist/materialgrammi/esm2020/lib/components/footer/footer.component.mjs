import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [[["", "slot", "left-section"]], [["", "slot", "middle-section"]], [["", "slot", "right-section"]], [["", "slot", "left-bottom-section"]], [["", "slot", "right-bottom-section"]]];
const _c1 = ["[slot=left-section]", "[slot=middle-section]", "[slot=right-section]", "[slot=left-bottom-section]", "[slot=right-bottom-section]"];
export class FooterComponent {
    constructor() {
        this.theme = "success";
        this.toBottom = false;
        this.class = "";
    }
    ngOnInit() {
    }
    mainFooterClasses() {
        let results = "";
        results += this.theme;
        results += this.toBottom ? " stick-to-bottom" : "";
        return results;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["mg-footer"]], inputs: { theme: "theme", toBottom: "toBottom", class: "class" }, ngContentSelectors: _c1, decls: 13, vars: 1, consts: [[1, "footer", 3, "ngClass"], [1, "section-top"], [1, "left-section"], [1, "middle-section"], [1, "right-section"], [1, "section-bottom"], [1, "left-bottom-section"], [1, "right-bottom-section"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵprojection(7, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵprojection(10, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵprojection(12, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainFooterClasses() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'mg-footer', template: "<div class=\"footer\" [ngClass]=\"mainFooterClasses() + ' ' + class\">\n  <div class=\"section-top\">\n    <div class=\"left-section\">\n      <ng-content select=\"[slot=left-section]\"></ng-content>\n    </div>\n    <div class=\"middle-section\">\n      <ng-content select=\"[slot=middle-section]\"></ng-content>\n    </div>\n    <div class=\"right-section\">\n      <ng-content select=\"[slot=right-section]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"section-bottom\">\n    <div class=\"left-bottom-section\">\n      <ng-content select=\"[slot=left-bottom-section]\"></ng-content>\n    </div>\n    <div class=\"right-bottom-section\">\n      <ng-content select=\"[slot=right-bottom-section]\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], toBottom: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQUkxQjtRQUhTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs4RUFkVSxlQUFlO2tFQUFmLGVBQWU7O1FDUDVCLDhCQUFrRTtRQUNoRSw4QkFBeUI7UUFDdkIsOEJBQTBCO1FBQ3hCLGtCQUFzRDtRQUN4RCxpQkFBTTtRQUNOLDhCQUE0QjtRQUMxQixxQkFBd0Q7UUFDMUQsaUJBQU07UUFDTiw4QkFBMkI7UUFDekIscUJBQXVEO1FBQ3pELGlCQUFNO1FBQ1IsaUJBQU07UUFDTiw4QkFBNEI7UUFDMUIsOEJBQWlDO1FBQy9CLHNCQUE2RDtRQUMvRCxpQkFBTTtRQUNOLCtCQUFrQztRQUNoQyxzQkFBOEQ7UUFDaEUsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQXBCYyxtRUFBNkM7O3VGRE9wRCxlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsV0FBVztzQ0FLWixLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJzdWNjZXNzXCI7XG4gIEBJbnB1dCgpIHRvQm90dG9tID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG1haW5Gb290ZXJDbGFzc2VzKCl7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy50aGVtZTtcbiAgICByZXN1bHRzICs9IHRoaXMudG9Cb3R0b20gPyBcIiBzdGljay10by1ib3R0b21cIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb290ZXJcIiBbbmdDbGFzc109XCJtYWluRm9vdGVyQ2xhc3NlcygpICsgJyAnICsgY2xhc3NcIj5cbiAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImxlZnQtc2VjdGlvblwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9bGVmdC1zZWN0aW9uXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLXNlY3Rpb25cIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PW1pZGRsZS1zZWN0aW9uXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmlnaHQtc2VjdGlvblwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9cmlnaHQtc2VjdGlvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3R0b20tc2VjdGlvblwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9bGVmdC1ib3R0b20tc2VjdGlvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJvdHRvbS1zZWN0aW9uXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1yaWdodC1ib3R0b20tc2VjdGlvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=