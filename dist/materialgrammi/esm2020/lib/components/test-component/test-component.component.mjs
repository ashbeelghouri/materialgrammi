import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
export class TestComponentComponent {
    constructor(myservice) {
        this.myservice = myservice;
        this.widgetID = "widget";
    }
    ngOnInit() {
    }
}
TestComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TestComponentComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
TestComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TestComponentComponent, selector: "lib-test", ngImport: i0, template: "<a style=\"padding: 5px; border: 1px solid #212121; cursor: pointer;\"><ng-content></ng-content></a>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TestComponentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-test', template: "<a style=\"padding: 5px; border: 1px solid #212121; cursor: pointer;\"><ng-content></ng-content></a>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3Rlc3QtY29tcG9uZW50L3Rlc3QtY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90ZXN0LWNvbXBvbmVudC90ZXN0LWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFRbEQsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUFvQixTQUFnQztRQUFoQyxjQUFTLEdBQVQsU0FBUyxDQUF1QjtRQURwRCxhQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3NDLENBQUM7SUFFM0QsUUFBUTtJQUNSLENBQUM7O21IQUxVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGdEQ1JuQyx3R0FDQTsyRkRPYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0UsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRlc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdC1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXN0LWNvbXBvbmVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHdpZGdldElEID0gXCJ3aWRnZXRcIjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBteXNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG5cblxufVxuIiwiPGEgc3R5bGU9XCJwYWRkaW5nOiA1cHg7IGJvcmRlcjogMXB4IHNvbGlkICMyMTIxMjE7IGN1cnNvcjogcG9pbnRlcjtcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9hPlxuIl19