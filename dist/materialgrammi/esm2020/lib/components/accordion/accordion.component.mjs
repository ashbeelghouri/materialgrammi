import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../accordion-item/accordion-item.component";
function AccordionComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "mg-accordion-item", 4);
    i0.ɵɵlistener("isClicked", function AccordionComponent_ng_container_0_ng_container_2_Template_mg_accordion_item_isClicked_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.toggleItem($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("theme", ctx_r1.theme)("itemid", i_r3)("item", item_r2);
} }
function AccordionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵtemplate(2, AccordionComponent_ng_container_0_ng_container_2_Template, 3, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items);
} }
export class AccordionComponent {
    constructor() {
        this.theme = "dark";
        this.items = [{
                title: "Panel 1",
                description: "description of panel 1",
                active: false
            }, {
                title: "Panel 2",
                description: "description of panel 2",
                active: true
            }, {
                title: "Panel 3",
                description: "description of panel 3",
                active: false
            }, {
                title: "Panel 4",
                description: "description of panel 4",
                active: false
            }, {
                title: "Panel 5",
                description: "description of panel 5",
                active: false
            }];
        this.class = "";
    }
    ngOnInit() {
    }
    turnAllOff(missItem) {
        for (let i = 0; i < this.items.length; i++) {
            if (missItem != i) {
                this.items[i].active = false;
            }
        }
    }
    toggleItem(itemNumber) {
        this.items[itemNumber].active = !this.items[itemNumber].active;
        this.turnAllOff(itemNumber);
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
AccordionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["mg-accordion"]], inputs: { theme: "theme", items: "items", class: "class" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "accordion", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "marginB-2"], [3, "theme", "itemid", "item", "isClicked"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AccordionComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.items.length > 0);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.AccordionItemComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{ selector: 'mg-accordion', template: "<ng-container *ngIf=\"items.length > 0\">\n  <div class=\"accordion\" [ngClass]=\"class\">\n    <ng-container *ngFor=\"let item of items; let i = index\">\n      <div class=\"marginB-2\">\n        <mg-accordion-item [theme]=\"theme\" [itemid]=\"i\" [item]=\"item\" (isClicked)=\"toggleItem($event)\">\n        </mg-accordion-item>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], items: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNFckQsNkJBQXdEO0lBQ3RELDhCQUF1QjtJQUNyQiw0Q0FBK0Y7SUFBakMsaU5BQWEseUJBQWtCLElBQUM7SUFDOUYsaUJBQW9CO0lBQ3RCLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7O0lBSFEsZUFBZTtJQUFmLG9DQUFlLGdCQUFBLGlCQUFBOzs7SUFKMUMsNkJBQXVDO0lBQ3JDLDhCQUF5QztJQUN2QyxvR0FLZTtJQUNqQixpQkFBTTtJQUNSLDBCQUFlOzs7SUFSVSxlQUFpQjtJQUFqQixzQ0FBaUI7SUFDUCxlQUFVO0lBQVYsc0NBQVU7O0FESzdDLE1BQU0sT0FBTyxrQkFBa0I7SUEwQjdCO1FBekJTLFVBQUssR0FBRyxNQUFNLENBQUM7UUFFZixVQUFLLEdBQVEsQ0FBQztnQkFDckIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLE1BQU0sRUFBRSxLQUFLO2FBQ2QsRUFBRTtnQkFDRCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsTUFBTSxFQUFFLElBQUk7YUFDYixFQUFFO2dCQUNELEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxNQUFNLEVBQUUsS0FBSzthQUNkLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLE1BQU0sRUFBRSxLQUFLO2FBQ2QsRUFBRTtnQkFDRCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ0osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQjtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsVUFBZTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7b0ZBMUNVLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDUC9CLHFGQVNlOztRQVRBLDJDQUFzQjs7dUZET3hCLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLGNBQWM7c0NBS2YsS0FBSztrQkFBYixLQUFLO1lBRUcsS0FBSztrQkFBYixLQUFLO1lBc0JHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnkgPSBbe1xuICAgIHRpdGxlOiBcIlBhbmVsIDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvbiBvZiBwYW5lbCAxXCIsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9LCB7XG4gICAgdGl0bGU6IFwiUGFuZWwgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uIG9mIHBhbmVsIDJcIixcbiAgICBhY3RpdmU6IHRydWVcbiAgfSwge1xuICAgIHRpdGxlOiBcIlBhbmVsIDNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvbiBvZiBwYW5lbCAzXCIsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9LCB7XG4gICAgdGl0bGU6IFwiUGFuZWwgNFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uIG9mIHBhbmVsIDRcIixcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH0sIHtcbiAgICB0aXRsZTogXCJQYW5lbCA1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24gb2YgcGFuZWwgNVwiLFxuICAgIGFjdGl2ZTogZmFsc2VcbiAgfV07XG5cbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgdHVybkFsbE9mZihtaXNzSXRlbTogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobWlzc0l0ZW0gIT0gaSkge1xuICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUl0ZW0oaXRlbU51bWJlcjogYW55KSB7XG4gICAgdGhpcy5pdGVtc1tpdGVtTnVtYmVyXS5hY3RpdmUgPSAhdGhpcy5pdGVtc1tpdGVtTnVtYmVyXS5hY3RpdmU7XG4gICAgdGhpcy50dXJuQWxsT2ZmKGl0ZW1OdW1iZXIpO1xuICB9XG5cblxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gMFwiPlxuICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uXCIgW25nQ2xhc3NdPVwiY2xhc3NcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFyZ2luQi0yXCI+XG4gICAgICAgIDxtZy1hY2NvcmRpb24taXRlbSBbdGhlbWVdPVwidGhlbWVcIiBbaXRlbWlkXT1cImlcIiBbaXRlbV09XCJpdGVtXCIgKGlzQ2xpY2tlZCk9XCJ0b2dnbGVJdGVtKCRldmVudClcIj5cbiAgICAgICAgPC9tZy1hY2NvcmRpb24taXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19