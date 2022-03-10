import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "text-center block": a0 }; };
const _c1 = ["*"];
export class NoteComponent {
    constructor() {
        this.theme = "primary";
        this.alignCenter = false;
    }
    ngOnInit() {
    }
}
NoteComponent.ɵfac = function NoteComponent_Factory(t) { return new (t || NoteComponent)(); };
NoteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoteComponent, selectors: [["mg-note"]], inputs: { theme: "theme", alignCenter: "alignCenter" }, ngContentSelectors: _c1, decls: 3, vars: 6, consts: [[3, "ngClass"]], template: function NoteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span", 0);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("note ", ctx.theme, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.alignCenter === true));
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoteComponent, [{
        type: Component,
        args: [{ selector: 'mg-note', template: "<div class=\"note {{theme}}\">\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], alignCenter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9ub3RlL25vdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3pELE1BQU0sT0FBTyxhQUFhO0lBR3hCO1FBRlMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUNiLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBFQU5VLGFBQWE7Z0VBQWIsYUFBYTs7UUNQMUIsMkJBQTRCO1FBQzFCLCtCQUErRDtRQUM3RCxrQkFBeUI7UUFDM0IsaUJBQU87UUFDVCxpQkFBTTs7UUFKRCxpREFBc0I7UUFDbkIsZUFBd0Q7UUFBeEQsOEVBQXdEOzt1RkRNbkQsYUFBYTtjQUx6QixTQUFTOzJCQUNFLFNBQVM7c0NBS1YsS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1ub3RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgYWxpZ25DZW50ZXIgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibm90ZSB7e3RoZW1lfX1cIj5cbiAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LWNlbnRlciBibG9jaycgOiBhbGlnbkNlbnRlciA9PT0gdHJ1ZX1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19