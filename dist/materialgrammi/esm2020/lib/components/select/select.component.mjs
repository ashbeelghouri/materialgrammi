import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../input/input.component";
import * as i2 from "@angular/common";
export class SelectComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.value = new EventEmitter();
        this.searchOpt = new FormControl('');
        this.theme = "lite";
        this.selectTitle = "Select";
        this.selectType = "control";
        this.enableSearch = false;
        this.options = [{
                name: "Option 01",
                val: "option_1"
            }, {
                name: "Option 02",
                val: "option_2"
            }, {
                name: "Option 03",
                val: "option_3"
            }, {
                name: "Option 04",
                val: "option_4"
            }, {
                name: "Option 05",
                val: "option_5"
            }];
        this.selectedOption = {
            name: "",
            val: ""
        };
        this.highlighted = "";
        this.optionsActive = false;
        this.titleDisplay = this.selectTitle;
        this.selectInput = new FormControl("");
    }
    ngOnInit() {
    }
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.searchOpt.setValue("");
            this.optionsActive = false;
        }
    }
    handleKeyboardEvent(event) {
        this.searchOpt.setValue("");
        this.optionsActive = false;
    }
    toggleOptions() {
        this.optionsActive = !this.optionsActive;
    }
    optionsClasses() {
        let classes = ``;
        classes += this.optionsActive ? "active" : "";
        return classes;
    }
    selectOption(opt) {
        this.value.emit(opt.val);
        this.selectedOption = opt;
        this.titleDisplay = this.selectedOption ? this.selectedOption.name : this.selectTitle;
        this.selectInput.setValue(opt.val);
        this.toggleOptions();
    }
    isHighlighted(name) {
        if (this.highlighted == name) {
            return "highlighted";
        }
        else {
            return "";
        }
    }
    searchFromOptions(val) {
        let enterPressed = false;
        if (val && val.code == "Enter" || val.key == "Enter") {
            enterPressed = true;
        }
        val = val.target.value;
        var opt = false;
        for (let i = 0; i < this.options.length; i++) {
            if (val.length > 0 && this.options[i].name.indexOf(val) > 1) {
                this.highlighted = this.options[i].name;
                opt = this.options[i];
            }
            else if (val.length > 0 && this.options[i].val.indexOf(val) > 1) {
                this.highlighted = this.options[i].name;
                opt = this.options[i];
            }
        }
        if (val.length < 1) {
            this.highlighted = "";
        }
        if (enterPressed && this.highlighted.length > 0) {
            this.searchOpt.setValue("");
            this.selectOption(opt);
        }
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SelectComponent, selector: "mg-select", inputs: { searchOpt: "searchOpt", theme: "theme", selectTitle: "selectTitle", selectType: "selectType", enableSearch: "enableSearch", options: "options" }, outputs: { value: "value" }, host: { listeners: { "document:click": "clickout($event)", "document:keydown.escape": "handleKeyboardEvent($event)" } }, ngImport: i0, template: "<div class=\"select-wrapper select-{{theme}} select-{{selectType}}\">\n  <div class=\"select-title\" (click)=\"toggleOptions()\"><span [innerHtml]=\"titleDisplay\"></span> <span class=\"right\"><i class=\"fas fa-chevron-down\"></i></span></div>\n  <div class=\"select-options\" [ngClass]=\"optionsClasses()\">\n    <ng-container *ngIf=\"enableSearch\">\n      <mg-input placeholder=\"Find\" label=\"\" [theme]=\"theme\" (keyup)=\"searchFromOptions($event)\"></mg-input>\n    </ng-container>\n    <hr>\n    <div class=\"select-option\" [ngClass]=\"isHighlighted(opt.name)\" *ngFor=\"let opt of options\" [innerHtml]=\"opt.name\" (click)=\"selectOption(opt)\"></div>\n  </div>\n</div>\n", styles: [""], components: [{ type: i1.InputComponent, selector: "mg-input", inputs: ["theme", "fStyle", "label", "placeholder", "control", "type", "onDark", "class", "textValue", "rounded"], outputs: ["value", "isFocused", "keyup"] }], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-select', template: "<div class=\"select-wrapper select-{{theme}} select-{{selectType}}\">\n  <div class=\"select-title\" (click)=\"toggleOptions()\"><span [innerHtml]=\"titleDisplay\"></span> <span class=\"right\"><i class=\"fas fa-chevron-down\"></i></span></div>\n  <div class=\"select-options\" [ngClass]=\"optionsClasses()\">\n    <ng-container *ngIf=\"enableSearch\">\n      <mg-input placeholder=\"Find\" label=\"\" [theme]=\"theme\" (keyup)=\"searchFromOptions($event)\"></mg-input>\n    </ng-container>\n    <hr>\n    <div class=\"select-option\" [ngClass]=\"isHighlighted(opt.name)\" *ngFor=\"let opt of options\" [innerHtml]=\"opt.name\" (click)=\"selectOption(opt)\"></div>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Output
            }], searchOpt: [{
                type: Input
            }], theme: [{
                type: Input
            }], selectTitle: [{
                type: Input
            }], selectType: [{
                type: Input
            }], enableSearch: [{
                type: Input
            }], options: [{
                type: Input
            }], clickout: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }], handleKeyboardEvent: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU83QyxNQUFNLE9BQU8sZUFBZTtJQXNDMUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXJDMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxRQUFRLENBQUM7UUFDdkIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsQ0FBQztnQkFDbEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxVQUFVO2FBQ2hCLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxVQUFVO2FBQ2hCLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxVQUFVO2FBQ2hCLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxVQUFVO2FBQ2hCLEVBQUU7Z0JBQ0Qs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QUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgdmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHNlYXJjaE9wdDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSB0aGVtZSA9IFwibGl0ZVwiO1xuICBASW5wdXQoKSBzZWxlY3RUaXRsZSA9IFwiU2VsZWN0XCI7XG4gIEBJbnB1dCgpIHNlbGVjdFR5cGUgPSBcImNvbnRyb2xcIjtcbiAgQElucHV0KCkgZW5hYmxlU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wdGlvbnMgPSBbe1xuICAgIG5hbWU6IFwiT3B0aW9uIDAxXCIsXG4gICAgdmFsOiBcIm9wdGlvbl8xXCJcbiAgfSwge1xuICAgIG5hbWU6IFwiT3B0aW9uIDAyXCIsXG4gICAgdmFsOiBcIm9wdGlvbl8yXCJcbiAgfSwge1xuICAgIG5hbWU6IFwiT3B0aW9uIDAzXCIsXG4gICAgdmFsOiBcIm9wdGlvbl8zXCJcbiAgfSwge1xuICAgIG5hbWU6IFwiT3B0aW9uIDA0XCIsXG4gICAgdmFsOiBcIm9wdGlvbl80XCJcbiAgfSwge1xuICAgIG5hbWU6IFwiT3B0aW9uIDA1XCIsXG4gICAgdmFsOiBcIm9wdGlvbl81XCJcbiAgfV07XG5cbiAgc2VsZWN0ZWRPcHRpb24gPSB7XG4gICAgbmFtZTogXCJcIixcbiAgICB2YWw6IFwiXCJcbiAgfTtcblxuICBoaWdobGlnaHRlZCA9IFwiXCI7XG5cbiAgb3B0aW9uc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIHRpdGxlRGlzcGxheSA9IHRoaXMuc2VsZWN0VGl0bGU7XG5cbiAgc2VsZWN0SW5wdXQgPSBuZXcgRm9ybUNvbnRyb2woXCJcIik7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudDphbnkpIHtcbiAgICBpZighdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZWFyY2hPcHQuc2V0VmFsdWUoXCJcIik7XG4gICAgICB0aGlzLm9wdGlvbnNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxuICBoYW5kbGVLZXlib2FyZEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zZWFyY2hPcHQuc2V0VmFsdWUoXCJcIik7XG4gICAgdGhpcy5vcHRpb25zQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9uc0FjdGl2ZSA9ICF0aGlzLm9wdGlvbnNBY3RpdmU7XG4gIH1cblxuICBvcHRpb25zQ2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGBgO1xuICAgIGNsYXNzZXMgKz0gdGhpcy5vcHRpb25zQWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBzZWxlY3RPcHRpb24ob3B0OiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlLmVtaXQob3B0LnZhbCk7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdDtcbiAgICB0aGlzLnRpdGxlRGlzcGxheSA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNlbGVjdGVkT3B0aW9uLm5hbWUgOiB0aGlzLnNlbGVjdFRpdGxlO1xuICAgIHRoaXMuc2VsZWN0SW5wdXQuc2V0VmFsdWUob3B0LnZhbCk7XG4gICAgdGhpcy50b2dnbGVPcHRpb25zKCk7XG4gIH1cblxuICBpc0hpZ2hsaWdodGVkKG5hbWU6c3RyaW5nKXtcbiAgICBpZih0aGlzLmhpZ2hsaWdodGVkID09IG5hbWUpe1xuICAgICAgcmV0dXJuIFwiaGlnaGxpZ2h0ZWRcIjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEZyb21PcHRpb25zKHZhbDphbnkpe1xuICAgIGxldCBlbnRlclByZXNzZWQgPSBmYWxzZTtcbiAgICBpZih2YWwgJiYgdmFsLmNvZGUgPT0gXCJFbnRlclwiIHx8IHZhbC5rZXkgPT0gXCJFbnRlclwiKXtcbiAgICAgIGVudGVyUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIHZhbCA9IHZhbC50YXJnZXQudmFsdWU7XG4gICAgdmFyIG9wdDphbnkgPSBmYWxzZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih2YWwubGVuZ3RoID4gMCAmJiB0aGlzLm9wdGlvbnNbaV0ubmFtZS5pbmRleE9mKHZhbCkgPiAxKXtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZCA9IHRoaXMub3B0aW9uc1tpXS5uYW1lO1xuICAgICAgICBvcHQgPSB0aGlzLm9wdGlvbnNbaV07XG4gICAgICB9ZWxzZSBpZih2YWwubGVuZ3RoID4gMCAmJiB0aGlzLm9wdGlvbnNbaV0udmFsLmluZGV4T2YodmFsKSA+IDEpe1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkID0gdGhpcy5vcHRpb25zW2ldLm5hbWU7XG4gICAgICAgIG9wdCA9IHRoaXMub3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodmFsLmxlbmd0aCA8IDEpe1xuICAgICAgdGhpcy5oaWdobGlnaHRlZCA9IFwiXCI7XG4gICAgfVxuICAgIGlmKGVudGVyUHJlc3NlZCAmJiB0aGlzLmhpZ2hsaWdodGVkLmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5zZWFyY2hPcHQuc2V0VmFsdWUoXCJcIik7XG4gICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHQpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXIgc2VsZWN0LXt7dGhlbWV9fSBzZWxlY3Qte3tzZWxlY3RUeXBlfX1cIj5cbiAgPGRpdiBjbGFzcz1cInNlbGVjdC10aXRsZVwiIChjbGljayk9XCJ0b2dnbGVPcHRpb25zKClcIj48c3BhbiBbaW5uZXJIdG1sXT1cInRpdGxlRGlzcGxheVwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJyaWdodFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT48L3NwYW4+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uc1wiIFtuZ0NsYXNzXT1cIm9wdGlvbnNDbGFzc2VzKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW5hYmxlU2VhcmNoXCI+XG4gICAgICA8bWctaW5wdXQgcGxhY2Vob2xkZXI9XCJGaW5kXCIgbGFiZWw9XCJcIiBbdGhlbWVdPVwidGhlbWVcIiAoa2V5dXApPVwic2VhcmNoRnJvbU9wdGlvbnMoJGV2ZW50KVwiPjwvbWctaW5wdXQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGhyPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uXCIgW25nQ2xhc3NdPVwiaXNIaWdobGlnaHRlZChvcHQubmFtZSlcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnNcIiBbaW5uZXJIdG1sXT1cIm9wdC5uYW1lXCIgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHQpXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=