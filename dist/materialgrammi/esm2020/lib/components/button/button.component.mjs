import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
export class ButtonComponent {
    constructor(service) {
        this.service = service;
        this.clicked = new EventEmitter();
        this.taskType = "none";
        this.btnStyle = "solid";
        this.task = "open";
        this.target = "/";
        this.theme = "default";
        this.class = "";
        this.btnSize = "md";
        this.isBlock = false;
        this.round = false;
        this.allowMargin = true;
        this.link = "";
        this.allowShrink = true;
        this.options = {};
        this.isExternalLink = false;
        this.newTab = false;
        this.active = new EventEmitter();
        this.route = [""];
        this.buttonType = "none";
        this.buttonClasses = "";
        this.shrink = false;
    }
    ngOnInit() {
        if (this.taskType != "link") {
            this.route = [""];
        }
        else {
            this.route = this.target;
        }
        if (this.isExternalLink && this.taskType == "link") {
            this.buttonType = "external";
        }
        else if (!this.isExternalLink && this.taskType == "link") {
            this.buttonType = "internal";
        }
        else {
            this.buttonType = "widget";
        }
    }
    isClicked() {
        this.clicked.emit(true);
        if (this.taskType == "modal") {
            this.modal();
        }
        else if (this.taskType == "offCanvas") {
            this.offCanvas();
        }
        else if (this.taskType == "slideShow") {
            this.slideShow();
        }
        else if (this.taskType == "wizard") {
            this.wizard();
        }
        else if (this.taskType == "collapse") {
            this.collapse();
        }
        else if (this.taskType == "overlay") {
            this.overlay();
        }
    }
    btnClasses() {
        this.buttonClasses = this.class + " " + this.theme;
        this.buttonClasses += ` ${this.btnSize}`;
        this.buttonClasses += this.shrink ? " shrink" : "";
        this.buttonClasses += this.isBlock ? ` btn-block` : ``;
        this.buttonClasses += this.btnStyle == "link" ? " link" : (this.btnStyle == "outline" ? " btn-outline" : "");
        this.buttonClasses += this.round ? " radius-5" : "";
        this.buttonClasses += this.allowMargin ? " marginR-5" : "";
        return this.buttonClasses;
    }
    collapse() {
        if (this.task == "open") {
            this.service.openCollapse(this.target);
            this.active.emit(true);
        }
        else if (this.task == "close") {
            this.service.closeCollapse(this.target);
            this.active.emit(false);
        }
    }
    wizard() {
        if (this.task == "next") {
            this.buttonClasses += this.options.next && !this.buttonClasses.includes("disable") ? " disable" : "";
            if (this.options.next) {
                this.service.wizardNextStep(this.target);
            }
        }
        else if (this.task == "previous") {
            this.buttonClasses += this.options.previous && !this.buttonClasses.includes("disable") ? " disable" : "";
            if (this.options.previous) {
                this.service.WizardPreviousStep(this.target);
            }
        }
    }
    mouseEnter() {
        if (this.taskType == "dropdown") {
            console.log("to trigger dropdown");
            this.service.openDropDown(this.target);
        }
    }
    mouseLeave() {
        this.mouseup();
        if (this.taskType == "dropdown") {
            this.service.closeDropDown(this.target);
        }
    }
    slideShow() {
        if (this.task == "play") {
            // this.slideShowService.play(this.target);
        }
        else if (this.task == "next") {
            // this.slideShowService.next(this.target);
        }
        else if (this.task == "previous") {
            // this.slideShowService.previous(this.target);
        }
        else {
            // this.slideShowService.pause(this.target);
        }
    }
    modal() {
        if (this.task == "open") {
            this.service.openModal(this.target);
            this.active.emit(true);
        }
        else {
            this.service.closeModal(this.target);
            this.active.emit(false);
        }
    }
    overlay() {
        if (this.task == "open") {
            console.log("opening target", this.target);
            this.service.openOverlay(this.target);
            this.active.emit(true);
        }
        else {
            this.service.closeOverlay(this.target);
            this.active.emit(false);
        }
    }
    offCanvas() {
        console.log("Task type is offcanvas");
        if (this.task == "open") {
            console.log("opening target", this.target);
            this.service.openCanvas(this.target);
            this.active.emit(true);
        }
        else {
            console.log("Closing the canvas");
            this.service.closeCanvas(this.target);
            this.active.emit(false);
        }
    }
    mousedown() {
        if (this.allowShrink) {
            this.shrink = true;
        }
    }
    mouseup() {
        if (this.allowShrink) {
            this.shrink = false;
        }
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, deps: [{ token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ButtonComponent, selector: "mg-button", inputs: { taskType: "taskType", btnStyle: "btnStyle", task: "task", target: "target", theme: "theme", class: "class", btnSize: "btnSize", isBlock: "isBlock", round: "round", allowMargin: "allowMargin", link: "link", allowShrink: "allowShrink", options: "options", isExternalLink: "isExternalLink", newTab: "newTab" }, outputs: { clicked: "clicked", active: "active" }, ngImport: i0, template: "<ng-container *ngIf=\"buttonType == 'external'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\"\n  [ngClass]=\"btnClasses()\" [href]=\"route\" [target]=\"newTab ? '_blank' : '_self'\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-container *ngIf=\"buttonType == 'internal'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\"\n  (mouseleave)=\"mouseLeave()\" [ngClass]=\"btnClasses()\" [routerLink]=\"route\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-container *ngIf=\"buttonType == 'widget'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\"\n  [ngClass]=\"btnClasses()\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #mycontent>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-button', template: "<ng-container *ngIf=\"buttonType == 'external'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\"\n  [ngClass]=\"btnClasses()\" [href]=\"route\" [target]=\"newTab ? '_blank' : '_self'\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-container *ngIf=\"buttonType == 'internal'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\"\n  (mouseleave)=\"mouseLeave()\" [ngClass]=\"btnClasses()\" [routerLink]=\"route\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-container *ngIf=\"buttonType == 'widget'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\"\n  [ngClass]=\"btnClasses()\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #mycontent>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MaterialgrammiService }]; }, propDecorators: { clicked: [{
                type: Output
            }], taskType: [{
                type: Input
            }], btnStyle: [{
                type: Input
            }], task: [{
                type: Input
            }], target: [{
                type: Input
            }], theme: [{
                type: Input
            }], class: [{
                type: Input
            }], btnSize: [{
                type: Input
            }], isBlock: [{
                type: Input
            }], round: [{
                type: Input
            }], allowMargin: [{
                type: Input
            }], link: [{
                type: Input
            }], allowShrink: [{
                type: Input
            }], options: [{
                type: Input
            }], isExternalLink: [{
                type: Input
            }], newTab: [{
                type: Input
            }], active: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUS9FLE1BQU0sT0FBTyxlQUFlO0lBMEIxQixZQUFvQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQXpCeEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25CLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxXQUFNLEdBQVEsR0FBRyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUdsQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEMsVUFBSyxHQUFHLENBQUMsRUFB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Q3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7NEdBL0tVLGVBQWU7Z0dBQWYsZUFBZSxrYUNSNUIscW9DQTJCQTsyRkRuQmEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxXQUFXOzRHQUtYLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0UsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFHRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHRhc2tUeXBlID0gXCJub25lXCI7XG4gIEBJbnB1dCgpIGJ0blN0eWxlID0gXCJzb2xpZFwiO1xuICBASW5wdXQoKSB0YXNrID0gXCJvcGVuXCI7XG4gIEBJbnB1dCgpIHRhcmdldDogYW55ID0gXCIvXCI7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkZWZhdWx0XCI7XG4gIEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcbiAgQElucHV0KCkgYnRuU2l6ZSA9IFwibWRcIjtcbiAgQElucHV0KCkgaXNCbG9jayA9IGZhbHNlO1xuICBASW5wdXQoKSByb3VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd01hcmdpbiA9IHRydWU7XG4gIEBJbnB1dCgpIGxpbmsgPSBcIlwiO1xuICBASW5wdXQoKSBhbGxvd1NocmluayA9IHRydWU7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuXG5cbiAgQElucHV0KCkgaXNFeHRlcm5hbExpbmsgPSBmYWxzZTtcbiAgQElucHV0KCkgbmV3VGFiID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByb3V0ZSA9IFtcIlwiXTtcbiAgYnV0dG9uVHlwZSA9IFwibm9uZVwiO1xuICBidXR0b25DbGFzc2VzID0gXCJcIjtcbiAgc2hyaW5rID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWF0ZXJpYWxncmFtbWlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIGlmICh0aGlzLnRhc2tUeXBlICE9IFwibGlua1wiKSB7XG4gICAgICB0aGlzLnJvdXRlID0gW1wiXCJdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlID0gdGhpcy50YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNFeHRlcm5hbExpbmsgJiYgdGhpcy50YXNrVHlwZSA9PSBcImxpbmtcIikge1xuICAgICAgdGhpcy5idXR0b25UeXBlID0gXCJleHRlcm5hbFwiO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNFeHRlcm5hbExpbmsgJiYgdGhpcy50YXNrVHlwZSA9PSBcImxpbmtcIikge1xuICAgICAgdGhpcy5idXR0b25UeXBlID0gXCJpbnRlcm5hbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvblR5cGUgPSBcIndpZGdldFwiO1xuICAgIH1cblxuICB9XG5cbiAgaXNDbGlja2VkKCkge1xuICAgIHRoaXMuY2xpY2tlZC5lbWl0KHRydWUpO1xuICAgIGlmICh0aGlzLnRhc2tUeXBlID09IFwibW9kYWxcIikge1xuICAgICAgdGhpcy5tb2RhbCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXNrVHlwZSA9PSBcIm9mZkNhbnZhc1wiKSB7XG4gICAgICB0aGlzLm9mZkNhbnZhcygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXNrVHlwZSA9PSBcInNsaWRlU2hvd1wiKSB7XG4gICAgICB0aGlzLnNsaWRlU2hvdygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXNrVHlwZSA9PSBcIndpemFyZFwiKSB7XG4gICAgICB0aGlzLndpemFyZCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXNrVHlwZSA9PSBcImNvbGxhcHNlXCIpIHtcbiAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFza1R5cGUgPT0gXCJvdmVybGF5XCIpIHtcbiAgICAgIHRoaXMub3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGJ0bkNsYXNzZXMoKSB7XG4gICAgdGhpcy5idXR0b25DbGFzc2VzID0gdGhpcy5jbGFzcyArIFwiIFwiICsgdGhpcy50aGVtZTtcblxuICAgIHRoaXMuYnV0dG9uQ2xhc3NlcyArPSBgICR7dGhpcy5idG5TaXplfWA7XG5cbiAgICB0aGlzLmJ1dHRvbkNsYXNzZXMgKz0gdGhpcy5zaHJpbmsgPyBcIiBzaHJpbmtcIiA6IFwiXCJcblxuICAgIHRoaXMuYnV0dG9uQ2xhc3NlcyArPSB0aGlzLmlzQmxvY2sgPyBgIGJ0bi1ibG9ja2AgOiBgYDtcblxuICAgIHRoaXMuYnV0dG9uQ2xhc3NlcyArPSB0aGlzLmJ0blN0eWxlID09IFwibGlua1wiID8gXCIgbGlua1wiIDogKHRoaXMuYnRuU3R5bGUgPT0gXCJvdXRsaW5lXCIgPyBcIiBidG4tb3V0bGluZVwiIDogXCJcIik7XG5cbiAgICB0aGlzLmJ1dHRvbkNsYXNzZXMgKz0gdGhpcy5yb3VuZCA/IFwiIHJhZGl1cy01XCIgOiBcIlwiO1xuICAgIHRoaXMuYnV0dG9uQ2xhc3NlcyArPSB0aGlzLmFsbG93TWFyZ2luID8gXCIgbWFyZ2luUi01XCIgOiBcIlwiO1xuXG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uQ2xhc3NlcztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGlmICh0aGlzLnRhc2sgPT0gXCJvcGVuXCIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5vcGVuQ29sbGFwc2UodGhpcy50YXJnZXQpO1xuICAgICAgdGhpcy5hY3RpdmUuZW1pdCh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFzayA9PSBcImNsb3NlXCIpIHtcbiAgICAgIHRoaXMuc2VydmljZS5jbG9zZUNvbGxhcHNlKHRoaXMudGFyZ2V0KTtcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHdpemFyZCgpIHtcbiAgICBpZiAodGhpcy50YXNrID09IFwibmV4dFwiKSB7XG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzZXMgKz0gdGhpcy5vcHRpb25zLm5leHQgJiYgIXRoaXMuYnV0dG9uQ2xhc3Nlcy5pbmNsdWRlcyhcImRpc2FibGVcIikgPyBcIiBkaXNhYmxlXCIgOiBcIlwiO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5uZXh0KSB7XG4gICAgICAgIHRoaXMuc2VydmljZS53aXphcmROZXh0U3RlcCh0aGlzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhc2sgPT0gXCJwcmV2aW91c1wiKSB7XG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzZXMgKz0gdGhpcy5vcHRpb25zLnByZXZpb3VzICYmICF0aGlzLmJ1dHRvbkNsYXNzZXMuaW5jbHVkZXMoXCJkaXNhYmxlXCIpID8gXCIgZGlzYWJsZVwiIDogXCJcIjtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmlvdXMpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLldpemFyZFByZXZpb3VzU3RlcCh0aGlzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VFbnRlcigpIHtcbiAgICBpZiAodGhpcy50YXNrVHlwZSA9PSBcImRyb3Bkb3duXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidG8gdHJpZ2dlciBkcm9wZG93blwiKTtcbiAgICAgIHRoaXMuc2VydmljZS5vcGVuRHJvcERvd24odGhpcy50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5tb3VzZXVwKCk7XG4gICAgaWYgKHRoaXMudGFza1R5cGUgPT0gXCJkcm9wZG93blwiKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuY2xvc2VEcm9wRG93bih0aGlzLnRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVTaG93KCkge1xuICAgIGlmICh0aGlzLnRhc2sgPT0gXCJwbGF5XCIpIHtcbiAgICAgIC8vIHRoaXMuc2xpZGVTaG93U2VydmljZS5wbGF5KHRoaXMudGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFzayA9PSBcIm5leHRcIikge1xuICAgICAgLy8gdGhpcy5zbGlkZVNob3dTZXJ2aWNlLm5leHQodGhpcy50YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YXNrID09IFwicHJldmlvdXNcIikge1xuICAgICAgLy8gdGhpcy5zbGlkZVNob3dTZXJ2aWNlLnByZXZpb3VzKHRoaXMudGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5zbGlkZVNob3dTZXJ2aWNlLnBhdXNlKHRoaXMudGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICBtb2RhbCgpIHtcbiAgICBpZiAodGhpcy50YXNrID09IFwib3BlblwiKSB7XG4gICAgICB0aGlzLnNlcnZpY2Uub3Blbk1vZGFsKHRoaXMudGFyZ2V0KTtcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZS5jbG9zZU1vZGFsKHRoaXMudGFyZ2V0KTtcbiAgICAgIHRoaXMuYWN0aXZlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJsYXkoKSB7XG4gICAgaWYgKHRoaXMudGFzayA9PSBcIm9wZW5cIikge1xuICAgICAgY29uc29sZS5sb2coXCJvcGVuaW5nIHRhcmdldFwiLCB0aGlzLnRhcmdldCk7XG4gICAgICB0aGlzLnNlcnZpY2Uub3Blbk92ZXJsYXkodGhpcy50YXJnZXQpO1xuICAgICAgdGhpcy5hY3RpdmUuZW1pdCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2aWNlLmNsb3NlT3ZlcmxheSh0aGlzLnRhcmdldCk7XG4gICAgICB0aGlzLmFjdGl2ZS5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBvZmZDYW52YXMoKSB7XG4gICAgY29uc29sZS5sb2coXCJUYXNrIHR5cGUgaXMgb2ZmY2FudmFzXCIpO1xuICAgIGlmICh0aGlzLnRhc2sgPT0gXCJvcGVuXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib3BlbmluZyB0YXJnZXRcIiwgdGhpcy50YXJnZXQpO1xuICAgICAgdGhpcy5zZXJ2aWNlLm9wZW5DYW52YXModGhpcy50YXJnZXQpO1xuICAgICAgdGhpcy5hY3RpdmUuZW1pdCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJDbG9zaW5nIHRoZSBjYW52YXNcIik7XG4gICAgICB0aGlzLnNlcnZpY2UuY2xvc2VDYW52YXModGhpcy50YXJnZXQpO1xuICAgICAgdGhpcy5hY3RpdmUuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2Vkb3duKCkge1xuICAgIGlmICh0aGlzLmFsbG93U2hyaW5rKSB7XG4gICAgICB0aGlzLnNocmluayA9IHRydWU7XG4gICAgfVxuXG4gIH1cblxuICBtb3VzZXVwKCkge1xuICAgIGlmICh0aGlzLmFsbG93U2hyaW5rKSB7XG4gICAgICB0aGlzLnNocmluayA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uVHlwZSA9PSAnZXh0ZXJuYWwnXCI+XG4gIDxhIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cImlzQ2xpY2tlZCgpXCIgKG1vdXNlZW50ZXIpPVwibW91c2VFbnRlcigpXCIgKG1vdXNlbGVhdmUpPVwibW91c2VMZWF2ZSgpXCJcbiAgW25nQ2xhc3NdPVwiYnRuQ2xhc3NlcygpXCIgW2hyZWZdPVwicm91dGVcIiBbdGFyZ2V0XT1cIm5ld1RhYiA/ICdfYmxhbmsnIDogJ19zZWxmJ1wiXG4gIChtb3VzZWRvd24pPVwibW91c2Vkb3duKClcIiAobW91c2V1cCk9XCJtb3VzZXVwKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibXljb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIDwvYT5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uVHlwZSA9PSAnaW50ZXJuYWwnXCI+XG4gIDxhIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cImlzQ2xpY2tlZCgpXCIgKG1vdXNlZW50ZXIpPVwibW91c2VFbnRlcigpXCJcbiAgKG1vdXNlbGVhdmUpPVwibW91c2VMZWF2ZSgpXCIgW25nQ2xhc3NdPVwiYnRuQ2xhc3NlcygpXCIgW3JvdXRlckxpbmtdPVwicm91dGVcIlxuICAobW91c2Vkb3duKT1cIm1vdXNlZG93bigpXCIgKG1vdXNldXApPVwibW91c2V1cCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm15Y29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICA8L2E+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImJ1dHRvblR5cGUgPT0gJ3dpZGdldCdcIj5cbiAgPGEgY2xhc3M9XCJidG5cIiAoY2xpY2spPVwiaXNDbGlja2VkKClcIiAobW91c2VlbnRlcik9XCJtb3VzZUVudGVyKClcIiAobW91c2VsZWF2ZSk9XCJtb3VzZUxlYXZlKClcIlxuICBbbmdDbGFzc109XCJidG5DbGFzc2VzKClcIlxuICAobW91c2Vkb3duKT1cIm1vdXNlZG93bigpXCIgKG1vdXNldXApPVwibW91c2V1cCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm15Y29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICA8L2E+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNteWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=