import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
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
TabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TabComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
TabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TabComponent, selector: "mg-tab", inputs: { options: "options", isVertical: "isVertical", bg: "bg", active: "active", id: "id", theme: "theme" }, ngImport: i0, template: "<div class=\"tab-wrapper\" [ngClass]=\"mainClasses()\">\n    <div class=\"tab-links\" [ngClass]=\"bg\">\n        <div class=\"tabs\">\n            <a *ngFor=\"let tb of options\" [innerHtml]=\"tb.name\" (click)=\"activateWidget(tb.widget)\" [ngClass]=\"buttonClass(tb.widget)\"></a>\n        </div>\n    </div>\n    <div class=\"tab-content\">\n        <ng-content></ng-content>\n    </div>\n</div>", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-tab', template: "<div class=\"tab-wrapper\" [ngClass]=\"mainClasses()\">\n    <div class=\"tab-links\" [ngClass]=\"bg\">\n        <div class=\"tabs\">\n            <a *ngFor=\"let tb of options\" [innerHtml]=\"tb.name\" (click)=\"activateWidget(tb.widget)\" [ngClass]=\"buttonClass(tb.widget)\"></a>\n        </div>\n    </div>\n    <div class=\"tab-content\">\n        <ng-content></ng-content>\n    </div>\n</div>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { options: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBUXpELE1BQU0sT0FBTyxZQUFZO0lBU3ZCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBUnpDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFDaUMsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUN6QztRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxhQUFhO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDdkQsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7eUdBdERVLFlBQVk7NkZBQVosWUFBWSw4SkNSekIsZ1pBU007MkZERE8sWUFBWTtrQkFMeEIsU0FBUzsrQkFDRSxRQUFROzRHQUtULE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxncmFtbWlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWF0ZXJpYWxncmFtbWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBbXTtcbiAgQElucHV0KCkgaXNWZXJ0aWNhbCA9IHRydWU7XG4gIEBJbnB1dCgpIGJnID0gXCJcIjtcbiAgQElucHV0KCkgYWN0aXZlID0gXCJcIjtcbiAgQElucHV0KCkgaWQgPSBcIlwiO1xuICBASW5wdXQoKSB0aGVtZSA9IFwic3VjY2Vzc1wiO1xuICBjb21wb25lbnRzOiBhbnkgPSBbXTtcbiAgYWN0aXZlQ29tcG9uZW50ID0gXCJcIjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlkID09IFwiXCIpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnNlcnZpY2UubWFrZWlkKDEwLCBcInRhYlwiKVxuICAgIH1cblxuICAgIHRoaXMuZ2V0Q29tcG9uZW50cygpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlID09IFwiXCIpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jb21wb25lbnRzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlclRhYih0aGlzLmlkLCB0aGlzLmNvbXBvbmVudHMsIHRoaXMuYWN0aXZlKTtcbiAgICBpZih0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zWzBdICYmIHRoaXMub3B0aW9uc1swXS53aWRnZXQpe1xuICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldCh0aGlzLm9wdGlvbnNbMF0ud2lkZ2V0KTtcbiAgICB9XG4gICAgdGhpcy53YXRjaEFjdGl2ZSgpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2godGhpcy5vcHRpb25zW2ldLndpZGdldCk7XG4gICAgfVxuICB9XG5cbiAgd2F0Y2hBY3RpdmUoKXtcbiAgICB0aGlzLnNlcnZpY2Uud2F0Y2hUYWIodGhpcy5pZCkuc3Vic2NyaWJlKChyZXM6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVDb21wb25lbnQgPSByZXM7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZVdpZGdldCh3aWRnZXRJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXJ2aWNlLm9wZW5UYWIodGhpcy5pZCwgd2lkZ2V0SUQpO1xuICB9XG5cbiAgbWFpbkNsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBcIlwiO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5pc1ZlcnRpY2FsID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgY2xhc3NlcyArPSBgICR7dGhpcy50aGVtZX1gO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgYnV0dG9uQ2xhc3MoY29tcG9uZW50SWQ6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDb21wb25lbnQgPT0gY29tcG9uZW50SWQgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwidGFiLXdyYXBwZXJcIiBbbmdDbGFzc109XCJtYWluQ2xhc3NlcygpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1saW5rc1wiIFtuZ0NsYXNzXT1cImJnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgdGIgb2Ygb3B0aW9uc1wiIFtpbm5lckh0bWxdPVwidGIubmFtZVwiIChjbGljayk9XCJhY3RpdmF0ZVdpZGdldCh0Yi53aWRnZXQpXCIgW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3ModGIud2lkZ2V0KVwiPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==