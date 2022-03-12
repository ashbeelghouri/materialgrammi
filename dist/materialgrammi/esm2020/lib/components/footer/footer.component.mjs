import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: FooterComponent, selector: "mg-footer", inputs: { theme: "theme", toBottom: "toBottom", class: "class" }, ngImport: i0, template: "<div class=\"footer\" [ngClass]=\"mainFooterClasses() + ' ' + class\">\n  <div class=\"section-top\">\n    <div class=\"left-section\">\n      <ng-content select=\"[slot=left-section]\"></ng-content>\n    </div>\n    <div class=\"middle-section\">\n      <ng-content select=\"[slot=middle-section]\"></ng-content>\n    </div>\n    <div class=\"right-section\">\n      <ng-content select=\"[slot=right-section]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"section-bottom\">\n    <div class=\"left-bottom-section\">\n      <ng-content select=\"[slot=left-bottom-section]\"></ng-content>\n    </div>\n    <div class=\"right-bottom-section\">\n      <ng-content select=\"[slot=right-bottom-section]\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-footer', template: "<div class=\"footer\" [ngClass]=\"mainFooterClasses() + ' ' + class\">\n  <div class=\"section-top\">\n    <div class=\"left-section\">\n      <ng-content select=\"[slot=left-section]\"></ng-content>\n    </div>\n    <div class=\"middle-section\">\n      <ng-content select=\"[slot=middle-section]\"></ng-content>\n    </div>\n    <div class=\"right-section\">\n      <ng-content select=\"[slot=right-section]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"section-bottom\">\n    <div class=\"left-bottom-section\">\n      <ng-content select=\"[slot=left-bottom-section]\"></ng-content>\n    </div>\n    <div class=\"right-bottom-section\">\n      <ng-content select=\"[slot=right-bottom-section]\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
                type: Input
            }], toBottom: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGVBQWU7SUFJMUI7UUFIUyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7NEdBZFUsZUFBZTtnR0FBZixlQUFlLG1IQ1A1QixpdkJBcUJBOzJGRGRhLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsV0FBVzswRUFLWixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcInN1Y2Nlc3NcIjtcbiAgQElucHV0KCkgdG9Cb3R0b20gPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbWFpbkZvb3RlckNsYXNzZXMoKXtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLnRoZW1lO1xuICAgIHJlc3VsdHMgKz0gdGhpcy50b0JvdHRvbSA/IFwiIHN0aWNrLXRvLWJvdHRvbVwiIDogXCJcIjtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZvb3RlclwiIFtuZ0NsYXNzXT1cIm1haW5Gb290ZXJDbGFzc2VzKCkgKyAnICcgKyBjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGVmdC1zZWN0aW9uXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1sZWZ0LXNlY3Rpb25dXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtc2VjdGlvblwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9bWlkZGxlLXNlY3Rpb25dXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1zZWN0aW9uXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1yaWdodC1zZWN0aW9uXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWJvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJvdHRvbS1zZWN0aW9uXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1sZWZ0LWJvdHRvbS1zZWN0aW9uXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm90dG9tLXNlY3Rpb25cIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PXJpZ2h0LWJvdHRvbS1zZWN0aW9uXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==