import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class OffcanvasComponent {
    constructor(service) {
        this.service = service;
        this.active = false;
        this.id = this.service.makeid(10, this.service.makeid(10, "offcanvas"));
        this.widgetID = "";
    }
    ngOnInit() {
        this.service.registerOffCanvas(this.id, this.active);
        this.watch();
    }
    mainClasses() {
        let results = "";
        results += this.active ? " active" : "";
        return results;
    }
    open() {
        this.service.openCanvas(this.id);
    }
    close() {
        this.service.closeCanvas(this.id);
    }
    watch() {
        this.service.watchCanvas(this.id).subscribe((data) => {
            this.active = data;
        });
    }
}
OffcanvasComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OffcanvasComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
OffcanvasComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: OffcanvasComponent, selector: "mg-offcanvas", inputs: { active: "active", id: "id" }, ngImport: i0, template: "<div class=\"offcanvas\" [ngClass]=\"mainClasses()\">\n  <div class=\"sidebar-wrapper\">\n    <ng-content select=\"[mg-data=sidebar]\"></ng-content>\n  </div>\n  <div class=\"content-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OffcanvasComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-offcanvas', template: "<div class=\"offcanvas\" [ngClass]=\"mainClasses()\">\n  <div class=\"sidebar-wrapper\">\n    <ng-content select=\"[mg-data=sidebar]\"></ng-content>\n  </div>\n  <div class=\"content-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { active: [{
                type: Input
            }], id: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9vZmZjYW52YXMvb2ZmY2FudmFzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9vZmZjYW52YXMvb2ZmY2FudmFzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBUXpELE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBcUIsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFKMUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFNUUsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUMwQyxDQUFDO0lBRXpELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OytHQTlCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiw0RkNSL0Isc1BBUUE7MkZEQWEsa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLGNBQWM7NEdBS2YsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxncmFtbWlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWF0ZXJpYWxncmFtbWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLW9mZmNhbnZhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZmZjYW52YXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vZmZjYW52YXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9mZmNhbnZhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZCA9IHRoaXMuc2VydmljZS5tYWtlaWQoMTAsIHRoaXMuc2VydmljZS5tYWtlaWQoMTAsIFwib2ZmY2FudmFzXCIpKTtcblxuICB3aWRnZXRJRCA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3Rlck9mZkNhbnZhcyh0aGlzLmlkLCB0aGlzLmFjdGl2ZSk7XG4gICAgdGhpcy53YXRjaCgpO1xuICB9XG5cbiAgbWFpbkNsYXNzZXMoKXtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLmFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIjtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIG9wZW4oKXtcbiAgICB0aGlzLnNlcnZpY2Uub3BlbkNhbnZhcyh0aGlzLmlkKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2VydmljZS5jbG9zZUNhbnZhcyh0aGlzLmlkKTtcbiAgfVxuXG4gIHdhdGNoKCl7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoQ2FudmFzKHRoaXMuaWQpLnN1YnNjcmliZSgoZGF0YTpib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJvZmZjYW52YXNcIiBbbmdDbGFzc109XCJtYWluQ2xhc3NlcygpXCI+XG4gIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbWctZGF0YT1zaWRlYmFyXVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=