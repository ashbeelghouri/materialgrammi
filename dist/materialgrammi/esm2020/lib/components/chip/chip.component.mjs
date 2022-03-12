import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
ChipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChipComponent, selector: "mg-chip", inputs: { theme: "theme", outline: "outline", class: "class" }, ngImport: i0, template: "<div class=\"chip\" [ngClass]=\"chipClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-chip', template: "<div class=\"chip\" [ngClass]=\"chipClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
                type: Input
            }], outline: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvY2hpcC9jaGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jaGlwL2NoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQUl4QjtRQUhTLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV0QixPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFM0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7MEdBaEJVLGFBQWE7OEZBQWIsYUFBYSwrR0NQMUIscUdBR0E7MkZESWEsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxTQUFTOzBFQUtWLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWNoaXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoaXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGNoaXBDbGFzcygpe1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMudGhlbWU7XG5cbiAgICByZXN1bHRzICs9IHRoaXMub3V0bGluZSA/IFwiIG91dGxpbmVkXCIgOiBcIlwiO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNoaXBcIiBbbmdDbGFzc109XCJjaGlwQ2xhc3MoKSArICcgJyArIGNsYXNzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19