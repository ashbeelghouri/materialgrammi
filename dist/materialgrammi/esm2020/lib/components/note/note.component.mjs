import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NoteComponent {
    constructor() {
        this.theme = "primary";
        this.alignCenter = false;
    }
    ngOnInit() {
    }
}
NoteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NoteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NoteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: NoteComponent, selector: "mg-note", inputs: { theme: "theme", alignCenter: "alignCenter" }, ngImport: i0, template: "<div class=\"note {{theme}}\">\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NoteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-note', template: "<div class=\"note {{theme}}\">\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
                type: Input
            }], alignCenter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9ub3RlL25vdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQUd4QjtRQUZTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFDYixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzswR0FOVSxhQUFhOzhGQUFiLGFBQWEsdUdDUDFCLHlKQUtBOzJGREVhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsU0FBUzswRUFLVixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1ub3RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgYWxpZ25DZW50ZXIgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibm90ZSB7e3RoZW1lfX1cIj5cbiAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LWNlbnRlciBibG9jaycgOiBhbGlnbkNlbnRlciA9PT0gdHJ1ZX1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19