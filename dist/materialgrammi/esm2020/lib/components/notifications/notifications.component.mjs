import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
export class NotificationsComponent {
    constructor(service) {
        this.service = service;
        this.theme = "primary";
        this.id = "1";
        this.position = "right-top";
        this.timer = 2000;
    }
    ngOnInit() {
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationsComponent, selectors: [["mg-notifications"]], inputs: { theme: "theme", id: "id", position: "position", timer: "timer" }, decls: 2, vars: 0, template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "notifications works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsComponent, [{
        type: Component,
        args: [{ selector: 'mg-notifications', template: "<p>notifications works!</p>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { theme: [{
            type: Input
        }], id: [{
            type: Input
        }], position: [{
            type: Input
        }], timer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVF6RCxNQUFNLE9BQU8sc0JBQXNCO0lBT2pDLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBTnpDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULGFBQVEsR0FBRyxXQUFXLENBQUM7UUFFdkIsVUFBSyxHQUFHLElBQUksQ0FBQztJQUVnQyxDQUFDO0lBRXZELFFBQVE7SUFFUixDQUFDOzs0RkFYVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ1JuQyx5QkFBRztRQUFBLG9DQUFvQjtRQUFBLGlCQUFJOzt1RkRRZCxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxrQkFBa0I7d0VBS25CLEtBQUs7a0JBQWIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1ub3RpZmljYXRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgaWQgPSBcIjFcIjtcbiAgQElucHV0KCkgcG9zaXRpb24gPSBcInJpZ2h0LXRvcFwiO1xuXG4gIEBJbnB1dCgpIHRpbWVyID0gMjAwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIFxuXG59XG4iLCI8cD5ub3RpZmljYXRpb25zIHdvcmtzITwvcD5cbiJdfQ==