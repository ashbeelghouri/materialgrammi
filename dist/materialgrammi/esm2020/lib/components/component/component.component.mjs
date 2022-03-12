import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ComponentComponent {
    constructor() {
        this.size = "n";
        this.class = "";
    }
    ngOnInit() {
    }
    containerClass() {
        let results = "";
        results += this.size == "s" ? "pad-10" : "";
        results += this.size == "m" ? "pad-30" : "";
        results += this.size == "l" ? "pad-50" : "";
        results += this.size == "xl" ? "pad-80" : "";
        return results;
    }
}
ComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ComponentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ComponentComponent, selector: "mg-component", inputs: { size: "size", class: "class" }, ngImport: i0, template: "<div class=\"container\" [ngClass]=\"containerClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ComponentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-component', template: "<div class=\"container\" [ngClass]=\"containerClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { size: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb21wb25lbnQvY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb21wb25lbnQvY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QjtRQUZTLFNBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7K0dBZlUsa0JBQWtCO21HQUFsQixrQkFBa0IsOEZDUC9CLCtHQUdBOzJGRElhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxjQUFjOzBFQUtmLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBvbmVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nID0gXCJuXCI7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGNvbnRhaW5lckNsYXNzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2l6ZSA9PSBcInNcIiA/IFwicGFkLTEwXCIgOiBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5zaXplID09IFwibVwiID8gXCJwYWQtMzBcIiA6IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLnNpemUgPT0gXCJsXCIgPyBcInBhZC01MFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2l6ZSA9PSBcInhsXCIgPyBcInBhZC04MFwiIDogXCJcIjtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKSArICcgJyArIGNsYXNzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19