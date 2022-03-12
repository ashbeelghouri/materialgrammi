import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, ViewChild, HostListener, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';

;
;
;
;
class MaterialgrammiService {
    constructor() {
        this.widgets = [];
        this.collapse = [];
        this.dropdown = [];
        this.megamenu = [];
        this.modal = [];
        this.overlay = [];
        this.wizard = [];
        this.slideshow = [];
        this.offcanvas = [];
        this.tab = [];
    }
    makeid(length, str) {
        str = typeof str == "string" ? str.split(" ").join("") : str;
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOP+QRSTUVWXYZabcdefgh_ijklmnopqrst=uvwxyz0123456789-';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result + '-' + str;
    }
    registerTab(id, components, active) {
        this.tab[id] = {
            components,
            active: new BehaviorSubject(active)
        };
        for (let i = 0; i < components.length; i++) {
            this.registerWidget(components[i], "tab", id);
        }
        this.openTab(id, components[0]);
    }
    openTab(id, component_id) {
        this.closeAllTab(id);
        this.openWidget(component_id, "tab", id);
        this.tab[id].active.next(component_id);
    }
    closeAllTab(id) {
        if (this.tab && this.tab[id]) {
            for (let i = 0; i < this.tab[id].components.length; i++) {
                this.closeWidget(this.tab[id].components[i], "tab", id);
            }
        }
    }
    watchTab(id) {
        return this.tab[id].active.asObservable();
    }
    registerOffCanvas(id, status) {
        this.offcanvas[id] = {
            id,
            status: new BehaviorSubject(status)
        };
    }
    openCanvas(id) {
        this.offcanvas[id].status.next(true);
    }
    closeCanvas(id) {
        console.log("ID to be closed? ", id, "canvas ==> ", this.offcanvas[id]);
        this.offcanvas[id].status.next(false);
    }
    watchCanvas(id) {
        return this.offcanvas[id].status.asObservable();
    }
    registerSlideshow(id, activePage, play, next, previous, playInterval, timer) {
        var obj = {
            id,
            playInterval,
            timer,
            next: new BehaviorSubject(next),
            previous: new BehaviorSubject(previous),
            active: new BehaviorSubject(activePage),
            play: new BehaviorSubject(play)
        };
        this.slideshow[id] = obj;
    }
    watchSlideshowPlay(id) {
        return this.slideshow[id].play.asObservable();
    }
    watchSlideshowNext(id) {
        return this.slideshow[id].next.asObservable();
    }
    watchSlideshowPrevious(id) {
        return this.slideshow[id].previous.asObservable();
    }
    watchSlideshowActivePage(id) {
        return this.slideshow[id].active.asObservable();
    }
    nextSlide(id) {
        this.slideshow[id].next.next(true);
    }
    previousSlide(id) {
        this.slideshow[id].previous.next(true);
    }
    changeSlidePlay(id, play) {
        this.slideshow[id].play.next(play);
    }
    changeSlideActivePage(id, activePage) {
        this.slideshow[id].active.next(activePage);
    }
    playSlideShow(id) {
        var selected = this.slideshow[id];
        if (selected) {
            if (selected.playInterval) {
                this.pauseSlideshow(id);
            }
            selected.play.next(true);
            var _this = this;
            this.nextSlide(id);
            selected.playInterval = setInterval(() => {
                _this.nextSlide(id);
            }, selected.timer);
        }
    }
    pauseSlideshow(id) {
        var selected = this.slideshow[id];
        if (selected && selected.playInterval) {
            clearInterval(selected.playInterval);
            selected.playInterval = false;
        }
    }
    registerWizard(wizardId, components, active = 0) {
        let next = {};
        let prev = {};
        if (components[active]) {
            next = {
                index: components && components[active + 1] ? active + 1 : active,
                id: components && components[active + 1] ? components[active + 1] : components[active]
            };
            prev = {
                index: components && components[active - 1] ? active - 1 : active,
                id: components && components[active - 1] ? components[active - 1] : components[active]
            };
        }
        else {
            // defaults
            active = 0;
            next = {
                index: components && components[1] ? 1 : 0,
                id: components && components[1] ? components[1] : components[0]
            };
            prev = {
                index: 0,
                id: components[0]
            };
        }
        this.wizard[wizardId] = {
            active: new BehaviorSubject(0),
            on: active,
            completed: new BehaviorSubject(false),
            next,
            prev,
            components
        };
        for (let i = 0; i < components.length; i++) {
            this.registerWidget(components[i], "wizard", wizardId);
        }
        this.openWidget(components[0], "wizard", wizardId);
    }
    wizardNextStep(wizardId) {
        let activateIndex = this.wizard[wizardId].on + 1;
        this.activateWizardStep(wizardId, activateIndex);
    }
    WizardPreviousStep(wizardId) {
        let activateIndex = this.wizard[wizardId].on - 1;
        this.activateWizardStep(wizardId, activateIndex);
    }
    WizardCloseAll(wizardId) {
        if (this.wizard[wizardId] && this.wizard[wizardId].components) {
            for (let i = 0; i < this.wizard[wizardId].components.length; i++) {
                this.closeWidget(this.wizard[wizardId].components[i], "wizard", wizardId);
            }
        }
    }
    activateWizardStep(wizardId, index) {
        if (this.wizard[wizardId].components[index]) {
            if (index >= this.wizard[wizardId].components.length - 1) {
                this.isWizardComplete(wizardId);
            }
            else {
                this.isWizardNotComplete(wizardId);
            }
            this.wizard[wizardId].on = index;
            this.wizard[wizardId].prev.index = this.wizard[wizardId].components[index - 1] ? index - 1 : index;
            this.wizard[wizardId].next.index = this.wizard[wizardId].components[index + 1] ? index + 1 : index;
            this.wizard[wizardId].prev.id = this.wizard[wizardId].components[index - 1] ?
                this.wizard[wizardId].components[index - 1] : this.wizard[wizardId].components[index];
            this.wizard[wizardId].next.id = this.wizard[wizardId].components[index + 1] ?
                this.wizard[wizardId].components[index + 1] : this.wizard[wizardId].components[index];
            ;
            this.WizardCloseAll(wizardId);
            this.openWidget(this.wizard[wizardId].components[index], "wizard", wizardId);
            this.watchWidget(this.wizard[wizardId].components[index], "wizard", wizardId).subscribe((data) => {
                if (data) {
                    this.wizard[wizardId].active.next(index);
                }
            });
        }
    }
    isWizardComplete(wizardId) {
        this.wizard[wizardId].completed.next(true);
    }
    isWizardNotComplete(wizardId) {
        this.wizard[wizardId].completed.next(false);
    }
    watchWizardActive(wizardId) {
        return this.wizard[wizardId].active.asObservable();
    }
    watchWizardCompleted(wizardId) {
        return this.wizard[wizardId].completed.asObservable();
    }
    registerOverlay(id, status) {
        this.overlay[id] = {
            id,
            status: new BehaviorSubject(status)
        };
    }
    openOverlay(id) {
        console.log("Overlay?", this.overlay);
        this.overlay[id].status.next(true);
    }
    closeOverlay(id) {
        this.overlay[id].status.next(false);
    }
    watchOverlay(id) {
        return this.overlay[id].status.asObservable();
    }
    registerModal(id, status) {
        this.modal[id] = {
            id,
            status: new BehaviorSubject(status)
        };
    }
    openModal(id) {
        this.modal[id].status.next(true);
    }
    closeModal(id) {
        this.modal[id].status.next(false);
    }
    watchModal(id) {
        return this.modal[id].status.asObservable();
    }
    registerDropDown(id, status) {
        this.dropdown[id] = {
            id,
            status: new BehaviorSubject(status)
        };
    }
    openDropDown(id) {
        this.dropdown[id].status.next(true);
    }
    closeDropDown(id) {
        this.dropdown[id].status.next(false);
    }
    watchDropDown(id) {
        return this.dropdown[id].status.asObservable();
    }
    registerCollapse(id, status) {
        this.collapse[id] = {
            id,
            status: new BehaviorSubject(status)
        };
    }
    openCollapse(id) {
        this.collapse[id].status.next(true);
    }
    closeCollapse(id) {
        this.collapse[id].status.next(false);
    }
    watchCollapse(id) {
        return this.collapse[id].status.asObservable();
    }
    getWidgetId(id, type, parent_id) {
        return id + '_' + type + '_' + parent_id;
    }
    widgetExists(id, parent_type, parent_id) {
        return this.widgets[this.getWidgetId(id, parent_type, parent_id)] ? true : false;
    }
    registerWidget(id, parent_type, parent_id, options = {}) {
        let mywidgetid = this.getWidgetId(id, parent_type, parent_id);
        this.widgets[mywidgetid] = {
            id,
            type: parent_type,
            parent_id: parent_id,
            options: new BehaviorSubject(options),
            status: new BehaviorSubject(false)
        };
    }
    openWidget(id, parent_type, parent_id) {
        let mywidgetid = this.getWidgetId(id, parent_type, parent_id);
        if (this.widgets && this.widgets[mywidgetid]) {
            this.widgets[mywidgetid].status.next(true);
        }
    }
    closeWidget(id, parent_type, parent_id) {
        let mywidgetid = this.getWidgetId(id, parent_type, parent_id);
        if (this.widgets && this.widgets[mywidgetid]) {
            this.widgets[mywidgetid].status.next(false);
        }
    }
    closeAllParentWidgets(parent_type, parent_id) {
        let allWidgetIds = Object.keys(this.widgets);
        for (let i = 0; i < allWidgetIds.length; i++) {
            if (this.widgets[allWidgetIds[i]].type == parent_type && this.widgets[allWidgetIds[i]].parent_id == parent_id) {
                this.closeWidget(this.widgets[allWidgetIds[i]].id, parent_type, parent_id);
            }
        }
    }
    watchWidget(id, parent_type, parent_id) {
        return this.widgets[this.getWidgetId(id, parent_type, parent_id)].status.asObservable();
    }
    watchOptions(id, parent_type, parent_id) {
        return this.widgets[this.getWidgetId(id, parent_type, parent_id)].options.asObservable();
    }
    registerMegaMenu(id, links) {
        this.megamenu[id] = {
            id,
            active: new BehaviorSubject("")
        };
        for (let i = 0; i < links.length; i++) {
            this.registerWidget(links[i], "megamenu", id);
        }
    }
    watchMegaMenu(id) {
        return this.megamenu[id].active.asObservable();
    }
    openMegaMenu(id, targetid) {
        this.megamenu[id].active.next(targetid);
        if (this.widgetExists(targetid, "megamenu", id)) {
            this.closeMegaMenu(id);
            this.openWidget(targetid, "megamenu", id);
        }
    }
    closeMegaMenu(id) {
        this.closeAllParentWidgets("megamenu", id);
        this.megamenu[id].active.next(false);
    }
    fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
    copyToClipboard(text) {
        if (!navigator.clipboard) {
            this.fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
}
MaterialgrammiService.ɵfac = function MaterialgrammiService_Factory(t) { return new (t || MaterialgrammiService)(); };
MaterialgrammiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MaterialgrammiService, factory: MaterialgrammiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialgrammiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MaterialgrammiComponent {
    constructor() { }
    ngOnInit() {
    }
}
MaterialgrammiComponent.ɵfac = function MaterialgrammiComponent_Factory(t) { return new (t || MaterialgrammiComponent)(); };
MaterialgrammiComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MaterialgrammiComponent, selectors: [["lib-materialgrammi"]], decls: 2, vars: 0, template: function MaterialgrammiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " materialgrammi works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialgrammiComponent, [{
        type: Component,
        args: [{
                selector: 'lib-materialgrammi',
                template: `
    <p>
      materialgrammi works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

const _c0$q = ["*"];
class TestComponentComponent {
    constructor(myservice) {
        this.myservice = myservice;
        this.widgetID = "widget";
    }
    ngOnInit() {
    }
}
TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
TestComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TestComponentComponent, selectors: [["lib-test"]], ngContentSelectors: _c0$q, decls: 2, vars: 0, consts: [[2, "padding", "5px", "border", "1px solid #212121", "cursor", "pointer"]], template: function TestComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TestComponentComponent, [{
        type: Component,
        args: [{ selector: 'lib-test', template: "<a style=\"padding: 5px; border: 1px solid #212121; cursor: pointer;\"><ng-content></ng-content></a>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, null); })();

class AccordionItemComponent {
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
class AccordionComponent {
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
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, AccordionItemComponent], styles: [""] });
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

function WidgetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function WidgetComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function WidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementContainerEnd();
} }
const _c0$p = [[["", "mg-data", "header"]], "*", [["", "mg-data", "footer"]]];
const _c1$5 = ["[mg-data=header]", "*", "[mg-data=footer]"];
class WidgetComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.id = "general-widget-1";
        this.parent = "general-parent-1";
        this.type = "general";
        this.options = false;
        this.status = false;
        this.standalone = false;
        this.triggered = new EventEmitter();
        this.settings = {
            header: {
                always: false
            },
            footer: {
                always: false
            }
        };
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges() {
        this.init();
    }
    init() {
        if (this.standalone) {
            this.registerWidget();
            if (this.status) {
                this.openWidget();
            }
            else {
                this.closeWidget();
            }
        }
        this.watch();
        this.watchOptions();
    }
    setOptions() {
        if (this.options && this.options.header.always) {
            this.settings.header.always = true;
        }
        if (this.options && this.options.footer.always) {
            this.settings.footer.always = true;
        }
    }
    registerWidget() {
        this.mainService.registerWidget(this.id, this.type, this.parent, this.options);
        if (this.status) {
            this.openWidget();
        }
    }
    openWidget() {
        this.mainService.openWidget(this.id, this.type, this.parent);
    }
    closeWidget() {
        this.mainService.closeWidget(this.id, this.type, this.parent);
    }
    watch() {
        if (this.mainService.widgetExists(this.id, this.type, this.parent)) {
            this.mainService.watchWidget(this.id, this.type, this.parent).subscribe((data) => {
                this.status = data;
                this.triggered.emit({
                    status: this.status,
                    options: this.options
                });
            });
        }
    }
    watchOptions() {
        if (this.mainService.widgetExists(this.id, this.type, this.parent)) {
            this.mainService.watchWidget(this.id, this.type, this.parent).subscribe((data) => {
                this.options = data;
            });
        }
    }
}
WidgetComponent.ɵfac = function WidgetComponent_Factory(t) { return new (t || WidgetComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
WidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetComponent, selectors: [["mg-widget"]], inputs: { id: "id", parent: "parent", type: "type", options: "options", status: "status", standalone: "standalone" }, outputs: { triggered: "triggered" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1$5, decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$p);
        i0.ɵɵtemplate(0, WidgetComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, WidgetComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(2, WidgetComponent_ng_container_2_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.settings.header.always || ctx.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.settings.footer.always || ctx.status);
    } }, directives: [i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetComponent, [{
        type: Component,
        args: [{ selector: 'mg-widget', template: "<ng-container *ngIf=\"settings.header.always || status\">\n  <ng-content select=\"[mg-data=header]\"></ng-content>\n</ng-container>\n<ng-container *ngIf=\"status\">\n  <ng-content></ng-content>\n</ng-container>\n<ng-container *ngIf=\"settings.footer.always || status\">\n  <ng-content select=\"[mg-data=footer]\"></ng-content>\n</ng-container>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { id: [{
            type: Input
        }], parent: [{
            type: Input
        }], type: [{
            type: Input
        }], options: [{
            type: Input
        }], status: [{
            type: Input
        }], standalone: [{
            type: Input
        }], triggered: [{
            type: Output
        }] }); })();

function AlertComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function AlertComponent_div_0_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(2); return ctx_r2.hide(); });
    i0.ɵɵtext(1, "x");
    i0.ɵɵelementEnd();
} }
const _c0$o = function (a0) { return { "text-center block": a0 }; };
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_div_0_a_1_Template, 2, 0, "a", 2);
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("alert ", ctx_r0.theme, "");
    i0.ɵɵproperty("ngClass", ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.closeBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$o, ctx_r0.alignCenter === true));
} }
const _c1$4 = ["*"];
class AlertComponent {
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
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["mg-alert"]], inputs: { theme: "theme", show: "show", alignCenter: "alignCenter", closeBtn: "closeBtn", class: "class" }, ngContentSelectors: _c1$4, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "closealert", 3, "click", 4, "ngIf"], [1, "closealert", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 4, 8, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [i1.NgIf, i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{ selector: 'mg-alert', template: "<div class=\"alert {{theme}}\" *ngIf=\"show\" [ngClass]=\"class\">\n  <a class=\"closealert\" (click)=\"hide()\" *ngIf=\"closeBtn\">x</a>\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], show: [{
            type: Input
        }], alignCenter: [{
            type: Input
        }], closeBtn: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

function BreadcrumbComponent_div_0_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHtml", ctx_r4.devider, i0.ɵɵsanitizeHtml);
} }
function BreadcrumbComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BreadcrumbComponent_div_0_ng_container_1_span_3_Template, 1, 1, "span", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", link_r2.url)("ngClass", ctx_r1.active(link_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r2.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.links[i_r3 + 1]);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, BreadcrumbComponent_div_0_ng_container_1_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.showDarkMode() + " " + ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.links);
} }
class BreadcrumbComponent {
    constructor() {
        this.links = [];
        this.darkmode = false;
        this.devider = "/";
        this.class = "";
    }
    ngOnInit() {
    }
    showDarkMode() {
        return this.darkmode ? "dark" : "lite";
    }
    active(link) {
        return link.active ? 'active' : '';
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["mg-breadcrumb"]], inputs: { links: "links", darkmode: "darkmode", devider: "devider", class: "class" }, decls: 1, vars: 1, consts: [["class", "breadcrumb-wrapper", 3, "ngClass", 4, "ngIf"], [1, "breadcrumb-wrapper", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "breadcrumb", 3, "routerLink", "ngClass"], ["class", "marginL-5 marginR-5", 3, "innerHtml", 4, "ngIf"], [1, "marginL-5", "marginR-5", 3, "innerHtml"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BreadcrumbComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.links.length > 0);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.RouterLinkWithHref], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'mg-breadcrumb', template: "<div class=\"breadcrumb-wrapper\" [ngClass]=\"showDarkMode() + ' ' + class\" *ngIf=\"links.length > 0\">\n  <ng-container *ngFor=\"let link of links; let i = index;\">\n    <a [routerLink]=\"link.url\" class=\"breadcrumb\" [ngClass]=\"active(link)\">{{link.name}}</a>\n    <span class=\"marginL-5 marginR-5\" *ngIf=\"links[i+1]\" [innerHtml]=\"devider\"></span>\n  </ng-container>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { links: [{
            type: Input
        }], darkmode: [{
            type: Input
        }], devider: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

const _c0$n = [[["", "header", ""]], "*", [["", "footer", ""]]];
const _c1$3 = ["[header]", "*", "[footer]"];
class CardComponent {
    constructor() {
        this.class = ``;
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["mg-card"]], inputs: { class: "class" }, ngContentSelectors: _c1$3, decls: 4, vars: 1, consts: [[1, "card", 3, "ngClass"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$n);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵprojection(2, 1);
        i0.ɵɵprojection(3, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'mg-card', template: "<div class=\"card\" [ngClass]=\"class\">\n  <ng-content select=\"[header]\"></ng-content>\n  <ng-content></ng-content>\n  <ng-content select=\"[footer]\"></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { class: [{
            type: Input
        }] }); })();

const _c0$m = ["*"];
class ChipComponent {
    constructor() {
        this.theme = "dark";
        this.outline = false;
        this.class = "";
    }
    ngOnInit() {
    }
    chipClass() {
        let results = "";
        results += this.theme;
        results += this.outline ? " outlined" : "";
        return results;
    }
}
ChipComponent.ɵfac = function ChipComponent_Factory(t) { return new (t || ChipComponent)(); };
ChipComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipComponent, selectors: [["mg-chip"]], inputs: { theme: "theme", outline: "outline", class: "class" }, ngContentSelectors: _c0$m, decls: 2, vars: 1, consts: [[1, "chip", 3, "ngClass"]], template: function ChipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.chipClass() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipComponent, [{
        type: Component,
        args: [{ selector: 'mg-chip', template: "<div class=\"chip\" [ngClass]=\"chipClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], outline: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

const _c0$l = ["*"];
class DragableComponent {
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
DragableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragableComponent, selectors: [["mg-dragable"]], inputs: { dragable: "dragable", data: "data", class: "class" }, outputs: { onEvent: "onEvent" }, ngContentSelectors: _c0$l, decls: 4, vars: 2, consts: [[3, "ngClass"], [1, "is-draggable", 3, "draggable", "drag", "dragstart"], [1, "drag-element"]], template: function DragableComponent_Template(rf, ctx) { if (rf & 1) {
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

const _c0$k = ["*"];
class DropableComponent {
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
DropableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropableComponent, selectors: [["mg-dropable"]], inputs: { dropFiles: "dropFiles", class: "class" }, outputs: { onEvent: "onEvent", dataRecieved: "dataRecieved" }, ngContentSelectors: _c0$k, decls: 2, vars: 1, consts: [[3, "ngClass", "dragenter", "dragleave", "dragover", "drop"]], template: function DropableComponent_Template(rf, ctx) { if (rf & 1) {
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

const _c0$j = [[["", "slot", "left-section"]], [["", "slot", "middle-section"]], [["", "slot", "right-section"]], [["", "slot", "left-bottom-section"]], [["", "slot", "right-bottom-section"]]];
const _c1$2 = ["[slot=left-section]", "[slot=middle-section]", "[slot=right-section]", "[slot=left-bottom-section]", "[slot=right-bottom-section]"];
class FooterComponent {
    constructor() {
        this.theme = "success";
        this.toBottom = false;
        this.class = "";
    }
    ngOnInit() {
    }
    mainFooterClasses() {
        let results = "";
        results += this.theme;
        results += this.toBottom ? " stick-to-bottom" : "";
        return results;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["mg-footer"]], inputs: { theme: "theme", toBottom: "toBottom", class: "class" }, ngContentSelectors: _c1$2, decls: 13, vars: 1, consts: [[1, "footer", 3, "ngClass"], [1, "section-top"], [1, "left-section"], [1, "middle-section"], [1, "right-section"], [1, "section-bottom"], [1, "left-bottom-section"], [1, "right-bottom-section"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$j);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵprojection(7, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵprojection(10, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵprojection(12, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainFooterClasses() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'mg-footer', template: "<div class=\"footer\" [ngClass]=\"mainFooterClasses() + ' ' + class\">\n  <div class=\"section-top\">\n    <div class=\"left-section\">\n      <ng-content select=\"[slot=left-section]\"></ng-content>\n    </div>\n    <div class=\"middle-section\">\n      <ng-content select=\"[slot=middle-section]\"></ng-content>\n    </div>\n    <div class=\"right-section\">\n      <ng-content select=\"[slot=right-section]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"section-bottom\">\n    <div class=\"left-bottom-section\">\n      <ng-content select=\"[slot=left-bottom-section]\"></ng-content>\n    </div>\n    <div class=\"right-bottom-section\">\n      <ng-content select=\"[slot=right-bottom-section]\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], toBottom: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

const _c0$i = ["*"];
class CheckboxComponent {
    constructor(service) {
        this.service = service;
        this.size = "m";
        this.theme = "info";
        this.onDark = false;
        this.isSelected = false;
        this.class = "";
        this.isChecked = new EventEmitter();
        this.id = "";
        this.selected = this.isSelected;
    }
    ngOnInit() {
        this.isChecked.emit(this.selected);
        this.selected = this.isSelected;
        this.id = "input-checkbox-" + this.service.makeid(10, "checkbox");
    }
    mainClasses() {
        let results = "";
        results += this.size == "s" ? "small" : this.size == "m" ? "medium" : "large";
        results += " " + this.theme;
        return results;
    }
    labelClass() {
        let results = "";
        results += this.onDark ? "lite" : "dark";
        results += this.selected ? " active" : "";
        return results;
    }
    toggleCheck() {
        this.selected = !this.selected;
        this.isChecked.emit(this.selected);
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["mg-checkbox"]], inputs: { size: "size", theme: "theme", onDark: "onDark", isSelected: "isSelected", class: "class" }, outputs: { isChecked: "isChecked" }, ngContentSelectors: _c0$i, decls: 5, vars: 6, consts: [[1, "checkbox", 3, "ngClass"], ["type", "checkbox", 2, "opacity", "0", "position", "absolute", 3, "id", "checked"], [1, "check", 3, "for", "click"], [1, "label", 3, "for", "ngClass", "click"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵlistener("click", function CheckboxComponent_Template_label_click_2_listener() { return ctx.toggleCheck(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label", 3);
        i0.ɵɵlistener("click", function CheckboxComponent_Template_label_click_3_listener() { return ctx.toggleCheck(); });
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses() + " " + ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id)("checked", ctx.isSelected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", ctx.id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", ctx.id)("ngClass", ctx.labelClass());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mg-checkbox', template: "<div class=\"checkbox\" [ngClass]=\"mainClasses() + ' ' + class\">\n  <input [id]=\"id\" type=\"checkbox\" [checked]=\"isSelected\" style=\"opacity: 0; position: absolute;\"/>\n  <label class=\"check\" [for]=\"id\" (click)=\"toggleCheck()\"></label>\n  <label class=\"label\" [for]=\"id\" [ngClass]=\"labelClass()\"\n    (click)=\"toggleCheck()\"><ng-content></ng-content></label>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { size: [{
            type: Input
        }], theme: [{
            type: Input
        }], onDark: [{
            type: Input
        }], isSelected: [{
            type: Input
        }], class: [{
            type: Input
        }], isChecked: [{
            type: Output
        }] }); })();

const _c0$h = ["inputElement"];
function InputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 4);
    i0.ɵɵlistener("click", function InputComponent_ng_container_1_Template_label_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.labelClick(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r0.label, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.fStyle == "control" && ctx_r0.active ? "marginL-10" : "");
} }
class InputComponent {
    constructor() {
        this.theme = "success";
        this.fStyle = "control";
        // control | material
        this.label = "Input Value";
        this.placeholder = "";
        this.control = new FormControl('');
        this.type = "text";
        this.onDark = false;
        this.class = "";
        this.value = new EventEmitter();
        this.isFocused = new EventEmitter();
        this.keyup = new EventEmitter();
        this.textValue = "";
        this.rounded = true;
        this.active = false;
        this.focused = false;
        this.input_placeholder = this.fStyle == "control" && this.placeholder != "" ? this.placeholder : "";
    }
    ngOnInit() {
        this.input_placeholder = this.fStyle == "control" && this.placeholder != "" ? this.placeholder : "";
        if (this.textValue != "") {
            this.active = true;
        }
    }
    onFocusIn() {
        this.focused = true;
        this.active = true;
        this.isFocused.emit(true);
    }
    onFocusOut() {
        this.focused = false;
        if (!(this.textValue.length > 0)) {
            this.active = false;
        }
        this.isFocused.emit(false);
    }
    onKeyUp(event) {
        this.textValue = event.target.value;
        this.control.setValue(event.target.value);
        this.keyup.emit(event);
        this.value.emit(this.control);
    }
    mainClasses() {
        let classes = ``;
        classes += ` ${this.active ? 'active' : ''}`;
        classes += this.onDark ? " on-dark" : " on-lite";
        return classes;
    }
    labelClick() {
        this.inputElem.nativeElement.focus();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["mg-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$h, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElem = _t.first);
    } }, inputs: { theme: "theme", fStyle: "fStyle", label: "label", placeholder: "placeholder", control: "control", type: "type", onDark: "onDark", class: "class", textValue: "textValue", rounded: "rounded" }, outputs: { value: "value", isFocused: "isFocused", keyup: "keyup" }, decls: 4, vars: 10, consts: [[3, "ngClass"], [4, "ngIf"], [3, "type", "value", "ngClass", "placeholder", "focus", "focusout", "keyup"], ["inputElement", ""], [3, "innerHtml", "ngClass", "click"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, InputComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementStart(2, "input", 2, 3);
        i0.ɵɵlistener("focus", function InputComponent_Template_input_focus_2_listener() { return ctx.onFocusIn(); })("focusout", function InputComponent_Template_input_focusout_2_listener() { return ctx.onFocusOut(); })("keyup", function InputComponent_Template_input_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("form-", ctx.fStyle, " ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label && ctx.label != "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("type", ctx.type)("value", ctx.textValue)("ngClass", ctx.class + (ctx.rounded ? "radius-5" : ""))("placeholder", ctx.input_placeholder);
    } }, directives: [i1.NgClass, i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{ selector: 'mg-input', template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <ng-container *ngIf=\"label && label!=''\">\n    <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && active ? 'marginL-10' : ''\"></label>\n  </ng-container>\n  <input #inputElement [type]=\"type\" (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\" [value]=\"textValue\" [ngClass]=\"class + (rounded ? 'radius-5' : '')\" [placeholder] = \"input_placeholder\"/>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], fStyle: [{
            type: Input
        }], label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], control: [{
            type: Input
        }], type: [{
            type: Input
        }], onDark: [{
            type: Input
        }], class: [{
            type: Input
        }], value: [{
            type: Output
        }], isFocused: [{
            type: Output
        }], keyup: [{
            type: Output
        }], textValue: [{
            type: Input
        }], rounded: [{
            type: Input
        }], inputElem: [{
            type: ViewChild,
            args: ['inputElement']
        }] }); })();

class DaterService {
    constructor() {
        this.now = new Date();
        this.months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.weekDays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
    }
    assign(dateString) {
        return new Date(dateString);
    }
    dater(dd = false) {
        return !dd ? new Date() : new Date(dd);
    }
    getMonth(date = this.dater()) {
        return date.getMonth();
    }
    getDate(date = this.dater()) {
        return date.getDate();
    }
    getYear(date = this.dater()) {
        return date.getFullYear();
    }
    getDay(date = this.dater()) {
        return date.getDay();
    }
    getWeekDay(date = this.dater()) {
        return this.weekDays[date.getDay()];
    }
    getHour(date = this.dater()) {
        return date.getHours();
    }
    getMinute(date = this.dater()) {
        return date.getMinutes();
    }
    getSeconds(date = this.dater()) {
        return date.getSeconds();
    }
    format(date, formatString) {
        let splitter = this.splitDate(date);
        if (splitter && splitter.date !== undefined && splitter.day !== undefined
            && splitter.hour !== undefined && splitter.minute !== undefined
            && splitter.month !== undefined && splitter.second !== undefined && splitter.year !== undefined) {
            formatString = formatString.split("dd").join(this.addZero(splitter.date, 1));
            formatString = formatString.split("d").join(`${splitter.date}`);
            formatString = formatString.split("MMMM").join(this.months[splitter.month] ? this.months[splitter.month] : "");
            formatString = formatString.split("MMM").join(this.firstDigits(this.months[splitter.month] ? this.months[splitter.month] : ""));
            formatString = formatString.split("MM").join(this.addZero(splitter.month + 1, 1));
            formatString = formatString.split("M").join(`${splitter.month + 1}`);
            formatString = formatString.split("YYYY").join(`${splitter.year}`);
            formatString = formatString.split("YY").join(this.firstDigits(`${splitter.year}`, 2));
            formatString = formatString.split("yyyy").join(`${splitter.year}`);
            formatString = formatString.split("yy").join(this.firstDigits(`${splitter.year}`, 2));
            formatString = formatString.split("DD").join(`${splitter.day}`);
            formatString = formatString.split("D").join(this.firstDigits(`${splitter.day}`, 3));
            formatString = formatString.split("HH").join(this.addZero(splitter.hour, 1));
            formatString = formatString.split("H").join(`${splitter.hour}`);
            formatString = formatString.split("hh").join(`${this.twelveHour(splitter.hour, true)}`);
            formatString = formatString.split("h").join(`${this.twelveHour(splitter.hour, false)}`);
            formatString = formatString.split("mm").join(this.addZero(splitter.minute, 1));
            formatString = formatString.split("m").join(`${splitter.minute}`);
            formatString = formatString.split("ss").join(this.addZero(splitter.second, 1));
            formatString = formatString.split("s").join(`${splitter.second}`);
            formatString = formatString.split("AP").join(this.getAp(splitter.hour));
            formatString = formatString.split("ap").join(this.getAp(splitter.hour, true));
            return formatString;
        }
        return ``;
    }
    twelveHour(dd, addZ = false) {
        let d = dd > 12 ? (dd - 12) : dd;
        return addZ ? this.addZero(d, 1) : d;
    }
    getAp(dd, sm = false) {
        let ap = {
            a: sm ? "am" : "AM",
            p: sm ? "pm" : "PM"
        };
        return dd > 12 ? ap.p : ap.a;
    }
    firstDigits(str, num = 3) {
        let mystring = str.split("");
        let final = "";
        for (let i = 0; i < num; i++) {
            final += `${mystring[i]}`;
        }
        return final;
    }
    addZero(d, numZ = 1) {
        let conc = ``;
        for (let i = 0; i < numZ; i++) {
            conc += `0`;
        }
        if (d < 10) {
            return conc + d;
        }
        return `${d}`;
    }
    initializeSplit() {
        return this.dateSplit = {
            date: 0,
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
    }
    splitDate(date) {
        this.dateSplit = this.initializeSplit();
        this.dateSplit.date = date.getDate();
        this.dateSplit.year = date.getFullYear();
        this.dateSplit.month = date.getMonth();
        this.dateSplit.day = date.getDay();
        this.dateSplit.hour = date.getHours();
        this.dateSplit.minute = date.getMinutes();
        this.dateSplit.second = date.getSeconds();
        return this.dateSplit;
    }
    getMonths(month = false) {
        if (month == false) {
            let mo = this.months.map(m => {
                return m.slice(0, 3);
            });
            return mo;
        }
        else {
            return this.months[month].slice(0, 3);
        }
    }
    getMonthsLong(month = false) {
        return month ? this.months[month] : this.months;
    }
    daysInMonth(month, year = this.getYear(this.dater())) {
        let dd = this.splitDate(this.dater(`${this.months[month - 1]} 01, ${year}`));
        return new Date(dd.year, dd.month + 1, 0).getDate();
    }
    isGreater(date1, date2) {
        let d1 = new Date(date1);
        let d2 = new Date(date2);
        return d1.getTime() > d2.getTime();
    }
    isLessThan(date1, date2) {
        let d1 = new Date(date1);
        let d2 = new Date(date2);
        return d1.getTime() < d2.getTime();
    }
}
DaterService.ɵfac = function DaterService_Factory(t) { return new (t || DaterService)(); };
DaterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DaterService, factory: DaterService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DaterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0$g = ["*"];
class OverlayComponent {
    constructor(service) {
        this.service = service;
        this.bgClass = "grey1";
        this.overlayClass = "bg-b-3";
        this.offSize = "1";
        this.canvasPosition = "top";
        this.id = "1";
        this.active = false;
        this.isClosed = new EventEmitter();
    }
    ngOnInit() {
        this.service.registerOverlay(this.id, this.active);
        this.subscribe();
    }
    activator() {
        return this.active ? "active" : "";
    }
    subscribe() {
        this.service.watchOverlay(this.id).subscribe((data) => {
            this.active = data;
        });
    }
    mainClasses() {
        let classes = "";
        classes += ` ${this.activator()}`;
        classes += ` ${this.bgClass}`;
        return classes;
    }
    overlayClasses() {
        let classes = "";
        classes += this.active ? 'active' : '';
        classes += ` ${this.overlayClass}`;
        return classes;
    }
    close() {
        this.service.closeOverlay(this.id);
        this.isClosed.emit(true);
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
OverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["mg-overlay"]], inputs: { bgClass: "bgClass", overlayClass: "overlayClass", offSize: "offSize", canvasPosition: "canvasPosition", id: "id", active: "active" }, outputs: { isClosed: "isClosed" }, ngContentSelectors: _c0$g, decls: 3, vars: 6, consts: [[3, "ngClass"], [1, "off-overlay", "blur", 3, "ngClass", "click"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵlistener("click", function OverlayComponent_Template_div_click_2_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("overlay ", ctx.canvasPosition, " size-", ctx.offSize, "");
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.overlayClasses());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{ selector: 'mg-overlay', template: "<div class=\"overlay {{canvasPosition}} size-{{offSize}}\" [ngClass]=\"mainClasses()\">\n  <ng-content></ng-content>\n</div>\n<div (click)=\"close()\" class=\"off-overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { bgClass: [{
            type: Input
        }], overlayClass: [{
            type: Input
        }], offSize: [{
            type: Input
        }], canvasPosition: [{
            type: Input
        }], id: [{
            type: Input
        }], active: [{
            type: Input
        }], isClosed: [{
            type: Output
        }] }); })();

const _c0$f = ["inputElementText"];
class TextInputComponent {
    constructor() {
        this.theme = "dark";
        this.fStyle = "control";
        this.on_dark = false;
        this.label = "textarea input";
        this.control = new FormControl('');
        this.value = new EventEmitter();
        this.isFocused = new EventEmitter();
        this.keyup = new EventEmitter();
        this.active = false;
        this.textValue = "";
        this.focused = false;
    }
    ngOnInit() {
    }
    onFocusIn() {
        this.active = true;
        this.focused = true;
        this.isFocused.emit(this.active);
    }
    onFocusOut() {
        this.focused = false;
        if (!(this.textValue.length > 0)) {
            this.active = false;
        }
        this.isFocused.emit(this.active);
    }
    onKeyUp(event) {
        this.textValue = event.target.value;
        this.control.setValue(event.target.value);
        this.keyup.emit(this.textValue);
        this.value.emit(this.control);
    }
    mainClasses() {
        let classes = ``;
        classes += ` ${this.active ? 'active' : ''}`;
        classes += this.on_dark ? " on-dark" : " on-lite";
        return classes;
    }
    labelClick() {
        this.inputElem.nativeElement.focus();
    }
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(); };
TextInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextInputComponent, selectors: [["mg-text"]], viewQuery: function TextInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$f, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElem = _t.first);
    } }, inputs: { theme: "theme", fStyle: "fStyle", on_dark: "on_dark", label: "label", control: "control" }, outputs: { value: "value", isFocused: "isFocused", keyup: "keyup" }, decls: 4, vars: 7, consts: [[3, "ngClass"], [3, "innerHtml", "ngClass", "click"], [3, "focus", "focusout", "keyup"], ["inputElementText", ""]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵlistener("click", function TextInputComponent_Template_label_click_1_listener() { return ctx.labelClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "textarea", 2, 3);
        i0.ɵɵlistener("focus", function TextInputComponent_Template_textarea_focus_2_listener() { return ctx.onFocusIn(); })("focusout", function TextInputComponent_Template_textarea_focusout_2_listener() { return ctx.onFocusOut(); })("keyup", function TextInputComponent_Template_textarea_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("form-", ctx.fStyle, " ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.label, i0.ɵɵsanitizeHtml)("ngClass", ctx.fStyle == "control" && ctx.focused ? "marginL-10" : "");
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextInputComponent, [{
        type: Component,
        args: [{ selector: 'mg-text', template: "<div class=\"form-{{fStyle}} {{theme}}\" [ngClass]=\"mainClasses()\">\n  <label [innerHtml]=\"label\" (click)=\"labelClick()\" [ngClass]=\"fStyle == 'control' && focused ? 'marginL-10' : ''\"></label>\n  <textarea #inputElementText (focus)=\"onFocusIn()\" (focusout)=\"onFocusOut()\" (keyup)=\"onKeyUp($event)\"></textarea>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], fStyle: [{
            type: Input
        }], on_dark: [{
            type: Input
        }], label: [{
            type: Input
        }], control: [{
            type: Input
        }], value: [{
            type: Output
        }], isFocused: [{
            type: Output
        }], keyup: [{
            type: Output
        }], inputElem: [{
            type: ViewChild,
            args: ['inputElementText']
        }] }); })();

function ButtonComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵlistener("click", function ButtonComponent_ng_container_0_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.isClicked(); })("mouseenter", function ButtonComponent_ng_container_0_Template_a_mouseenter_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.mouseEnter(); })("mouseleave", function ButtonComponent_ng_container_0_Template_a_mouseleave_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.mouseLeave(); })("mousedown", function ButtonComponent_ng_container_0_Template_a_mousedown_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.mousedown(); })("mouseup", function ButtonComponent_ng_container_0_Template_a_mouseup_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.mouseup(); });
    i0.ɵɵtemplate(2, ButtonComponent_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.btnClasses())("href", ctx_r0.route, i0.ɵɵsanitizeUrl)("target", ctx_r0.newTab ? "_blank" : "_self");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ButtonComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 4);
    i0.ɵɵlistener("click", function ButtonComponent_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.isClicked(); })("mouseenter", function ButtonComponent_ng_container_1_Template_a_mouseenter_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.mouseEnter(); })("mouseleave", function ButtonComponent_ng_container_1_Template_a_mouseleave_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.mouseLeave(); })("mousedown", function ButtonComponent_ng_container_1_Template_a_mousedown_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.mousedown(); })("mouseup", function ButtonComponent_ng_container_1_Template_a_mouseup_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.mouseup(); });
    i0.ɵɵtemplate(2, ButtonComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.btnClasses())("routerLink", ctx_r1.route);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ButtonComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵlistener("click", function ButtonComponent_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.isClicked(); })("mouseenter", function ButtonComponent_ng_container_2_Template_a_mouseenter_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.mouseEnter(); })("mouseleave", function ButtonComponent_ng_container_2_Template_a_mouseleave_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.mouseLeave(); })("mousedown", function ButtonComponent_ng_container_2_Template_a_mousedown_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.mousedown(); })("mouseup", function ButtonComponent_ng_container_2_Template_a_mouseup_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.mouseup(); });
    i0.ɵɵtemplate(2, ButtonComponent_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r2.btnClasses());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function ButtonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0$e = ["*"];
class ButtonComponent {
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
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
ButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["mg-button"]], inputs: { taskType: "taskType", btnStyle: "btnStyle", task: "task", target: "target", theme: "theme", class: "class", btnSize: "btnSize", isBlock: "isBlock", round: "round", allowMargin: "allowMargin", link: "link", allowShrink: "allowShrink", options: "options", isExternalLink: "isExternalLink", newTab: "newTab" }, outputs: { clicked: "clicked", active: "active" }, ngContentSelectors: _c0$e, decls: 5, vars: 3, consts: [[4, "ngIf"], ["mycontent", ""], [1, "btn", 3, "ngClass", "href", "target", "click", "mouseenter", "mouseleave", "mousedown", "mouseup"], [4, "ngTemplateOutlet"], [1, "btn", 3, "ngClass", "routerLink", "click", "mouseenter", "mouseleave", "mousedown", "mouseup"], [1, "btn", 3, "ngClass", "click", "mouseenter", "mouseleave", "mousedown", "mouseup"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, ButtonComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        i0.ɵɵtemplate(1, ButtonComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
        i0.ɵɵtemplate(2, ButtonComponent_ng_container_2_Template, 3, 2, "ng-container", 0);
        i0.ɵɵtemplate(3, ButtonComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.buttonType == "external");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.buttonType == "internal");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.buttonType == "widget");
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgTemplateOutlet, i2.RouterLinkWithHref], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'mg-button', template: "<ng-container *ngIf=\"buttonType == 'external'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\"\n  [ngClass]=\"btnClasses()\" [href]=\"route\" [target]=\"newTab ? '_blank' : '_self'\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-container *ngIf=\"buttonType == 'internal'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\"\n  (mouseleave)=\"mouseLeave()\" [ngClass]=\"btnClasses()\" [routerLink]=\"route\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-container *ngIf=\"buttonType == 'widget'\">\n  <a class=\"btn\" (click)=\"isClicked()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\"\n  [ngClass]=\"btnClasses()\"\n  (mousedown)=\"mousedown()\" (mouseup)=\"mouseup()\">\n    <ng-container *ngTemplateOutlet=\"mycontent\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #mycontent>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { clicked: [{
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
        }] }); })();

function CalendarComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelementStart(2, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.prevYear(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelementStart(4, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.prevMonth(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 24);
    i0.ɵɵelementStart(6, "span", 25);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 26);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 27);
    i0.ɵɵelementStart(11, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_11_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.nextMonth(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 28);
    i0.ɵɵelementStart(13, "a", 22);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_div_1_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.nextYear(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.year.previous, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.month.previous, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(month_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.inView.year);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.month.next, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.icons.year.next, i0.ɵɵsanitizeHtml);
} }
function CalendarComponent_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const wkday_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(wkday_r13);
} }
function CalendarComponent_div_2_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CalendarComponent_div_2_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const d_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(d_r14.num);
} }
function CalendarComponent_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mg-dropable", 29);
    i0.ɵɵlistener("dataRecieved", function CalendarComponent_div_2_ng_container_5_Template_mg_dropable_dataRecieved_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.updateOnDay($event); })("onEvent", function CalendarComponent_div_2_ng_container_5_Template_mg_dropable_onEvent_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.handleDropZone($event, { date: d_r14.num, month: d_r14.month, year: ctx_r20.inView.year }); });
    i0.ɵɵelementStart(2, "div", 30);
    i0.ɵɵlistener("click", function CalendarComponent_div_2_ng_container_5_Template_div_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const d_r14 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.clickOnDay(d_r14.num, d_r14.month, ctx_r21.inView.year, d_r14.disabled); });
    i0.ɵɵtemplate(3, CalendarComponent_div_2_ng_container_5_ng_container_3_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(4, CalendarComponent_div_2_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r6.dayClass(d_r14.num, d_r14.month, ctx_r6.inView.year, d_r14.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r14.num == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", d_r14.num != 0);
} }
function CalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CalendarComponent_div_2_div_1_Template, 14, 6, "div", 16);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵtemplate(3, CalendarComponent_div_2_p_3_Template, 2, 1, "p", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 19);
    i0.ɵɵtemplate(5, CalendarComponent_div_2_ng_container_5_Template, 5, 3, "ng-container", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i_r3 == ctx_r0.inView.month ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.controls);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.weekDays);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.days[i_r3].dates);
} }
function CalendarComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵelementStart(2, "mg-dragable", 32);
    i0.ɵɵelement(3, "div", 33);
    i0.ɵɵelement(4, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const eventData_r23 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("draggable", true)("data", eventData_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", eventData_r23.name, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", eventData_r23.date, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", eventData_r23.description, i0.ɵɵsanitizeHtml);
} }
function CalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CalendarComponent_ng_container_4_ng_container_1_Template, 6, 5, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.toggleSelect.data);
} }
class CalendarComponent {
    constructor(dater, service) {
        this.dater = dater;
        this.service = service;
        this.abbreviation = false;
        this.bookEvents = false;
        this.theme = "dark";
        this.disabled = [];
        this.size = 1;
        this.disabledRange = {
            before: false,
            after: false
        };
        // "31 January 2022"
        this.events = [{
                name: "Meeting with Ali",
                date: "17 January 2022 08:00 PM",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                buzz: true
            }, {
                name: "PUBG",
                date: "17 January 2022 10:00 PM",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                buzz: true
            }, {
                name: "PHP",
                date: "18 January 2022 10:00 PM",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                buzz: false
            }, {
                name: "Birthday Party",
                date: "20 February 2022 10:00 PM",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                buzz: true
            }];
        this.format = "dd-MM-yyyy";
        this.icons = {
            month: {
                next: `<i class="fas fa-angle-right"></i>`,
                previous: `<i class="fas fa-angle-left"></i>`
            },
            year: {
                next: `<i class="fas fa-angle-double-right"></i>`,
                previous: `<i class="fas fa-angle-double-left"></i>`
            }
        };
        this.controls = true;
        this.class = "";
        this.dayIsClicked = new EventEmitter();
        this.dayDrop = new EventEmitter();
        this.newEvent = new EventEmitter();
        this.weekDays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        this.days = [];
        this.toggleEvent = false;
        this.current = {};
        this.inView = {};
        this.toggleSelect = false;
        this.isHoveredWithData = "";
        this.id = "";
        this.activateNewEvent = false;
        this.clickedOn = "";
        this.bookEvent = {
            name: "",
            description: "",
            on: {}
        };
        this.droppedData = {};
        this.dropOnDate = {};
    }
    ngOnInit() {
        this.executeAll();
        this.id = this.service.makeid(4, "createNewEventOverlay");
    }
    ngOnChanges() {
        console.log("Disabled? ", this.disabledRange);
        this.executeAll();
    }
    executeAll() {
        this.initializeStates();
        this.updateDays(this.inView.year);
        this.formatEventDates();
    }
    initializeStates() {
        this.current = {
            month: this.dater.getMonth(),
            monthInWords: this.dater.getMonths(this.dater.getMonth()),
            date: this.dater.getDate(),
            year: this.dater.getYear(),
            dayInNum: this.dater.getDay(),
            weekDay: this.dater.getWeekDay(),
            hour: this.dater.getHour(),
            min: this.dater.getMinute(),
            sec: this.dater.getSeconds()
        };
        this.months_long = this.dater.getMonthsLong();
        this.months_short = this.dater.getMonths();
        this.months = this.abbreviation ? this.months_short : this.months_long;
        this.inView = {
            month: this.current.month,
            year: this.current.year
        };
    }
    formatEventDates() {
        for (let i = 0; i < this.events.length; i++) {
            this.events[i].dateObject = {
                date: this.dater.getDate(this.dater.dater(this.events[i].date)),
                month: this.dater.getMonth(this.dater.dater(this.events[i].date)),
                year: this.dater.getYear(this.dater.dater(this.events[i].date))
            };
        }
    }
    isDisabled(d, m, y) {
        for (let i = 0; i < this.disabled.length; i++) {
            let disabled_date = this.dater.dater(this.disabled[i]);
            if (d == this.dater.getDate(disabled_date) && (m - 1) == this.dater.getMonth(disabled_date) && y == this.dater.getYear(disabled_date)) {
                return true;
            }
        }
        return false;
    }
    pushDisabled(d, m, y) {
        let date = `${d} ${this.months[m - 1]} ${y}`;
        if (typeof this.disabledRange.after == "string" &&
            this.dater.isGreater(date, this.disabledRange.after) &&
            !this.disabled.includes(date)) {
            this.disabled.push(date);
        }
        if (typeof this.disabledRange.before == "string" &&
            this.dater.isLessThan(date, this.disabledRange.before) &&
            !this.disabled.includes(date)) {
            this.disabled.push(date);
        }
    }
    updateDays(year = this.current.year) {
        this.days = [];
        for (let i = 1; i < this.months.length + 1; i++) {
            let onMonth = {};
            let firstDate = this.dater.dater(`1-${this.months[i - 1]}-${year}`);
            onMonth.totalDays = this.dater.daysInMonth(i, year);
            onMonth.name = this.months[i - 1];
            onMonth.month = i;
            onMonth.dates = [];
            onMonth.startDay = this.dater.getDay(firstDate);
            for (let k = 0; k < onMonth.startDay; k++) {
                let myDaY = {
                    num: 0,
                    weekday: this.weekDays[k],
                    weekDayNum: k,
                    month: i,
                    disabled: false
                };
                onMonth.dates.push(myDaY);
            }
            for (let j = 1; j <= onMonth.totalDays; j++) {
                this.pushDisabled(j, i, year);
                let mydate = this.dater.dater(`${j} ${this.months[i - 1]} ${year}`);
                let myDaY = {
                    num: j,
                    weekday: this.weekDays[this.dater.getDay(mydate)],
                    weekDayNum: this.dater.getDay(mydate),
                    month: i,
                    disabled: this.isDisabled(j, i, year)
                };
                onMonth.dates.push(myDaY);
            }
            this.days.push(onMonth);
        }
    }
    isEvented(d, m, y) {
        let allEvents = [];
        for (let i = 0; i < this.events.length; i++) {
            if (d === this.events[i].dateObject.date && (m - 1) === this.events[i].dateObject.month && y === this.events[i].dateObject.year) {
                allEvents.push(this.events[i]);
            }
        }
        return allEvents.length > 0 ? allEvents : false;
    }
    doBuzz(eventDetails = []) {
        for (let i = 0; i < eventDetails.length; i++) {
            if (eventDetails[i].buzz) {
                return true;
            }
        }
        return false;
    }
    getSize() {
        if (this.size === 1) {
            return "padV-10";
        }
        else if (this.size === 2) {
            return "padV-20";
        }
        else if (this.size === 3) {
            return "padV-30";
        }
        else if (this.size === 4) {
            return "padV-40";
        }
        else {
            return "padV-50";
        }
    }
    dayClass(d, m, y, disabled = false) {
        let results = "";
        results += ` ${this.getSize()}`;
        results += this.dropzoneClass(d, m, y) ? " scale-3 shadow-3 outline-grey10" : "";
        results += d == 0 ? " day-disabled" : "";
        results += d == this.current.date && m - 1 == this.current.month && y == this.current.year ? " active-day" : "";
        let eventdetails = this.isEvented(d, m, y);
        results += !disabled && eventdetails ? " haveEvent" : "";
        results += !disabled && this.doBuzz(eventdetails) ? " buzz" : "";
        results += disabled ? " day-diabled" : "";
        return results;
    }
    nextMonth() {
        if (this.inView.month >= 11) {
            this.inView.month = 0;
            this.nextYear();
        }
        else {
            this.inView.month++;
        }
    }
    prevMonth() {
        if (this.inView.month <= 0) {
            this.inView.month = 11;
            this.prevYear();
        }
        else {
            this.inView.month--;
        }
    }
    nextYear() {
        this.inView.year++;
        this.updateDays(this.inView.year);
    }
    prevYear() {
        this.inView.year--;
        this.updateDays(this.inView.year);
    }
    clickOnDay(d, m, y, disabled = false) {
        if (!disabled) {
            let date = new Date(`${d} ${this.months[m - 1]} ${y}`);
            let dateTobeSent = this.dater.format(date, this.format);
            this.dayIsClicked.emit({
                date: d,
                month: m,
                year: y,
                dateFormatted: dateTobeSent
            });
            this.eventDetailsToggle(d, m, y);
            if (!this.toggleEvent) {
                if (this.bookEvents) {
                    this.openNewEvent();
                    this.bookEvent.on.date = d;
                    this.bookEvent.on.month = m;
                    this.bookEvent.on.year = y;
                }
                this.clickedOn = this.dater.format(date, "dd-MM-yyyy");
            }
        }
    }
    setBookEvent(event, type) {
        if (type == "name") {
            this.bookEvent.name = event.target.value;
        }
        if (type == "desc") {
            this.bookEvent.description = event.target.value;
        }
    }
    createNewEvent() {
        this.newEvent.emit(this.bookEvent);
        this.activateNewEvent = false;
    }
    openNewEvent() {
        this.activateNewEvent = true;
    }
    closeNewEvent() {
        this.activateNewEvent = false;
    }
    updateOnDay(event) {
        this.droppedData = event;
        this.dayDrop.emit({
            data: this.droppedData,
            dropon: this.dropOnDate
        });
    }
    handleDropZone(event, obj = {}) {
        if (event && !event.dropped && event.dragEntered) {
            this.isHoveredWithData = obj && obj.date && obj.month && obj.year ? `${obj.date}-${obj.month}-${obj.year}` : "";
        }
        else if (event && event.dragLeft) {
            this.isHoveredWithData = "";
        }
        else if (event.dropped) {
            this.isHoveredWithData = "";
            this.dropOnDate = obj;
        }
    }
    dropzoneClass(d, m, y) {
        if (`${d}-${m}-${y}` === this.isHoveredWithData) {
            return true;
        }
        return false;
    }
    eventDetailsToggle(d, m, y) {
        if ((!this.toggleSelect) || !(this.toggleSelect.date == d && this.toggleSelect.month == m && this.toggleSelect.year == y)) {
            let eventdetail = this.isEvented(d, m, y);
            this.toggleSelect = {
                date: d,
                month: m,
                year: y,
                data: eventdetail
            };
            if (eventdetail) {
                this.toggleEvent = true;
                this.toggleSelect.data = eventdetail;
            }
            else {
                this.toggleEvent = false;
            }
        }
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(i0.ɵɵdirectiveInject(DaterService), i0.ɵɵdirectiveInject(MaterialgrammiService)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["mg-calendar"]], inputs: { abbreviation: "abbreviation", bookEvents: "bookEvents", theme: "theme", disabled: "disabled", size: "size", disabledRange: "disabledRange", events: "events", format: "format", icons: "icons", controls: "controls", class: "class" }, outputs: { dayIsClicked: "dayIsClicked", dayDrop: "dayDrop", newEvent: "newEvent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 19, vars: 6, consts: [[1, "calendar", 3, "ngClass"], [1, "month-wrapper"], ["class", "month", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "event-details"], [4, "ngIf"], ["bgClass", "grey2", "canvasPosition", "bottom", "offSize", "2", 3, "id", "active", "isClosed"], [1, "pad-10"], [1, "text-grey8", "marginV-15"], [1, "font-15", "text-red8"], [1, "row", "col", "m12", "l12", "s12"], ["label", "Event Name", "fStyle", "material", 1, "marginT-5", 3, "keyup"], ["label", "Event Description", "fStyle", "material", 1, "margin-5", 3, "keyup"], [1, "col", "m12", "l12", "s12", "text-right"], ["theme", "success", 3, "click"], [1, "fas", "fa-angle-double-right"], [1, "month", 3, "ngClass"], ["class", "calendar-info", 4, "ngIf"], [1, "weekdays"], [4, "ngFor", "ngForOf"], [1, "month-days"], [1, "calendar-info"], [1, "previous-year"], [3, "innerHtml", "click"], [1, "previous-month"], [1, "month-name"], [1, "monthSpan"], [1, "yearName"], [1, "next-month"], [1, "next-year"], [3, "dataRecieved", "onEvent"], [1, "day", 3, "ngClass", "click"], [1, "event-info-wrapper"], [3, "draggable", "data"], [1, "event-detail-title", 3, "innerHtml"], [1, "event-detail-date", 3, "innerHtml"], [1, "event-detail-description", 3, "innerHtml"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CalendarComponent_div_2_Template, 6, 4, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CalendarComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mg-overlay", 5);
        i0.ɵɵlistener("isClosed", function CalendarComponent_Template_mg_overlay_isClosed_5_listener() { return ctx.closeNewEvent(); });
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelementStart(7, "h2", 7);
        i0.ɵɵtext(8, "Book an event on ");
        i0.ɵɵelementStart(9, "small", 8);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵelementStart(12, "mg-input", 10);
        i0.ɵɵlistener("keyup", function CalendarComponent_Template_mg_input_keyup_12_listener($event) { return ctx.setBookEvent($event, "name"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelementStart(14, "mg-text", 11);
        i0.ɵɵlistener("keyup", function CalendarComponent_Template_mg_text_keyup_14_listener($event) { return ctx.setBookEvent($event, "desc"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 12);
        i0.ɵɵelementStart(16, "mg-button", 13);
        i0.ɵɵlistener("click", function CalendarComponent_Template_mg_button_click_16_listener() { return ctx.createNewEvent(); });
        i0.ɵɵtext(17, "Book an event ");
        i0.ɵɵelement(18, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", (ctx.toggleEvent == true ? ctx.theme + " activatedEvent" : ctx.theme) + " " + ctx.class);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.months);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.toggleSelect.data);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id)("active", ctx.activateNewEvent);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.clickedOn);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf, OverlayComponent, InputComponent, TextInputComponent, ButtonComponent, DropableComponent, DragableComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarComponent, [{
        type: Component,
        args: [{ selector: 'mg-calendar', template: "<div class=\"calendar\" [ngClass]=\"(toggleEvent == true ? theme + ' activatedEvent' : theme) + ' ' + class\">\n    <div class=\"month-wrapper\">\n      <div class=\"month\" *ngFor=\"let month of months; let i = index\" [ngClass]=\"i == inView.month ? 'active': ''\">\n        <div class=\"calendar-info\" *ngIf=\"controls\">\n          <div class=\"previous-year\">\n            <a (click)=\"prevYear()\" [innerHtml]=\"icons.year.previous\"></a>\n          </div>\n          <div class=\"previous-month\">\n            <a (click)=\"prevMonth()\" [innerHtml]=\"icons.month.previous\"></a>\n          </div>\n          <div class=\"month-name\">\n            <span class=\"monthSpan\">{{month}}</span><span class=\"yearName\">{{inView.year}}</span>\n          </div>\n          <div class=\"next-month\">\n            <a (click)=\"nextMonth()\" [innerHtml]=\"icons.month.next\"></a>\n          </div>\n          <div class=\"next-year\">\n            <a (click)=\"nextYear()  \" [innerHtml]=\"icons.year.next\"></a>\n          </div>\n        </div>\n        <div class=\"weekdays\">\n          <p *ngFor=\"let wkday of weekDays\">{{wkday}}</p>\n        </div>\n        <div class=\"month-days\">\n          <ng-container *ngFor=\"let d of days[i].dates\">\n            <mg-dropable (dataRecieved)=\"updateOnDay($event)\" (onEvent)=\"handleDropZone($event, {date: d.num, month: d.month, year: inView.year})\">\n              <div class=\"day\" [ngClass]=\"dayClass(d.num, d.month, inView.year, d.disabled)\"\n              (click)=\"clickOnDay(d.num, d.month, inView.year, d.disabled)\">\n                <ng-container *ngIf=\"d.num == 0\"></ng-container>\n                <ng-container *ngIf=\"d.num != 0\">{{d.num}}</ng-container>\n              </div>\n            </mg-dropable>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"event-details\">\n      <ng-container *ngIf=\"toggleSelect.data\">\n        <ng-container *ngFor=\"let eventData of toggleSelect.data\">\n            <div class=\"event-info-wrapper\">\n              <mg-dragable [draggable]=\"true\" [data]=\"eventData\">\n                <div class=\"event-detail-title\" [innerHtml]=\"eventData.name\"></div>\n                <div class=\"event-detail-date\" [innerHtml]=\"eventData.date\"></div>\n              </mg-dragable>\n              \n              <div class=\"event-detail-description\" [innerHtml]=\"eventData.description\"></div>\n            </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n\n  <mg-overlay bgClass=\"grey2\" [id]=\"id\" canvasPosition=\"bottom\" offSize=\"2\" [active]=\"activateNewEvent\" (isClosed)=\"closeNewEvent()\">\n    <div class=\"pad-10\">\n      <h2 class=\"text-grey8 marginV-15\">Book an event on <small class=\"font-15 text-red8\">{{ clickedOn }}</small> </h2>\n      <div class=\"row col m12 l12 s12\">\n        <mg-input label=\"Event Name\" fStyle=\"material\" class=\"marginT-5\" (keyup)=\"setBookEvent($event, 'name')\"></mg-input>\n      </div>\n      <div class=\"row col m12 l12 s12\">\n        <mg-text label=\"Event Description\" fStyle=\"material\" class=\"margin-5\" (keyup)=\"setBookEvent($event, 'desc')\"></mg-text>\n      </div>\n      <div class=\"col m12 l12 s12 text-right\">\n        <mg-button (click)=\"createNewEvent()\" theme=\"success\">Book an event <i class=\"fas fa-angle-double-right\"></i></mg-button>\n      </div>\n    </div>\n  </mg-overlay>", styles: [""] }]
    }], function () { return [{ type: DaterService }, { type: MaterialgrammiService }]; }, { abbreviation: [{
            type: Input
        }], bookEvents: [{
            type: Input
        }], theme: [{
            type: Input
        }], disabled: [{
            type: Input
        }], size: [{
            type: Input
        }], disabledRange: [{
            type: Input
        }], events: [{
            type: Input
        }], format: [{
            type: Input
        }], icons: [{
            type: Input
        }], controls: [{
            type: Input
        }], class: [{
            type: Input
        }], dayIsClicked: [{
            type: Output
        }], dayDrop: [{
            type: Output
        }], newEvent: [{
            type: Output
        }] }); })();

const _c0$d = function () { return []; };
class DateInputComponent {
    constructor() {
        this.input = {
            theme: "success",
            style: "control",
            control: new FormControl(''),
            darkmode: false,
            class: ""
        };
        this.label = "Select Date";
        this.class = "";
        this.calendar = {
            disabled: [],
            theme: "success",
            abbreviation: true
        };
        this.disabledRange = {
            before: false,
            after: false
        };
        this.icons = {
            close: `<i class="fas fa-times"></i>`
        };
        this.format = "dd-MM-yyyy";
        this.getdate = new EventEmitter();
        this.active = false;
        this.textValue = "";
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
    }
    calendarClass() {
        let classes = "";
        classes += this.active ? "active" : "";
        return classes;
    }
    inputFocused(event) {
        if (event) {
            this.active = event;
        }
        else {
            let $this = this;
            setTimeout(function () {
                $this.active = event;
            }, 100);
        }
    }
    dateSelected(event) {
        if (event && event.dateFormatted) {
            this.textValue = event.dateFormatted;
            this.getdate.emit(this.textValue);
        }
    }
}
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(); };
DateInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateInputComponent, selectors: [["mg-date"]], inputs: { input: "input", label: "label", class: "class", calendar: "calendar", disabledRange: "disabledRange", icons: "icons", format: "format" }, outputs: { getdate: "getdate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 20, consts: [[3, "ngClass", "click", "focusin", "mouseleave"], ["type", "text", 3, "theme", "label", "placeholder", "control", "textValue", "onDark"], [1, "calendar-input", "pad-10", 3, "ngClass"], [1, "text-right"], [1, "font-20", "grey3", "text-grey8", "hover-grey2", "text-hover-grey10", "shadow-1", "padH-13", "radius-50", "padV-5", 2, "position", "absolute", "right", "20px", "margin-top", "-10px", 3, "innerHtml", "click"], [3, "theme", "disabled", "events", "abbreviation", "format", "disabledRange", "dayIsClicked"]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DateInputComponent_Template_div_click_0_listener() { return ctx.active = true; })("focusin", function DateInputComponent_Template_div_focusin_0_listener() { return ctx.inputFocused(true); })("mouseleave", function DateInputComponent_Template_div_mouseleave_0_listener() { return ctx.inputFocused(false); });
        i0.ɵɵelement(1, "mg-input", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "p", 3);
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵlistener("click", function DateInputComponent_Template_a_click_4_listener() { return ctx.active = false; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mg-calendar", 5);
        i0.ɵɵlistener("dayIsClicked", function DateInputComponent_Template_mg_calendar_dayIsClicked_5_listener($event) { return ctx.dateSelected($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.input.style);
        i0.ɵɵclassMap(ctx.input.class);
        i0.ɵɵproperty("theme", ctx.input.theme)("label", ctx.label)("placeholder", ctx.format)("control", ctx.input.control)("textValue", ctx.textValue)("onDark", ctx.input.darkmode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.calendarClass());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.icons.close, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("theme", ctx.calendar.theme)("disabled", ctx.calendar.disabled)("events", i0.ɵɵpureFunction0(19, _c0$d))("abbreviation", ctx.calendar.abbreviation)("format", ctx.format)("disabledRange", ctx.disabledRange);
    } }, directives: [i1.NgClass, InputComponent, CalendarComponent], styles: [".calendar-input[_ngcontent-%COMP%]{display:none}.calendar-input.active[_ngcontent-%COMP%]{display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateInputComponent, [{
        type: Component,
        args: [{ selector: 'mg-date', template: "<div (click)=\"active = true\"  (focusin)=\"inputFocused(true)\" (mouseleave)=\"inputFocused(false)\" [ngClass]=\"class\">\n    <mg-input [theme]=\"input.theme\" [style]=\"input.style\" [label]=\"label\" \n    [placeholder] = \"format\" [control]=\"input.control\" type=\"text\" \n    [textValue]=\"textValue\" [onDark]=\"input.darkmode\" [class]=\"input.class\"></mg-input>\n    <div class=\"calendar-input pad-10\" [ngClass]=\"calendarClass()\">\n        <p class=\"text-right\">\n            <a [innerHtml]=\"icons.close\" \n            class=\"font-20 grey3 text-grey8 \n            hover-grey2 text-hover-grey10 \n            shadow-1 padH-13 radius-50 padV-5\" \n            style=\"position: absolute; right: 20px; margin-top: -10px;\" \n            (click)=\"active = false\"></a>\n        </p>\n        \n        <mg-calendar (dayIsClicked)=\"dateSelected($event)\" [theme]=\"calendar.theme\" \n        [disabled]=\"calendar.disabled\" [events]=\"[]\" [abbreviation] = \"calendar.abbreviation\"\n        [format]=\"format\" [disabledRange]=\"disabledRange\"></mg-calendar>\n    </div>\n</div>\n\n\n", styles: [".calendar-input{display:none}.calendar-input.active{display:block}\n"] }]
    }], function () { return []; }, { input: [{
            type: Input
        }], label: [{
            type: Input
        }], class: [{
            type: Input
        }], calendar: [{
            type: Input
        }], disabledRange: [{
            type: Input
        }], icons: [{
            type: Input
        }], format: [{
            type: Input
        }], getdate: [{
            type: Output
        }] }); })();

function RadioComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("click", function RadioComponent_div_2_Template_input_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.select(option_r1.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementStart(3, "label", 6);
    i0.ɵɵlistener("click", function RadioComponent_div_2_Template_label_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const option_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.select(option_r1.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", option_r1.value)("name", ctx_r0.name)("value", option_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", option_r1.value)("innerHtml", option_r1.name, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.classesOnLabel());
} }
class RadioComponent {
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
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["mg-radio"]], inputs: { options: "options", name: "name", size: "size", isInline: "isInline", theme: "theme", onDark: "onDark" }, outputs: { value: "value" }, decls: 3, vars: 2, consts: [[1, "radio", 3, "ngClass"], [1, "option"], ["class", "radio-option", 4, "ngFor", "ngForOf"], [1, "radio-option"], ["type", "radio", 3, "id", "name", "value", "click"], [1, "radio-shadow"], [3, "for", "innerHtml", "ngClass", "click"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, RadioComponent_div_2_Template, 4, 6, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{ selector: 'mg-radio', template: "<div class=\"radio\" [ngClass]=\"mainClasses()\">\n  <div class=\"option\">\n    <div class=\"radio-option\" *ngFor=\"let option of options\">\n      <input [id]=\"option.value\" type=\"radio\" [name]=\"name\" [value]=\"option.value\" (click)=\"select(option.value)\">\n      <div class=\"radio-shadow\"></div>\n      <label [for]=\"option.value\" [innerHtml]=\"option.name\" (click)=\"select(option.value)\" [ngClass]=\"classesOnLabel()\"></label>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { options: [{
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
        }] }); })();

function SelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mg-input", 7);
    i0.ɵɵlistener("keyup", function SelectComponent_ng_container_6_Template_mg_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.searchFromOptions($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("theme", ctx_r0.theme);
} }
function SelectComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function SelectComponent_div_8_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const opt_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.selectOption(opt_r4); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.isHighlighted(opt_r4.name))("innerHtml", opt_r4.name, i0.ɵɵsanitizeHtml);
} }
class SelectComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.value = new EventEmitter();
        this.searchOpt = new FormControl('');
        this.theme = "lite";
        this.selectTitle = "Select";
        this.selectType = "control";
        this.enableSearch = false;
        this.options = [{
                name: "Option 01",
                val: "option_1"
            }, {
                name: "Option 02",
                val: "option_2"
            }, {
                name: "Option 03",
                val: "option_3"
            }, {
                name: "Option 04",
                val: "option_4"
            }, {
                name: "Option 05",
                val: "option_5"
            }];
        this.selectedOption = {
            name: "",
            val: ""
        };
        this.highlighted = "";
        this.optionsActive = false;
        this.titleDisplay = this.selectTitle;
        this.selectInput = new FormControl("");
    }
    ngOnInit() {
    }
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.searchOpt.setValue("");
            this.optionsActive = false;
        }
    }
    handleKeyboardEvent(event) {
        this.searchOpt.setValue("");
        this.optionsActive = false;
    }
    toggleOptions() {
        this.optionsActive = !this.optionsActive;
    }
    optionsClasses() {
        let classes = ``;
        classes += this.optionsActive ? "active" : "";
        return classes;
    }
    selectOption(opt) {
        this.value.emit(opt.val);
        this.selectedOption = opt;
        this.titleDisplay = this.selectedOption ? this.selectedOption.name : this.selectTitle;
        this.selectInput.setValue(opt.val);
        this.toggleOptions();
    }
    isHighlighted(name) {
        if (this.highlighted == name) {
            return "highlighted";
        }
        else {
            return "";
        }
    }
    searchFromOptions(val) {
        let enterPressed = false;
        if (val && val.code == "Enter" || val.key == "Enter") {
            enterPressed = true;
        }
        val = val.target.value;
        var opt = false;
        for (let i = 0; i < this.options.length; i++) {
            if (val.length > 0 && this.options[i].name.indexOf(val) > 1) {
                this.highlighted = this.options[i].name;
                opt = this.options[i];
            }
            else if (val.length > 0 && this.options[i].val.indexOf(val) > 1) {
                this.highlighted = this.options[i].name;
                opt = this.options[i];
            }
        }
        if (val.length < 1) {
            this.highlighted = "";
        }
        if (enterPressed && this.highlighted.length > 0) {
            this.searchOpt.setValue("");
            this.selectOption(opt);
        }
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["mg-select"]], hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function SelectComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, i0.ɵɵresolveDocument)("keydown.escape", function SelectComponent_keydown_escape_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { searchOpt: "searchOpt", theme: "theme", selectTitle: "selectTitle", selectType: "selectType", enableSearch: "enableSearch", options: "options" }, outputs: { value: "value" }, decls: 9, vars: 8, consts: [[1, "select-title", 3, "click"], [3, "innerHtml"], [1, "right"], [1, "fas", "fa-chevron-down"], [1, "select-options", 3, "ngClass"], [4, "ngIf"], ["class", "select-option", 3, "ngClass", "innerHtml", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Find", "label", "", 3, "theme", "keyup"], [1, "select-option", 3, "ngClass", "innerHtml", "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵlistener("click", function SelectComponent_Template_div_click_1_listener() { return ctx.toggleOptions(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵelement(4, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, SelectComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelement(7, "hr");
        i0.ɵɵtemplate(8, SelectComponent_div_8_Template, 1, 2, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("select-wrapper select-", ctx.theme, " select-", ctx.selectType, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.titleDisplay, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngClass", ctx.optionsClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enableSearch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgClass, i1.NgIf, i1.NgForOf, InputComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{ selector: 'mg-select', template: "<div class=\"select-wrapper select-{{theme}} select-{{selectType}}\">\n  <div class=\"select-title\" (click)=\"toggleOptions()\"><span [innerHtml]=\"titleDisplay\"></span> <span class=\"right\"><i class=\"fas fa-chevron-down\"></i></span></div>\n  <div class=\"select-options\" [ngClass]=\"optionsClasses()\">\n    <ng-container *ngIf=\"enableSearch\">\n      <mg-input placeholder=\"Find\" label=\"\" [theme]=\"theme\" (keyup)=\"searchFromOptions($event)\"></mg-input>\n    </ng-container>\n    <hr>\n    <div class=\"select-option\" [ngClass]=\"isHighlighted(opt.name)\" *ngFor=\"let opt of options\" [innerHtml]=\"opt.name\" (click)=\"selectOption(opt)\"></div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { value: [{
            type: Output
        }], searchOpt: [{
            type: Input
        }], theme: [{
            type: Input
        }], selectTitle: [{
            type: Input
        }], selectType: [{
            type: Input
        }], enableSearch: [{
            type: Input
        }], options: [{
            type: Input
        }], clickout: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], handleKeyboardEvent: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }] }); })();

function SwitchComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("click", function SwitchComponent_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.toggleChoices(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.leftClasses())("innerHtml", ctx_r0.options.left, i0.ɵɵsanitizeHtml);
} }
function SwitchComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("click", function SwitchComponent_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.toggleChoices(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.rightClasses())("innerHtml", ctx_r1.options.right, i0.ɵɵsanitizeHtml);
} }
class SwitchComponent {
    constructor() {
        this.options = {
            left: "Forget i logged in?",
            right: "Keep me logged in?"
        };
        this.type = "filled"; /* filled | empty */
        this.theme = "primary";
        this.size = "s";
        this.showChoices = true;
        this.onDark = false;
        this.selected = true;
        this.value = new EventEmitter();
    }
    ngOnInit() {
    }
    classesOnInput() {
        let results = "";
        results += this.type == "filled" ? "switch-filled" : "empty-switch";
        results += " " + this.theme;
        results += this.size == "s" ? " switch-small" :
            (this.size == "m" ? " switch-medium" :
                (this.size == "l" ? " switch-large" : ""));
        return results;
    }
    toggleChoices() {
        this.selected = !this.selected;
        this.value.emit(this.selected);
    }
    leftClasses() {
        let results = "";
        results += this.onDark ? 'on-dark' : 'on-lite';
        results += !this.selected ? " active" : "";
        return results;
    }
    rightClasses() {
        let results = "";
        results += this.onDark ? 'on-dark' : 'on-lite';
        results += this.selected ? " active" : "";
        return results;
    }
}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(); };
SwitchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SwitchComponent, selectors: [["mg-switch"]], inputs: { options: "options", type: "type", theme: "theme", size: "size", showChoices: "showChoices", onDark: "onDark", selected: "selected" }, outputs: { value: "value" }, decls: 4, vars: 5, consts: [[1, "mg-switch-wrapper", 3, "ngClass"], [4, "ngIf"], ["type", "checkbox", 1, "mg-switch", 3, "ngClass", "checked", "click"], [1, "mg-switch-choice", 3, "ngClass", "innerHtml", "click"]], template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, SwitchComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementStart(2, "input", 2);
        i0.ɵɵlistener("click", function SwitchComponent_Template_input_click_2_listener() { return ctx.toggleChoices(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, SwitchComponent_ng_container_3_Template, 2, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.size == "s" ? "switch-small" : ctx.size == "m" ? "switch-medium" : "switch-large");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.left && ctx.showChoices);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.classesOnInput())("checked", ctx.selected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.right && ctx.showChoices);
    } }, directives: [i1.NgClass, i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SwitchComponent, [{
        type: Component,
        args: [{ selector: 'mg-switch', template: "<div class=\"mg-switch-wrapper\" [ngClass] = \"size == 's' ? 'switch-small' : size == 'm' ? 'switch-medium' : 'switch-large'\">\n\n  <ng-container *ngIf=\"options.left && showChoices\">\n    <div class=\"mg-switch-choice\" [ngClass]=\"leftClasses()\" [innerHtml]=\"options.left\" (click)=\"toggleChoices()\"></div>\n  </ng-container>\n\n\n  <input type=\"checkbox\" class=\"mg-switch\" [ngClass]=\"classesOnInput()\" [checked]=\"selected\"\n    (click)=\"toggleChoices()\" />\n\n  <ng-container *ngIf=\"options.right && showChoices\">\n    <div class=\"mg-switch-choice\" [ngClass]=\"rightClasses()\" [innerHtml]=\"options.right\" (click)=\"toggleChoices()\">\n    </div>\n  </ng-container>\n\n\n</div>\n", styles: [""] }]
    }], function () { return []; }, { options: [{
            type: Input
        }], type: [{
            type: Input
        }], theme: [{
            type: Input
        }], size: [{
            type: Input
        }], showChoices: [{
            type: Input
        }], onDark: [{
            type: Input
        }], selected: [{
            type: Input
        }], value: [{
            type: Output
        }] }); })();

function ListComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 3);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", item_r2, i0.ɵɵsanitizeHtml);
} }
function ListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1);
    i0.ɵɵtemplate(1, ListComponent_ul_0_li_1_Template, 1, 1, "li", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("mg-list ", ctx_r0.theme, "");
    i0.ɵɵproperty("ngClass", ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items);
} }
class ListComponent {
    constructor() {
        this.items = [];
        this.theme = "dark";
        this.class = "";
    }
    ngOnInit() {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["mg-list"]], inputs: { items: "items", theme: "theme", class: "class" }, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "item", 3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "item", 3, "innerHtml"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListComponent_ul_0_Template, 2, 5, "ul", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.items.length > 0);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{ selector: 'mg-list', template: "<ul *ngIf=\"items.length > 0\" class=\"mg-list {{theme}}\" [ngClass]=\"class\">\n  <li *ngFor=\"let item of items\" [innerHtml]=\"item\" class=\"item\"></li>\n</ul>\n", styles: [""] }]
    }], function () { return []; }, { items: [{
            type: Input
        }], theme: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoaderComponent, selectors: [["mg-loader"]], decls: 2, vars: 0, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "loader works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderComponent, [{
        type: Component,
        args: [{ selector: 'mg-loader', template: "<p>loader works!</p>\n", styles: [""] }]
    }], function () { return []; }, null); })();

function NavbarComponent_ng_container_6_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 10);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHtml", ctx_r3.navData.left.data.name, i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 8);
    i0.ɵɵlistener("keyup", function NavbarComponent_ng_container_6_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onEnterSearchQuery($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_6_a_2_Template, 1, 1, "a", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r0.navData.left.data.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.navData.left.data.btn);
} }
function NavbarComponent_ng_container_7_ng_container_1_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 16);
} if (rf & 2) {
    const droplink_r11 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", droplink_r11.name, i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_ng_container_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "a", 13);
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtemplate(4, NavbarComponent_ng_container_7_ng_container_1_ng_container_1_a_4_Template, 1, 1, "a", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ndata_r7.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r7.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ndata_r7.links);
} }
function NavbarComponent_ng_container_7_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "a", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ndata_r7.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r7.link);
} }
function NavbarComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_7_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 6);
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_7_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ndata_r7.type && ndata_r7.type == "dropdown");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ndata_r7.type);
} }
function NavbarComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_7_ng_container_1_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.navData.left.data);
} }
function NavbarComponent_ng_container_9_ng_container_1_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 16);
} if (rf & 2) {
    const droplink_r19 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", droplink_r19.name, i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "a", 13);
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtemplate(4, NavbarComponent_ng_container_9_ng_container_1_ng_container_1_a_4_Template, 1, 1, "a", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ndata_r15.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r15.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ndata_r15.links);
} }
function NavbarComponent_ng_container_9_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "a", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ndata_r15.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r15.link);
} }
function NavbarComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_9_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 6);
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_9_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ndata_r15.type && ndata_r15.type == "dropdown");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ndata_r15.type);
} }
function NavbarComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_9_ng_container_1_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.navData.right.data);
} }
class NavbarComponent {
    constructor() {
        this.searchedText = new EventEmitter();
        this.spaceAround = true;
        this.theme = "dark";
        this.onSmallMenuButton = "=";
        this.isFixed = false;
        this.partitionType = "2:1";
        // 2:1
        // 1:2
        // 1:1
        this.navData = {
            brand: {
                name: `Material <B>Grammi</B>`,
                link: '/'
            },
            left: {
                navType: "input",
                data: {
                    btn: true,
                    name: `<i class="fas fa-search"></i>`,
                    placeholder: "search",
                    id: "1"
                }
            },
            right: {
                navType: "links",
                data: [{
                        name: `<i class="fas fa-home"></i>`,
                        link: "/",
                        active: false
                    }, {
                        name: `<i class="far fa-bell"></i>`,
                        link: "/",
                        active: false
                    }, {
                        type: "dropdown",
                        name: `<i class="fas fa-user"></i>`,
                        links: [{
                                name: `<p>Login</p>`,
                                link: "/"
                            }, {
                                name: `<p>Register</p>`,
                                link: "/"
                            }],
                        active: false
                    }, {
                        name: `<i class="far fa-envelope"></i>`,
                        link: "/",
                        active: false
                    }]
            }
        };
        this.onSmallActive = false;
        this.searchQuery = "";
    }
    ngOnInit() {
    }
    onSmallClass() {
        return this.onSmallActive ? 'active' : '';
    }
    toggleNav() {
        this.onSmallActive = !this.onSmallActive;
    }
    mainNavClasses() {
        let classes = this.onSmallClass();
        if (this.isFixed) {
            classes += ` fixed`;
        }
        classes += this.spaceAround ? " space-around" : "";
        if (this.partitionType == "2:1") {
            classes += ` position-2-1`;
        }
        else if (this.partitionType == "1:2") {
            classes += ` position-1-2`;
        }
        else if (this.partitionType == "1:1") {
            classes += ` position-1-1`;
        }
        return classes;
    }
    onEnterSearchQuery(event) {
        if (event.key == "Enter") {
            this.sendSearch();
        }
        else {
            this.searchQuery = event.target.value;
        }
    }
    sendSearch() {
        this.searchedText.emit(this.searchQuery);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["mg-navbar"]], inputs: { spaceAround: "spaceAround", theme: "theme", onSmallMenuButton: "onSmallMenuButton", isFixed: "isFixed", partitionType: "partitionType", navData: "navData" }, outputs: { searchedText: "searchedText" }, decls: 10, vars: 10, consts: [[1, "navbar-wrapper"], [3, "ngClass"], [1, "section", "brand"], [3, "innerHtml", "routerLink"], [1, "small-only-open-nav", 3, "innerHtml", "click"], [1, "section", "left-nav"], [4, "ngIf"], [1, "section", "right-nav"], ["type", "text", 1, "input", 3, "placeholder", "keyup"], ["class", "input-button", 3, "innerHtml", 4, "ngIf"], [1, "input-button", 3, "innerHtml"], [4, "ngFor", "ngForOf"], [1, "dropdown"], [1, "trigger-dropdown", 3, "innerHtml", "routerLink"], [1, "drop-menu"], [3, "innerHtml", 4, "ngFor", "ngForOf"], [3, "innerHtml"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "a", 3);
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_4_listener() { return ctx.toggleNav(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, NavbarComponent_ng_container_6_Template, 3, 2, "ng-container", 6);
        i0.ɵɵtemplate(7, NavbarComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵtemplate(9, NavbarComponent_ng_container_9_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("navbar ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.mainNavClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.navData.brand.name, i0.ɵɵsanitizeHtml)("routerLink", ctx.navData.brand.link);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.onSmallMenuButton, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.navData && ctx.navData.left && ctx.navData.left.navType == "input");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.navData && ctx.navData.left && ctx.navData.left.navType == "links");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.navData && ctx.navData.right && ctx.navData.right.navType == "links");
    } }, directives: [i1.NgClass, i2.RouterLinkWithHref, i1.NgIf, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'mg-navbar', template: "<div class=\"navbar-wrapper\">\n  <div class=\"navbar {{theme}}\" [ngClass]=\"mainNavClasses()\">\n    <div class=\"section brand\">\n      <a [innerHtml]=\"navData.brand.name\" [routerLink]=\"navData.brand.link\"></a>\n      <a (click)=\"toggleNav()\" class=\"small-only-open-nav\" [innerHtml]=\"onSmallMenuButton\"></a>\n    </div>\n\n    <div class=\"section left-nav\">\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'input'\">\n        <input type=\"text\" (keyup) = \"onEnterSearchQuery($event)\" class=\"input\" [placeholder]=\"navData.left.data.placeholder\" />\n        <a class=\"input-button\" *ngIf=\"navData.left.data.btn\" [innerHtml]=\"navData.left.data.name\"></a>\n      </ng-container>\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.left.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n    <div class=\"section right-nav\">\n      <ng-container *ngIf=\"navData && navData.right && navData.right.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.right.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { searchedText: [{
            type: Output
        }], spaceAround: [{
            type: Input
        }], theme: [{
            type: Input
        }], onSmallMenuButton: [{
            type: Input
        }], isFixed: [{
            type: Input
        }], partitionType: [{
            type: Input
        }], navData: [{
            type: Input
        }] }); })();

const _c0$c = function (a0) { return { "text-center block": a0 }; };
const _c1$1 = ["*"];
class NoteComponent {
    constructor() {
        this.theme = "primary";
        this.alignCenter = false;
    }
    ngOnInit() {
    }
}
NoteComponent.ɵfac = function NoteComponent_Factory(t) { return new (t || NoteComponent)(); };
NoteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoteComponent, selectors: [["mg-note"]], inputs: { theme: "theme", alignCenter: "alignCenter" }, ngContentSelectors: _c1$1, decls: 3, vars: 6, consts: [[3, "ngClass"]], template: function NoteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span", 0);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("note ", ctx.theme, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$c, ctx.alignCenter === true));
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoteComponent, [{
        type: Component,
        args: [{ selector: 'mg-note', template: "<div class=\"note {{theme}}\">\n  <span [ngClass]=\"{'text-center block' : alignCenter === true}\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], alignCenter: [{
            type: Input
        }] }); })();

function PaginationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("click", function PaginationComponent_div_2_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const page_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onPageClick(page_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.isActivePage(page_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", page_r1, " ");
} }
class PaginationComponent {
    constructor() {
        this.page = new EventEmitter();
        this.getdata = new EventEmitter();
        this.theme = "text-on-dark";
        this.data = [];
        this.fullDataMode = true;
        this.perPage = 10;
        this.currentPage = 1;
        this.icons = {
            next: `<i class="fas fa-chevron-right"></i>`,
            previous: `<i class="fas fa-chevron-left"></i>`
        };
        this.totalPages = 0;
        this.totalCount = 0;
        this.pages = [];
        this._data = [];
    }
    ngOnInit() {
        this._data = JSON.parse(JSON.stringify(this.data));
        this.calculatePage();
        this.sendData();
    }
    ngOnChanges() {
        console.log("changed", this._data);
        this.calculatePage();
        this.sendData();
        console.log("Pages", this.pages);
    }
    calculatePage() {
        this.pages = [];
        if (this.fullDataMode && this.data.length > 0) {
            this.totalCount = this.data.length;
        }
        else {
            this.totalCount = this.data;
        }
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
        for (let i = 1; i <= this.totalPages; i++) {
            this.pages.push(i);
        }
    }
    sendData() {
        if (this.fullDataMode && this.totalCount > 0) {
            let tobeSlicedFrom = (this.currentPage - 1) * this.perPage;
            let tobeSlicedTo = this.currentPage * this.perPage;
            let reformedData = [];
            for (let i = tobeSlicedFrom; i < tobeSlicedTo; i++) {
                reformedData.push(this.data[i]);
            }
            this.getdata.emit(reformedData);
        }
        else {
            this.getdata.emit((this.currentPage - 1) * this.perPage);
        }
    }
    onPageClick(pageNumber) {
        if (typeof pageNumber != "number") {
            pageNumber = parseInt(pageNumber);
        }
        this.currentPage = pageNumber;
        this.page.emit(this.currentPage);
        this.sendData();
    }
    isActivePage(pageNumber) {
        if (typeof pageNumber != "number") {
            pageNumber = parseInt(pageNumber);
        }
        return this.currentPage == pageNumber ? 'active' : '';
    }
    onNext() {
        this.currentPage = this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
        this.sendData();
    }
    onPrevious() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
        this.sendData();
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["mg-pagination"]], inputs: { theme: "theme", data: "data", fullDataMode: "fullDataMode", perPage: "perPage", currentPage: "currentPage", icons: "icons" }, outputs: { page: "page", getdata: "getdata" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[1, "page", "page-previous", 3, "innerHtml", "click"], ["class", "page", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page", "page-next", 3, "innerHtml", "click"], [1, "page", 3, "ngClass", "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵlistener("click", function PaginationComponent_Template_div_click_1_listener() { return ctx.onPrevious(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PaginationComponent_div_2_Template, 2, 2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵlistener("click", function PaginationComponent_Template_div_click_3_listener() { return ctx.onNext(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("pagination-wrapper pagination-", ctx.theme, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.icons.previous, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.pages);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.icons.next, i0.ɵɵsanitizeHtml);
    } }, directives: [i1.NgForOf, i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'mg-pagination', template: "<div class=\"pagination-wrapper pagination-{{theme}}\">\n  <div class=\"page page-previous\" [innerHtml]=\"icons.previous\" (click)=\"onPrevious()\"></div>\n  <div class=\"page\" *ngFor=\"let page of pages\" [ngClass]=\"isActivePage(page)\" (click)=\"onPageClick(page)\">\n    {{page}}\n  </div>\n  <div class=\"page page-next\" [innerHtml]=\"icons.next\" (click)=\"onNext()\"></div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { page: [{
            type: Output
        }], getdata: [{
            type: Output
        }], theme: [{
            type: Input
        }], data: [{
            type: Input
        }], fullDataMode: [{
            type: Input
        }], perPage: [{
            type: Input
        }], currentPage: [{
            type: Input
        }], icons: [{
            type: Input
        }] }); })();

const _c0$b = ["*"];
class CollapseComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.show = false;
        this.class = "";
        this.active = new EventEmitter();
    }
    ngOnInit() {
        this.service.registerCollapse(this.id, this.show);
        this.watch();
    }
    watch() {
        this.service.watchCollapse(this.id).subscribe((val) => {
            this.show = val;
            this.active.emit(val);
        });
    }
    close() {
        this.service.closeCollapse(this.id);
    }
    open() {
        this.service.openCollapse(this.id);
    }
    mainCollapseClasses() {
        let classes = ``;
        classes += this.show ? 'active' : '';
        return classes;
    }
}
CollapseComponent.ɵfac = function CollapseComponent_Factory(t) { return new (t || CollapseComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
CollapseComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollapseComponent, selectors: [["mg-collapse"]], inputs: { id: "id", show: "show", class: "class" }, outputs: { active: "active" }, ngContentSelectors: _c0$b, decls: 2, vars: 1, consts: [[1, "collapse", 3, "ngClass"]], template: function CollapseComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainCollapseClasses() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseComponent, [{
        type: Component,
        args: [{ selector: 'mg-collapse', template: "<div class=\"collapse\" [ngClass]=\"mainCollapseClasses() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { id: [{
            type: Input
        }], show: [{
            type: Input
        }], class: [{
            type: Input
        }], active: [{
            type: Output
        }] }); })();

function TableComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, "Table");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r0.tableTitle, i0.ɵɵsanitizeHtml);
} }
function TableComponent_small_4_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 21);
    i0.ɵɵlistener("click", function TableComponent_small_4_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.openSorter(); });
    i0.ɵɵelementEnd();
} }
function TableComponent_small_4_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 22);
    i0.ɵɵlistener("click", function TableComponent_small_4_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.openFilter(); });
    i0.ɵɵelementEnd();
} }
function TableComponent_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TableComponent_small_4_i_2_Template, 1, 0, "i", 19);
    i0.ɵɵtemplate(3, TableComponent_small_4_i_3_Template, 1, 0, "i", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r1.count, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showOptions.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showOptions.filter);
} }
function TableComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "mg-input", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("control", filter_r12.val)("label", filter_r12.name);
} }
const _c0$a = function (a0) { return { order: a0 }; };
function TableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "span", 25);
    i0.ɵɵlistener("click", function TableComponent_th_22_Template_span_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const head_r13 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.sort(head_r13); });
    i0.ɵɵelementStart(2, "mg-dropable", 26);
    i0.ɵɵlistener("dataRecieved", function TableComponent_th_22_Template_mg_dropable_dataRecieved_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r16); const k_r14 = restoredCtx.index; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.recieveData($event, k_r14); });
    i0.ɵɵelementStart(3, "mg-dragable", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const head_r13 = ctx.$implicit;
    const k_r14 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("data", i0.ɵɵpureFunction1(3, _c0$a, k_r14))("dragable", ctx_r3.dragableSort);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", head_r13, " ");
} }
function TableComponent_tr_25_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 17);
} if (rf & 2) {
    const col_r20 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", col_r20, i0.ɵɵsanitizeHtml);
} }
function TableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_25_td_1_Template, 1, 1, "td", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", data_r18);
} }
function TableComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "mg-pagination", 30);
    i0.ɵɵlistener("getdata", function TableComponent_div_26_Template_mg_pagination_getdata_1_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.updatePaginatedData($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("theme", ctx_r5.theme)("fullDataMode", true)("data", ctx_r5.mgData)("perPage", ctx_r5.paginate.perPage);
} }
class TableComponent {
    constructor(cdref) {
        this.cdref = cdref;
        this.theme = "dark";
        this.mgData = [];
        this.ignoredColumns = ["id"];
        this.sortBy = "";
        this.sortDirection = "ASC";
        this.tableTitle = "Table";
        this.fixedHeader = false;
        this.dragableSort = false;
        this.paginate = {
            status: false,
            perPage: 5
        };
        this.columnsOrder = [];
        this.showOptions = {
            title: false,
            filter: false,
            sort: false,
            count: false
        };
        this.show = false;
        this.reformedData = [];
        this.reformedHeads = {};
        this.headings = [];
        this.filterQuery = [];
        this.count = 0;
        this.paginatedData = [];
        this.openFilterBox = false;
        this.openSortBox = false;
        this.sortOptions = [];
    }
    setShowTimer() {
        var $this = this;
        setTimeout(function () {
            $this.show = true;
        }, 1000);
    }
    ngOnInit() {
        this.init();
        this.setShowTimer();
    }
    ngOnChanges() {
        this.init();
    }
    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }
    init() {
        this.extractHeadings();
        this.refactorData();
        this.count = this.reformedData.length;
    }
    concatHeads(headObj) {
        for (let i = 0; i < headObj.length; i++) {
            if (!this.headings.includes(headObj[i]) && !this.ignoredColumns.includes(headObj[i])) {
                this.headings.push(headObj[i]);
                this.sortOptions.push({ name: headObj[i], val: headObj[i] });
                this.filterQuery.push({ name: headObj[i], val: new FormControl("") });
            }
        }
    }
    sortColumns() {
        if (this.columnsOrder && this.columnsOrder.length > 0) {
            let newHeads = [];
            for (let i = 0; i < this.columnsOrder.length; i++) {
                for (let j = 0; j < this.headings.length; j++) {
                    if (this.columnsOrder[i] === this.headings[j]) {
                        newHeads.push(this.headings[j]);
                    }
                }
            }
            let newDiff = this.headings.filter((x) => !newHeads.includes(x));
            newHeads = [...newHeads, ...newDiff];
            this.headings = newHeads;
        }
    }
    extractHeadings() {
        for (let i = 0; i < this.mgData.length; i++) {
            let objHeads = Object.keys(this.mgData[i]);
            this.concatHeads(objHeads);
        }
        this.sortColumns();
    }
    refactorData(dataToUpdate = this.mgData) {
        this.reformedData = [];
        for (let i = 0; i < dataToUpdate.length; i++) {
            let data = [];
            for (let j = 0; j < this.headings.length; j++) {
                if (dataToUpdate[i]) {
                    let d = dataToUpdate[i][this.headings[j]] != undefined ? dataToUpdate[i][this.headings[j]] : "-";
                    data.push(d);
                }
            }
            this.reformedData.push(data);
        }
        this.reformedHeads = this.reformedData[0];
        this.sortByException();
    }
    sortFlip(newKey) {
        this.sortDirection = this.sortDirection === "" ? "ASC" : this.sortDirection;
        if (this.sortBy != "") {
            if (this.sortBy == newKey) {
                if (this.sortDirection == "ASC") {
                    this.sortDirection = "DESC";
                }
                else {
                    this.sortDirection = "ASC";
                }
            }
            else {
                this.sortDirection = "ASC";
            }
        }
    }
    sort(sortKey) {
        console.log("key ==> ", sortKey);
        this.sortByException();
        if (this.sortBy != "") {
            this.sortFlip(sortKey);
            this.sortBy = sortKey;
            let sorter = this.headings.indexOf(this.sortBy);
            var $this = this;
            let compare = (a, b) => {
                a[sorter] = a[sorter].toString();
                b[sorter] = b[sorter].toString();
                if (a[sorter] < b[sorter]) {
                    return $this.sortDirection === "ASC" ? -1 : 1;
                }
                if (a[sorter] > b[sorter]) {
                    return $this.sortDirection === "ASC" ? 1 : -1;
                }
                return 0;
            };
            this.reformedData = this.reformedData.sort(compare);
        }
    }
    sortByException() {
        if (this.sortBy == "") {
            this.sortBy = this.headings[0];
        }
    }
    filter(filterKey) {
        this.reformedData = this.reformedData.filter(function (el) {
            return el.price <= 1000 &&
                el.sqft >= 500 &&
                el.num_of_beds >= 2 &&
                el.num_of_baths >= 2.5;
        });
    }
    openSorter() {
        this.openSortBox = !this.openSortBox;
        this.openFilterBox = false;
    }
    openFilter() {
        this.openFilterBox = !this.openFilterBox;
        this.openSortBox = false;
    }
    search(enable) {
        console.log(enable);
    }
    recieveData(event, k) {
        if (this.dragableSort) {
            let fromColumn = this.columnsOrder[event.order];
            this.columnsOrder[event.order] = this.columnsOrder[k];
            this.columnsOrder[k] = fromColumn;
            fromColumn = undefined;
            this.extractHeadings();
            if (this.paginate.status) {
                this.refactorData(this.paginatedData);
            }
            else {
                this.refactorData();
            }
        }
    }
    updatePaginatedData(data) {
        this.paginatedData = data;
        if (this.paginate.status)
            this.refactorData(this.paginatedData);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["mg-table"]], inputs: { theme: "theme", mgData: "mgData", ignoredColumns: "ignoredColumns", sortBy: "sortBy", sortDirection: "sortDirection", tableTitle: "tableTitle", fixedHeader: "fixedHeader", dragableSort: "dragableSort", paginate: "paginate", columnsOrder: "columnsOrder", showOptions: "showOptions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 27, vars: 13, consts: [[1, "pad-10"], [1, "pad-5"], [3, "innerHtml", 4, "ngIf"], ["class", "right", 4, "ngIf"], ["widgetId", "1", 3, "show"], [1, "pad-10", "collapse-filter-box"], ["theme", "success", "btnSize", "sm", 3, "clicked"], [1, "fas", "fa-search", "padR-5"], [1, "row"], ["class", "col m3 l3 s6", 4, "ngFor", "ngForOf"], ["widgetId", "2", 3, "show"], [1, "pad-10", "collapse-sorter-box"], [2, "margin-bottom", "5px"], [3, "options", "value"], [3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "padV-5", 4, "ngIf"], [3, "innerHtml"], [1, "right"], ["class", "fas fa-list-ol padL-5 pointer", 3, "click", 4, "ngIf"], ["class", "fas fa-filter padL-5 font-16 pointer", 3, "click", 4, "ngIf"], [1, "fas", "fa-list-ol", "padL-5", "pointer", 3, "click"], [1, "fas", "fa-filter", "padL-5", "font-16", "pointer", 3, "click"], [1, "col", "m3", "l3", "s6"], [3, "control", "label"], [3, "click"], [3, "dataRecieved"], [3, "data", "dragable"], [3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "padV-5"], [3, "theme", "fullDataMode", "data", "perPage", "getdata"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h3");
        i0.ɵɵtemplate(3, TableComponent_span_3_Template, 2, 1, "span", 2);
        i0.ɵɵtemplate(4, TableComponent_small_4_Template, 4, 3, "small", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mg-collapse", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "h4");
        i0.ɵɵtext(8, "Filter ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mg-button", 6);
        i0.ɵɵlistener("clicked", function TableComponent_Template_mg_button_clicked_9_listener($event) { return ctx.search($event); });
        i0.ɵɵelement(10, "i", 7);
        i0.ɵɵtext(11, " Search ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 8);
        i0.ɵɵtemplate(13, TableComponent_div_13_Template, 2, 2, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mg-collapse", 10);
        i0.ɵɵelementStart(15, "div", 11);
        i0.ɵɵelementStart(16, "h4", 12);
        i0.ɵɵtext(17, "Sort");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mg-select", 13);
        i0.ɵɵlistener("value", function TableComponent_Template_mg_select_value_18_listener($event) { return ctx.sort($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "table");
        i0.ɵɵelementStart(20, "thead", 14);
        i0.ɵɵelementContainerStart(21);
        i0.ɵɵtemplate(22, TableComponent_th_22_Template, 5, 5, "th", 15);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "tbody");
        i0.ɵɵelementContainerStart(24);
        i0.ɵɵtemplate(25, TableComponent_tr_25_Template, 2, 1, "tr", 15);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(26, TableComponent_div_26_Template, 2, 4, "div", 16);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.showOptions.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showOptions.count);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("show", ctx.openFilterBox);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.filterQuery);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("show", ctx.openSortBox);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("options", ctx.sortOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.theme);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.fixedHeader ? "fixed-header" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.headings);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.reformedData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.paginate.status);
    } }, directives: [i1.NgIf, CollapseComponent, ButtonComponent, i1.NgForOf, SelectComponent, i1.NgClass, InputComponent, DropableComponent, DragableComponent, PaginationComponent], styles: [".fixed-header[_ngcontent-%COMP%]{position:sticky;top:45px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'mg-table', template: "<div class=\"pad-10\">\n  <div class=\"pad-5\">\n    <h3><span [innerHtml]=\"tableTitle\" *ngIf=\"showOptions.title\">Table</span> <small class=\"right\" *ngIf=\"showOptions.count\">{{count}} <i\n          class=\"fas fa-list-ol padL-5 pointer\" (click)=\"openSorter()\" *ngIf=\"showOptions.sort\"></i> <i\n          class=\"fas fa-filter padL-5 font-16 pointer\" (click)=\"openFilter()\" *ngIf=\"showOptions.filter\"></i></small></h3>\n    <mg-collapse widgetId=\"1\" [show]=\"openFilterBox\">\n      <div class=\"pad-10 collapse-filter-box\">\n        <h4>Filter </h4>\n        <mg-button (clicked)=\"search($event)\" theme=\"success\" btnSize=\"sm\"><i class=\"fas fa-search padR-5\"></i> Search\n        </mg-button>\n        <div class=\"row\">\n          <div class=\"col m3 l3 s6\" *ngFor=\"let filter of filterQuery\">\n            <mg-input [control]=\"filter.val\" [label]=\"filter.name\"></mg-input>\n          </div>\n        </div>\n      </div>\n    </mg-collapse>\n\n    <mg-collapse widgetId=\"2\" [show]=\"openSortBox\">\n      <div class=\"pad-10 collapse-sorter-box\">\n        <h4 style=\"margin-bottom: 5px;\">Sort</h4>\n        <mg-select [options]=\"sortOptions\" (value)=\"sort($event)\"></mg-select>\n      </div>\n    </mg-collapse>\n  </div>\n  <table class=\"{{theme}}\">\n    <thead [ngClass]=\"fixedHeader ? 'fixed-header' : ''\">\n      <ng-container>\n        \n        <th *ngFor=\"let head of headings; let k = index\"><span (click)=\"sort(head)\">\n          <mg-dropable (dataRecieved)=\"recieveData($event, k)\">\n            <mg-dragable [data]=\"{order: k}\" [dragable]=\"dragableSort\">\n              {{head}}\n            </mg-dragable>\n          </mg-dropable>\n          </span></th>\n      </ng-container>\n      \n    </thead>\n    <tbody>\n      <ng-container>\n        <tr *ngFor=\"let data of reformedData\">\n          <td *ngFor=\"let col of data\" [innerHtml]=\"col\"></td>\n        </tr>\n      </ng-container>\n      \n    </tbody>\n  </table>\n  <div class=\"padV-5\" *ngIf=\"paginate.status\">\n    <mg-pagination [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n</div>\n", styles: [".fixed-header{position:sticky;top:45px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { theme: [{
            type: Input
        }], mgData: [{
            type: Input
        }], ignoredColumns: [{
            type: Input
        }], sortBy: [{
            type: Input
        }], sortDirection: [{
            type: Input
        }], tableTitle: [{
            type: Input
        }], fixedHeader: [{
            type: Input
        }], dragableSort: [{
            type: Input
        }], paginate: [{
            type: Input
        }], columnsOrder: [{
            type: Input
        }], showOptions: [{
            type: Input
        }] }); })();

const _c0$9 = ["*"];
class ToastComponent {
    constructor() {
        this.show = true;
        this.position = "bottom";
        this.theme = "dark";
        this.timeout = 4000;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.show) {
            this.setTimer();
        }
    }
    showToast() {
        return this.show ? "active " + this.theme + " toast-" + this.position : this.theme + " toast-" + this.position;
    }
    close() {
        this.show = false;
    }
    setTimer() {
        if (this.timeout !== 0) {
            var $this = this;
            setTimeout(function () {
                $this.show = !$this.show;
            }, $this.timeout);
        }
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(); };
ToastComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["mg-toast"]], inputs: { show: "show", position: "position", theme: "theme", timeout: "timeout" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$9, decls: 4, vars: 1, consts: [[1, "toast", 3, "ngClass"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵlistener("click", function ToastComponent_Template_a_click_1_listener() { return ctx.close(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.showToast());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{ selector: 'mg-toast', template: "<div class=\"toast\" [ngClass]=\"showToast()\">\n  <a class=\"close-btn\" (click)=\"close()\"><i class=\"fas fa-times\"></i></a>\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { show: [{
            type: Input
        }], position: [{
            type: Input
        }], theme: [{
            type: Input
        }], timeout: [{
            type: Input
        }] }); })();

const _c0$8 = ["scrollMe"];
function ChatComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "p", 18);
    i0.ɵɵelementStart(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 21);
    i0.ɵɵelement(7, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", msg_r3.isSender ? "is-sender" : "is-reciever");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", msg_r3.sender, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", msg_r3.time, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", msg_r3.description, i0.ɵɵsanitizeHtml);
} }
function ChatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.minimizeToggle(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "p", 6);
    i0.ɵɵelementStart(6, "a", 7);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.minimizeToggle(); });
    i0.ɵɵelement(7, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 9);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.closeChat(); });
    i0.ɵɵelement(9, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 11, 12);
    i0.ɵɵtemplate(12, ChatComponent_div_0_div_12_Template, 8, 4, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 14);
    i0.ɵɵelementStart(14, "input", 15);
    i0.ɵɵlistener("keyup", function ChatComponent_div_0_Template_input_keyup_14_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.storeMessage($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 9);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r5); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.sendMessage(); });
    i0.ɵɵelement(16, "i", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.mainChatClasses() + " " + ctx_r0.class);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHtml", ctx_r0.header, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
class ChatComponent {
    constructor() {
        this.header = `Chat box`;
        this.show = true;
        this.openBody = true;
        this.messages = [{
                sender: "Person A",
                time: "08:00 AM",
                description: `Hello I am Person A`,
                isSender: false
            }, {
                sender: "Person B",
                time: "08:02 AM",
                description: `Hello I am Person B`,
                isSender: true
            }, {
                sender: "Person A",
                time: "08:03 AM",
                description: `Whats up?`,
                isSender: false
            }, {
                sender: "Person B",
                time: "08:04 AM",
                description: `All good`,
                isSender: true
            }, {
                sender: "Person A",
                time: "08:00 AM",
                description: `Hello I am Person A`,
                isSender: false
            }, {
                sender: "Person B",
                time: "08:02 AM",
                description: `Hello I am Person B`,
                isSender: true
            }, {
                sender: "Person A",
                time: "08:03 AM",
                description: `Whats up?`,
                isSender: false
            }, {
                sender: "Person B",
                time: "08:04 AM",
                description: `All good`,
                isSender: true
            }];
        this.class = "";
        this.inputMessage = "";
        this.chatInput = new EventEmitter();
    }
    ngOnInit() {
        this.scrollToBottom();
    }
    ngOnChanges() {
        this.scrollToBottom();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    closeChat() {
        this.show = false;
    }
    mainChatClasses() {
        let results = "";
        results += this.openBody ? "active" : "";
        return results;
    }
    minimizeToggle() {
        this.openBody = !this.openBody;
        this.scrollToBottom();
    }
    storeMessage(event) {
        this.inputMessage = event.target.value;
        if (event.key == "Enter") {
            this.sendMessage();
        }
    }
    sendMessage() {
        this.inputMessage = "";
        this.chatInput.emit(this.inputMessage);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChatComponent, selectors: [["mg-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$8, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myScrollContainer = _t.first);
    } }, inputs: { header: "header", show: "show", openBody: "openBody", messages: "messages", class: "class" }, outputs: { chatInput: "chatInput" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "chat-wrapper", 3, "ngClass", 4, "ngIf"], [1, "chat-wrapper", 3, "ngClass"], [1, "chat-header"], [1, "row"], [1, "col", "m8", "l8", "s8", 3, "innerHtml", "click"], [1, "col", "m4", "l4", "s4"], [1, "text-right"], [1, "padR-10", 3, "click"], [1, "fas", "fa-minus"], [3, "click"], [1, "fas", "fa-times"], [1, "chat-body"], ["scrollMe", ""], ["class", "chat-message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer"], ["type", "text", "placeholder", "your message", 3, "keyup"], [1, "fas", "fa-paper-plane"], [1, "chat-message", 3, "ngClass"], [1, "message-info"], [1, "by"], [1, "time"], [1, "message-description"], [3, "innerHtml"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ChatComponent_div_0_Template, 17, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChatComponent, [{
        type: Component,
        args: [{ selector: 'mg-chat', template: "<div class=\"chat-wrapper\" *ngIf=\"show\" [ngClass]=\"mainChatClasses() + ' ' + class\">\n  <div class=\"chat-header\">\n    <div class=\"row\">\n      <div class=\"col m8 l8 s8\" [innerHtml]=\"header\" (click)=\"minimizeToggle()\"></div>\n      <div class=\"col m4 l4 s4\">\n        <p class=\"text-right\"><a class=\"padR-10\" (click)=\"minimizeToggle()\"><i class=\"fas fa-minus\"></i></a><a (click)=\"closeChat()\"><i class=\"fas fa-times\"></i></a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"chat-body\"  #scrollMe>\n    <div class=\"chat-message\" *ngFor=\"let msg of messages\" [ngClass]=\"msg.isSender ? 'is-sender' : 'is-reciever'\">\n      <p class=\"message-info\">\n        <span class=\"by\">\n          {{msg.sender}}\n        </span>\n        <span class=\"time\">\n          {{msg.time}}\n        </span>\n      </p>\n      <p class=\"message-description\">\n        <span [innerHtml]=\"msg.description\"></span>\n      </p>\n    </div>\n  </div>\n  <div class=\"chat-footer\">\n    <input type=\"text\" placeholder=\"your message\" (keyup)=\"storeMessage($event)\"/>\n    <a (click)=\"sendMessage()\"><i class=\"fas fa-paper-plane\"></i></a>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { header: [{
            type: Input
        }], show: [{
            type: Input
        }], openBody: [{
            type: Input
        }], messages: [{
            type: Input
        }], class: [{
            type: Input
        }], myScrollContainer: [{
            type: ViewChild,
            args: ['scrollMe']
        }], chatInput: [{
            type: Output
        }] }); })();

const _c0$7 = ["*"];
class DropdownComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.active = false;
        this.position = {
            hotizontal: "right",
            vertical: "bottom"
        };
        this.class = "";
    }
    ngOnInit() {
        this.service.registerDropDown(this.id, this.active);
        if (this.active) {
            this.service.openDropDown(this.id);
        }
        this.watch();
    }
    watch() {
        this.service.watchDropDown(this.id).subscribe((data) => {
            console.log("Dropdown triggered", data);
            this.active = data;
        });
    }
    openDropDown() {
        this.service.openDropDown(this.id);
    }
    closeDropDown() {
        this.service.closeDropDown(this.id);
    }
    dropdownClasses() {
        let results = "";
        results += this.active ? 'active' : '';
        results += " " + this.position.hotizontal + " " + this.position.vertical;
        return results;
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
DropdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["mg-dropdown"]], inputs: { id: "id", active: "active", position: "position", class: "class" }, ngContentSelectors: _c0$7, decls: 4, vars: 2, consts: [[1, "main", 2, "position", "relative", 3, "ngClass"], [1, "dropdown-container", 3, "ngClass", "mouseover", "mouseleave"], [1, "dropdown-content"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("mouseover", function DropdownComponent_Template_div_mouseover_1_listener() { return ctx.openDropDown(); })("mouseleave", function DropdownComponent_Template_div_mouseleave_1_listener() { return ctx.closeDropDown(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.dropdownClasses());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{ selector: 'mg-dropdown', template: "<div class=\"main\" style=\"position: relative;\" [ngClass]=\"class\">\n  <div class=\"dropdown-container\" [ngClass]=\"dropdownClasses()\" (mouseover)=\"openDropDown()\"\n    (mouseleave)=\"closeDropDown()\">\n    <div class=\"dropdown-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { id: [{
            type: Input
        }], active: [{
            type: Input
        }], position: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

function MegamenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 4);
    i0.ɵɵlistener("mouseover", function MegamenuComponent_ng_container_2_Template_a_mouseover_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const m_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.openMenu(m_r1.id); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", m_r1.name, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.menuBtnClass(m_r1.id));
} }
const _c0$6 = ["*"];
class MegamenuComponent {
    constructor(service) {
        this.service = service;
        this.id = "1";
        this.theme = "primary";
        this.menu = [];
        this.active = false;
        this.isHovering = false;
        this.activeLink = "";
    }
    ngOnInit() {
        this.service.registerMegaMenu(this.id, this.getAllIds());
    }
    getAllIds() {
        let ids = [];
        for (let i = 0; i < this.menu.length; i++) {
            ids.push(this.menu[i].id);
        }
        return ids;
    }
    watchMenu() {
        this.service.watchMegaMenu(this.id).subscribe((data) => {
            if (data) {
                this.active = true;
                this.activeLink = data;
            }
        });
    }
    setActive(ac) {
        this.active = ac;
    }
    closeMenu() {
        this.active = false;
        this.service.closeMegaMenu(this.id);
    }
    openMenu(targetId) {
        this.closeMenu();
        this.service.openMegaMenu(this.id, targetId);
        this.active = true;
    }
    megamenuContentClass() {
        let results = "";
        results += this.active ? "active" : "";
        return results;
    }
    menuBtnClass(targetId) {
        let classes = "";
        classes += `${this.theme}`;
        classes += this.activeLink === targetId ? ` active` : '';
        return classes;
    }
}
MegamenuComponent.ɵfac = function MegamenuComponent_Factory(t) { return new (t || MegamenuComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
MegamenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MegamenuComponent, selectors: [["mg-megamenu"]], inputs: { id: "id", theme: "theme", menu: "menu" }, ngContentSelectors: _c0$6, decls: 5, vars: 2, consts: [[1, "megamenu-wrapper", 3, "mouseleave"], [1, "megamenu-links"], [4, "ngFor", "ngForOf"], [1, "megamenu-content", 3, "ngClass", "mouseover"], [1, "btn", 3, "innerHtml", "ngClass", "mouseover"]], template: function MegamenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("mouseleave", function MegamenuComponent_Template_div_mouseleave_0_listener() { return ctx.closeMenu(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, MegamenuComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵlistener("mouseover", function MegamenuComponent_Template_div_mouseover_3_listener() { return ctx.active = true; });
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.menu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.megamenuContentClass());
    } }, directives: [i1.NgForOf, i1.NgClass], styles: ["megamenu-wrapper[_ngcontent-%COMP%]{display:block;position:relative;width:100%}.megamenu-content[_ngcontent-%COMP%]{display:none;position:absolute;width:95%}.megamenu-content.active[_ngcontent-%COMP%]{display:block}.megamenu-wrapper[_ngcontent-%COMP%]   .megamenu-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MegamenuComponent, [{
        type: Component,
        args: [{ selector: 'mg-megamenu', template: "<div class=\"megamenu-wrapper\"  (mouseleave)=\"closeMenu()\">\n  <div class=\"megamenu-links\">\n    <ng-container *ngFor=\"let m of menu\">\n      <a class=\"btn\" [innerHtml]=\"m.name\" [ngClass]=\"menuBtnClass(m.id)\" (mouseover)=\"openMenu(m.id)\"></a>\n    </ng-container>\n  </div>\n  <div class=\"megamenu-content\" (mouseover)=\"active = true\" [ngClass]=\"megamenuContentClass()\">\n    <ng-content></ng-content>\n  </div>\n</div>", styles: ["megamenu-wrapper{display:block;position:relative;width:100%}.megamenu-content{display:none;position:absolute;width:95%}.megamenu-content.active{display:block}.megamenu-wrapper .megamenu-links a{display:inline-block;padding:10px}\n"] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { id: [{
            type: Input
        }], theme: [{
            type: Input
        }], menu: [{
            type: Input
        }] }); })();

function SlideshowComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelement(2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", item_r3, i0.ɵɵsanitizeHtml)("ngClass", ctx_r1.slideClasses());
} }
function SlideshowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵlistener("click", function SlideshowComponent_div_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.previousPage(); });
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 10);
    i0.ɵɵlistener("click", function SlideshowComponent_div_4_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.nextPage(); });
    i0.ɵɵelement(4, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
class SlideshowComponent {
    constructor(renderer, elem, service) {
        this.renderer = renderer;
        this.elem = elem;
        this.service = service;
        this.perPage = 5;
        this.id = "1";
        this.activePage = 1;
        this.fullWidthSlide = false;
        this.play = true;
        this.timer = 1000;
        this.items = [
            `<img src="https://images.unsplash.com/photo-1636297461709-0812290a9dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1640067181866-3041ad1d9ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1641945165700-2f6209644719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1640107588244-8fe79997aa8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1637592440237-a1fbc55990d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1634913940785-9730051200ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1641760378661-6f290a50a62d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1641505396502-fb349184b506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1642179930799-4503afdd07b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1642179930799-4503afdd07b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1641945165700-2f6209644719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="img img-responsive"/>`,
            `<img src="https://images.unsplash.com/photo-1640107588244-8fe79997aa8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="img img-responsive"/>`
        ];
        this.heightAdjustment = true;
        this.maxHeight = 300;
        this.showControls = false;
        this.gap = 3;
        // 1: 5px, 2: 10px, 3: 15px, 4: 20px; 5: 25px;
        this.class = "";
        this.screenProperties = {
            width: 0,
            height: 0
        };
        this.mainWrapperWidth = 0;
        this.singleSlideWidth = 0;
        this.totalPage = 1;
        this.totalItems = 0;
        this.slideshowMarginLeft = 0;
        this.dataCheck = {};
    }
    ngOnInit() {
        if (this.perPage < 1) {
            this.perPage = 1;
        }
    }
    ngAfterViewInit() {
        this.styleSetup();
        this.service.registerSlideshow(this.id, this.activePage, this.play, false, false, false, this.timer);
        this.subscription();
    }
    ngOnChanges() {
        this.styleSetup();
        this.autoPlay();
    }
    subscription() {
        this.watchNext();
        this.watchActivePage();
        this.watchPrevious();
        this.autoPlay();
    }
    onResize() {
        this.styleSetup();
    }
    handlings() {
        this.perPage = this.perPage > 0 ? this.perPage : 1;
        this.activePage = this.activePage > 0 ? this.activePage : 1;
    }
    styleSetup() {
        this.slideshow_wrapper = this.elem.nativeElement.querySelector(".slideshow-wrapper");
        this.screenProperties.width = this.slideshow_wrapper.offsetWidth;
        this.singleSlideWidth = this.screenProperties.width / this.perPage;
        this.mainWrapperWidth = this.screenProperties.width * (this.items.length / this.perPage);
        this.screenProperties.height = this.slideshow_wrapper.offsetHeight;
        this.mainWrapperStyles();
    }
    calculatePages() {
        this.totalItems = this.items.length;
        this.totalPage = this.fullWidthSlide ? Math.ceil(this.totalItems / this.perPage) : this.totalItems;
    }
    mainWrapperStyles() {
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        let maxHeight = this.slideWrapperStyles();
        this.renderer.setStyle(innerWrapper, "height", `${maxHeight}px`);
        this.renderer.setStyle(innerWrapper, "width", `${this.mainWrapperWidth}px`);
        this.calculatePages();
    }
    slideWrapperStyles() {
        var slides = this.elem.nativeElement.querySelectorAll('.slide-wrapper');
        let maxSlideHeight = this.maxHeight > 0 ? this.maxHeight : this.getMaxHeight(slides);
        for (let i = 0; i < slides.length; i++) {
            this.renderer.setStyle(slides[i], "height", `${maxSlideHeight}px`);
            this.renderer.setStyle(slides[i], 'width', `${this.singleSlideWidth}px`);
        }
        var singleSlides = this.elem.nativeElement.querySelectorAll('.slide');
        if (this.heightAdjustment) {
            for (let i = 0; i < singleSlides.length; i++) {
                let singleSlideHeight = singleSlides[i].offsetHeight;
                let margintop = (maxSlideHeight - singleSlideHeight) / 2;
                this.renderer.setStyle(singleSlides[i], "margin-top", margintop + "px");
            }
        }
        return maxSlideHeight;
    }
    getMaxHeight(slides) {
        let maxHeight = 0;
        for (let i = 0; i < slides.length; i++) {
            maxHeight = slides[i].offsetHeight > maxHeight ? slides[i].offsetHeight : maxHeight;
        }
        return maxHeight;
    }
    slideClasses() {
        let results = "";
        results += this.gap > 0 ? `pad-${(this.gap * 5)}` : "";
        return results;
    }
    watchNext() {
        this.service.watchSlideshowNext(this.id).subscribe((val) => {
            if (val) {
                this.performNext();
            }
        });
    }
    watchPrevious() {
        this.service.watchSlideshowPrevious(this.id).subscribe((val) => {
            if (val) {
                this.performPrevious();
            }
        });
    }
    watchActivePage() {
        this.service.watchSlideshowActivePage(this.id).subscribe((val) => {
            this.activePage = val;
        });
    }
    performNext() {
        if (!this.fullWidthSlide) {
            if (this.activePage + (this.perPage - 1) < this.totalPage) {
                this.setActivePage(this.activePage + 1);
                this.slideshowMarginLeft -= this.singleSlideWidth;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}px`);
            }
            else {
                this.setActivePage(1);
                this.slideshowMarginLeft = 0;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `0`);
            }
        }
        else {
            if (this.activePage < this.totalPage) {
                this.setActivePage(this.activePage + 1);
                this.slideshowMarginLeft -= 100;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}%`);
            }
            else {
                this.setActivePage(1);
                this.slideshowMarginLeft = 0;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `0`);
            }
        }
    }
    performPrevious() {
        if (!this.fullWidthSlide) {
            if (this.activePage - (this.perPage - 1) > 1) {
                this.setActivePage(this.activePage - 1);
                this.slideshowMarginLeft += this.singleSlideWidth;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}px`);
            }
            else {
                this.setActivePage(this.totalPage);
                this.slideshowMarginLeft = -((this.totalPage - (this.perPage)) * this.singleSlideWidth);
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}px`);
            }
        }
        else {
            if (this.activePage > 1) {
                this.setActivePage(this.activePage - 1);
                this.slideshowMarginLeft += 100;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}%`);
            }
            else {
                this.setActivePage(this.totalPage);
                this.slideshowMarginLeft = (this.totalPage - 1) * -100;
                let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
                this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}%`);
            }
        }
    }
    setActivePage(active) {
        this.service.changeSlideActivePage(this.id, active);
    }
    next() {
        this.nextPage();
    }
    previous() {
        this.previousPage();
    }
    nextPage() {
        this.service.nextSlide(this.id);
    }
    previousPage() {
        this.service.previousSlide(this.id);
    }
    playSlidesOp() {
        this.pauseSlideOp();
        var $this = this;
        this.service.playSlideShow(this.id);
    }
    pauseSlideOp() {
        this.service.pauseSlideshow(this.id);
    }
    autoPlay() {
        if (this.play) {
            this.playSlidesOp();
        }
        else {
            this.pauseSlideOp();
        }
    }
}
SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) { return new (t || SlideshowComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MaterialgrammiService)); };
SlideshowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideshowComponent, selectors: [["mg-slideshow"]], hostBindings: function SlideshowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function SlideshowComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { perPage: "perPage", id: "id", activePage: "activePage", fullWidthSlide: "fullWidthSlide", play: "play", timer: "timer", items: "items", heightAdjustment: "heightAdjustment", maxHeight: "maxHeight", showControls: "showControls", gap: "gap", class: "class" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 3, consts: [[1, "slideshow-wrapper", 3, "ngClass"], ["slideshowWrapper", ""], [1, "slideshow"], [4, "ngFor", "ngForOf"], ["class", "controls", 4, "ngIf"], [1, "slide-wrapper"], [1, "slide", 3, "innerHtml", "ngClass"], [1, "controls"], [1, "control-previous", 3, "click"], [1, "fas", "fa-chevron-left"], [1, "control-next", 3, "click"], [1, "fas", "fa-chevron-right"]], template: function SlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, SlideshowComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, SlideshowComponent_div_4_Template, 5, 0, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showControls);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideshowComponent, [{
        type: Component,
        args: [{ selector: 'mg-slideshow', template: "<div class=\"slideshow-wrapper\" #slideshowWrapper [ngClass]=\"class\">\n  <div class=\"slideshow\">\n    <ng-container *ngFor=\"let item of items; let i = index;\">\n      <div class=\"slide-wrapper\">\n        <div class=\"slide\" [innerHtml]=\"item\" [ngClass]=\"slideClasses()\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"controls\" *ngIf=\"showControls\">\n    <a class=\"control-previous\" (click)=\"previousPage()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"control-next\" (click)=\"nextPage()\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: MaterialgrammiService }]; }, { perPage: [{
            type: Input
        }], id: [{
            type: Input
        }], activePage: [{
            type: Input
        }], fullWidthSlide: [{
            type: Input
        }], play: [{
            type: Input
        }], timer: [{
            type: Input
        }], items: [{
            type: Input
        }], heightAdjustment: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], showControls: [{
            type: Input
        }], gap: [{
            type: Input
        }], class: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();

const _c0$5 = ["*"];
class ModalComponent {
    constructor(service) {
        this.service = service;
        this.show = false;
        this.id = "0";
        this.position = "top";
        this.modalSize = "md";
        this.overlayClass = "grey8";
    }
    ngOnInit() {
        this.service.registerModal(this.id, this.show);
        this.subscribeToModal();
    }
    subscribeToModal() {
        this.service.watchModal(this.id).subscribe((val) => {
            this.show = val;
        });
    }
    close() {
        this.service.closeModal(this.id);
    }
    mainModelClasses() {
        let classes = "";
        classes += `${this.show ? 'active' : ''}`;
        return classes;
    }
    overlayClasses() {
        let classes = "";
        classes += `${this.show ? 'active' : ''}`;
        classes += ` ${this.overlayClass}`;
        return classes;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["mg-modal"]], inputs: { show: "show", id: "id", position: "position", modalSize: "modalSize", overlayClass: "overlayClass" }, ngContentSelectors: _c0$5, decls: 4, vars: 7, consts: [[1, "modal", 3, "ngClass"], [3, "ngClass"], [1, "overlay", "blur", 3, "ngClass", "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵlistener("click", function ModalComponent_Template_div_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainModelClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate2("content on-", ctx.position, " ", ctx.modalSize, "");
        i0.ɵɵproperty("ngClass", ctx.mainModelClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.overlayClasses());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'mg-modal', template: "<div class=\"modal\" [ngClass]=\"mainModelClasses()\">\n  <div class=\"content on-{{position}} {{modalSize}}\" [ngClass]=\"mainModelClasses()\">\n    <ng-content></ng-content>\n  </div>\n  <div (click)=\"close()\" class=\"overlay blur\" [ngClass]=\"overlayClasses()\"></div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { show: [{
            type: Input
        }], id: [{
            type: Input
        }], position: [{
            type: Input
        }], modalSize: [{
            type: Input
        }], overlayClass: [{
            type: Input
        }] }); })();

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["mg-sidebar"]], decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "sidebar works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'mg-sidebar', template: "<p>sidebar works!</p>\n", styles: [""] }]
    }], function () { return []; }, null); })();

const _c0$4 = [[["", "mg-data", "sidebar"]], "*"];
const _c1 = ["[mg-data=sidebar]", "*"];
class OffcanvasComponent {
    constructor(service) {
        this.service = service;
        this.active = false;
        this.id = this.service.makeid(10, this.service.makeid(10, "offcanvas"));
        this.widgetID = "";
    }
    ngOnInit() {
        this.service.registerOffCanvas(this.id, this.active);
        this.watch();
    }
    mainClasses() {
        let results = "";
        results += this.active ? " active" : "";
        return results;
    }
    open() {
        this.service.openCanvas(this.id);
    }
    close() {
        this.service.closeCanvas(this.id);
    }
    watch() {
        this.service.watchCanvas(this.id).subscribe((data) => {
            this.active = data;
        });
    }
}
OffcanvasComponent.ɵfac = function OffcanvasComponent_Factory(t) { return new (t || OffcanvasComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
OffcanvasComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OffcanvasComponent, selectors: [["mg-offcanvas"]], inputs: { active: "active", id: "id" }, ngContentSelectors: _c1, decls: 5, vars: 1, consts: [[1, "offcanvas", 3, "ngClass"], [1, "sidebar-wrapper"], [1, "content-wrapper"]], template: function OffcanvasComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$4);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵprojection(4, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OffcanvasComponent, [{
        type: Component,
        args: [{ selector: 'mg-offcanvas', template: "<div class=\"offcanvas\" [ngClass]=\"mainClasses()\">\n  <div class=\"sidebar-wrapper\">\n    <ng-content select=\"[mg-data=sidebar]\"></ng-content>\n  </div>\n  <div class=\"content-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { active: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();

function TabComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function TabComponent_a_3_Template_a_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const tb_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.activateWidget(tb_r1.widget); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tb_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", tb_r1.name, i0.ɵɵsanitizeHtml)("ngClass", ctx_r0.buttonClass(tb_r1.widget));
} }
const _c0$3 = ["*"];
class TabComponent {
    constructor(service) {
        this.service = service;
        this.options = [];
        this.isVertical = true;
        this.bg = "";
        this.active = "";
        this.id = "";
        this.theme = "success";
        this.components = [];
        this.activeComponent = "";
    }
    ngOnInit() {
        if (this.id == "") {
            this.id = this.service.makeid(10, "tab");
        }
        this.getComponents();
        if (this.active == "") {
            this.active = this.components[0];
        }
        this.service.registerTab(this.id, this.components, this.active);
        if (this.options && this.options[0] && this.options[0].widget) {
            this.activateWidget(this.options[0].widget);
        }
        this.watchActive();
    }
    getComponents() {
        for (let i = 0; i < this.options.length; i++) {
            this.components.push(this.options[i].widget);
        }
    }
    watchActive() {
        this.service.watchTab(this.id).subscribe((res) => {
            this.activeComponent = res;
        });
    }
    activateWidget(widgetID) {
        this.service.openTab(this.id, widgetID);
    }
    mainClasses() {
        let classes = "";
        classes += this.isVertical ? "vertical" : "horizontal";
        classes += ` ${this.theme}`;
        return classes;
    }
    buttonClass(componentId) {
        return this.activeComponent == componentId ? "active" : "";
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
TabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabComponent, selectors: [["mg-tab"]], inputs: { options: "options", isVertical: "isVertical", bg: "bg", active: "active", id: "id", theme: "theme" }, ngContentSelectors: _c0$3, decls: 6, vars: 3, consts: [[1, "tab-wrapper", 3, "ngClass"], [1, "tab-links", 3, "ngClass"], [1, "tabs"], [3, "innerHtml", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "innerHtml", "ngClass", "click"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, TabComponent_a_3_Template, 1, 2, "a", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.mainClasses());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.bg);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabComponent, [{
        type: Component,
        args: [{ selector: 'mg-tab', template: "<div class=\"tab-wrapper\" [ngClass]=\"mainClasses()\">\n    <div class=\"tab-links\" [ngClass]=\"bg\">\n        <div class=\"tabs\">\n            <a *ngFor=\"let tb of options\" [innerHtml]=\"tb.name\" (click)=\"activateWidget(tb.widget)\" [ngClass]=\"buttonClass(tb.widget)\"></a>\n        </div>\n    </div>\n    <div class=\"tab-content\">\n        <ng-content></ng-content>\n    </div>\n</div>", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { options: [{
            type: Input
        }], isVertical: [{
            type: Input
        }], bg: [{
            type: Input
        }], active: [{
            type: Input
        }], id: [{
            type: Input
        }], theme: [{
            type: Input
        }] }); })();

const _c0$2 = ["*"];
class WizardComponent {
    constructor(service) {
        this.service = service;
        this.active = 0;
        this.id = "1";
        this.widgets = ["step1", "step2", "step3"];
        this.step = new EventEmitter();
        this.isCompleted = new EventEmitter();
        this.activeStep = 0;
    }
    ngOnInit() {
        this.service.registerWizard(this.id, this.widgets, this.active);
        this.watch();
    }
    ngOnChanges() {
        this.service.registerWizard(this.id, this.widgets, this.active);
    }
    watch() {
        this.service.watchWizardActive(this.id).subscribe((activeNumber) => {
            console.log("watching step number", activeNumber);
            this.step.emit({
                id: this.widgets[activeNumber],
                number: activeNumber
            });
        });
        this.service.watchWizardCompleted(this.id).subscribe((completed) => {
            console.log("watching completed", completed);
            this.isCompleted.emit(completed);
        });
    }
}
WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
WizardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WizardComponent, selectors: [["mg-wizard"]], inputs: { active: "active", id: "id", widgets: "widgets" }, outputs: { step: "step", isCompleted: "isCompleted" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$2, decls: 2, vars: 0, consts: [[1, "wizard"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WizardComponent, [{
        type: Component,
        args: [{ selector: 'mg-wizard', template: "<div class=\"wizard\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { active: [{
            type: Input
        }], id: [{
            type: Input
        }], widgets: [{
            type: Input
        }], step: [{
            type: Output
        }], isCompleted: [{
            type: Output
        }] }); })();

class NotificationsComponent {
    constructor(service) {
        this.service = service;
        this.theme = "primary";
        this.id = "1";
        this.position = "right-top";
        this.timer = 2000;
    }
    ngOnInit() {
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(i0.ɵɵdirectiveInject(MaterialgrammiService)); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationsComponent, selectors: [["mg-notifications"]], inputs: { theme: "theme", id: "id", position: "position", timer: "timer" }, decls: 2, vars: 0, template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "notifications works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsComponent, [{
        type: Component,
        args: [{ selector: 'mg-notifications', template: "<p>notifications works!</p>\n", styles: [""] }]
    }], function () { return [{ type: MaterialgrammiService }]; }, { theme: [{
            type: Input
        }], id: [{
            type: Input
        }], position: [{
            type: Input
        }], timer: [{
            type: Input
        }] }); })();

class CountdownComponent {
    constructor() {
        this.till = "25 December 2050";
        this.expiredText = "expired";
        this.parseProperties = {
            day: "day",
            days: "days",
            hour: "hour",
            hours: "hours",
            minute: "minute",
            minutes: "minutes",
            second: "second",
            seconds: "seconds"
        };
        this.class = "";
        this.timeover = new EventEmitter(false);
        this.endDate = new Date();
        this.display = "";
    }
    ngAfterContentInit() {
        this.endDate = new Date(this.till);
        this.count();
    }
    count() {
        var _this = this;
        var x = setInterval(function () {
            var dateNow = new Date();
            var now = new Date().getTime();
            var distance = _this.endDate.getTime() - now;
            var days = _this.getDays();
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            _this.display = "<span class='countdown-days'>" + days + " " + _this.updateDisplay(days, "d") + "</span><span class='countdown-hours'> " + hours + " " + _this.updateDisplay(hours, "h") + " </span><span class='countdown-minutes'>"
                + minutes + " " + _this.updateDisplay(minutes, "m") + "</span><span class='countdown-seconds'> " + seconds + " " + _this.updateDisplay(seconds, "s") + "</span>";
            if (distance < 0) {
                clearInterval(x);
                _this.display = _this.expiredText;
            }
        }, 1000);
    }
    getDays() {
        // One day Time in ms (milliseconds)
        var one_day = 1000 * 60 * 60 * 24;
        // To set present_dates to two variables
        var present_date = new Date();
        // 0-11 is Month in JavaScript
        var christmas_day = this.endDate;
        // To Calculate next year's Christmas if passed already.
        if (present_date.getMonth() == 11 && present_date.getDate() > 25)
            christmas_day.setFullYear(christmas_day.getFullYear() + 1);
        // To Calculate the result in milliseconds and then converting into days
        var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);
        // To remove the decimals from the (Result) resulting days value
        return parseInt((Result).toFixed(0));
    }
    updateDisplay(amount, unit = "d") {
        if (unit == "d") {
            return amount > 1 ? this.parseProperties.days : this.parseProperties.day;
        }
        if (unit == "h") {
            return amount > 1 ? this.parseProperties.hours : this.parseProperties.hour;
        }
        if (unit == "m") {
            return amount > 1 ? this.parseProperties.minutes : this.parseProperties.minute;
        }
        if (unit == "s") {
            return amount > 1 ? this.parseProperties.seconds : this.parseProperties.second;
        }
        return "";
    }
}
CountdownComponent.ɵfac = function CountdownComponent_Factory(t) { return new (t || CountdownComponent)(); };
CountdownComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CountdownComponent, selectors: [["mg-countdown"]], inputs: { till: "till", expiredText: "expiredText", parseProperties: "parseProperties", class: "class" }, outputs: { timeover: "timeover" }, decls: 2, vars: 2, consts: [[3, "innerHtml", "ngClass"]], template: function CountdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelement(1, "span", 0);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.display, i0.ɵɵsanitizeHtml)("ngClass", ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountdownComponent, [{
        type: Component,
        args: [{ selector: 'mg-countdown', template: "<ng-container><span [innerHtml]=\"display\" [ngClass]=\"class\"></span></ng-container>\n", styles: [""] }]
    }], function () { return []; }, { till: [{
            type: Input
        }], expiredText: [{
            type: Input
        }], parseProperties: [{
            type: Input
        }], class: [{
            type: Input
        }], timeover: [{
            type: Output
        }] }); })();

const _c0$1 = ["myImage"];
class ImageComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.src = "";
        this.responsive = true;
        this.rounded = false;
        this.circled = false;
        this.shadowed = false;
        this.class = "";
        this.filters = {
            blur: false,
            brightness: false,
            contrast: false,
            grayscale: false,
            invert: false,
            hue: false,
            opacity: false,
            saturate: false,
            sepia: false
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.applyFilters();
    }
    applyFilters() {
        let filters = this.createFilters();
        this.renderer.setStyle(this.image.nativeElement, 'filter', filters);
    }
    imageClasses() {
        let results = "img";
        results += this.responsive ? " img-responsive" : "";
        results += this.rounded ? " rounded" : "";
        results += !this.rounded && this.circled ? " circled" : "";
        results += this.shadowed ? " shadow-2" : "";
        results += ` ${this.class}`;
        return results;
    }
    createFilters() {
        let filter = "";
        filter += (this.filters.blur !== undefined && this.filters.blur !== false) ? ` blur(${this.filters.blur}px)` : "";
        filter += (this.filters.brightness !== undefined && this.filters.brightness !== false) ? ` brightness(${this.filters.brightness}%)` : "";
        filter += (this.filters.contrast !== undefined && this.filters.contrast !== false) ? ` contrast(${this.filters.contrast}%)` : "";
        filter += (this.filters.grayscale !== undefined && this.filters.grayscale !== false) ? ` grayscale(${this.filters.grayscale}%)` : "";
        filter += (this.filters.invert !== undefined && this.filters.invert !== false) ? ` invert(${this.filters.invert}%)` : "";
        filter += (this.filters.hue !== undefined && this.filters.hue !== false) ? ` hue-rotate(${this.filters.hue}deg)` : "";
        filter += (this.filters.opacity !== undefined && this.filters.opacity !== false) ? ` opacity(${this.filters.opacity}%)` : "";
        filter += (this.filters.saturate !== undefined && this.filters.saturate !== false) ? ` saturate(${this.filters.saturate}%)` : "";
        filter += (this.filters.sepia !== undefined && this.filters.sepia !== false) ? ` sepia(${this.filters.sepia}%)` : "";
        console.log("Filter loooks like ==> ", filter);
        return filter;
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
ImageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageComponent, selectors: [["mg-image"]], viewQuery: function ImageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.image = _t.first);
    } }, inputs: { src: "src", responsive: "responsive", rounded: "rounded", circled: "circled", shadowed: "shadowed", class: "class", filters: "filters" }, decls: 2, vars: 2, consts: [[3, "src", "ngClass"], ["myImage", ""]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "img", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("src", ctx.src, i0.ɵɵsanitizeUrl)("ngClass", ctx.imageClasses());
    } }, directives: [i1.NgClass], styles: [".img.rounded[_ngcontent-%COMP%]{border-radius:5px}.img.circled[_ngcontent-%COMP%]{border-radius:50%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageComponent, [{
        type: Component,
        args: [{ selector: 'mg-image', template: "<img [src]=\"src\" [ngClass]=\"imageClasses()\" #myImage/>\n", styles: [".img.rounded{border-radius:5px}.img.circled{border-radius:50%}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { src: [{
            type: Input
        }], responsive: [{
            type: Input
        }], rounded: [{
            type: Input
        }], circled: [{
            type: Input
        }], shadowed: [{
            type: Input
        }], class: [{
            type: Input
        }], filters: [{
            type: Input
        }], image: [{
            type: ViewChild,
            args: ['myImage']
        }] }); })();

class DateRangeComponent {
    constructor() {
        this.labels = {
            start: "start date",
            end: "end date"
        };
        this.style = {
            input: {
                theme: "success",
                style: "control",
                darkmode: false,
                class: ""
            },
            calendar: {
                disabled: [],
                theme: "success"
            }
        };
        this.class = "";
        this.disable_range_start = {
            before: false,
            after: false
        };
        this.disable_range_end = {
            before: false,
            after: false
        };
        this.selected = {
            startdate: false,
            enddate: false
        };
        this.range = new EventEmitter();
    }
    ngOnInit() {
        this.initInput();
    }
    ngOnChanges() {
        this.initInput();
    }
    initInput() {
        this.formattedInput = {
            one: {
                ...this.style.input
            },
            two: {
                ...this.style.input
            }
        };
        this.formattedInput.one.control = new FormControl();
        this.formattedInput.two.control = new FormControl();
    }
    selectedStartDate(event) {
        this.disable_range_end.before = event;
        this.selected.startdate = event;
        this.range.emit(this.selected);
    }
    selectedEndDate(event) {
        this.disable_range_start.after = event;
        this.selected.enddate = event;
        this.range.emit(this.selected);
    }
}
DateRangeComponent.ɵfac = function DateRangeComponent_Factory(t) { return new (t || DateRangeComponent)(); };
DateRangeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateRangeComponent, selectors: [["mg-daterange"]], inputs: { labels: "labels", style: "style", class: "class" }, outputs: { range: "range" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 7, consts: [[1, "row", 3, "ngClass"], [1, "col", "m6", "l6", "s12"], [1, "padR-3"], [3, "input", "label", "disabledRange", "getdate"], [1, "padL-3"], [3, "input", "disabledRange", "label", "getdate"]], template: function DateRangeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "mg-date", 3);
        i0.ɵɵlistener("getdate", function DateRangeComponent_Template_mg_date_getdate_3_listener($event) { return ctx.selectedStartDate($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "mg-date", 5);
        i0.ɵɵlistener("getdate", function DateRangeComponent_Template_mg_date_getdate_6_listener($event) { return ctx.selectedEndDate($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.class);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("input", ctx.formattedInput.one)("label", ctx.labels.start)("disabledRange", ctx.disable_range_start);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("input", ctx.formattedInput.two)("disabledRange", ctx.disable_range_end)("label", ctx.labels.end);
    } }, directives: [i1.NgClass, DateInputComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateRangeComponent, [{
        type: Component,
        args: [{ selector: 'mg-daterange', template: "<div class=\"row\" [ngClass]=\"class\">\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padR-3\">\n            <mg-date [input]=\"formattedInput.one\" [label]=\"labels.start\" \n            [disabledRange] = \"disable_range_start\"\n            (getdate)=\"selectedStartDate($event)\"></mg-date>\n        </div>\n    </div>\n    <div class=\"col m6 l6 s12\">\n        <div class=\"padL-3\">\n            <mg-date [input]=\"formattedInput.two\" \n            [disabledRange] = \"disable_range_end\"\n            [label]=\"labels.end\" (getdate)=\"selectedEndDate($event)\"></mg-date>\n        </div>\n    </div>\n</div>", styles: [""] }]
    }], function () { return []; }, { labels: [{
            type: Input
        }], style: [{
            type: Input
        }], class: [{
            type: Input
        }], range: [{
            type: Output
        }] }); })();

const _c0 = ["*"];
class ComponentComponent {
    constructor() {
        this.size = "n";
        this.class = "";
    }
    ngOnInit() {
    }
    containerClass() {
        let results = "";
        results += this.size == "s" ? "pad-10" : "";
        results += this.size == "m" ? "pad-30" : "";
        results += this.size == "l" ? "pad-50" : "";
        results += this.size == "xl" ? "pad-80" : "";
        return results;
    }
}
ComponentComponent.ɵfac = function ComponentComponent_Factory(t) { return new (t || ComponentComponent)(); };
ComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentComponent, selectors: [["mg-component"]], inputs: { size: "size", class: "class" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "container", 3, "ngClass"]], template: function ComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.containerClass() + " " + ctx.class);
    } }, directives: [i1.NgClass], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentComponent, [{
        type: Component,
        args: [{ selector: 'mg-component', template: "<div class=\"container\" [ngClass]=\"containerClass() + ' ' + class\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { size: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["mg-slider"]], decls: 2, vars: 0, template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "slider works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{ selector: 'mg-slider', template: "<p>slider works!</p>\n", styles: [""] }]
    }], function () { return []; }, null); })();

class MaterialgrammiModule {
}
MaterialgrammiModule.ɵfac = function MaterialgrammiModule_Factory(t) { return new (t || MaterialgrammiModule)(); };
MaterialgrammiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MaterialgrammiModule });
MaterialgrammiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialgrammiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaterialgrammiComponent,
                    TestComponentComponent,
                    AccordionComponent,
                    WidgetComponent,
                    AccordionItemComponent,
                    AlertComponent,
                    BreadcrumbComponent,
                    CardComponent,
                    ChipComponent,
                    DragableComponent,
                    DropableComponent,
                    FooterComponent,
                    CheckboxComponent,
                    DateInputComponent,
                    InputComponent,
                    RadioComponent,
                    SelectComponent,
                    SwitchComponent,
                    TextInputComponent,
                    ListComponent,
                    LoaderComponent,
                    NavbarComponent,
                    NoteComponent,
                    PaginationComponent,
                    TableComponent,
                    ToastComponent,
                    ChatComponent,
                    CollapseComponent,
                    DropdownComponent,
                    MegamenuComponent,
                    ButtonComponent,
                    SlideshowComponent,
                    ModalComponent,
                    SidebarComponent,
                    OverlayComponent,
                    OffcanvasComponent,
                    TabComponent,
                    WizardComponent,
                    NotificationsComponent,
                    CalendarComponent,
                    CountdownComponent,
                    ImageComponent,
                    DateRangeComponent,
                    ComponentComponent,
                    SliderComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [
                    MaterialgrammiComponent,
                    TestComponentComponent,
                    AccordionComponent,
                    WidgetComponent,
                    AlertComponent,
                    BreadcrumbComponent,
                    CardComponent,
                    ChipComponent,
                    DragableComponent,
                    DropableComponent,
                    FooterComponent,
                    CheckboxComponent,
                    DateInputComponent,
                    InputComponent,
                    RadioComponent,
                    SelectComponent,
                    SwitchComponent,
                    TextInputComponent,
                    ListComponent,
                    LoaderComponent,
                    NavbarComponent,
                    NoteComponent,
                    PaginationComponent,
                    TableComponent,
                    ToastComponent,
                    ChatComponent,
                    CollapseComponent,
                    DropdownComponent,
                    MegamenuComponent,
                    ButtonComponent,
                    SlideshowComponent,
                    ModalComponent,
                    SidebarComponent,
                    OverlayComponent,
                    OffcanvasComponent,
                    TabComponent,
                    WizardComponent,
                    NotificationsComponent,
                    CalendarComponent,
                    CountdownComponent,
                    ImageComponent,
                    DateRangeComponent,
                    ComponentComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaterialgrammiModule, { declarations: [MaterialgrammiComponent,
        TestComponentComponent,
        AccordionComponent,
        WidgetComponent,
        AccordionItemComponent,
        AlertComponent,
        BreadcrumbComponent,
        CardComponent,
        ChipComponent,
        DragableComponent,
        DropableComponent,
        FooterComponent,
        CheckboxComponent,
        DateInputComponent,
        InputComponent,
        RadioComponent,
        SelectComponent,
        SwitchComponent,
        TextInputComponent,
        ListComponent,
        LoaderComponent,
        NavbarComponent,
        NoteComponent,
        PaginationComponent,
        TableComponent,
        ToastComponent,
        ChatComponent,
        CollapseComponent,
        DropdownComponent,
        MegamenuComponent,
        ButtonComponent,
        SlideshowComponent,
        ModalComponent,
        SidebarComponent,
        OverlayComponent,
        OffcanvasComponent,
        TabComponent,
        WizardComponent,
        NotificationsComponent,
        CalendarComponent,
        CountdownComponent,
        ImageComponent,
        DateRangeComponent,
        ComponentComponent,
        SliderComponent], imports: [CommonModule,
        RouterModule], exports: [MaterialgrammiComponent,
        TestComponentComponent,
        AccordionComponent,
        WidgetComponent,
        AlertComponent,
        BreadcrumbComponent,
        CardComponent,
        ChipComponent,
        DragableComponent,
        DropableComponent,
        FooterComponent,
        CheckboxComponent,
        DateInputComponent,
        InputComponent,
        RadioComponent,
        SelectComponent,
        SwitchComponent,
        TextInputComponent,
        ListComponent,
        LoaderComponent,
        NavbarComponent,
        NoteComponent,
        PaginationComponent,
        TableComponent,
        ToastComponent,
        ChatComponent,
        CollapseComponent,
        DropdownComponent,
        MegamenuComponent,
        ButtonComponent,
        SlideshowComponent,
        ModalComponent,
        SidebarComponent,
        OverlayComponent,
        OffcanvasComponent,
        TabComponent,
        WizardComponent,
        NotificationsComponent,
        CalendarComponent,
        CountdownComponent,
        ImageComponent,
        DateRangeComponent,
        ComponentComponent] }); })();

/*
 * Public API Surface of materialgrammi
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AlertComponent, BreadcrumbComponent, ButtonComponent, CalendarComponent, CardComponent, ChatComponent, CheckboxComponent, ChipComponent, CollapseComponent, ComponentComponent, CountdownComponent, DateInputComponent, DateRangeComponent, DragableComponent, DropableComponent, DropdownComponent, FooterComponent, ImageComponent, InputComponent, ListComponent, LoaderComponent, MaterialgrammiComponent, MaterialgrammiModule, MaterialgrammiService, MegamenuComponent, ModalComponent, NavbarComponent, NoteComponent, NotificationsComponent, OffcanvasComponent, OverlayComponent, PaginationComponent, RadioComponent, SelectComponent, SidebarComponent, SlideshowComponent, SwitchComponent, TabComponent, TableComponent, TestComponentComponent, TextInputComponent, ToastComponent, WidgetComponent, WizardComponent };
//# sourceMappingURL=ng-materialgrammi.mjs.map
