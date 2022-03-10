import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
const _c0 = ["*"];
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
CollapseComponent.ɵfac = function CollapseComponent_Factory(t) { return new (t || CollapseComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
CollapseComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollapseComponent, selectors: [["mg-collapse"]], inputs: { id: "id", show: "show", class: "class" }, outputs: { active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "collapse", 3, "ngClass"]], template: function CollapseComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainCollapseClasses() + " " + ctx.class);
    } }, directives: [i2.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseComponent, [{
        type: Component,
        args: [{ selector: 'mg-collapse', template: "<div class=\"collapse\" [ngClass]=\"mainCollapseClasses() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { id: [{
            type: Input
        }], show: [{
            type: Input
        }], class: [{
            type: Input
        }], active: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2NvbGxhcHNlL2NvbGxhcHNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jb2xsYXBzZS9jb2xsYXBzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVEvRSxNQUFNLE9BQU8saUJBQWlCO0lBTzVCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBTnpDLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVWLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWdCLENBQUM7SUFFdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBWSxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7a0ZBakNVLGlCQUFpQjtvRUFBakIsaUJBQWlCOztRQ1I5Qiw4QkFBc0U7UUFDcEUsa0JBQXlCO1FBQzNCLGlCQUFNOztRQUZnQixxRUFBK0M7O3VGRFF4RCxpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSxhQUFhO3dFQUtkLEVBQUU7a0JBQVYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1jb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbGxhcHNlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIHNob3cgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlckNvbGxhcHNlKHRoaXMuaWQsIHRoaXMuc2hvdyk7XG4gICAgdGhpcy53YXRjaCgpO1xuICB9XG5cbiAgd2F0Y2goKSB7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoQ29sbGFwc2UodGhpcy5pZCkuc3Vic2NyaWJlKCh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IHZhbDtcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQodmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2VydmljZS5jbG9zZUNvbGxhcHNlKHRoaXMuaWQpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNlcnZpY2Uub3BlbkNvbGxhcHNlKHRoaXMuaWQpO1xuICB9XG5cbiAgbWFpbkNvbGxhcHNlQ2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGBgO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5zaG93ID8gJ2FjdGl2ZScgOiAnJztcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBbbmdDbGFzc109XCJtYWluQ29sbGFwc2VDbGFzc2VzKCkgKyAnICcgKyBjbGFzc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==