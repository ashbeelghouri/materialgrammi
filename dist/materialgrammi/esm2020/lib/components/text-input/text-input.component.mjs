import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
TextInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TextInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TextInputComponent, selector: "mg-text", inputs: { theme: "theme", fStyle: "fStyle", on_dark: "on_dark", label: "label", control: "control" }, outputs: { value: "value", isFocused: "isFocused", keyup: "keyup" }, viewQueries: [{ propertyName: "inputElem", first: true, predicate: ["inputElementText"], descendants: true }], ngImport: i0, template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && focused ? 'marginL-10' : ''\"></label>\n  <textarea #inputElementText (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\"></textarea>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TextInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-text', template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && focused ? 'marginL-10' : ''\"></label>\n  <textarea #inputElementText (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\"></textarea>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPN0MsTUFBTSxPQUFPLGtCQUFrQjtJQWE3QjtRQVpTLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFN0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ0EsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM3QyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDbEQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzsrR0EvQ1Usa0JBQWtCO21HQUFsQixrQkFBa0IseVVDUi9CLCtVQUlBOzJGRElhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxTQUFTOzBFQUtWLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNnQyxTQUFTO3NCQUEvQyxTQUFTO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkYXJrXCI7XG4gIEBJbnB1dCgpIGZTdHlsZSA9IFwiY29udHJvbFwiO1xuICBASW5wdXQoKSBvbl9kYXJrID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsID0gXCJ0ZXh0YXJlYSBpbnB1dFwiO1xuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBPdXRwdXQoKSB2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUNvbnRyb2w+KCk7XG4gIEBPdXRwdXQoKSBpc0ZvY3VzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBrZXl1cCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnRUZXh0JykgcHJpdmF0ZSBpbnB1dEVsZW0hOiBFbGVtZW50UmVmO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgdGV4dFZhbHVlID0gXCJcIjtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG4gIG9uRm9jdXNJbigpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzRm9jdXNlZC5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIG9uRm9jdXNPdXQoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgaWYgKCEodGhpcy50ZXh0VmFsdWUubGVuZ3RoID4gMCkpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNGb2N1c2VkLmVtaXQodGhpcy5hY3RpdmUpO1xuICB9XG5cbiAgb25LZXlVcChldmVudDogYW55KSB7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5rZXl1cC5lbWl0KHRoaXMudGV4dFZhbHVlKTtcbiAgICB0aGlzLnZhbHVlLmVtaXQodGhpcy5jb250cm9sKTtcbiAgfVxuXG4gIG1haW5DbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gYGA7XG4gICAgY2xhc3NlcyArPSBgICR7dGhpcy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWA7XG4gICAgY2xhc3NlcyArPSB0aGlzLm9uX2RhcmsgPyBcIiBvbi1kYXJrXCIgOiBcIiBvbi1saXRlXCI7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBsYWJlbENsaWNrKCl7XG4gICAgdGhpcy5pbnB1dEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS17e2ZTdHlsZX19IHt7dGhlbWV9fVwiIFtuZ0NsYXNzXT1cIm1haW5DbGFzc2VzKClcIj5cbiAgPGxhYmVsIFtpbm5lckh0bWxdPVwibGFiZWxcIiAoY2xpY2spPVwibGFiZWxDbGljaygpXCIgW25nQ2xhc3NdPVwiZlN0eWxlID09ICdjb250cm9sJyAmJiBmb2N1c2VkID8gJ21hcmdpbkwtMTAnIDogJydcIj48L2xhYmVsPlxuICA8dGV4dGFyZWEgI2lucHV0RWxlbWVudFRleHQgKGZvY3VzKT1cIm9uRm9jdXNJbigpXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXQoKVwiIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIj48L3RleHRhcmVhPlxuPC9kaXY+XG4iXX0=