import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
const _c0 = ["*"];
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
WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
WizardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WizardComponent, selectors: [["mg-wizard"]], inputs: { active: "active", id: "id", widgets: "widgets" }, outputs: { step: "step", isCompleted: "isCompleted" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "wizard"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WizardComponent, [{
        type: Component,
        args: [{ selector: 'mg-wizard', template: "<div class=\"wizard\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { active: [{
            type: Input
        }], id: [{
            type: Input
        }], widgets: [{
            type: Input
        }], step: [{
            type: Output
        }], isCompleted: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTFGLE1BQU0sT0FBTyxlQUFlO0lBTzFCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBTnpDLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUFHLENBQUMsQ0FBQztJQUN1QyxDQUFDO0lBRXZELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtZQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztnQkFDOUIsTUFBTSxFQUFFLFlBQVk7YUFDckIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFrQixFQUFFLEVBQUU7WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhFQTlCVSxlQUFlO2tFQUFmLGVBQWU7O1FDUjVCLDhCQUFvQjtRQUNsQixrQkFBeUI7UUFDM0IsaUJBQU07O3VGRE1PLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxXQUFXO3dFQUtaLE1BQU07a0JBQWQsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNJLElBQUk7a0JBQWIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2l6YXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IDA7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIHdpZGdldHMgPSBbXCJzdGVwMVwiLCBcInN0ZXAyXCIsIFwic3RlcDNcIl07XG4gIEBPdXRwdXQoKSBzdGVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaXNDb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGFjdGl2ZVN0ZXAgPSAwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyV2l6YXJkKHRoaXMuaWQsIHRoaXMud2lkZ2V0cywgdGhpcy5hY3RpdmUpO1xuICAgIHRoaXMud2F0Y2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlcldpemFyZCh0aGlzLmlkLCB0aGlzLndpZGdldHMsIHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIHdhdGNoKCl7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoV2l6YXJkQWN0aXZlKHRoaXMuaWQpLnN1YnNjcmliZSgoYWN0aXZlTnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwid2F0Y2hpbmcgc3RlcCBudW1iZXJcIiwgYWN0aXZlTnVtYmVyKTtcbiAgICAgIHRoaXMuc3RlcC5lbWl0KHtcbiAgICAgICAgaWQ6IHRoaXMud2lkZ2V0c1thY3RpdmVOdW1iZXJdLFxuICAgICAgICBudW1iZXI6IGFjdGl2ZU51bWJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoV2l6YXJkQ29tcGxldGVkKHRoaXMuaWQpLnN1YnNjcmliZSgoY29tcGxldGVkOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIndhdGNoaW5nIGNvbXBsZXRlZFwiLCBjb21wbGV0ZWQpO1xuICAgICAgdGhpcy5pc0NvbXBsZXRlZC5lbWl0KGNvbXBsZXRlZCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ3aXphcmRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=