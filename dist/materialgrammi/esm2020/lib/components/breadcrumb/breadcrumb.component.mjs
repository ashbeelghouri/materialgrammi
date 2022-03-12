import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class BreadcrumbComponent {
    constructor() {
        this.links = [];
        this.darkmode = false;
        this.devider = "/";
        this.class = "";
    }
    ngOnInit() {
    }
    showDarkMode() {
        return this.darkmode ? "dark" : "lite";
    }
    active(link) {
        return link.active ? 'active' : '';
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BreadcrumbComponent, selector: "mg-breadcrumb", inputs: { links: "links", darkmode: "darkmode", devider: "devider", class: "class" }, ngImport: i0, template: "<div class=\"breadcrumb-wrapper\" [ngClass]=\"showDarkMode() + ' ' + class\" *ngIf=\"links.length > 0\">\n  <ng-container *ngFor=\"let link of links; let i = index;\">\n    <a [routerLink]=\"link.url\" class=\"breadcrumb\" [ngClass]=\"active(link)\">{{link.name}}</a>\n    <span class=\"marginL-5 marginR-5\" *ngIf=\"links[i+1]\" [innerHtml]=\"devider\"></span>\n  </ng-container>\n</div>\n", styles: [""], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-breadcrumb', template: "<div class=\"breadcrumb-wrapper\" [ngClass]=\"showDarkMode() + ' ' + class\" *ngIf=\"links.length > 0\">\n  <ng-container *ngFor=\"let link of links; let i = index;\">\n    <a [routerLink]=\"link.url\" class=\"breadcrumb\" [ngClass]=\"active(link)\">{{link.name}}</a>\n    <span class=\"marginL-5 marginR-5\" *ngIf=\"links[i+1]\" [innerHtml]=\"devider\"></span>\n  </ng-container>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { links: [{
                type: Input
            }], darkmode: [{
                type: Input
            }], devider: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUpTLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dIQWhCVSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwySUNQaEMsd1lBTUE7MkZEQ2EsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGVBQWU7MEVBS2hCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbmtzOiBhbnkgPSBbXTtcbiAgQElucHV0KCkgZGFya21vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZGV2aWRlciA9IFwiL1wiO1xuICBASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBzaG93RGFya01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFya21vZGUgPyBcImRhcmtcIiA6IFwibGl0ZVwiO1xuICB9XG5cbiAgYWN0aXZlKGxpbms6IGFueSkge1xuICAgIHJldHVybiBsaW5rLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyc7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImJyZWFkY3J1bWItd3JhcHBlclwiIFtuZ0NsYXNzXT1cInNob3dEYXJrTW9kZSgpICsgJyAnICsgY2xhc3NcIiAqbmdJZj1cImxpbmtzLmxlbmd0aCA+IDBcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGluayBvZiBsaW5rczsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICA8YSBbcm91dGVyTGlua109XCJsaW5rLnVybFwiIGNsYXNzPVwiYnJlYWRjcnVtYlwiIFtuZ0NsYXNzXT1cImFjdGl2ZShsaW5rKVwiPnt7bGluay5uYW1lfX08L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJtYXJnaW5MLTUgbWFyZ2luUi01XCIgKm5nSWY9XCJsaW5rc1tpKzFdXCIgW2lubmVySHRtbF09XCJkZXZpZGVyXCI+PC9zcGFuPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19