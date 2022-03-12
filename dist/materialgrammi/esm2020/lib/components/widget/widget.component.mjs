import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class WidgetComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.id = "general-widget-1";
        this.parent = "general-parent-1";
        this.type = "general";
        this.options = false;
        this.status = false;
        this.standalone = false;
        this.triggered = new EventEmitter();
        this.settings = {
            header: {
                always: false
            },
            footer: {
                always: false
            }
        };
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges() {
        this.init();
    }
    init() {
        if (this.standalone) {
            this.registerWidget();
            if (this.status) {
                this.openWidget();
            }
            else {
                this.closeWidget();
            }
        }
        this.watch();
        this.watchOptions();
    }
    setOptions() {
        if (this.options && this.options.header.always) {
            this.settings.header.always = true;
        }
        if (this.options && this.options.footer.always) {
            this.settings.footer.always = true;
        }
    }
    registerWidget() {
        this.mainService.registerWidget(this.id, this.type, this.parent, this.options);
        if (this.status) {
            this.openWidget();
        }
    }
    openWidget() {
        this.mainService.openWidget(this.id, this.type, this.parent);
    }
    closeWidget() {
        this.mainService.closeWidget(this.id, this.type, this.parent);
    }
    watch() {
        if (this.mainService.widgetExists(this.id, this.type, this.parent)) {
            this.mainService.watchWidget(this.id, this.type, this.parent).subscribe((data) => {
                this.status = data;
                this.triggered.emit({
                    status: this.status,
                    options: this.options
                });
            });
        }
    }
    watchOptions() {
        if (this.mainService.widgetExists(this.id, this.type, this.parent)) {
            this.mainService.watchWidget(this.id, this.type, this.parent).subscribe((data) => {
                this.options = data;
            });
        }
    }
}
WidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: WidgetComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
WidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: WidgetComponent, selector: "mg-widget", inputs: { id: "id", parent: "parent", type: "type", options: "options", status: "status", standalone: "standalone" }, outputs: { triggered: "triggered" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"settings.header.always || status\">\n  <ng-content select=\"[mg-data=header]\"></ng-content>\n</ng-container>\n<ng-container *ngIf=\"status\">\n  <ng-content></ng-content>\n</ng-container>\n<ng-container *ngIf=\"settings.footer.always || status\">\n  <ng-content select=\"[mg-data=footer]\"></ng-content>\n</ng-container>\n", styles: [""], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: WidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-widget', template: "<ng-container *ngIf=\"settings.header.always || status\">\n  <ng-content select=\"[mg-data=header]\"></ng-content>\n</ng-container>\n<ng-container *ngIf=\"status\">\n  <ng-content></ng-content>\n</ng-container>\n<ng-container *ngIf=\"settings.footer.always || status\">\n  <ng-content select=\"[mg-data=footer]\"></ng-content>\n</ng-container>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { id: [{
                type: Input
            }], parent: [{
                type: Input
            }], type: [{
                type: Input
            }], options: [{
                type: Input
            }], status: [{
                type: Input
            }], standalone: [{
                type: Input
            }], triggered: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTFGLE1BQU0sT0FBTyxlQUFlO0lBa0IxQixZQUFvQixXQUFrQztRQUFsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFqQjdDLE9BQUUsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QixXQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBQ3JCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLGFBQVEsR0FBRztZQUNULE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRixDQUFDO0lBRXdELENBQUM7SUFFM0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxD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SUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpZCA9IFwiZ2VuZXJhbC13aWRnZXQtMVwiO1xuICBASW5wdXQoKSBwYXJlbnQgPSBcImdlbmVyYWwtcGFyZW50LTFcIjtcbiAgQElucHV0KCkgdHlwZSA9IFwiZ2VuZXJhbFwiO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RhdHVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0YW5kYWxvbmUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZXR0aW5ncyA9IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGFsd2F5czogZmFsc2VcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYWx3YXlzOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1haW5TZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJXaWRnZXQoKTtcbiAgICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgICB0aGlzLm9wZW5XaWRnZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VXaWRnZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53YXRjaCgpO1xuICAgIHRoaXMud2F0Y2hPcHRpb25zKCk7XG4gIH1cblxuICBzZXRPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYWRlci5hbHdheXMpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuaGVhZGVyLmFsd2F5cyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmZvb3Rlci5hbHdheXMpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZm9vdGVyLmFsd2F5cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJXaWRnZXQoKSB7XG4gICAgdGhpcy5tYWluU2VydmljZS5yZWdpc3RlcldpZGdldCh0aGlzLmlkLCB0aGlzLnR5cGUsIHRoaXMucGFyZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgdGhpcy5vcGVuV2lkZ2V0KCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbldpZGdldCgpIHtcbiAgICB0aGlzLm1haW5TZXJ2aWNlLm9wZW5XaWRnZXQodGhpcy5pZCwgdGhpcy50eXBlLCB0aGlzLnBhcmVudCk7XG4gIH1cblxuICBjbG9zZVdpZGdldCgpIHtcbiAgICB0aGlzLm1haW5TZXJ2aWNlLmNsb3NlV2lkZ2V0KHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgd2F0Y2goKSB7XG4gICAgaWYgKHRoaXMubWFpblNlcnZpY2Uud2lkZ2V0RXhpc3RzKHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpKSB7XG4gICAgICB0aGlzLm1haW5TZXJ2aWNlLndhdGNoV2lkZ2V0KHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YTtcbiAgICAgICAgdGhpcy50cmlnZ2VyZWQuZW1pdCh7XG4gICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB3YXRjaE9wdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMubWFpblNlcnZpY2Uud2lkZ2V0RXhpc3RzKHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpKSB7XG4gICAgICB0aGlzLm1haW5TZXJ2aWNlLndhdGNoV2lkZ2V0KHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJzZXR0aW5ncy5oZWFkZXIuYWx3YXlzIHx8IHN0YXR1c1wiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbWctZGF0YT1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwic3RhdHVzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInNldHRpbmdzLmZvb3Rlci5hbHdheXMgfHwgc3RhdHVzXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlttZy1kYXRhPWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==