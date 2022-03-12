import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class OverlayComponent {
    constructor(service) {
        this.service = service;
        this.bgClass = "grey1";
        this.overlayClass = "bg-b-3";
        this.offSize = "1";
        this.canvasPosition = "top";
        this.id = "1";
        this.active = false;
        this.isClosed = new EventEmitter();
    }
    ngOnInit() {
        this.service.registerOverlay(this.id, this.active);
        this.subscribe();
    }
    activator() {
        return this.active ? "active" : "";
    }
    subscribe() {
        this.service.watchOverlay(this.id).subscribe((data) => {
            this.active = data;
        });
    }
    mainClasses() {
        let classes = "";
        classes += ` ${this.activator()}`;
        classes += ` ${this.bgClass}`;
        return classes;
    }
    overlayClasses() {
        let classes = "";
        classes += this.active ? 'active' : '';
        classes += ` ${this.overlayClass}`;
        return classes;
    }
    close() {
        this.service.closeOverlay(this.id);
        this.isClosed.emit(true);
    }
}
OverlayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverlayComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
OverlayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: OverlayComponent, selector: "mg-overlay", inputs: { bgClass: "bgClass", overlayClass: "overlayClass", offSize: "offSize", canvasPosition: "canvasPosition", id: "id", active: "active" }, outputs: { isClosed: "isClosed" }, ngImport: i0, template: "<div class=\"overlay {{canvasPosition}} size-{{offSize}}\" [ngClass]=\"mainClasses()\">\n  <ng-content></ng-content>\n</div>\n<div (click)=\"close()\" class=\"off-overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverlayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-overlay', template: "<div class=\"overlay {{canvasPosition}} size-{{offSize}}\" [ngClass]=\"mainClasses()\">\n  <ng-content></ng-content>\n</div>\n<div (click)=\"close()\" class=\"off-overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { bgClass: [{
                type: Input
            }], overlayClass: [{
                type: Input
            }], offSize: [{
                type: Input
            }], canvasPosition: [{
                type: Input
            }], id: [{
                type: Input
            }], active: [{
                type: Input
            }], isClosed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVEvRSxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBVHpDLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDbEIsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUMvQixPQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWMsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFRLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBRWxDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU5QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OzZHQS9DVSxnQkFBZ0I7aUdBQWhCLGdCQUFnQixxT0NSN0IsMk5BSUE7MkZESWEsZ0JBQWdCO2tCQUw1QixTQUFTOytCQUNFLFlBQVk7NEdBS2IsT0FBTztzQkFBZixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxncmFtbWlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWF0ZXJpYWxncmFtbWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLW92ZXJsYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL292ZXJsYXkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiZ0NsYXNzID0gXCJncmV5MVwiO1xuICBASW5wdXQoKSBvdmVybGF5Q2xhc3MgPSBcImJnLWItM1wiO1xuICBASW5wdXQoKSBvZmZTaXplOiBzdHJpbmcgPSBcIjFcIjtcbiAgQElucHV0KCkgY2FudmFzUG9zaXRpb246IHN0cmluZyA9IFwidG9wXCI7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBpc0Nsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyT3ZlcmxheSh0aGlzLmlkLCB0aGlzLmFjdGl2ZSk7XG4gICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGFjdGl2YXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgfVxuXG4gIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLnNlcnZpY2Uud2F0Y2hPdmVybGF5KHRoaXMuaWQpLnN1YnNjcmliZSgoZGF0YTphbnkpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIG1haW5DbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcblxuICAgIGNsYXNzZXMgKz0gYCAke3RoaXMuYWN0aXZhdG9yKCl9YDtcblxuICAgIGNsYXNzZXMgKz0gYCAke3RoaXMuYmdDbGFzc31gO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBvdmVybGF5Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFwiXCI7XG4gICAgY2xhc3NlcyArPSB0aGlzLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyc7XG4gICAgY2xhc3NlcyArPSBgICR7dGhpcy5vdmVybGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2VydmljZS5jbG9zZU92ZXJsYXkodGhpcy5pZCk7XG4gICAgdGhpcy5pc0Nsb3NlZC5lbWl0KHRydWUpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJvdmVybGF5IHt7Y2FudmFzUG9zaXRpb259fSBzaXplLXt7b2ZmU2l6ZX19XCIgW25nQ2xhc3NdPVwibWFpbkNsYXNzZXMoKVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cIm9mZi1vdmVybGF5IGJsdXJcIiBbbmdDbGFzc109XCJvdmVybGF5Q2xhc3NlcygpXCI+PC9kaXY+XG4iXX0=