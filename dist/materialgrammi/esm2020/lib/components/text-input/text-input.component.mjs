import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["inputElementText"];
export class TextInputComponent {
    constructor() {
        this.theme = "dark";
        this.fStyle = "control";
        this.on_dark = false;
        this.label = "textarea input";
        this.control = new FormControl('');
        this.value = new EventEmitter();
        this.isFocused = new EventEmitter();
        this.keyup = new EventEmitter();
        this.active = false;
        this.textValue = "";
        this.focused = false;
    }
    ngOnInit() {
    }
    onFocusIn() {
        this.active = true;
        this.focused = true;
        this.isFocused.emit(this.active);
    }
    onFocusOut() {
        this.focused = false;
        if (!(this.textValue.length > 0)) {
            this.active = false;
        }
        this.isFocused.emit(this.active);
    }
    onKeyUp(event) {
        this.textValue = event.target.value;
        this.control.setValue(event.target.value);
        this.keyup.emit(this.textValue);
        this.value.emit(this.control);
    }
    mainClasses() {
        let classes = ``;
        classes += ` ${this.active ? 'active' : ''}`;
        classes += this.on_dark ? " on-dark" : " on-lite";
        return classes;
    }
    labelClick() {
        this.inputElem.nativeElement.focus();
    }
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(); };
TextInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextInputComponent, selectors: [["mg-text"]], viewQuery: function TextInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElem = _t.first);
    } }, inputs: { theme: "theme", fStyle: "fStyle", on_dark: "on_dark", label: "label", control: "control" }, outputs: { value: "value", isFocused: "isFocused", keyup: "keyup" }, decls: 4, vars: 7, consts: [[3, "ngClass"], [3, "innerHtml", "ngClass", "click"], [3, "focus", "focusout", "keyup"], ["inputElementText", ""]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵlistener("click", function TextInputComponent_Template_label_click_1_listener() { return ctx.labelClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "textarea", 2, 3);
        i0.ɵɵlistener("focus", function TextInputComponent_Template_textarea_focus_2_listener() { return ctx.onFocusIn(); })("focusout", function TextInputComponent_Template_textarea_focusout_2_listener() { return ctx.onFocusOut(); })("keyup", function TextInputComponent_Template_textarea_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("form-", ctx.fStyle, " ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.label, i0.ɵɵsanitizeHtml)("ngClass", ctx.fStyle == "control" && ctx.focused ? "marginL-10" : "");
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextInputComponent, [{
        type: Component,
        args: [{ selector: 'mg-text', template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && focused ? 'marginL-10' : ''\"></label>\n  <textarea #inputElementText (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\"></textarea>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], fStyle: [{
            type: Input
        }], on_dark: [{
            type: Input
        }], label: [{
            type: Input
        }], control: [{
            type: Input
        }], value: [{
            type: Output
        }], isFocused: [{
            type: Output
        }], keyup: [{
            type: Output
        }], inputElem: [{
            type: ViewChild,
            args: ['inputElementText']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTzdDLE1BQU0sT0FBTyxrQkFBa0I7SUFhN0I7UUFaUyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QixZQUFPLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTdDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUNBLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDN0MsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2xELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7b0ZBL0NVLGtCQUFrQjtxRUFBbEIsa0JBQWtCOzs7Ozs7UUNSL0IsOEJBQWlFO1FBQy9ELGdDQUFpSDtRQUF0Riw4RkFBUyxnQkFBWSxJQUFDO1FBQWdFLGlCQUFRO1FBQ3pILHNDQUFzRztRQUExRSxpR0FBUyxlQUFXLElBQUMsMEZBQWEsZ0JBQVksSUFBekIsMEZBQW9DLG1CQUFlLElBQW5EO1FBQXFELGlCQUFXO1FBQ25ILGlCQUFNOztRQUhELGtFQUFpQztRQUFDLDJDQUF5QjtRQUN2RCxlQUFtQjtRQUFuQix3REFBbUIsdUVBQUE7O3VGRE9mLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLFNBQVM7c0NBS1YsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0ksS0FBSztrQkFBZCxNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQUNnQyxTQUFTO2tCQUEvQyxTQUFTO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkYXJrXCI7XG4gIEBJbnB1dCgpIGZTdHlsZSA9IFwiY29udHJvbFwiO1xuICBASW5wdXQoKSBvbl9kYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsID0gXCJ0ZXh0YXJlYSBpbnB1dFwiO1xuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBPdXRwdXQoKSB2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUNvbnRyb2w+KCk7XG4gIEBPdXRwdXQoKSBpc0ZvY3VzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBrZXl1cCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnRUZXh0JykgcHJpdmF0ZSBpbnB1dEVsZW0hOiBFbGVtZW50UmVmO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgdGV4dFZhbHVlID0gXCJcIjtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG4gIG9uRm9jdXNJbigpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzRm9jdXNlZC5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIG9uRm9jdXNPdXQoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgaWYgKCEodGhpcy50ZXh0VmFsdWUubGVuZ3RoID4gMCkpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNGb2N1c2VkLmVtaXQodGhpcy5hY3RpdmUpO1xuICB9XG5cbiAgb25LZXlVcChldmVudDogYW55KSB7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5rZXl1cC5lbWl0KHRoaXMudGV4dFZhbHVlKTtcbiAgICB0aGlzLnZhbHVlLmVtaXQodGhpcy5jb250cm9sKTtcbiAgfVxuXG4gIG1haW5DbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gYGA7XG4gICAgY2xhc3NlcyArPSBgICR7dGhpcy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWA7XG4gICAgY2xhc3NlcyArPSB0aGlzLm9uX2RhcmsgPyBcIiBvbi1kYXJrXCIgOiBcIiBvbi1saXRlXCI7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBsYWJlbENsaWNrKCl7XG4gICAgdGhpcy5pbnB1dEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS17e2ZTdHlsZX19IHt7dGhlbWV9fVwiIFtuZ0NsYXNzXT1cIm1haW5DbGFzc2VzKClcIj5cbiAgPGxhYmVsIFtpbm5lckh0bWxdPVwibGFiZWxcIiAoY2xpY2spPVwibGFiZWxDbGljaygpXCIgW25nQ2xhc3NdPVwiZlN0eWxlID09ICdjb250cm9sJyAmJiBmb2N1c2VkID8gJ21hcmdpbkwtMTAnIDogJydcIj48L2xhYmVsPlxuICA8dGV4dGFyZWEgI2lucHV0RWxlbWVudFRleHQgKGZvY3VzKT1cIm9uRm9jdXNJbigpXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXQoKVwiIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIj48L3RleHRhcmVhPlxuPC9kaXY+XG4iXX0=