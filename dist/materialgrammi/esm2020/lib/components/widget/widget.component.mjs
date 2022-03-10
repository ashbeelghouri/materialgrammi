import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
function WidgetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function WidgetComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function WidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementContainerEnd();
} }
const _c0 = [[["", "mg-data", "header"]], "*", [["", "mg-data", "footer"]]];
const _c1 = ["[mg-data=header]", "*", "[mg-data=footer]"];
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
WidgetComponent.ɵfac = function WidgetComponent_Factory(t) { return new (t || WidgetComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
WidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetComponent, selectors: [["mg-widget"]], inputs: { id: "id", parent: "parent", type: "type", options: "options", status: "status", standalone: "standalone" }, outputs: { triggered: "triggered" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, WidgetComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, WidgetComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(2, WidgetComponent_ng_container_2_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.settings.header.always || ctx.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.settings.footer.always || ctx.status);
    } }, directives: [i2.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetComponent, [{
        type: Component,
        args: [{ selector: 'mg-widget', template: "<ng-container *ngIf=\"settings.header.always || status\">\n  <ng-content select=\"[mg-data=header]\"></ng-content>\n</ng-container>\n<ng-container *ngIf=\"status\">\n  <ng-content></ng-content>\n</ng-container>\n<ng-container *ngIf=\"settings.footer.always || status\">\n  <ng-content select=\"[mg-data=footer]\"></ng-content>\n</ng-container>\n", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { id: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0ExRiw2QkFBdUQ7SUFDckQsa0JBQW1EO0lBQ3JELDBCQUFlOzs7SUFDZiw2QkFBNkI7SUFDM0IscUJBQXlCO0lBQzNCLDBCQUFlOzs7SUFDZiw2QkFBdUQ7SUFDckQscUJBQW1EO0lBQ3JELDBCQUFlOzs7O0FEQWYsTUFBTSxPQUFPLGVBQWU7SUFrQjFCLFlBQW9CLFdBQWtDO1FBQWxDLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQWpCN0MsT0FBRSxHQUFHLGtCQUFrQixDQUFDO1FBQ3hCLFdBQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUM1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFDckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekMsYUFBUSxHQUFHO1lBQ1QsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEtBQUs7YUFDZDtTQUNGLENBQUM7SUFFd0QsQ0FBQztJQUUzRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FB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RUFuRlUsZUFBZTtrRUFBZixlQUFlOztRQ1I1QixrRkFFZTtRQUNmLGtGQUVlO1FBQ2Ysa0ZBRWU7O1FBUkEsK0RBQXNDO1FBR3RDLGVBQVk7UUFBWixpQ0FBWTtRQUdaLGVBQXNDO1FBQXRDLCtEQUFzQzs7dUZERXhDLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxXQUFXO3dFQUtaLEVBQUU7a0JBQVYsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDSSxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpZCA9IFwiZ2VuZXJhbC13aWRnZXQtMVwiO1xuICBASW5wdXQoKSBwYXJlbnQgPSBcImdlbmVyYWwtcGFyZW50LTFcIjtcbiAgQElucHV0KCkgdHlwZSA9IFwiZ2VuZXJhbFwiO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RhdHVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0YW5kYWxvbmUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZXR0aW5ncyA9IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGFsd2F5czogZmFsc2VcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYWx3YXlzOiBmYWxzZVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1haW5TZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJXaWRnZXQoKTtcbiAgICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgICB0aGlzLm9wZW5XaWRnZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VXaWRnZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53YXRjaCgpO1xuICAgIHRoaXMud2F0Y2hPcHRpb25zKCk7XG4gIH1cblxuICBzZXRPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYWRlci5hbHdheXMpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuaGVhZGVyLmFsd2F5cyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmZvb3Rlci5hbHdheXMpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZm9vdGVyLmFsd2F5cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJXaWRnZXQoKSB7XG4gICAgdGhpcy5tYWluU2VydmljZS5yZWdpc3RlcldpZGdldCh0aGlzLmlkLCB0aGlzLnR5cGUsIHRoaXMucGFyZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgdGhpcy5vcGVuV2lkZ2V0KCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbldpZGdldCgpIHtcbiAgICB0aGlzLm1haW5TZXJ2aWNlLm9wZW5XaWRnZXQodGhpcy5pZCwgdGhpcy50eXBlLCB0aGlzLnBhcmVudCk7XG4gIH1cblxuICBjbG9zZVdpZGdldCgpIHtcbiAgICB0aGlzLm1haW5TZXJ2aWNlLmNsb3NlV2lkZ2V0KHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgd2F0Y2goKSB7XG4gICAgaWYgKHRoaXMubWFpblNlcnZpY2Uud2lkZ2V0RXhpc3RzKHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpKSB7XG4gICAgICB0aGlzLm1haW5TZXJ2aWNlLndhdGNoV2lkZ2V0KHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YTtcbiAgICAgICAgdGhpcy50cmlnZ2VyZWQuZW1pdCh7XG4gICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB3YXRjaE9wdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMubWFpblNlcnZpY2Uud2lkZ2V0RXhpc3RzKHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpKSB7XG4gICAgICB0aGlzLm1haW5TZXJ2aWNlLndhdGNoV2lkZ2V0KHRoaXMuaWQsIHRoaXMudHlwZSwgdGhpcy5wYXJlbnQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJzZXR0aW5ncy5oZWFkZXIuYWx3YXlzIHx8IHN0YXR1c1wiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbWctZGF0YT1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwic3RhdHVzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInNldHRpbmdzLmZvb3Rlci5hbHdheXMgfHwgc3RhdHVzXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlttZy1kYXRhPWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==