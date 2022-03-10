import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
function TabComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function TabComponent_a_3_Template_a_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const tb_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.activateWidget(tb_r1.widget); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tb_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", tb_r1.name, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.buttonClass(tb_r1.widget));
} }
const _c0 = ["*"];
export class TabComponent {
    constructor(service) {
        this.service = service;
        this.options = [];
        this.isVertical = true;
        this.bg = "";
        this.active = "";
        this.id = "";
        this.theme = "success";
        this.components = [];
        this.activeComponent = "";
    }
    ngOnInit() {
        if (this.id == "") {
            this.id = this.service.makeid(10, "tab");
        }
        this.getComponents();
        if (this.active == "") {
            this.active = this.components[0];
        }
        this.service.registerTab(this.id, this.components, this.active);
        if (this.options && this.options[0] && this.options[0].widget) {
            this.activateWidget(this.options[0].widget);
        }
        this.watchActive();
    }
    getComponents() {
        for (let i = 0; i < this.options.length; i++) {
            this.components.push(this.options[i].widget);
        }
    }
    watchActive() {
        this.service.watchTab(this.id).subscribe((res) => {
            this.activeComponent = res;
        });
    }
    activateWidget(widgetID) {
        this.service.openTab(this.id, widgetID);
    }
    mainClasses() {
        let classes = "";
        classes += this.isVertical ? "vertical" : "horizontal";
        classes += ` ${this.theme}`;
        return classes;
    }
    buttonClass(componentId) {
        return this.activeComponent == componentId ? "active" : "";
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
TabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabComponent, selectors: [["mg-tab"]], inputs: { options: "options", isVertical: "isVertical", bg: "bg", active: "active", id: "id", theme: "theme" }, ngContentSelectors: _c0, decls: 6, vars: 3, consts: [[1, "tab-wrapper", 3, "ngClass"], [1, "tab-links", 3, "ngClass"], [1, "tabs"], [3, "innerHtml", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "innerHtml", "ngClass", "click"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, TabComponent_a_3_Template, 1, 2, "a", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.bg);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i2.NgClass, i2.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabComponent, [{
        type: Component,
        args: [{ selector: 'mg-tab', template: "<div class=\"tab-wrapper\" [ngClass]=\"mainClasses()\">\n    <div class=\"tab-links\" [ngClass]=\"bg\">\n        <div class=\"tabs\">\n            <a *ngFor=\"let tb of options\" [innerHtml]=\"tb.name\" (click)=\"activateWidget(tb.widget)\" [ngClass]=\"buttonClass(tb.widget)\"></a>\n        </div>\n    </div>\n    <div class=\"tab-content\">\n        <ng-content></ng-content>\n    </div>\n</div>", styles: [""] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { options: [{
            type: Input
        }], isVertical: [{
            type: Input
        }], bg: [{
            type: Input
        }], active: [{
            type: Input
        }], id: [{
            type: Input
        }], theme: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNHN0MsNEJBQTJIO0lBQXZFLDJNQUFTLG1DQUF5QixJQUFDO0lBQW9DLGlCQUFJOzs7O0lBQWpHLHlEQUFxQiw2Q0FBQTs7O0FESy9ELE1BQU0sT0FBTyxZQUFZO0lBU3ZCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBUnpDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFDaUMsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUN6QztRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxhQUFhO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDdkQsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7d0VBdERVLFlBQVk7K0RBQVosWUFBWTs7UUNSekIsOEJBQW1EO1FBQy9DLDhCQUFzQztRQUNsQyw4QkFBa0I7UUFDZCx5REFBK0g7UUFDbkksaUJBQU07UUFDVixpQkFBTTtRQUNOLDhCQUF5QjtRQUNyQixrQkFBeUI7UUFDN0IsaUJBQU07UUFDVixpQkFBTTs7UUFUbUIsMkNBQXlCO1FBQ3ZCLGVBQWM7UUFBZCxnQ0FBYztRQUVYLGVBQVU7UUFBVixxQ0FBVTs7dUZESzNCLFlBQVk7Y0FMeEIsU0FBUzsyQkFDRSxRQUFRO3dFQUtULE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0gW107XG4gIEBJbnB1dCgpIGlzVmVydGljYWwgPSB0cnVlO1xuICBASW5wdXQoKSBiZyA9IFwiXCI7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IFwiXCI7XG4gIEBJbnB1dCgpIGlkID0gXCJcIjtcbiAgQElucHV0KCkgdGhlbWUgPSBcInN1Y2Nlc3NcIjtcbiAgY29tcG9uZW50czogYW55ID0gW107XG4gIGFjdGl2ZUNvbXBvbmVudCA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pZCA9PSBcIlwiKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlLm1ha2VpZCgxMCwgXCJ0YWJcIilcbiAgICB9XG5cbiAgICB0aGlzLmdldENvbXBvbmVudHMoKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZSA9PSBcIlwiKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuY29tcG9uZW50c1swXTtcbiAgICB9XG5cbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJUYWIodGhpcy5pZCwgdGhpcy5jb21wb25lbnRzLCB0aGlzLmFjdGl2ZSk7XG4gICAgaWYodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9uc1swXSAmJiB0aGlzLm9wdGlvbnNbMF0ud2lkZ2V0KXtcbiAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXQodGhpcy5vcHRpb25zWzBdLndpZGdldCk7XG4gICAgfVxuICAgIHRoaXMud2F0Y2hBY3RpdmUoKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHRoaXMub3B0aW9uc1tpXS53aWRnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoQWN0aXZlKCl7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoVGFiKHRoaXMuaWQpLnN1YnNjcmliZSgocmVzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQ29tcG9uZW50ID0gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGVXaWRnZXQod2lkZ2V0SUQ6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmljZS5vcGVuVGFiKHRoaXMuaWQsIHdpZGdldElEKTtcbiAgfVxuXG4gIG1haW5DbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcbiAgICBjbGFzc2VzICs9IHRoaXMuaXNWZXJ0aWNhbCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNsYXNzZXMgKz0gYCAke3RoaXMudGhlbWV9YDtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGJ1dHRvbkNsYXNzKGNvbXBvbmVudElkOnN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ29tcG9uZW50ID09IGNvbXBvbmVudElkID8gXCJhY3RpdmVcIiA6IFwiXCI7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInRhYi13cmFwcGVyXCIgW25nQ2xhc3NdPVwibWFpbkNsYXNzZXMoKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItbGlua3NcIiBbbmdDbGFzc109XCJiZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuICAgICAgICAgICAgPGEgKm5nRm9yPVwibGV0IHRiIG9mIG9wdGlvbnNcIiBbaW5uZXJIdG1sXT1cInRiLm5hbWVcIiAoY2xpY2spPVwiYWN0aXZhdGVXaWRnZXQodGIud2lkZ2V0KVwiIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzKHRiLndpZGdldClcIj48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=