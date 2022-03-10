import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class DropableComponent {
    constructor() {
        this.onEvent = new EventEmitter();
        this.dataRecieved = new EventEmitter();
        this.dropFiles = false;
        this.class = "";
        this.onEventProperties = {
            isDraggedOver: false,
            dragEntered: false,
            dragLeft: false,
            dropped: false
        };
        this.data = false;
    }
    ngOnInit() {
    }
    onDrop(event) {
        event.preventDefault();
        this.onEventProperties.dropped = true;
        this.emitEvents();
        if (this.dropFiles) {
            this.data = event.dataTransfer.files;
        }
        else {
            var data = event.dataTransfer.getData("text");
            this.data = data ? JSON.parse(data) : false;
        }
        if (this.data) {
            this.emitData();
        }
    }
    draggedOver(event) {
        event.stopPropagation();
        this.onEventProperties.isDraggedOver = true;
        this.emitEvents();
        event.preventDefault();
    }
    dragEntered(event) {
        event.stopPropagation();
        this.onEventProperties.dragEntered = true;
        this.onEventProperties.dragLeft = false;
        this.emitEvents();
        event.preventDefault();
    }
    dragLeft(event) {
        event.stopPropagation();
        this.onEventProperties.dragLeft = true;
        this.onEventProperties.dragEntered = false;
        this.emitEvents();
        event.preventDefault();
    }
    emitEvents() {
        this.onEvent.emit(this.onEventProperties);
    }
    emitData() {
        this.dataRecieved.emit(this.data);
    }
}
DropableComponent.ɵfac = function DropableComponent_Factory(t) { return new (t || DropableComponent)(); };
DropableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropableComponent, selectors: [["mg-dropable"]], inputs: { dropFiles: "dropFiles", class: "class" }, outputs: { onEvent: "onEvent", dataRecieved: "dataRecieved" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "ngClass", "dragenter", "dragleave", "dragover", "drop"]], template: function DropableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("dragenter", function DropableComponent_Template_div_dragenter_0_listener($event) { return ctx.dragEntered($event); })("dragleave", function DropableComponent_Template_div_dragleave_0_listener($event) { return ctx.dragLeft($event); })("dragover", function DropableComponent_Template_div_dragover_0_listener($event) { return ctx.draggedOver($event); })("drop", function DropableComponent_Template_div_drop_0_listener($event) { return ctx.onDrop($event); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropableComponent, [{
        type: Component,
        args: [{ selector: 'mg-dropable', template: "<div (dragenter)=\"dragEntered($event)\" (dragleave)=\"dragLeft($event)\" \n(dragover)=\"draggedOver($event)\"\n  (drop)=\"onDrop($event)\" [ngClass]=\"class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { onEvent: [{
            type: Output
        }], dataRecieved: [{
            type: Output
        }], dropFiles: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3BhYmxlL2Ryb3BhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kcm9wYWJsZS9kcm9wYWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFjNUI7UUFiVSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBRUYsU0FBSSxHQUFPLEtBQUssQ0FBQztJQUNELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDdEM7YUFBSTtZQUNILElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDN0M7UUFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQVU7UUFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFTO1FBQ25CLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxRQUFRLENBQUMsS0FBUztRQUNoQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2tGQTdEVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjs7UUNQOUIsOEJBRTRDO1FBRnZDLHlHQUFhLHVCQUFtQixJQUFDLDRGQUFjLG9CQUFnQixJQUE5QiwwRkFDMUIsdUJBQW1CLElBRE8sa0ZBRTVCLGtCQUFjLElBRmM7UUFHcEMsa0JBQXlCO1FBQzNCLGlCQUFNOztRQUZvQixtQ0FBaUI7O3VGREs5QixpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSxhQUFhO3NDQUtiLE9BQU87a0JBQWhCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBRUUsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctZHJvcGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wYWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgb25FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRhdGFSZWNpZXZlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBkcm9wRmlsZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBvbkV2ZW50UHJvcGVydGllcyA9IHtcbiAgICBpc0RyYWdnZWRPdmVyOiBmYWxzZSxcbiAgICBkcmFnRW50ZXJlZDogZmFsc2UsXG4gICAgZHJhZ0xlZnQ6IGZhbHNlLFxuICAgIGRyb3BwZWQ6IGZhbHNlXG4gIH07XG5cbiAgZGF0YTphbnkgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uRHJvcChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uRXZlbnRQcm9wZXJ0aWVzLmRyb3BwZWQgPSB0cnVlO1xuICAgIHRoaXMuZW1pdEV2ZW50cygpO1xuICAgIGlmKHRoaXMuZHJvcEZpbGVzKSB7XG4gICAgICB0aGlzLmRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogZmFsc2U7XG4gICAgfVxuICAgIGlmKHRoaXMuZGF0YSl7XG4gICAgICB0aGlzLmVtaXREYXRhKCk7XG4gICAgfVxuICB9XG4gIGRyYWdnZWRPdmVyKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uRXZlbnRQcm9wZXJ0aWVzLmlzRHJhZ2dlZE92ZXIgPSB0cnVlO1xuICAgIHRoaXMuZW1pdEV2ZW50cygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgZHJhZ0VudGVyZWQoZXZlbnQ6YW55KXtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uRXZlbnRQcm9wZXJ0aWVzLmRyYWdFbnRlcmVkID0gdHJ1ZTtcbiAgICB0aGlzLm9uRXZlbnRQcm9wZXJ0aWVzLmRyYWdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0RXZlbnRzKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBkcmFnTGVmdChldmVudDphbnkpe1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25FdmVudFByb3BlcnRpZXMuZHJhZ0xlZnQgPSB0cnVlO1xuICAgIHRoaXMub25FdmVudFByb3BlcnRpZXMuZHJhZ0VudGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXRFdmVudHMoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cblxuICBlbWl0RXZlbnRzKCl7XG4gICAgdGhpcy5vbkV2ZW50LmVtaXQodGhpcy5vbkV2ZW50UHJvcGVydGllcyk7XG4gIH1cblxuICBlbWl0RGF0YSgpe1xuICAgIHRoaXMuZGF0YVJlY2lldmVkLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG59XG4iLCI8ZGl2IChkcmFnZW50ZXIpPVwiZHJhZ0VudGVyZWQoJGV2ZW50KVwiIChkcmFnbGVhdmUpPVwiZHJhZ0xlZnQoJGV2ZW50KVwiIFxuKGRyYWdvdmVyKT1cImRyYWdnZWRPdmVyKCRldmVudClcIlxuICAoZHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19