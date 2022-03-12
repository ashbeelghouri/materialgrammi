import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ListComponent {
    constructor() {
        this.items = [];
        this.theme = "dark";
        this.class = "";
    }
    ngOnInit() {
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ListComponent, selector: "mg-list", inputs: { items: "items", theme: "theme", class: "class" }, ngImport: i0, template: "<ul *ngIf=\"items.length > 0\" class=\"mg-list {{theme}}\" [ngClass]=\"class\">\n  <li *ngFor=\"let item of items\" [innerHtml]=\"item\" class=\"item\"></li>\n</ul>\n", styles: [""], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-list', template: "<ul *ngIf=\"items.length > 0\" class=\"mg-list {{theme}}\" [ngClass]=\"class\">\n  <li *ngFor=\"let item of items\" [innerHtml]=\"item\" class=\"item\"></li>\n</ul>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { items: [{
                type: Input
            }], theme: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQUl4QjtRQUhTLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQUN2QixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7MEdBUFUsYUFBYTs4RkFBYixhQUFhLDJHQ1AxQix3S0FHQTsyRkRJYSxhQUFhO2tCQUx6QixTQUFTOytCQUNFLFNBQVM7MEVBS1YsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnkgPSBbXTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHVsICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gMFwiIGNsYXNzPVwibWctbGlzdCB7e3RoZW1lfX1cIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbaW5uZXJIdG1sXT1cIml0ZW1cIiBjbGFzcz1cIml0ZW1cIj48L2xpPlxuPC91bD5cbiJdfQ==