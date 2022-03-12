import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardComponent {
    constructor() {
        this.class = ``;
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CardComponent, selector: "mg-card", inputs: { class: "class" }, ngImport: i0, template: "<div class=\"card\" [ngClass]=\"class\">\n  <ng-content select=\"[header]\"></ng-content>\n  <ng-content></ng-content>\n  <ng-content select=\"[footer]\"></ng-content>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-card', template: "<div class=\"card\" [ngClass]=\"class\">\n  <ng-content select=\"[header]\"></ng-content>\n  <ng-content></ng-content>\n  <ng-content select=\"[footer]\"></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQUV4QjtRQURTLFVBQUssR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzswR0FMVSxhQUFhOzhGQUFiLGFBQWEsMkVDUDFCLG1MQUtBOzJGREVhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsU0FBUzswRUFLVixLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNsYXNzID0gYGA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbaGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19