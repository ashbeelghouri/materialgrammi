import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class DragableComponent {
    constructor() {
        this.dragable = true;
        this.data = {
            name: "Ashbeel",
            profession: "Software Engineer"
        };
        this.class = "";
        this.onEvent = new EventEmitter();
        this.eventProperties = {
            isInDragMode: false
        };
    }
    ngOnInit() {
    }
    onDrag(event) {
        event.dataTransfer.setData("text", JSON.stringify(this.data));
        event.dataTransfer.effectAllowed = "all";
        event.stopPropagation();
        this.onEvent.emit(this.eventProperties);
    }
}
DragableComponent.ɵfac = function DragableComponent_Factory(t) { return new (t || DragableComponent)(); };
DragableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragableComponent, selectors: [["mg-dragable"]], inputs: { dragable: "dragable", data: "data", class: "class" }, outputs: { onEvent: "onEvent" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[3, "ngClass"], [1, "is-draggable", 3, "draggable", "drag", "dragstart"], [1, "drag-element"]], template: function DragableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("drag", function DragableComponent_Template_div_drag_1_listener($event) { return ctx.onDrag($event); })("dragstart", function DragableComponent_Template_div_dragstart_1_listener($event) { return ctx.onDrag($event); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("draggable", ctx.dragable);
    } }, directives: [i1.NgClass], styles: [".is-draggable[_ngcontent-%COMP%]{opacity:1!important;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragableComponent, [{
        type: Component,
        args: [{ selector: 'mg-dragable', template: "<div [ngClass]=\"class\">\n  <div class=\"is-draggable\" (drag)=\"onDrag($event)\" (dragstart)=\"onDrag($event)\" [draggable]=\"dragable\">\n    <div class=\"drag-element\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".is-draggable{opacity:1!important;cursor:pointer}\n"] }]
    }], function () { return []; }, { dragable: [{
            type: Input
        }], data: [{
            type: Input
        }], class: [{
            type: Input
        }], onEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2RyYWdhYmxlL2RyYWdhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kcmFnYWJsZS9kcmFnYWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFhNUI7UUFaUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBUTtZQUNuQixJQUFJLEVBQUUsU0FBUztZQUNmLFVBQVUsRUFBRSxtQkFBbUI7U0FDaEMsQ0FBQztRQUNPLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2QyxvQkFBZSxHQUFHO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1NBQ3BCLENBQUM7SUFDYyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDekMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQyxDQUFDOztrRkF2QlUsaUJBQWlCO29FQUFqQixpQkFBaUI7O1FDUDlCLDhCQUF1QjtRQUNyQiw4QkFBc0c7UUFBNUUsK0ZBQVEsa0JBQWMsSUFBQyw0RkFBYyxrQkFBYyxJQUE1QjtRQUMvQyw4QkFBMEI7UUFDeEIsa0JBQXlCO1FBQzNCLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUFORCxtQ0FBaUI7UUFDMkQsZUFBc0I7UUFBdEIsd0NBQXNCOzt1RkRNMUYsaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UsYUFBYTtzQ0FLZCxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBSUcsS0FBSztrQkFBYixLQUFLO1lBRUksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctZHJhZ2FibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJhZ2FibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmFnYWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkcmFnYWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGRhdGE6IGFueSA9IHtcbiAgICBuYW1lOiBcIkFzaGJlZWxcIixcbiAgICBwcm9mZXNzaW9uOiBcIlNvZnR3YXJlIEVuZ2luZWVyXCJcbiAgfTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSBvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGV2ZW50UHJvcGVydGllcyA9IHtcbiAgICBpc0luRHJhZ01vZGU6IGZhbHNlXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkRyYWcoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwiYWxsXCI7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vbkV2ZW50LmVtaXQodGhpcy5ldmVudFByb3BlcnRpZXMpO1xuICB9XG5cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwiY2xhc3NcIj5cbiAgPGRpdiBjbGFzcz1cImlzLWRyYWdnYWJsZVwiIChkcmFnKT1cIm9uRHJhZygkZXZlbnQpXCIgKGRyYWdzdGFydCk9XCJvbkRyYWcoJGV2ZW50KVwiIFtkcmFnZ2FibGVdPVwiZHJhZ2FibGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJhZy1lbGVtZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=