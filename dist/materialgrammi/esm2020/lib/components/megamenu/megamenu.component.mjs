import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
export class MegamenuComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.theme = "primary";
        this.menu = [];
        this.active = false;
        this.isHovering = false;
        this.activeLink = "";
    }
    ngOnInit() {
        this.service.registerMegaMenu(this.id, this.getAllIds());
    }
    getAllIds() {
        let ids = [];
        for (let i = 0; i < this.menu.length; i++) {
            ids.push(this.menu[i].id);
        }
        return ids;
    }
    watchMenu() {
        this.service.watchMegaMenu(this.id).subscribe((data) => {
            if (data) {
                this.active = true;
                this.activeLink = data;
            }
        });
    }
    setActive(ac) {
        this.active = ac;
    }
    closeMenu() {
        this.active = false;
        this.service.closeMegaMenu(this.id);
    }
    openMenu(targetId) {
        this.closeMenu();
        this.service.openMegaMenu(this.id, targetId);
        this.active = true;
    }
    megamenuContentClass() {
        let results = "";
        results += this.active ? "active" : "";
        return results;
    }
    menuBtnClass(targetId) {
        let classes = "";
        classes += `${this.theme}`;
        classes += this.activeLink === targetId ? ` active` : '';
        return classes;
    }
}
MegamenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MegamenuComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
MegamenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: MegamenuComponent, selector: "mg-megamenu", inputs: { id: "id", theme: "theme", menu: "menu" }, ngImport: i0, template: "<div class=\"megamenu-wrapper\"  (mouseleave)=\"closeMenu()\">\n  <div class=\"megamenu-links\">\n    <ng-container *ngFor=\"let m of menu\">\n      <a class=\"btn\" [innerHtml]=\"m.name\" [ngClass]=\"menuBtnClass(m.id)\" (mouseover)=\"openMenu(m.id)\"></a>\n    </ng-container>\n  </div>\n  <div class=\"megamenu-content\" (mouseover)=\"active = true\" [ngClass]=\"megamenuContentClass()\">\n    <ng-content></ng-content>\n  </div>\n</div>", styles: ["megamenu-wrapper{display:block;position:relative;width:100%}.megamenu-content{display:none;position:absolute;width:95%}.megamenu-content.active{display:block}.megamenu-wrapper .megamenu-links a{display:inline-block;padding:10px}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MegamenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-megamenu', template: "<div class=\"megamenu-wrapper\"  (mouseleave)=\"closeMenu()\">\n  <div class=\"megamenu-links\">\n    <ng-container *ngFor=\"let m of menu\">\n      <a class=\"btn\" [innerHtml]=\"m.name\" [ngClass]=\"menuBtnClass(m.id)\" (mouseover)=\"openMenu(m.id)\"></a>\n    </ng-container>\n  </div>\n  <div class=\"megamenu-content\" (mouseover)=\"active = true\" [ngClass]=\"megamenuContentClass()\">\n    <ng-content></ng-content>\n  </div>\n</div>", styles: ["megamenu-wrapper{display:block;position:relative;width:100%}.megamenu-content{display:none;position:absolute;width:95%}.megamenu-content.active{display:block}.megamenu-wrapper .megamenu-links a{display:inline-block;padding:10px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { id: [{
                type: Input
            }], theme: [{
                type: Input
            }], menu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL21lZ2FtZW51L21lZ2FtZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9tZWdhbWVudS9tZWdhbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVN6RCxNQUFNLE9BQU8saUJBQWlCO0lBUzVCLFlBQW9CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBUnpDLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDL0IsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVzQyxDQUFDO0lBRXZELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBR0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFvQixFQUFFLEVBQUU7WUFDckUsSUFBRyxJQUFJLEVBQUM7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFdkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFnQjtRQUMzQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OEdBN0RVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHVHQ1Q5QiwwYkFTTTsyRkRBTyxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsYUFBYTs0R0FLZCxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVnYW1lbnUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1tZWdhbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWdhbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lZ2FtZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZWdhbWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIG1lbnU6IE1lZ2FtZW51W10gPSBbXTtcbiAgYWN0aXZlID0gZmFsc2U7XG4gIGlzSG92ZXJpbmcgPSBmYWxzZTtcblxuICBhY3RpdmVMaW5rID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyTWVnYU1lbnUodGhpcy5pZCwgdGhpcy5nZXRBbGxJZHMoKSk7XG4gIH1cblxuICBnZXRBbGxJZHMoKXtcbiAgICBsZXQgaWRzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubWVudS5sZW5ndGg7IGkrKyl7XG4gICAgICBpZHMucHVzaCh0aGlzLm1lbnVbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG5cblxuICB3YXRjaE1lbnUoKXtcbiAgICB0aGlzLnNlcnZpY2Uud2F0Y2hNZWdhTWVudSh0aGlzLmlkKS5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZyB8IGZhbHNlKSA9PiB7XG4gICAgICBpZihkYXRhKXtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZUxpbmsgPSBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QWN0aXZlKGFjOmJvb2xlYW4pe1xuICAgIHRoaXMuYWN0aXZlID0gYWM7XG4gIH1cblxuICBjbG9zZU1lbnUoKXtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZS5jbG9zZU1lZ2FNZW51KHRoaXMuaWQpO1xuICB9XG5cbiAgb3Blbk1lbnUodGFyZ2V0SWQ6IHN0cmluZyl7XG4gICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB0aGlzLnNlcnZpY2Uub3Blbk1lZ2FNZW51KHRoaXMuaWQsIHRhcmdldElkKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBtZWdhbWVudUNvbnRlbnRDbGFzcygpe1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcblxuICAgIHJlc3VsdHMgKz0gdGhpcy5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIjtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgbWVudUJ0bkNsYXNzKHRhcmdldElkOiBzdHJpbmcpe1xuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcbiAgICBjbGFzc2VzICs9IGAke3RoaXMudGhlbWV9YDtcbiAgICBjbGFzc2VzICs9IHRoaXMuYWN0aXZlTGluayA9PT0gdGFyZ2V0SWQgPyBgIGFjdGl2ZWAgOiAnJztcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtZWdhbWVudS13cmFwcGVyXCIgIChtb3VzZWxlYXZlKT1cImNsb3NlTWVudSgpXCI+XG4gIDxkaXYgY2xhc3M9XCJtZWdhbWVudS1saW5rc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG0gb2YgbWVudVwiPlxuICAgICAgPGEgY2xhc3M9XCJidG5cIiBbaW5uZXJIdG1sXT1cIm0ubmFtZVwiIFtuZ0NsYXNzXT1cIm1lbnVCdG5DbGFzcyhtLmlkKVwiIChtb3VzZW92ZXIpPVwib3Blbk1lbnUobS5pZClcIj48L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWVnYW1lbnUtY29udGVudFwiIChtb3VzZW92ZXIpPVwiYWN0aXZlID0gdHJ1ZVwiIFtuZ0NsYXNzXT1cIm1lZ2FtZW51Q29udGVudENsYXNzKClcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+Il19