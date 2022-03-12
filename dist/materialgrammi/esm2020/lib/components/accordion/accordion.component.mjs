import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../accordion-item/accordion-item.component";
import * as i2 from "@angular/common";
export class AccordionComponent {
    constructor() {
        this.theme = "dark";
        this.items = [{
                title: "Panel 1",
                description: "description of panel 1",
                active: false
            }, {
                title: "Panel 2",
                description: "description of panel 2",
                active: true
            }, {
                title: "Panel 3",
                description: "description of panel 3",
                active: false
            }, {
                title: "Panel 4",
                description: "description of panel 4",
                active: false
            }, {
                title: "Panel 5",
                description: "description of panel 5",
                active: false
            }];
        this.class = "";
    }
    ngOnInit() {
    }
    turnAllOff(missItem) {
        for (let i = 0; i < this.items.length; i++) {
            if (missItem != i) {
                this.items[i].active = false;
            }
        }
    }
    toggleItem(itemNumber) {
        this.items[itemNumber].active = !this.items[itemNumber].active;
        this.turnAllOff(itemNumber);
    }
}
AccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AccordionComponent, selector: "mg-accordion", inputs: { theme: "theme", items: "items", class: "class" }, ngImport: i0, template: "<ng-container *ngIf=\"items.length > 0\">\n  <div class=\"accordion\" [ngClass]=\"class\">\n    <ng-container *ngFor=\"let item of items; let i = index\">\n      <div class=\"marginB-2\">\n        <mg-accordion-item [theme]=\"theme\" [itemid]=\"i\" [item]=\"item\" (isClicked)=\"toggleItem($event)\">\n        </mg-accordion-item>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [""], components: [{ type: i1.AccordionItemComponent, selector: "mg-accordion-item", inputs: ["item", "itemid", "theme"], outputs: ["isClicked"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-accordion', template: "<ng-container *ngIf=\"items.length > 0\">\n  <div class=\"accordion\" [ngClass]=\"class\">\n    <ng-container *ngFor=\"let item of items; let i = index\">\n      <div class=\"marginB-2\">\n        <mg-accordion-item [theme]=\"theme\" [itemid]=\"i\" [item]=\"item\" (isClicked)=\"toggleItem($event)\">\n        </mg-accordion-item>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
                type: Input
            }], items: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUEwQjdCO1FBekJTLFVBQUssR0FBRyxNQUFNLENBQUM7UUFFZixVQUFLLEdBQVEsQ0FBQztnQkFDckIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLE1BQU0sRUFBRSxLQUFLO2FBQ2QsRUFBRTtnQkFDRCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsTUFBTSxFQUFFLElBQUk7YUFDYixFQUFFO2dCQUNELEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxNQUFNLEVBQUUsS0FBSzthQUNkLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLE1BQU0sRUFBRSxLQUFLO2FBQ2QsRUFBRTtnQkFDRCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsVUFBZTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7K0dBMUNVLGtCQUFrQjttR0FBbEIsa0JBQWtCLGdIQ1AvQiw0WUFVQTsyRkRIYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsY0FBYzswRUFLZixLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQXNCRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcImRhcmtcIjtcblxuICBASW5wdXQoKSBpdGVtczogYW55ID0gW3tcbiAgICB0aXRsZTogXCJQYW5lbCAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24gb2YgcGFuZWwgMVwiLFxuICAgIGFjdGl2ZTogZmFsc2VcbiAgfSwge1xuICAgIHRpdGxlOiBcIlBhbmVsIDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvbiBvZiBwYW5lbCAyXCIsXG4gICAgYWN0aXZlOiB0cnVlXG4gIH0sIHtcbiAgICB0aXRsZTogXCJQYW5lbCAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24gb2YgcGFuZWwgM1wiLFxuICAgIGFjdGl2ZTogZmFsc2VcbiAgfSwge1xuICAgIHRpdGxlOiBcIlBhbmVsIDRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvbiBvZiBwYW5lbCA0XCIsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9LCB7XG4gICAgdGl0bGU6IFwiUGFuZWwgNVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uIG9mIHBhbmVsIDVcIixcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH1dO1xuXG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHR1cm5BbGxPZmYobWlzc0l0ZW06IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1pc3NJdGVtICE9IGkpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVJdGVtKGl0ZW1OdW1iZXI6IGFueSkge1xuICAgIHRoaXMuaXRlbXNbaXRlbU51bWJlcl0uYWN0aXZlID0gIXRoaXMuaXRlbXNbaXRlbU51bWJlcl0uYWN0aXZlO1xuICAgIHRoaXMudHVybkFsbE9mZihpdGVtTnVtYmVyKTtcbiAgfVxuXG5cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IDBcIj5cbiAgPGRpdiBjbGFzcz1cImFjY29yZGlvblwiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1hcmdpbkItMlwiPlxuICAgICAgICA8bWctYWNjb3JkaW9uLWl0ZW0gW3RoZW1lXT1cInRoZW1lXCIgW2l0ZW1pZF09XCJpXCIgW2l0ZW1dPVwiaXRlbVwiIChpc0NsaWNrZWQpPVwidG9nZ2xlSXRlbSgkZXZlbnQpXCI+XG4gICAgICAgIDwvbWctYWNjb3JkaW9uLWl0ZW0+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==