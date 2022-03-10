import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["inputElement"];
function InputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 4);
    i0.ɵɵlistener("click", function InputComponent_ng_container_1_Template_label_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.labelClick(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r0.label, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.fStyle == "control" && ctx_r0.active ? "marginL-10" : "");
} }
export class InputComponent {
    constructor() {
        this.theme = "success";
        this.fStyle = "control";
        // control | material
        this.label = "Input Value";
        this.placeholder = "";
        this.control = new FormControl('');
        this.type = "text";
        this.onDark = false;
        this.class = "";
        this.value = new EventEmitter();
        this.isFocused = new EventEmitter();
        this.keyup = new EventEmitter();
        this.textValue = "";
        this.rounded = true;
        this.active = false;
        this.focused = false;
        this.input_placeholder = this.fStyle == "control" && this.placeholder != "" ? this.placeholder : "";
    }
    ngOnInit() {
        this.input_placeholder = this.fStyle == "control" && this.placeholder != "" ? this.placeholder : "";
        if (this.textValue != "") {
            this.active = true;
        }
    }
    onFocusIn() {
        this.focused = true;
        this.active = true;
        this.isFocused.emit(true);
    }
    onFocusOut() {
        this.focused = false;
        if (!(this.textValue.length > 0)) {
            this.active = false;
        }
        this.isFocused.emit(false);
    }
    onKeyUp(event) {
        this.textValue = event.target.value;
        this.control.setValue(event.target.value);
        this.keyup.emit(event);
        this.value.emit(this.control);
    }
    mainClasses() {
        let classes = ``;
        classes += ` ${this.active ? 'active' : ''}`;
        classes += this.onDark ? " on-dark" : " on-lite";
        return classes;
    }
    labelClick() {
        this.inputElem.nativeElement.focus();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["mg-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElem = _t.first);
    } }, inputs: { theme: "theme", fStyle: "fStyle", label: "label", placeholder: "placeholder", control: "control", type: "type", onDark: "onDark", class: "class", textValue: "textValue", rounded: "rounded" }, outputs: { value: "value", isFocused: "isFocused", keyup: "keyup" }, decls: 4, vars: 10, consts: [[3, "ngClass"], [4, "ngIf"], [3, "type", "value", "ngClass", "placeholder", "focus", "focusout", "keyup"], ["inputElement", ""], [3, "innerHtml", "ngClass", "click"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, InputComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementStart(2, "input", 2, 3);
        i0.ɵɵlistener("focus", function InputComponent_Template_input_focus_2_listener() { return ctx.onFocusIn(); })("focusout", function InputComponent_Template_input_focusout_2_listener() { return ctx.onFocusOut(); })("keyup", function InputComponent_Template_input_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("form-", ctx.fStyle, " ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label && ctx.label != "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("type", ctx.type)("value", ctx.textValue)("ngClass", ctx.class + (ctx.rounded ? "radius-5" : ""))("placeholder", ctx.input_placeholder);
    } }, directives: [i1.NgClass, i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{ selector: 'mg-input', template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <ng-container *ngIf=\"label && label!=''\">\n    <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && active ? 'marginL-10' : ''\"></label>\n  </ng-container>\n  <input #inputElement [type]=\"type\" (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\" [value]=\"textValue\" [ngClass]=\"class + (rounded ? 'radius-5' : '')\" [placeholder] = \"input_placeholder\"/>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], fStyle: [{
            type: Input
        }], label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], control: [{
            type: Input
        }], type: [{
            type: Input
        }], onDark: [{
            type: Input
        }], class: [{
            type: Input
        }], value: [{
            type: Output
        }], isFocused: [{
            type: Output
        }], keyup: [{
            type: Output
        }], textValue: [{
            type: Input
        }], rounded: [{
            type: Input
        }], inputElem: [{
            type: ViewChild,
            args: ['inputElement']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ0EzQyw2QkFBeUM7SUFDdkMsZ0NBQWdIO0lBQXJGLG1LQUFTLG1CQUFZLElBQUM7SUFBK0QsaUJBQVE7SUFDMUgsMEJBQWU7OztJQUROLGVBQW1CO0lBQW5CLDJEQUFtQiw0RUFBQTs7QURNOUIsTUFBTSxPQUFPLGNBQWM7SUFvQnpCO1FBbkJTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUM1QixxQkFBcUI7UUFDWixVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFHLEVBQUUs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LE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLEtBQUs7a0JBQWQsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07WUFDRSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQzZCLFNBQVM7a0JBQTNDLFNBQVM7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcInN1Y2Nlc3NcIjtcbiAgQElucHV0KCkgZlN0eWxlID0gXCJjb250cm9sXCI7XG4gIC8vIGNvbnRyb2wgfCBtYXRlcmlhbFxuICBASW5wdXQoKSBsYWJlbCA9IFwiSW5wdXQgVmFsdWVcIjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSBcIlwiO1xuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHR5cGUgPSBcInRleHRcIjtcbiAgQElucHV0KCkgb25EYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgQE91dHB1dCgpIHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4oKTtcbiAgQE91dHB1dCgpIGlzRm9jdXNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGtleXVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0ZXh0VmFsdWUgPSBcIlwiO1xuICBASW5wdXQoKSByb3VuZGVkID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgcHJpdmF0ZSBpbnB1dEVsZW0hOiBFbGVtZW50UmVmO1xuXG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGlucHV0X3BsYWNlaG9sZGVyID0gdGhpcy5mU3R5bGUgPT0gXCJjb250cm9sXCIgJiYgdGhpcy5wbGFjZWhvbGRlciAhPSBcIlwiID8gdGhpcy5wbGFjZWhvbGRlciA6IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dF9wbGFjZWhvbGRlciA9IHRoaXMuZlN0eWxlID09IFwiY29udHJvbFwiICYmIHRoaXMucGxhY2Vob2xkZXIgIT0gXCJcIiA/IHRoaXMucGxhY2Vob2xkZXIgOiBcIlwiO1xuICAgIGlmICh0aGlzLnRleHRWYWx1ZSAhPSBcIlwiKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0luKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaXNGb2N1c2VkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkZvY3VzT3V0KCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIGlmICghKHRoaXMudGV4dFZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmlzRm9jdXNlZC5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudGV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMua2V5dXAuZW1pdChldmVudCk7XG4gICAgdGhpcy52YWx1ZS5lbWl0KHRoaXMuY29udHJvbCk7XG4gIH1cblxuICBtYWluQ2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGBgO1xuICAgIGNsYXNzZXMgKz0gYCAke3RoaXMuYWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5vbkRhcmsgPyBcIiBvbi1kYXJrXCIgOiBcIiBvbi1saXRlXCI7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBsYWJlbENsaWNrKCl7XG4gICAgdGhpcy5pbnB1dEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLXt7ZlN0eWxlfX0ge3t0aGVtZX19XCIgW25nQ2xhc3NdPVwibWFpbkNsYXNzZXMoKVwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibGFiZWwgJiYgbGFiZWwhPScnXCI+XG4gICAgPGxhYmVsIFtpbm5lckh0bWxdPVwibGFiZWxcIiAoY2xpY2spPVwibGFiZWxDbGljaygpXCIgW25nQ2xhc3NdPVwiZlN0eWxlID09ICdjb250cm9sJyAmJiBhY3RpdmUgPyAnbWFyZ2luTC0xMCcgOiAnJ1wiPjwvbGFiZWw+XG4gIDwvbmctY29udGFpbmVyPlxuICA8aW5wdXQgI2lucHV0RWxlbWVudCBbdHlwZV09XCJ0eXBlXCIgKGZvY3VzKT1cIm9uRm9jdXNJbigpXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXQoKVwiIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIiBbdmFsdWVdPVwidGV4dFZhbHVlXCIgW25nQ2xhc3NdPVwiY2xhc3MgKyAocm91bmRlZCA/ICdyYWRpdXMtNScgOiAnJylcIiBbcGxhY2Vob2xkZXJdID0gXCJpbnB1dF9wbGFjZWhvbGRlclwiLz5cbjwvZGl2PlxuIl19