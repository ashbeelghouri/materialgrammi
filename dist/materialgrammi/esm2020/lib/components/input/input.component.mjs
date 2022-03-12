import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: InputComponent, selector: "mg-input", inputs: { theme: "theme", fStyle: "fStyle", label: "label", placeholder: "placeholder", control: "control", type: "type", onDark: "onDark", class: "class", textValue: "textValue", rounded: "rounded" }, outputs: { value: "value", isFocused: "isFocused", keyup: "keyup" }, viewQueries: [{ propertyName: "inputElem", first: true, predicate: ["inputElement"], descendants: true }], ngImport: i0, template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <ng-container *ngIf=\"label && label!=''\">\n    <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && active ? 'marginL-10' : ''\"></label>\n  </ng-container>\n  <input #inputElement [type]=\"type\" (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\" [value]=\"textValue\" [ngClass]=\"class + (rounded ? 'radius-5' : '')\" [placeholder] = \"input_placeholder\"/>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-input', template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <ng-container *ngIf=\"label && label!=''\">\n    <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && active ? 'marginL-10' : ''\"></label>\n  </ng-container>\n  <input #inputElement [type]=\"type\" (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\" [value]=\"textValue\" [ngClass]=\"class + (rounded ? 'radius-5' : '')\" [placeholder] = \"input_placeholder\"/>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU83QyxNQUFNLE9BQU8sY0FBYztJQW9CekI7UUFuQlMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHFCQUFxQjtRQUNaLFVBQUssR0FBRyxhQUFhLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUd4QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixzQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BHLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNqRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OzJHQTNEVSxjQUFjOytGQUFkLGNBQWMsMGFDUjNCLCtmQU1BOzJGREVhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsVUFBVTswRUFLWCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csU0FBUztzQkFBbEIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQzZCLFNBQVM7c0JBQTNDLFNBQVM7dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcInN1Y2Nlc3NcIjtcbiAgQElucHV0KCkgZlN0eWxlID0gXCJjb250cm9sXCI7XG4gIC8vIGNvbnRyb2wgfCBtYXRlcmlhbFxuICBASW5wdXQoKSBsYWJlbCA9IFwiSW5wdXQgVmFsdWVcIjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSBcIlwiO1xuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHR5cGUgPSBcInRleHRcIjtcbiAgQElucHV0KCkgb25EYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgQE91dHB1dCgpIHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4oKTtcbiAgQE91dHB1dCgpIGlzRm9jdXNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGtleXVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0ZXh0VmFsdWUgPSBcIlwiO1xuICBASW5wdXQoKSByb3VuZGVkID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgcHJpdmF0ZSBpbnB1dEVsZW0hOiBFbGVtZW50UmVmO1xuXG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGlucHV0X3BsYWNlaG9sZGVyID0gdGhpcy5mU3R5bGUgPT0gXCJjb250cm9sXCIgJiYgdGhpcy5wbGFjZWhvbGRlciAhPSBcIlwiID8gdGhpcy5wbGFjZWhvbGRlciA6IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dF9wbGFjZWhvbGRlciA9IHRoaXMuZlN0eWxlID09IFwiY29udHJvbFwiICYmIHRoaXMucGxhY2Vob2xkZXIgIT0gXCJcIiA/IHRoaXMucGxhY2Vob2xkZXIgOiBcIlwiO1xuICAgIGlmICh0aGlzLnRleHRWYWx1ZSAhPSBcIlwiKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0luKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaXNGb2N1c2VkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkZvY3VzT3V0KCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIGlmICghKHRoaXMudGV4dFZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmlzRm9jdXNlZC5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMudGV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMua2V5dXAuZW1pdChldmVudCk7XG4gICAgdGhpcy52YWx1ZS5lbWl0KHRoaXMuY29udHJvbCk7XG4gIH1cblxuICBtYWluQ2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGBgO1xuICAgIGNsYXNzZXMgKz0gYCAke3RoaXMuYWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5vbkRhcmsgPyBcIiBvbi1kYXJrXCIgOiBcIiBvbi1saXRlXCI7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBsYWJlbENsaWNrKCl7XG4gICAgdGhpcy5pbnB1dEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLXt7ZlN0eWxlfX0ge3t0aGVtZX19XCIgW25nQ2xhc3NdPVwibWFpbkNsYXNzZXMoKVwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibGFiZWwgJiYgbGFiZWwhPScnXCI+XG4gICAgPGxhYmVsIFtpbm5lckh0bWxdPVwibGFiZWxcIiAoY2xpY2spPVwibGFiZWxDbGljaygpXCIgW25nQ2xhc3NdPVwiZlN0eWxlID09ICdjb250cm9sJyAmJiBhY3RpdmUgPyAnbWFyZ2luTC0xMCcgOiAnJ1wiPjwvbGFiZWw+XG4gIDwvbmctY29udGFpbmVyPlxuICA8aW5wdXQgI2lucHV0RWxlbWVudCBbdHlwZV09XCJ0eXBlXCIgKGZvY3VzKT1cIm9uRm9jdXNJbigpXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXQoKVwiIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIiBbdmFsdWVdPVwidGV4dFZhbHVlXCIgW25nQ2xhc3NdPVwiY2xhc3MgKyAocm91bmRlZCA/ICdyYWRpdXMtNScgOiAnJylcIiBbcGxhY2Vob2xkZXJdID0gXCJpbnB1dF9wbGFjZWhvbGRlclwiLz5cbjwvZGl2PlxuIl19