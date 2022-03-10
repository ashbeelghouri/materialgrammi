import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SwitchComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("click", function SwitchComponent_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.toggleChoices(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.leftClasses())("innerHtml", ctx_r0.options.left, i0.ɵɵsanitizeHtml);
} }
function SwitchComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("click", function SwitchComponent_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.toggleChoices(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.rightClasses())("innerHtml", ctx_r1.options.right, i0.ɵɵsanitizeHtml);
} }
export class SwitchComponent {
    constructor() {
        this.options = {
            left: "Forget i logged in?",
            right: "Keep me logged in?"
        };
        this.type = "filled"; /* filled | empty */
        this.theme = "primary";
        this.size = "s";
        this.showChoices = true;
        this.onDark = false;
        this.selected = true;
        this.value = new EventEmitter();
    }
    ngOnInit() {
    }
    classesOnInput() {
        let results = "";
        results += this.type == "filled" ? "switch-filled" : "empty-switch";
        results += " " + this.theme;
        results += this.size == "s" ? " switch-small" :
            (this.size == "m" ? " switch-medium" :
                (this.size == "l" ? " switch-large" : ""));
        return results;
    }
    toggleChoices() {
        this.selected = !this.selected;
        this.value.emit(this.selected);
    }
    leftClasses() {
        let results = "";
        results += this.onDark ? 'on-dark' : 'on-lite';
        results += !this.selected ? " active" : "";
        return results;
    }
    rightClasses() {
        let results = "";
        results += this.onDark ? 'on-dark' : 'on-lite';
        results += this.selected ? " active" : "";
        return results;
    }
}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(); };
SwitchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SwitchComponent, selectors: [["mg-switch"]], inputs: { options: "options", type: "type", theme: "theme", size: "size", showChoices: "showChoices", onDark: "onDark", selected: "selected" }, outputs: { value: "value" }, decls: 4, vars: 5, consts: [[1, "mg-switch-wrapper", 3, "ngClass"], [4, "ngIf"], ["type", "checkbox", 1, "mg-switch", 3, "ngClass", "checked", "click"], [1, "mg-switch-choice", 3, "ngClass", "innerHtml", "click"]], template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, SwitchComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementStart(2, "input", 2);
        i0.ɵɵlistener("click", function SwitchComponent_Template_input_click_2_listener() { return ctx.toggleChoices(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, SwitchComponent_ng_container_3_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.size == "s" ? "switch-small" : ctx.size == "m" ? "switch-medium" : "switch-large");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.left && ctx.showChoices);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.classesOnInput())("checked", ctx.selected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.right && ctx.showChoices);
    } }, directives: [i1.NgClass, i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SwitchComponent, [{
        type: Component,
        args: [{ selector: 'mg-switch', template: "<div class=\"mg-switch-wrapper\" [ngClass] = \"size == 's' ? 'switch-small' : size == 'm' ? 'switch-medium' : 'switch-large'\">\n\n  <ng-container *ngIf=\"options.left && showChoices\">\n    <div class=\"mg-switch-choice\" [ngClass]=\"leftClasses()\" [innerHtml]=\"options.left\" (click)=\"toggleChoices()\"></div>\n  </ng-container>\n\n\n  <input type=\"checkbox\" class=\"mg-switch\" [ngClass]=\"classesOnInput()\" [checked]=\"selected\"\n    (click)=\"toggleChoices()\" />\n\n  <ng-container *ngIf=\"options.right && showChoices\">\n    <div class=\"mg-switch-choice\" [ngClass]=\"rightClasses()\" [innerHtml]=\"options.right\" (click)=\"toggleChoices()\">\n    </div>\n  </ng-container>\n\n\n</div>\n", styles: [""] }]
    }], function () { return []; }, { options: [{
            type: Input
        }], type: [{
            type: Input
        }], theme: [{
            type: Input
        }], size: [{
            type: Input
        }], showChoices: [{
            type: Input
        }], onDark: [{
            type: Input
        }], selected: [{
            type: Input
        }], value: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRTdFLDZCQUFrRDtJQUNoRCw4QkFBNkc7SUFBMUIsa0tBQVMsc0JBQWUsSUFBQztJQUFDLGlCQUFNO0lBQ3JILDBCQUFlOzs7SUFEaUIsZUFBeUI7SUFBekIsOENBQXlCLHFEQUFBOzs7O0lBT3pELDZCQUFtRDtJQUNqRCw4QkFBK0c7SUFBMUIsa0tBQVMsc0JBQWUsSUFBQztJQUM5RyxpQkFBTTtJQUNSLDBCQUFlOzs7SUFGaUIsZUFBMEI7SUFBMUIsK0NBQTBCLHNEQUFBOztBREo1RCxNQUFNLE9BQU8sZUFBZTtJQWUxQjtRQWRTLFlBQU8sR0FBRztZQUNqQixJQUFJLEVBQUUscUJBQXFCO1lBQzNCLEtBQUssRUFBRSxvQkFBb0I7U0FDNUIsQ0FBQztRQUNPLFNBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxvQkFBb0I7UUFDckMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFZixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBRXBFLE9BQU8sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU1QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3BDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQy9DLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs4RUFsRFUsZUFBZTtrRUFBZixlQUFlO1FDUDVCLDhCQUEySDtRQUV6SCxrRkFFZTtRQUdmLGdDQUM4QjtRQUE1QiwyRkFBUyxtQkFBZSxJQUFDO1FBRDNCLGlCQUM4QjtRQUU5QixrRkFHZTtRQUdqQixpQkFBTTs7UUFoQnlCLCtHQUEyRjtRQUV6RyxlQUFpQztRQUFqQywwREFBaUM7UUFLUCxlQUE0QjtRQUE1Qiw4Q0FBNEIseUJBQUE7UUFHdEQsZUFBa0M7UUFBbEMsMkRBQWtDOzt1RkRIdEMsZUFBZTtjQUwzQixTQUFTOzJCQUNFLFdBQVc7c0NBS1osT0FBTztrQkFBZixLQUFLO1lBSUcsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVHLE1BQU07a0JBQWQsS0FBSztZQUVHLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxLQUFLO2tCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG9wdGlvbnMgPSB7XG4gICAgbGVmdDogXCJGb3JnZXQgaSBsb2dnZWQgaW4/XCIsXG4gICAgcmlnaHQ6IFwiS2VlcCBtZSBsb2dnZWQgaW4/XCJcbiAgfTtcbiAgQElucHV0KCkgdHlwZSA9IFwiZmlsbGVkXCI7IC8qIGZpbGxlZCB8IGVtcHR5ICovXG4gIEBJbnB1dCgpIHRoZW1lID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIHNpemUgPSBcInNcIjtcbiAgQElucHV0KCkgc2hvd0Nob2ljZXMgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG9uRGFyayA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGVkID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgdmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBjbGFzc2VzT25JbnB1dCgpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLnR5cGUgPT0gXCJmaWxsZWRcIiA/IFwic3dpdGNoLWZpbGxlZFwiIDogXCJlbXB0eS1zd2l0Y2hcIjtcblxuICAgIHJlc3VsdHMgKz0gXCIgXCIgKyB0aGlzLnRoZW1lO1xuXG4gICAgcmVzdWx0cyArPSB0aGlzLnNpemUgPT0gXCJzXCIgPyBcIiBzd2l0Y2gtc21hbGxcIiA6XG4gICAgICAodGhpcy5zaXplID09IFwibVwiID8gXCIgc3dpdGNoLW1lZGl1bVwiIDpcbiAgICAgICAgKHRoaXMuc2l6ZSA9PSBcImxcIiA/IFwiIHN3aXRjaC1sYXJnZVwiIDogXCJcIikpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICB0b2dnbGVDaG9pY2VzKCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICB0aGlzLnZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBsZWZ0Q2xhc3NlcygpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLm9uRGFyayA/ICdvbi1kYXJrJyA6ICdvbi1saXRlJztcbiAgICByZXN1bHRzICs9ICF0aGlzLnNlbGVjdGVkID8gXCIgYWN0aXZlXCIgOiBcIlwiO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcmlnaHRDbGFzc2VzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMub25EYXJrID8gJ29uLWRhcmsnIDogJ29uLWxpdGUnO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5zZWxlY3RlZCA/IFwiIGFjdGl2ZVwiIDogXCJcIjtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWctc3dpdGNoLXdyYXBwZXJcIiBbbmdDbGFzc10gPSBcInNpemUgPT0gJ3MnID8gJ3N3aXRjaC1zbWFsbCcgOiBzaXplID09ICdtJyA/ICdzd2l0Y2gtbWVkaXVtJyA6ICdzd2l0Y2gtbGFyZ2UnXCI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMubGVmdCAmJiBzaG93Q2hvaWNlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtZy1zd2l0Y2gtY2hvaWNlXCIgW25nQ2xhc3NdPVwibGVmdENsYXNzZXMoKVwiIFtpbm5lckh0bWxdPVwib3B0aW9ucy5sZWZ0XCIgKGNsaWNrKT1cInRvZ2dsZUNob2ljZXMoKVwiPjwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cblxuXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIm1nLXN3aXRjaFwiIFtuZ0NsYXNzXT1cImNsYXNzZXNPbklucHV0KClcIiBbY2hlY2tlZF09XCJzZWxlY3RlZFwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZUNob2ljZXMoKVwiIC8+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMucmlnaHQgJiYgc2hvd0Nob2ljZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWctc3dpdGNoLWNob2ljZVwiIFtuZ0NsYXNzXT1cInJpZ2h0Q2xhc3NlcygpXCIgW2lubmVySHRtbF09XCJvcHRpb25zLnJpZ2h0XCIgKGNsaWNrKT1cInRvZ2dsZUNob2ljZXMoKVwiPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cblxuXG48L2Rpdj5cbiJdfQ==