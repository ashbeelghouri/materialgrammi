import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../input/input.component";
function SelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mg-input", 7);
    i0.ɵɵlistener("keyup", function SelectComponent_ng_container_6_Template_mg_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.searchFromOptions($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("theme", ctx_r0.theme);
} }
function SelectComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function SelectComponent_div_8_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const opt_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.selectOption(opt_r4); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.isHighlighted(opt_r4.name))("innerHtml", opt_r4.name, i0.ɵɵsanitizeHtml);
} }
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
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["mg-select"]], hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function SelectComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, i0.ɵɵresolveDocument)("keydown.escape", function SelectComponent_keydown_escape_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { searchOpt: "searchOpt", theme: "theme", selectTitle: "selectTitle", selectType: "selectType", enableSearch: "enableSearch", options: "options" }, outputs: { value: "value" }, decls: 9, vars: 8, consts: [[1, "select-title", 3, "click"], [3, "innerHtml"], [1, "right"], [1, "fas", "fa-chevron-down"], [1, "select-options", 3, "ngClass"], [4, "ngIf"], ["class", "select-option", 3, "ngClass", "innerHtml", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Find", "label", "", 3, "theme", "keyup"], [1, "select-option", 3, "ngClass", "innerHtml", "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵlistener("click", function SelectComponent_Template_div_click_1_listener() { return ctx.toggleOptions(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵelement(4, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, SelectComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelement(7, "hr");
        i0.ɵɵtemplate(8, SelectComponent_div_8_Template, 1, 2, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("select-wrapper select-", ctx.theme, " select-", ctx.selectType, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.titleDisplay, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngClass", ctx.optionsClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enableSearch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgClass, i1.NgIf, i1.NgForOf, i2.InputComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{ selector: 'mg-select', template: "<div class=\"select-wrapper select-{{theme}} select-{{selectType}}\">\n  <div class=\"select-title\" (click)=\"toggleOptions()\"><span [innerHtml]=\"titleDisplay\"></span> <span class=\"right\"><i class=\"fas fa-chevron-down\"></i></span></div>\n  <div class=\"select-options\" [ngClass]=\"optionsClasses()\">\n    <ng-container *ngIf=\"enableSearch\">\n      <mg-input placeholder=\"Find\" label=\"\" [theme]=\"theme\" (keyup)=\"searchFromOptions($event)\"></mg-input>\n    </ng-container>\n    <hr>\n    <div class=\"select-option\" [ngClass]=\"isHighlighted(opt.name)\" *ngFor=\"let opt of options\" [innerHtml]=\"opt.name\" (click)=\"selectOption(opt)\"></div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { value: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lDRXpDLDZCQUFtQztJQUNqQyxtQ0FBMEY7SUFBcEMsNktBQVMsZ0NBQXlCLElBQUM7SUFBQyxpQkFBVztJQUN2RywwQkFBZTs7O0lBRHlCLGVBQWU7SUFBZixvQ0FBZTs7OztJQUd2RCw4QkFBOEk7SUFBNUIsbU5BQVMsMkJBQWlCLElBQUM7SUFBQyxpQkFBTTs7OztJQUF6SCwyREFBbUMsNkNBQUE7O0FEQ2xFLE1BQU0sT0FBTyxlQUFlO0lBc0MxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBckMxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsR0FBRyxFQUFFLFVBQVU7YUFDaEIs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aUJBQU87UUFBQSxpQkFBTTtRQUNqSyw4QkFBeUQ7UUFDdkQsa0ZBRWU7UUFDZixxQkFBSTtRQUNKLGdFQUFvSjtRQUN0SixpQkFBTTtRQUNSLGlCQUFNOztRQVRELDhGQUE2RDtRQUNOLGVBQTBCO1FBQTFCLCtEQUEwQjtRQUN4RCxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFDdkMsZUFBa0I7UUFBbEIsdUNBQWtCO1FBSThDLGVBQVU7UUFBVixxQ0FBVTs7dUZEQ2hGLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxXQUFXOzZEQUtYLEtBQUs7a0JBQWQsTUFBTTtZQUNFLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFxQ04sUUFBUTtrQkFEUCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBUTFDLG1CQUFtQjtrQkFEbEIsWUFBWTttQkFBQyx5QkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSB2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgc2VhcmNoT3B0OiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJsaXRlXCI7XG4gIEBJbnB1dCgpIHNlbGVjdFRpdGxlID0gXCJTZWxlY3RcIjtcbiAgQElucHV0KCkgc2VsZWN0VHlwZSA9IFwiY29udHJvbFwiO1xuICBASW5wdXQoKSBlbmFibGVTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgb3B0aW9ucyA9IFt7XG4gICAgbmFtZTogXCJPcHRpb24gMDFcIixcbiAgICB2YWw6IFwib3B0aW9uXzFcIlxuICB9LCB7XG4gICAgbmFtZTogXCJPcHRpb24gMDJcIixcbiAgICB2YWw6IFwib3B0aW9uXzJcIlxuICB9LCB7XG4gICAgbmFtZTogXCJPcHRpb24gMDNcIixcbiAgICB2YWw6IFwib3B0aW9uXzNcIlxuICB9LCB7XG4gICAgbmFtZTogXCJPcHRpb24gMDRcIixcbiAgICB2YWw6IFwib3B0aW9uXzRcIlxuICB9LCB7XG4gICAgbmFtZTogXCJPcHRpb24gMDVcIixcbiAgICB2YWw6IFwib3B0aW9uXzVcIlxuICB9XTtcblxuICBzZWxlY3RlZE9wdGlvbiA9IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHZhbDogXCJcIlxuICB9O1xuXG4gIGhpZ2hsaWdodGVkID0gXCJcIjtcblxuICBvcHRpb25zQWN0aXZlID0gZmFsc2U7XG5cbiAgdGl0bGVEaXNwbGF5ID0gdGhpcy5zZWxlY3RUaXRsZTtcblxuICBzZWxlY3RJbnB1dCA9IG5ldyBGb3JtQ29udHJvbChcIlwiKTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrb3V0KGV2ZW50OmFueSkge1xuICAgIGlmKCF0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNlYXJjaE9wdC5zZXRWYWx1ZShcIlwiKTtcbiAgICAgIHRoaXMub3B0aW9uc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUtleWJvYXJkRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNlYXJjaE9wdC5zZXRWYWx1ZShcIlwiKTtcbiAgICB0aGlzLm9wdGlvbnNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5vcHRpb25zQWN0aXZlID0gIXRoaXMub3B0aW9uc0FjdGl2ZTtcbiAgfVxuXG4gIG9wdGlvbnNDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gYGA7XG4gICAgY2xhc3NlcyArPSB0aGlzLm9wdGlvbnNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHNlbGVjdE9wdGlvbihvcHQ6IGFueSkge1xuICAgIHRoaXMudmFsdWUuZW1pdChvcHQudmFsKTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0O1xuICAgIHRoaXMudGl0bGVEaXNwbGF5ID0gdGhpcy5zZWxlY3RlZE9wdGlvbiA/IHRoaXMuc2VsZWN0ZWRPcHRpb24ubmFtZSA6IHRoaXMuc2VsZWN0VGl0bGU7XG4gICAgdGhpcy5zZWxlY3RJbnB1dC5zZXRWYWx1ZShvcHQudmFsKTtcbiAgICB0aGlzLnRvZ2dsZU9wdGlvbnMoKTtcbiAgfVxuXG4gIGlzSGlnaGxpZ2h0ZWQobmFtZTpzdHJpbmcpe1xuICAgIGlmKHRoaXMuaGlnaGxpZ2h0ZWQgPT0gbmFtZSl7XG4gICAgICByZXR1cm4gXCJoaWdobGlnaHRlZFwiO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoRnJvbU9wdGlvbnModmFsOmFueSl7XG4gICAgbGV0IGVudGVyUHJlc3NlZCA9IGZhbHNlO1xuICAgIGlmKHZhbCAmJiB2YWwuY29kZSA9PSBcIkVudGVyXCIgfHwgdmFsLmtleSA9PSBcIkVudGVyXCIpe1xuICAgICAgZW50ZXJQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsID0gdmFsLnRhcmdldC52YWx1ZTtcbiAgICB2YXIgb3B0OmFueSA9IGZhbHNlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHZhbC5sZW5ndGggPiAwICYmIHRoaXMub3B0aW9uc1tpXS5uYW1lLmluZGV4T2YodmFsKSA+IDEpe1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkID0gdGhpcy5vcHRpb25zW2ldLm5hbWU7XG4gICAgICAgIG9wdCA9IHRoaXMub3B0aW9uc1tpXTtcbiAgICAgIH1lbHNlIGlmKHZhbC5sZW5ndGggPiAwICYmIHRoaXMub3B0aW9uc1tpXS52YWwuaW5kZXhPZih2YWwpID4gMSl7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWQgPSB0aGlzLm9wdGlvbnNbaV0ubmFtZTtcbiAgICAgICAgb3B0ID0gdGhpcy5vcHRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih2YWwubGVuZ3RoIDwgMSl7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkID0gXCJcIjtcbiAgICB9XG4gICAgaWYoZW50ZXJQcmVzc2VkICYmIHRoaXMuaGlnaGxpZ2h0ZWQubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLnNlYXJjaE9wdC5zZXRWYWx1ZShcIlwiKTtcbiAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcHBlciBzZWxlY3Qte3t0aGVtZX19IHNlbGVjdC17e3NlbGVjdFR5cGV9fVwiPlxuICA8ZGl2IGNsYXNzPVwic2VsZWN0LXRpdGxlXCIgKGNsaWNrKT1cInRvZ2dsZU9wdGlvbnMoKVwiPjxzcGFuIFtpbm5lckh0bWxdPVwidGl0bGVEaXNwbGF5XCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInJpZ2h0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPjwvc3Bhbj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlbGVjdC1vcHRpb25zXCIgW25nQ2xhc3NdPVwib3B0aW9uc0NsYXNzZXMoKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbmFibGVTZWFyY2hcIj5cbiAgICAgIDxtZy1pbnB1dCBwbGFjZWhvbGRlcj1cIkZpbmRcIiBsYWJlbD1cIlwiIFt0aGVtZV09XCJ0aGVtZVwiIChrZXl1cCk9XCJzZWFyY2hGcm9tT3B0aW9ucygkZXZlbnQpXCI+PC9tZy1pbnB1dD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8aHI+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1vcHRpb25cIiBbbmdDbGFzc109XCJpc0hpZ2hsaWdodGVkKG9wdC5uYW1lKVwiICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9uc1wiIFtpbm5lckh0bWxdPVwib3B0Lm5hbWVcIiAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdClcIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==