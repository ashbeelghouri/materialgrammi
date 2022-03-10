import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
const _c0 = ["*"];
export class ModalComponent {
    constructor(service) {
        this.service = service;
        this.show = false;
        this.id = "0";
        this.position = "top";
        this.modalSize = "md";
        this.overlayClass = "grey8";
    }
    ngOnInit() {
        this.service.registerModal(this.id, this.show);
        this.subscribeToModal();
    }
    subscribeToModal() {
        this.service.watchModal(this.id).subscribe((val) => {
            this.show = val;
        });
    }
    close() {
        this.service.closeModal(this.id);
    }
    mainModelClasses() {
        let classes = "";
        classes += `${this.show ? 'active' : ''}`;
        return classes;
    }
    overlayClasses() {
        let classes = "";
        classes += `${this.show ? 'active' : ''}`;
        classes += ` ${this.overlayClass}`;
        return classes;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["mg-modal"]], inputs: { show: "show", id: "id", position: "position", modalSize: "modalSize", overlayClass: "overlayClass" }, ngContentSelectors: _c0, decls: 4, vars: 7, consts: [[1, "modal", 3, "ngClass"], [3, "ngClass"], [1, "overlay", "blur", 3, "ngClass", "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵlistener("click", function ModalComponent_Template_div_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainModelClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate2("content on-", ctx.position, " ", ctx.modalSize, "");
        i0.ɵɵproperty("ngClass", ctx.mainModelClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.overlayClasses());
    } }, directives: [i2.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'mg-modal', template: "<div class=\"modal\" [ngClass]=\"mainModelClasses()\">\n  <div class=\"content on-{{position}} {{modalSize}}\" [ngClass]=\"mainModelClasses()\">\n    <ng-content></ng-content>\n  </div>\n  <div (click)=\"close()\" class=\"overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { show: [{
            type: Input
        }], id: [{
            type: Input
        }], position: [{
            type: Input
        }], modalSize: [{
            type: Input
        }], overlayClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRekQsTUFBTSxPQUFPLGNBQWM7SUFNekIsWUFBcUIsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFMMUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxPQUFPLENBQUM7SUFDdUIsQ0FBQztJQUV4RCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztRQUVaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs0RUF2Q1UsY0FBYztpRUFBZCxjQUFjOztRQ1IzQiw4QkFBa0Q7UUFDaEQsOEJBQWtGO1FBQ2hGLGtCQUF5QjtRQUMzQixpQkFBTTtRQUNOLDhCQUF5RTtRQUFwRSx3RkFBUyxXQUFPLElBQUM7UUFBbUQsaUJBQU07UUFDakYsaUJBQU07O1FBTGEsZ0RBQThCO1FBQzFDLGVBQTZDO1FBQTdDLDhFQUE2QztRQUFDLGdEQUE4QjtRQUdyQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7O3VGREk3RCxjQUFjO2NBTDFCLFNBQVM7MkJBQ0UsVUFBVTt3RUFLWCxJQUFJO2tCQUFaLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3cgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQgPSBcIjBcIjtcbiAgQElucHV0KCkgcG9zaXRpb24gPSBcInRvcFwiO1xuICBASW5wdXQoKSBtb2RhbFNpemUgPSBcIm1kXCI7XG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzcyA9IFwiZ3JleThcIjtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJNb2RhbCh0aGlzLmlkLCB0aGlzLnNob3cpO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9Nb2RhbCgpO1xuICB9XG5cbiAgc3Vic2NyaWJlVG9Nb2RhbCgpIHtcbiAgICB0aGlzLnNlcnZpY2Uud2F0Y2hNb2RhbCh0aGlzLmlkKS5zdWJzY3JpYmUoKHZhbDphbnkpID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IHZhbDtcbiAgICB9KVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNsb3NlTW9kYWwodGhpcy5pZCk7XG4gIH1cblxuICBtYWluTW9kZWxDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcblxuICAgIGNsYXNzZXMgKz0gYCR7dGhpcy5zaG93ID8gJ2FjdGl2ZScgOiAnJ31gO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBvdmVybGF5Q2xhc3NlcygpIHtcblxuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcblxuICAgIGNsYXNzZXMgKz0gYCR7dGhpcy5zaG93ID8gJ2FjdGl2ZScgOiAnJ31gO1xuICAgIGNsYXNzZXMgKz0gYCAke3RoaXMub3ZlcmxheUNsYXNzfWA7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbFwiIFtuZ0NsYXNzXT1cIm1haW5Nb2RlbENsYXNzZXMoKVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBvbi17e3Bvc2l0aW9ufX0ge3ttb2RhbFNpemV9fVwiIFtuZ0NsYXNzXT1cIm1haW5Nb2RlbENsYXNzZXMoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cIm92ZXJsYXkgYmx1clwiIFtuZ0NsYXNzXT1cIm92ZXJsYXlDbGFzc2VzKClcIj48L2Rpdj5cbjwvZGl2PlxuIl19