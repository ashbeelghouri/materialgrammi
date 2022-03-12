import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class CollapseComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.show = false;
        this.class = "";
        this.active = new EventEmitter();
    }
    ngOnInit() {
        this.service.registerCollapse(this.id, this.show);
        this.watch();
    }
    watch() {
        this.service.watchCollapse(this.id).subscribe((val) => {
            this.show = val;
            this.active.emit(val);
        });
    }
    close() {
        this.service.closeCollapse(this.id);
    }
    open() {
        this.service.openCollapse(this.id);
    }
    mainCollapseClasses() {
        let classes = ``;
        classes += this.show ? 'active' : '';
        return classes;
    }
}
CollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CollapseComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
CollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CollapseComponent, selector: "mg-collapse", inputs: { id: "id", show: "show", class: "class" }, outputs: { active: "active" }, ngImport: i0, template: "<div class=\"collapse\" [ngClass]=\"mainCollapseClasses() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CollapseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-collapse', template: "<div class=\"collapse\" [ngClass]=\"mainCollapseClasses() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { id: [{
                type: Input
            }], show: [{
                type: Input
            }], class: [{
                type: Input
            }], active: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2NvbGxhcHNlL2NvbGxhcHNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb2xsYXBzZS9jb2xsYXBzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUS9FLE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsWUFBb0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFOekMsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVYsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFZ0IsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs4R0FqQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsc0lDUjlCLG1IQUdBOzJGREthLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxhQUFhOzRHQUtkLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVJLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1jb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbGxhcHNlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIHNob3cgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlckNvbGxhcHNlKHRoaXMuaWQsIHRoaXMuc2hvdyk7XG4gICAgdGhpcy53YXRjaCgpO1xuICB9XG5cbiAgd2F0Y2goKSB7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoQ29sbGFwc2UodGhpcy5pZCkuc3Vic2NyaWJlKCh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IHZhbDtcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQodmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2VydmljZS5jbG9zZUNvbGxhcHNlKHRoaXMuaWQpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNlcnZpY2Uub3BlbkNvbGxhcHNlKHRoaXMuaWQpO1xuICB9XG5cbiAgbWFpbkNvbGxhcHNlQ2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGBgO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5zaG93ID8gJ2FjdGl2ZScgOiAnJztcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBbbmdDbGFzc109XCJtYWluQ29sbGFwc2VDbGFzc2VzKCkgKyAnICcgKyBjbGFzc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==