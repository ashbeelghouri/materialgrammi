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
AccordionItemComponent.ɵfac = function AccordionItemComponent_Factory(t) { return new (t || AccordionItemComponent)(); };
AccordionItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionItemComponent, selectors: [["mg-accordion-item"]], inputs: { item: "item", itemid: "itemid", theme: "theme" }, outputs: { isClicked: "isClicked" }, decls: 2, vars: 10, consts: [[3, "ngClass", "innerHtml", "click"], [3, "innerHtml", "ngClass"]], template: function AccordionItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function AccordionItemComponent_Template_div_click_0_listener() { return ctx.onClickTitle(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("title ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.isActive(ctx.item.active))("innerHtml", ctx.item.title, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("body ", ctx.theme, "");
        i0.ɵɵproperty("innerHtml", ctx.item.description, i0.ɵɵsanitizeHtml)("ngClass", ctx.isActive(ctx.item.active));
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionItemComponent, [{
        type: Component,
        args: [{ selector: 'mg-accordion-item', template: "<div class=\"title {{theme}}\" [ngClass]=\"isActive(item.active)\" [innerHtml]=\"item.title\"\n  (click)=\"onClickTitle()\"></div>\n<div class=\"body {{theme}}\" [innerHtml]=\"item.description\" [ngClass]=\"isActive(item.active)\"></div>\n", styles: [""] }]
    }], function () { return []; }, { item: [{
            type: Input
        }], isClicked: [{
            type: Output
        }], itemid: [{
            type: Input
        }], theme: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi1pdGVtL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQztRQUpTLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6QyxXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUE7SUFDVixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9CLENBQUM7OzRGQWhCVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ1BuQyw4QkFDMkI7UUFBekIsZ0dBQVMsa0JBQWMsSUFBQztRQUFDLGlCQUFNO1FBQ2pDLHlCQUFtRzs7UUFGOUYsa0RBQXVCO1FBQUMsdURBQWlDLGdEQUFBO1FBRXpELGVBQXNCO1FBQXRCLGlEQUFzQjtRQUFDLG1FQUE4QiwwQ0FBQTs7dUZESzdDLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNFLG1CQUFtQjtzQ0FLcEIsSUFBSTtrQkFBWixLQUFLO1lBQ0ksU0FBUztrQkFBbEIsTUFBTTtZQUNFLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctYWNjb3JkaW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueSA9IHt9O1xuICBAT3V0cHV0KCkgaXNDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBpdGVtaWQ6IGFueSA9IDA7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJwcmltYXJ5XCJcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQ2xpY2tUaXRsZSgpIHtcbiAgICB0aGlzLmlzQ2xpY2tlZC5lbWl0KHRoaXMuaXRlbWlkKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHN0YXRlOiBhbnkpIHtcbiAgICByZXR1cm4gc3RhdGUgPyAnYWN0aXZlJyA6ICcnO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0aXRsZSB7e3RoZW1lfX1cIiBbbmdDbGFzc109XCJpc0FjdGl2ZShpdGVtLmFjdGl2ZSlcIiBbaW5uZXJIdG1sXT1cIml0ZW0udGl0bGVcIlxuICAoY2xpY2spPVwib25DbGlja1RpdGxlKClcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJib2R5IHt7dGhlbWV9fVwiIFtpbm5lckh0bWxdPVwiaXRlbS5kZXNjcmlwdGlvblwiIFtuZ0NsYXNzXT1cImlzQWN0aXZlKGl0ZW0uYWN0aXZlKVwiPjwvZGl2PlxuIl19