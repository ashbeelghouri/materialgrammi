import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
function MegamenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 4);
    i0.ɵɵlistener("mouseover", function MegamenuComponent_ng_container_2_Template_a_mouseover_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const m_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.openMenu(m_r1.id); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", m_r1.name, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.menuBtnClass(m_r1.id));
} }
const _c0 = ["*"];
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
MegamenuComponent.ɵfac = function MegamenuComponent_Factory(t) { return new (t || MegamenuComponent)(i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
MegamenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MegamenuComponent, selectors: [["mg-megamenu"]], inputs: { id: "id", theme: "theme", menu: "menu" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "megamenu-wrapper", 3, "mouseleave"], [1, "megamenu-links"], [4, "ngFor", "ngForOf"], [1, "megamenu-content", 3, "ngClass", "mouseover"], [1, "btn", 3, "innerHtml", "ngClass", "mouseover"]], template: function MegamenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("mouseleave", function MegamenuComponent_Template_div_mouseleave_0_listener() { return ctx.closeMenu(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, MegamenuComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵlistener("mouseover", function MegamenuComponent_Template_div_mouseover_3_listener() { return ctx.active = true; });
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.menu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.megamenuContentClass());
    } }, directives: [i2.NgForOf, i2.NgClass], styles: ["megamenu-wrapper[_ngcontent-%COMP%]{display:block;position:relative;width:100%}.megamenu-content[_ngcontent-%COMP%]{display:none;position:absolute;width:95%}.megamenu-content.active[_ngcontent-%COMP%]{display:block}.megamenu-wrapper[_ngcontent-%COMP%]   .megamenu-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MegamenuComponent, [{
        type: Component,
        args: [{ selector: 'mg-megamenu', template: "<div class=\"megamenu-wrapper\"  (mouseleave)=\"closeMenu()\">\n  <div class=\"megamenu-links\">\n    <ng-container *ngFor=\"let m of menu\">\n      <a class=\"btn\" [innerHtml]=\"m.name\" [ngClass]=\"menuBtnClass(m.id)\" (mouseover)=\"openMenu(m.id)\"></a>\n    </ng-container>\n  </div>\n  <div class=\"megamenu-content\" (mouseover)=\"active = true\" [ngClass]=\"megamenuContentClass()\">\n    <ng-content></ng-content>\n  </div>\n</div>", styles: ["megamenu-wrapper{display:block;position:relative;width:100%}.megamenu-content{display:none;position:absolute;width:95%}.megamenu-content.active{display:block}.megamenu-wrapper .megamenu-links a{display:inline-block;padding:10px}\n"] }]
    }], function () { return [{ type: i1.MaterialgrammiService }]; }, { id: [{
            type: Input
        }], theme: [{
            type: Input
        }], menu: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL21lZ2FtZW51L21lZ2FtZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9tZWdhbWVudS9tZWdhbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDRXJELDZCQUFxQztJQUNuQyw0QkFBZ0c7SUFBN0Isa09BQWEsd0JBQWMsSUFBQztJQUFDLGlCQUFJO0lBQ3RHLDBCQUFlOzs7O0lBREUsZUFBb0I7SUFBcEIsd0RBQW9CLHlDQUFBOzs7QURNekMsTUFBTSxPQUFPLGlCQUFpQjtJQVM1QixZQUFvQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQVJ6QyxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQy9CLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFFc0MsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUdELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFO1lBQ3JFLElBQUcsSUFBSSxFQUFDO2dCQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxFQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXZDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2tGQTdEVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjs7UUNUOUIsOEJBQTBEO1FBQTNCLHFHQUFjLGVBQVcsSUFBQztRQUN2RCw4QkFBNEI7UUFDMUIsb0ZBRWU7UUFDakIsaUJBQU07UUFDTiw4QkFBNkY7UUFBL0QsZ0hBQXNCLElBQUksSUFBQztRQUN2RCxrQkFBeUI7UUFDM0IsaUJBQU07UUFDUixpQkFBTTs7UUFQMEIsZUFBTztRQUFQLGtDQUFPO1FBSXFCLGVBQWtDO1FBQWxDLG9EQUFrQzs7dUZER2pGLGlCQUFpQjtjQUw3QixTQUFTOzJCQUNFLGFBQWE7d0VBS2QsRUFBRTtrQkFBVixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWdhbWVudSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTWF0ZXJpYWxncmFtbWlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWF0ZXJpYWxncmFtbWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLW1lZ2FtZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZ2FtZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVnYW1lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lZ2FtZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQgPSBcIjFcIjtcbiAgQElucHV0KCkgdGhlbWUgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgbWVudTogTWVnYW1lbnVbXSA9IFtdO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgaXNIb3ZlcmluZyA9IGZhbHNlO1xuXG4gIGFjdGl2ZUxpbmsgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJNZWdhTWVudSh0aGlzLmlkLCB0aGlzLmdldEFsbElkcygpKTtcbiAgfVxuXG4gIGdldEFsbElkcygpe1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tZW51Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGlkcy5wdXNoKHRoaXMubWVudVtpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBpZHM7XG4gIH1cblxuXG4gIHdhdGNoTWVudSgpe1xuICAgIHRoaXMuc2VydmljZS53YXRjaE1lZ2FNZW51KHRoaXMuaWQpLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nIHwgZmFsc2UpID0+IHtcbiAgICAgIGlmKGRhdGEpe1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlTGluayA9IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRBY3RpdmUoYWM6Ym9vbGVhbil7XG4gICAgdGhpcy5hY3RpdmUgPSBhYztcbiAgfVxuXG4gIGNsb3NlTWVudSgpe1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLmNsb3NlTWVnYU1lbnUodGhpcy5pZCk7XG4gIH1cblxuICBvcGVuTWVudSh0YXJnZXRJZDogc3RyaW5nKXtcbiAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIHRoaXMuc2VydmljZS5vcGVuTWVnYU1lbnUodGhpcy5pZCwgdGFyZ2V0SWQpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIG1lZ2FtZW51Q29udGVudENsYXNzKCl7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuXG4gICAgcmVzdWx0cyArPSB0aGlzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBtZW51QnRuQ2xhc3ModGFyZ2V0SWQ6IHN0cmluZyl7XG4gICAgbGV0IGNsYXNzZXMgPSBcIlwiO1xuICAgIGNsYXNzZXMgKz0gYCR7dGhpcy50aGVtZX1gO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5hY3RpdmVMaW5rID09PSB0YXJnZXRJZCA/IGAgYWN0aXZlYCA6ICcnO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1lZ2FtZW51LXdyYXBwZXJcIiAgKG1vdXNlbGVhdmUpPVwiY2xvc2VNZW51KClcIj5cbiAgPGRpdiBjbGFzcz1cIm1lZ2FtZW51LWxpbmtzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbSBvZiBtZW51XCI+XG4gICAgICA8YSBjbGFzcz1cImJ0blwiIFtpbm5lckh0bWxdPVwibS5uYW1lXCIgW25nQ2xhc3NdPVwibWVudUJ0bkNsYXNzKG0uaWQpXCIgKG1vdXNlb3Zlcik9XCJvcGVuTWVudShtLmlkKVwiPjwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtZWdhbWVudS1jb250ZW50XCIgKG1vdXNlb3Zlcik9XCJhY3RpdmUgPSB0cnVlXCIgW25nQ2xhc3NdPVwibWVnYW1lbnVDb250ZW50Q2xhc3MoKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=