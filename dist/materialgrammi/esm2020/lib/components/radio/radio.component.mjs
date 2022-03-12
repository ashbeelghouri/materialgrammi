import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
RadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: RadioComponent, selector: "mg-radio", inputs: { options: "options", name: "name", size: "size", isInline: "isInline", theme: "theme", onDark: "onDark" }, outputs: { value: "value" }, ngImport: i0, template: "<div class=\"radio\" [ngClass]=\"mainClasses()\">\n  <div class=\"option\">\n    <div class=\"radio-option\" *ngFor=\"let option of options\">\n      <input [id]=\"option.value\" type=\"radio\" [name]=\"name\" [value]=\"option.value\" (click)=\"select(option.value)\">\n      <div class=\"radio-shadow\"></div>\n      <label [for]=\"option.value\" [innerHtml]=\"option.name\" (click)=\"select(option.value)\" [ngClass]=\"classesOnLabel()\"></label>\n    </div>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-radio', template: "<div class=\"radio\" [ngClass]=\"mainClasses()\">\n  <div class=\"option\">\n    <div class=\"radio-option\" *ngFor=\"let option of options\">\n      <input [id]=\"option.value\" type=\"radio\" [name]=\"name\" [value]=\"option.value\" (click)=\"select(option.value)\">\n      <div class=\"radio-shadow\"></div>\n      <label [for]=\"option.value\" [innerHtml]=\"option.name\" (click)=\"select(option.value)\" [ngClass]=\"classesOnLabel()\"></label>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { options: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTzdDLE1BQU0sT0FBTyxjQUFjO0lBVXpCO1FBVFMsWUFBTyxHQUFPLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQVcsS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQVUsU0FBUyxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFMUMsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRWhELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5SCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFL0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7MkdBdkNVLGNBQWM7K0ZBQWQsY0FBYyxpTUNSM0Isa2VBU0E7MkZERGEsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxVQUFVOzBFQUtYLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBvcHRpb25zOmFueSA9IGZhbHNlO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSBcIm9wdFwiO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSBcInNcIjtcbiAgQElucHV0KCkgaXNJbmxpbmUgPSB0cnVlO1xuICBASW5wdXQoKSB0aGVtZTpzdHJpbmcgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgb25EYXJrOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSB2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKFwiXCIpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQucGF0Y2hWYWx1ZSh0aGlzLm9wdGlvbnNbMF0udmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0KHZhbHVlOmFueSl7XG4gICAgdGhpcy5zZWxlY3RlZC5wYXRjaFZhbHVlKHZhbHVlKVxuICAgIHRoaXMudmFsdWUuZW1pdCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIG1haW5DbGFzc2VzKCl7XG4gICAgbGV0IGNsYXNzZXMgPSBcIlwiO1xuXG4gICAgY2xhc3NlcyArPSB0aGlzLnRoZW1lO1xuXG4gICAgY2xhc3NlcyArPSB0aGlzLmlzSW5saW5lID8gXCIgcmFkaW8taW5saW5lXCIgOiBcIlwiO1xuXG4gICAgY2xhc3NlcyArPSB0aGlzLnNpemUgPT0gXCJzXCIgPyBcIiByYWRpby1zbWFsbFwiIDogKHRoaXMuc2l6ZSA9PSBcIm1cIiA/IFwiIHJhZGlvLW1lZGl1bVwiIDogKHRoaXMuc2l6ZSA9PSBcImxcIiA/IFwicmFkaW8tbGFyZ2VcIiA6IFwiXCIpKTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY2xhc3Nlc09uTGFiZWwoKXtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG5cbiAgICByZXN1bHRzICs9IHRoaXMub25EYXJrID8gXCJvbi1kYXJrXCIgOiBcIm9uLWxpdGVcIjtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyYWRpb1wiIFtuZ0NsYXNzXT1cIm1haW5DbGFzc2VzKClcIj5cbiAgPGRpdiBjbGFzcz1cIm9wdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1vcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cbiAgICAgIDxpbnB1dCBbaWRdPVwib3B0aW9uLnZhbHVlXCIgdHlwZT1cInJhZGlvXCIgW25hbWVdPVwibmFtZVwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAoY2xpY2spPVwic2VsZWN0KG9wdGlvbi52YWx1ZSlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1zaGFkb3dcIj48L2Rpdj5cbiAgICAgIDxsYWJlbCBbZm9yXT1cIm9wdGlvbi52YWx1ZVwiIFtpbm5lckh0bWxdPVwib3B0aW9uLm5hbWVcIiAoY2xpY2spPVwic2VsZWN0KG9wdGlvbi52YWx1ZSlcIiBbbmdDbGFzc109XCJjbGFzc2VzT25MYWJlbCgpXCI+PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==