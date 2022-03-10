import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function RadioComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("click", function RadioComponent_div_2_Template_input_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.select(option_r1.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementStart(3, "label", 6);
    i0.ɵɵlistener("click", function RadioComponent_div_2_Template_label_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const option_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.select(option_r1.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", option_r1.value)("name", ctx_r0.name)("value", option_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", option_r1.value)("innerHtml", option_r1.name, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.classesOnLabel());
} }
export class RadioComponent {
    constructor() {
        this.options = false;
        this.name = "opt";
        this.size = "s";
        this.isInline = true;
        this.theme = "primary";
        this.onDark = false;
        this.value = new EventEmitter();
        this.selected = new FormControl("");
    }
    ngOnInit() {
        this.selected.patchValue(this.options[0].value);
    }
    select(value) {
        this.selected.patchValue(value);
        this.value.emit(this.selected);
    }
    mainClasses() {
        let classes = "";
        classes += this.theme;
        classes += this.isInline ? " radio-inline" : "";
        classes += this.size == "s" ? " radio-small" : (this.size == "m" ? " radio-medium" : (this.size == "l" ? "radio-large" : ""));
        return classes;
    }
    classesOnLabel() {
        let results = "";
        results += this.onDark ? "on-dark" : "on-lite";
        return results;
    }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["mg-radio"]], inputs: { options: "options", name: "name", size: "size", isInline: "isInline", theme: "theme", onDark: "onDark" }, outputs: { value: "value" }, decls: 3, vars: 2, consts: [[1, "radio", 3, "ngClass"], [1, "option"], ["class", "radio-option", 4, "ngFor", "ngForOf"], [1, "radio-option"], ["type", "radio", 3, "id", "name", "value", "click"], [1, "radio-shadow"], [3, "for", "innerHtml", "ngClass", "click"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, RadioComponent_div_2_Template, 4, 6, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{ selector: 'mg-radio', template: "<div class=\"radio\" [ngClass]=\"mainClasses()\">\n  <div class=\"option\">\n    <div class=\"radio-option\" *ngFor=\"let option of options\">\n      <input [id]=\"option.value\" type=\"radio\" [name]=\"name\" [value]=\"option.value\" (click)=\"select(option.value)\">\n      <div class=\"radio-shadow\"></div>\n      <label [for]=\"option.value\" [innerHtml]=\"option.name\" (click)=\"select(option.value)\" [ngClass]=\"classesOnLabel()\"></label>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { options: [{
            type: Input
        }], name: [{
            type: Input
        }], size: [{
            type: Input
        }], isInline: [{
            type: Input
        }], theme: [{
            type: Input
        }], onDark: [{
            type: Input
        }], value: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUNDekMsOEJBQXlEO0lBQ3ZELGdDQUE0RztJQUEvQix1TkFBUyw4QkFBb0IsSUFBQztJQUEzRyxpQkFBNEc7SUFDNUcseUJBQWdDO0lBQ2hDLGdDQUFrSDtJQUE1RCx1TkFBUyw4QkFBb0IsSUFBQztJQUE4QixpQkFBUTtJQUM1SCxpQkFBTTs7OztJQUhHLGVBQW1CO0lBQW5CLG9DQUFtQixxQkFBQSwwQkFBQTtJQUVuQixlQUFvQjtJQUFwQixxQ0FBb0IsZ0RBQUEsb0NBQUE7O0FER2pDLE1BQU0sT0FBTyxjQUFjO0lBVXpCO1FBVFMsWUFBTyxHQUFPLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQVcsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQVUsU0FBUyxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFMUMsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRWhELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5SCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFL0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7NEVBdkNVLGNBQWM7aUVBQWQsY0FBYztRQ1IzQiw4QkFBNkM7UUFDM0MsOEJBQW9CO1FBQ2xCLCtEQUlNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUFSYSwyQ0FBeUI7UUFFSyxlQUFVO1FBQVYscUNBQVU7O3VGRE05QyxjQUFjO2NBTDFCLFNBQVM7MkJBQ0UsVUFBVTtzQ0FLWCxPQUFPO2tCQUFmLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3B0aW9uczphbnkgPSBmYWxzZTtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gXCJvcHRcIjtcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nID0gXCJzXCI7XG4gIEBJbnB1dCgpIGlzSW5saW5lID0gdHJ1ZTtcbiAgQElucHV0KCkgdGhlbWU6c3RyaW5nID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIG9uRGFyazogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgdmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzZWxlY3RlZCA9IG5ldyBGb3JtQ29udHJvbChcIlwiKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkLnBhdGNoVmFsdWUodGhpcy5vcHRpb25zWzBdLnZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdCh2YWx1ZTphbnkpe1xuICAgIHRoaXMuc2VsZWN0ZWQucGF0Y2hWYWx1ZSh2YWx1ZSlcbiAgICB0aGlzLnZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBtYWluQ2xhc3Nlcygpe1xuICAgIGxldCBjbGFzc2VzID0gXCJcIjtcblxuICAgIGNsYXNzZXMgKz0gdGhpcy50aGVtZTtcblxuICAgIGNsYXNzZXMgKz0gdGhpcy5pc0lubGluZSA/IFwiIHJhZGlvLWlubGluZVwiIDogXCJcIjtcblxuICAgIGNsYXNzZXMgKz0gdGhpcy5zaXplID09IFwic1wiID8gXCIgcmFkaW8tc21hbGxcIiA6ICh0aGlzLnNpemUgPT0gXCJtXCIgPyBcIiByYWRpby1tZWRpdW1cIiA6ICh0aGlzLnNpemUgPT0gXCJsXCIgPyBcInJhZGlvLWxhcmdlXCIgOiBcIlwiKSk7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNsYXNzZXNPbkxhYmVsKCl7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuXG4gICAgcmVzdWx0cyArPSB0aGlzLm9uRGFyayA/IFwib24tZGFya1wiIDogXCJvbi1saXRlXCI7XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicmFkaW9cIiBbbmdDbGFzc109XCJtYWluQ2xhc3NlcygpXCI+XG4gIDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tb3B0aW9uXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICA8aW5wdXQgW2lkXT1cIm9wdGlvbi52YWx1ZVwiIHR5cGU9XCJyYWRpb1wiIFtuYW1lXT1cIm5hbWVcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgKGNsaWNrKT1cInNlbGVjdChvcHRpb24udmFsdWUpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tc2hhZG93XCI+PC9kaXY+XG4gICAgICA8bGFiZWwgW2Zvcl09XCJvcHRpb24udmFsdWVcIiBbaW5uZXJIdG1sXT1cIm9wdGlvbi5uYW1lXCIgKGNsaWNrKT1cInNlbGVjdChvcHRpb24udmFsdWUpXCIgW25nQ2xhc3NdPVwiY2xhc3Nlc09uTGFiZWwoKVwiPjwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=