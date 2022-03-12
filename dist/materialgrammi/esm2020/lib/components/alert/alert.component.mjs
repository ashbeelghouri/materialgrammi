import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlertComponent {
    constructor() {
        this.theme = "danger";
        this.show = true;
        this.alignCenter = false;
        this.closeBtn = true;
        this.class = "";
    }
    ngOnInit() {
    }
    hide() {
        this.show = false;
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AlertComponent, selector: "mg-alert", inputs: { theme: "theme", show: "show", alignCenter: "alignCenter", closeBtn: "closeBtn", class: "class" }, ngImport: i0, template: "<div class=\"alert {{theme}}\" *ngIf=\"show\" [ngClass]=\"class\">\n  <a class=\"closealert\" (click)=\"hide()\" *ngIf=\"closeBtn\">x</a>\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-alert', template: "<div class=\"alert {{theme}}\" *ngIf=\"show\" [ngClass]=\"class\">\n  <a class=\"closealert\" (click)=\"hide()\" *ngIf=\"closeBtn\">x</a>\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { theme: [{
                type: Input
            }], show: [{
                type: Input
            }], alignCenter: [{
                type: Input
            }], closeBtn: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXpELE1BQU0sT0FBTyxjQUFjO0lBTXpCO1FBTFMsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUNqQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzsyR0FaVSxjQUFjOytGQUFkLGNBQWMsNEpDTjNCLG9RQU1BOzJGREFhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsVUFBVTswRUFLWCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGhlbWUgPSBcImRhbmdlclwiO1xuICBASW5wdXQoKSBzaG93ID0gdHJ1ZTtcbiAgQElucHV0KCkgYWxpZ25DZW50ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xvc2VCdG4gPSB0cnVlO1xuICBASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFsZXJ0IHt7dGhlbWV9fVwiICpuZ0lmPVwic2hvd1wiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gIDxhIGNsYXNzPVwiY2xvc2VhbGVydFwiIChjbGljayk9XCJoaWRlKClcIiAqbmdJZj1cImNsb3NlQnRuXCI+eDwvYT5cbiAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LWNlbnRlciBibG9jaycgOiBhbGlnbkNlbnRlciA9PT0gdHJ1ZX1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19