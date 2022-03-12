import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
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
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ModalComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ModalComponent, selector: "mg-modal", inputs: { show: "show", id: "id", position: "position", modalSize: "modalSize", overlayClass: "overlayClass" }, ngImport: i0, template: "<div class=\"modal\" [ngClass]=\"mainModelClasses()\">\n  <div class=\"content on-{{position}} {{modalSize}}\" [ngClass]=\"mainModelClasses()\">\n    <ng-content></ng-content>\n  </div>\n  <div (click)=\"close()\" class=\"overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n</div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-modal', template: "<div class=\"modal\" [ngClass]=\"mainModelClasses()\">\n  <div class=\"content on-{{position}} {{modalSize}}\" [ngClass]=\"mainModelClasses()\">\n    <ng-content></ng-content>\n  </div>\n  <div (click)=\"close()\" class=\"overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { show: [{
                type: Input
            }], id: [{
                type: Input
            }], position: [{
                type: Input
            }], modalSize: [{
                type: Input
            }], overlayClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVF6RCxNQUFNLE9BQU8sY0FBYztJQU16QixZQUFxQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUwxQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLE9BQU8sQ0FBQztJQUN1QixDQUFDO0lBRXhELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTFDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxjQUFjO1FBRVosSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUMsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRW5DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OzJHQXZDVSxjQUFjOytGQUFkLGNBQWMsZ0tDUjNCLDhSQU1BOzJGREVhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsVUFBVTs0R0FLWCxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkID0gXCIwXCI7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gXCJ0b3BcIjtcbiAgQElucHV0KCkgbW9kYWxTaXplID0gXCJtZFwiO1xuICBASW5wdXQoKSBvdmVybGF5Q2xhc3MgPSBcImdyZXk4XCI7XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyTW9kYWwodGhpcy5pZCwgdGhpcy5zaG93KTtcbiAgICB0aGlzLnN1YnNjcmliZVRvTW9kYWwoKTtcbiAgfVxuXG4gIHN1YnNjcmliZVRvTW9kYWwoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoTW9kYWwodGhpcy5pZCkuc3Vic2NyaWJlKCh2YWw6YW55KSA9PiB7XG4gICAgICB0aGlzLnNob3cgPSB2YWw7XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2VydmljZS5jbG9zZU1vZGFsKHRoaXMuaWQpO1xuICB9XG5cbiAgbWFpbk1vZGVsQ2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFwiXCI7XG5cbiAgICBjbGFzc2VzICs9IGAke3RoaXMuc2hvdyA/ICdhY3RpdmUnIDogJyd9YDtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgb3ZlcmxheUNsYXNzZXMoKSB7XG5cbiAgICBsZXQgY2xhc3NlcyA9IFwiXCI7XG5cbiAgICBjbGFzc2VzICs9IGAke3RoaXMuc2hvdyA/ICdhY3RpdmUnIDogJyd9YDtcbiAgICBjbGFzc2VzICs9IGAgJHt0aGlzLm92ZXJsYXlDbGFzc31gO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWxcIiBbbmdDbGFzc109XCJtYWluTW9kZWxDbGFzc2VzKClcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgb24te3twb3NpdGlvbn19IHt7bW9kYWxTaXplfX1cIiBbbmdDbGFzc109XCJtYWluTW9kZWxDbGFzc2VzKClcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJvdmVybGF5IGJsdXJcIiBbbmdDbGFzc109XCJvdmVybGF5Q2xhc3NlcygpXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==