import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
DragableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DragableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DragableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DragableComponent, selector: "mg-dragable", inputs: { dragable: "dragable", data: "data", class: "class" }, outputs: { onEvent: "onEvent" }, ngImport: i0, template: "<div [ngClass]=\"class\">\n  <div class=\"is-draggable\" (drag)=\"onDrag($event)\" (dragstart)=\"onDrag($event)\" [draggable]=\"dragable\">\n    <div class=\"drag-element\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".is-draggable{opacity:1!important;cursor:pointer}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DragableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-dragable', template: "<div [ngClass]=\"class\">\n  <div class=\"is-draggable\" (drag)=\"onDrag($event)\" (dragstart)=\"onDrag($event)\" [draggable]=\"dragable\">\n    <div class=\"drag-element\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".is-draggable{opacity:1!important;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { dragable: [{
                type: Input
            }], data: [{
                type: Input
            }], class: [{
                type: Input
            }], onEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2RyYWdhYmxlL2RyYWdhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kcmFnYWJsZS9kcmFnYWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QjtRQVpTLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsU0FBSSxHQUFRO1lBQ25CLElBQUksRUFBRSxTQUFTO1lBQ2YsVUFBVSxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDO1FBQ08sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVWLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZDLG9CQUFlLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztJQUNjLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN6QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OzhHQXZCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixvSkNQOUIsZ1BBT0E7MkZEQWEsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLGFBQWE7MEVBS2QsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBSUcsS0FBSztzQkFBYixLQUFLO2dCQUVJLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWRyYWdhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYWdhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJhZ2FibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyYWdhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZHJhZ2FibGUgPSB0cnVlO1xuICBASW5wdXQoKSBkYXRhOiBhbnkgPSB7XG4gICAgbmFtZTogXCJBc2hiZWVsXCIsXG4gICAgcHJvZmVzc2lvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiXG4gIH07XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcblxuICBAT3V0cHV0KCkgb25FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBldmVudFByb3BlcnRpZXMgPSB7XG4gICAgaXNJbkRyYWdNb2RlOiBmYWxzZVxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25EcmFnKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcImFsbFwiO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25FdmVudC5lbWl0KHRoaXMuZXZlbnRQcm9wZXJ0aWVzKTtcbiAgfVxuXG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cImNsYXNzXCI+XG4gIDxkaXYgY2xhc3M9XCJpcy1kcmFnZ2FibGVcIiAoZHJhZyk9XCJvbkRyYWcoJGV2ZW50KVwiIChkcmFnc3RhcnQpPVwib25EcmFnKCRldmVudClcIiBbZHJhZ2dhYmxlXT1cImRyYWdhYmxlXCI+XG4gICAgPGRpdiBjbGFzcz1cImRyYWctZWxlbWVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19