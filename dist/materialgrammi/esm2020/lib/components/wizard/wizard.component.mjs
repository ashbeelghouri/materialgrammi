import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
export class WizardComponent {
    constructor(service) {
        this.service = service;
        this.active = 0;
        this.id = "1";
        this.widgets = ["step1", "step2", "step3"];
        this.step = new EventEmitter();
        this.isCompleted = new EventEmitter();
        this.activeStep = 0;
    }
    ngOnInit() {
        this.service.registerWizard(this.id, this.widgets, this.active);
        this.watch();
    }
    ngOnChanges() {
        this.service.registerWizard(this.id, this.widgets, this.active);
    }
    watch() {
        this.service.watchWizardActive(this.id).subscribe((activeNumber) => {
            console.log("watching step number", activeNumber);
            this.step.emit({
                id: this.widgets[activeNumber],
                number: activeNumber
            });
        });
        this.service.watchWizardCompleted(this.id).subscribe((completed) => {
            console.log("watching completed", completed);
            this.isCompleted.emit(completed);
        });
    }
}
WizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: WizardComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
WizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: WizardComponent, selector: "mg-wizard", inputs: { active: "active", id: "id", widgets: "widgets" }, outputs: { step: "step", isCompleted: "isCompleted" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"wizard\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: WizardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-wizard', template: "<div class=\"wizard\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { active: [{
                type: Input
            }], id: [{
                type: Input
            }], widgets: [{
                type: Input
            }], step: [{
                type: Output
            }], isCompleted: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRMUYsTUFBTSxPQUFPLGVBQWU7SUFPMUIsWUFBb0IsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFOekMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQyxlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3VDLENBQUM7SUFFdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBb0IsRUFBRSxFQUFFO1lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUM5QixNQUFNLEVBQUUsWUFBWTthQUNyQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQWtCLEVBQUUsRUFBRTtZQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEdBOUJVLGVBQWU7Z0dBQWYsZUFBZSx5TENSNUIsK0RBR0E7MkZES2EsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxXQUFXOzRHQUtaLE1BQU07c0JBQWQsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctd2l6YXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpemFyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpemFyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhY3RpdmUgPSAwO1xuICBASW5wdXQoKSBpZCA9IFwiMVwiO1xuICBASW5wdXQoKSB3aWRnZXRzID0gW1wic3RlcDFcIiwgXCJzdGVwMlwiLCBcInN0ZXAzXCJdO1xuICBAT3V0cHV0KCkgc3RlcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGlzQ29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBhY3RpdmVTdGVwID0gMDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlcldpemFyZCh0aGlzLmlkLCB0aGlzLndpZGdldHMsIHRoaXMuYWN0aXZlKTtcbiAgICB0aGlzLndhdGNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJXaXphcmQodGhpcy5pZCwgdGhpcy53aWRnZXRzLCB0aGlzLmFjdGl2ZSk7XG4gIH1cblxuICB3YXRjaCgpe1xuICAgIHRoaXMuc2VydmljZS53YXRjaFdpemFyZEFjdGl2ZSh0aGlzLmlkKS5zdWJzY3JpYmUoKGFjdGl2ZU51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIndhdGNoaW5nIHN0ZXAgbnVtYmVyXCIsIGFjdGl2ZU51bWJlcik7XG4gICAgICB0aGlzLnN0ZXAuZW1pdCh7XG4gICAgICAgIGlkOiB0aGlzLndpZGdldHNbYWN0aXZlTnVtYmVyXSxcbiAgICAgICAgbnVtYmVyOiBhY3RpdmVOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZS53YXRjaFdpemFyZENvbXBsZXRlZCh0aGlzLmlkKS5zdWJzY3JpYmUoKGNvbXBsZXRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ3YXRjaGluZyBjb21wbGV0ZWRcIiwgY29tcGxldGVkKTtcbiAgICAgIHRoaXMuaXNDb21wbGV0ZWQuZW1pdChjb21wbGV0ZWQpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwid2l6YXJkXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19