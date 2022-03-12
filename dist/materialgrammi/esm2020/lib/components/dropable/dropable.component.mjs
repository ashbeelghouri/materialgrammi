import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
DropableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DropableComponent, selector: "mg-dropable", inputs: { dropFiles: "dropFiles", class: "class" }, outputs: { onEvent: "onEvent", dataRecieved: "dataRecieved" }, ngImport: i0, template: "<div (dragenter)=\"dragEntered($event)\" (dragleave)=\"dragLeft($event)\" \n(dragover)=\"draggedOver($event)\"\n  (drop)=\"onDrop($event)\" [ngClass]=\"class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-dropable', template: "<div (dragenter)=\"dragEntered($event)\" (dragleave)=\"dragLeft($event)\" \n(dragover)=\"draggedOver($event)\"\n  (drop)=\"onDrop($event)\" [ngClass]=\"class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { onEvent: [{
                type: Output
            }], dataRecieved: [{
                type: Output
            }], dropFiles: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3BhYmxlL2Ryb3BhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9kcm9wYWJsZS9kcm9wYWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLGlCQUFpQjtJQWM1QjtRQWJVLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsc0JBQWlCLEdBQUc7WUFDbEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7WUFDZixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7UUFFRixTQUFJLEdBQU8sS0FBSyxDQUFDO0lBQ0QsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUN0QzthQUFJO1lBQ0gsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM3QztRQUNELElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFDRCxXQUFXLENBQUMsS0FBVTtRQUNwQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQVM7UUFDbkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELFFBQVEsQ0FBQyxLQUFTO1FBQ2hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OEdBN0RVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHNLQ1A5Qix5TUFLQTsyRkRFYSxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsYUFBYTswRUFLYixPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFlBQVk7c0JBQXJCLE1BQU07Z0JBRUUsU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLWRyb3BhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3BhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3BhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYXRhUmVjaWV2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgZHJvcEZpbGVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgb25FdmVudFByb3BlcnRpZXMgPSB7XG4gICAgaXNEcmFnZ2VkT3ZlcjogZmFsc2UsXG4gICAgZHJhZ0VudGVyZWQ6IGZhbHNlLFxuICAgIGRyYWdMZWZ0OiBmYWxzZSxcbiAgICBkcm9wcGVkOiBmYWxzZVxuICB9O1xuXG4gIGRhdGE6YW55ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbkV2ZW50UHJvcGVydGllcy5kcm9wcGVkID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXRFdmVudHMoKTtcbiAgICBpZih0aGlzLmRyb3BGaWxlcykge1xuICAgICAgdGhpcy5kYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIH1lbHNle1xuICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IGZhbHNlO1xuICAgIH1cbiAgICBpZih0aGlzLmRhdGEpe1xuICAgICAgdGhpcy5lbWl0RGF0YSgpO1xuICAgIH1cbiAgfVxuICBkcmFnZ2VkT3ZlcihldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vbkV2ZW50UHJvcGVydGllcy5pc0RyYWdnZWRPdmVyID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXRFdmVudHMoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGRyYWdFbnRlcmVkKGV2ZW50OmFueSl7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vbkV2ZW50UHJvcGVydGllcy5kcmFnRW50ZXJlZCA9IHRydWU7XG4gICAgdGhpcy5vbkV2ZW50UHJvcGVydGllcy5kcmFnTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdEV2ZW50cygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgZHJhZ0xlZnQoZXZlbnQ6YW55KXtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uRXZlbnRQcm9wZXJ0aWVzLmRyYWdMZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLm9uRXZlbnRQcm9wZXJ0aWVzLmRyYWdFbnRlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0RXZlbnRzKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG5cbiAgZW1pdEV2ZW50cygpe1xuICAgIHRoaXMub25FdmVudC5lbWl0KHRoaXMub25FdmVudFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZW1pdERhdGEoKXtcbiAgICB0aGlzLmRhdGFSZWNpZXZlZC5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxufVxuIiwiPGRpdiAoZHJhZ2VudGVyKT1cImRyYWdFbnRlcmVkKCRldmVudClcIiAoZHJhZ2xlYXZlKT1cImRyYWdMZWZ0KCRldmVudClcIiBcbihkcmFnb3Zlcik9XCJkcmFnZ2VkT3ZlcigkZXZlbnQpXCJcbiAgKGRyb3ApPVwib25Ecm9wKCRldmVudClcIiBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==