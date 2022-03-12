import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class DropdownComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.active = false;
        this.position = {
            hotizontal: "right",
            vertical: "bottom"
        };
        this.class = "";
    }
    ngOnInit() {
        this.service.registerDropDown(this.id, this.active);
        if (this.active) {
            this.service.openDropDown(this.id);
        }
        this.watch();
    }
    watch() {
        this.service.watchDropDown(this.id).subscribe((data) => {
            console.log("Dropdown triggered", data);
            this.active = data;
        });
    }
    openDropDown() {
        this.service.openDropDown(this.id);
    }
    closeDropDown() {
        this.service.closeDropDown(this.id);
    }
    dropdownClasses() {
        let results = "";
        results += this.active ? 'active' : '';
        results += " " + this.position.hotizontal + " " + this.position.vertical;
        return results;
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropdownComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DropdownComponent, selector: "mg-dropdown", inputs: { id: "id", active: "active", position: "position", class: "class" }, ngImport: i0, template: "<div class=\"main\" style=\"position: relative;\" [ngClass]=\"class\">\n  <div class=\"dropdown-container\" [ngClass]=\"dropdownClasses()\" (mouseover)=\"openDropDown()\"\n    (mouseleave)=\"closeDropDown()\">\n    <div class=\"dropdown-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-dropdown', template: "<div class=\"main\" style=\"position: relative;\" [ngClass]=\"class\">\n  <div class=\"dropdown-container\" [ngClass]=\"dropdownClasses()\" (mouseover)=\"openDropDown()\"\n    (mouseleave)=\"closeDropDown()\">\n    <div class=\"dropdown-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { id: [{
                type: Input
            }], active: [{
                type: Input
            }], position: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVF6RCxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBUHpDLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHO1lBQ2xCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFDTyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2tDLENBQUM7SUFFdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBYSxFQUFFLEVBQUU7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs4R0F0Q1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsaUlDUjlCLDBUQVFBOzJGREFhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxhQUFhOzRHQUtkLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFJRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9IHtcbiAgICBob3Rpem9udGFsOiBcInJpZ2h0XCIsXG4gICAgdmVydGljYWw6IFwiYm90dG9tXCJcbiAgfTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyRHJvcERvd24odGhpcy5pZCwgdGhpcy5hY3RpdmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLm9wZW5Ecm9wRG93bih0aGlzLmlkKTtcbiAgICB9XG4gICAgdGhpcy53YXRjaCgpO1xuICB9XG5cbiAgd2F0Y2goKSB7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoRHJvcERvd24odGhpcy5pZCkuc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duIHRyaWdnZXJlZFwiLCBkYXRhKTtcbiAgICAgIHRoaXMuYWN0aXZlID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5Ecm9wRG93bigpIHtcbiAgICB0aGlzLnNlcnZpY2Uub3BlbkRyb3BEb3duKHRoaXMuaWQpO1xuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpIHtcbiAgICB0aGlzLnNlcnZpY2UuY2xvc2VEcm9wRG93bih0aGlzLmlkKTtcbiAgfVxuXG4gIGRyb3Bkb3duQ2xhc3NlcygpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyc7XG4gICAgcmVzdWx0cyArPSBcIiBcIiArIHRoaXMucG9zaXRpb24uaG90aXpvbnRhbCArIFwiIFwiICsgdGhpcy5wb3NpdGlvbi52ZXJ0aWNhbDtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpblwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250YWluZXJcIiBbbmdDbGFzc109XCJkcm9wZG93bkNsYXNzZXMoKVwiIChtb3VzZW92ZXIpPVwib3BlbkRyb3BEb3duKClcIlxuICAgIChtb3VzZWxlYXZlKT1cImNsb3NlRHJvcERvd24oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=