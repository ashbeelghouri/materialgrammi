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
NotificationsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NotificationsComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
NotificationsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: NotificationsComponent, selector: "mg-notifications", inputs: { theme: "theme", id: "id", position: "position", timer: "timer" }, ngImport: i0, template: "<p>notifications works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NotificationsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-notifications', template: "<p>notifications works!</p>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { theme: [{
                type: Input
            }], id: [{
                type: Input
            }], position: [{
                type: Input
            }], timer: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVF6RCxNQUFNLE9BQU8sc0JBQXNCO0lBT2pDLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBTnpDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULGFBQVEsR0FBRyxXQUFXLENBQUM7UUFFdkIsVUFBSyxHQUFHLElBQUksQ0FBQztJQUVnQyxDQUFDO0lBRXZELFFBQVE7SUFFUixDQUFDOzttSEFYVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixvSUNSbkMsK0JBQ0E7MkZET2Esc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLGtCQUFrQjs0R0FLbkIsS0FBSztzQkFBYixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxncmFtbWlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWF0ZXJpYWxncmFtbWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLW5vdGlmaWNhdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aGVtZSA9IFwicHJpbWFyeVwiO1xuICBASW5wdXQoKSBpZCA9IFwiMVwiO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9IFwicmlnaHQtdG9wXCI7XG5cbiAgQElucHV0KCkgdGltZXIgPSAyMDAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbiAgXG5cbn1cbiIsIjxwPm5vdGlmaWNhdGlvbnMgd29ya3MhPC9wPlxuIl19