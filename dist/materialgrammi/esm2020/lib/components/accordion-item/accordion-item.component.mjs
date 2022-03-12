import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AccordionItemComponent {
    constructor() {
        this.item = {};
        this.isClicked = new EventEmitter();
        this.itemid = 0;
        this.theme = "primary";
    }
    ngOnInit() {
    }
    onClickTitle() {
        this.isClicked.emit(this.itemid);
    }
    isActive(state) {
        return state ? 'active' : '';
    }
}
AccordionItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AccordionItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AccordionItemComponent, selector: "mg-accordion-item", inputs: { item: "item", itemid: "itemid", theme: "theme" }, outputs: { isClicked: "isClicked" }, ngImport: i0, template: "<div class=\"title {{theme}}\" [ngClass]=\"isActive(item.active)\" [innerHtml]=\"item.title\"\n  (click)=\"onClickTitle()\"></div>\n<div class=\"body {{theme}}\" [innerHtml]=\"item.description\" [ngClass]=\"isActive(item.active)\"></div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-accordion-item', template: "<div class=\"title {{theme}}\" [ngClass]=\"isActive(item.active)\" [innerHtml]=\"item.title\"\n  (click)=\"onClickTitle()\"></div>\n<div class=\"body {{theme}}\" [innerHtml]=\"item.description\" [ngClass]=\"isActive(item.active)\"></div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }], isClicked: [{
                type: Output
            }], itemid: [{
                type: Input
            }], theme: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi1pdGVtL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQztRQUpTLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6QyxXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUE7SUFDVixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9CLENBQUM7O21IQWhCVSxzQkFBc0I7dUdBQXRCLHNCQUFzQiwwSkNQbkMsaVBBR0E7MkZESWEsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLG1CQUFtQjswRUFLcEIsSUFBSTtzQkFBWixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0UsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctYWNjb3JkaW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueSA9IHt9O1xuICBAT3V0cHV0KCkgaXNDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBpdGVtaWQ6IGFueSA9IDA7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJwcmltYXJ5XCJcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQ2xpY2tUaXRsZSgpIHtcbiAgICB0aGlzLmlzQ2xpY2tlZC5lbWl0KHRoaXMuaXRlbWlkKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHN0YXRlOiBhbnkpIHtcbiAgICByZXR1cm4gc3RhdGUgPyAnYWN0aXZlJyA6ICcnO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0aXRsZSB7e3RoZW1lfX1cIiBbbmdDbGFzc109XCJpc0FjdGl2ZShpdGVtLmFjdGl2ZSlcIiBbaW5uZXJIdG1sXT1cIml0ZW0udGl0bGVcIlxuICAoY2xpY2spPVwib25DbGlja1RpdGxlKClcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJib2R5IHt7dGhlbWV9fVwiIFtpbm5lckh0bWxdPVwiaXRlbS5kZXNjcmlwdGlvblwiIFtuZ0NsYXNzXT1cImlzQWN0aXZlKGl0ZW0uYWN0aXZlKVwiPjwvZGl2PlxuIl19