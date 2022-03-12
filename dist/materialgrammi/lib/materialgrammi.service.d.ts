import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface Widget {
    id: string;
    type: string;
    options?: BehaviorSubject<any>;
    status: BehaviorSubject<boolean>;
}
export interface AccordionItem {
    id?: string;
}
export interface Accordion {
    id: string;
    items?: [AccordionItem];
    activeItem?: BehaviorSubject<boolean>;
}
export interface Collapse {
    id: string;
    status: BehaviorSubject<boolean>;
}
export interface Dropdown {
    id: string;
    status: BehaviorSubject<boolean>;
}
export interface MegaMenu {
    id: string;
    active: BehaviorSubject<string | boolean>;
}
export interface Modal {
    id: string;
    status: BehaviorSubject<boolean>;
}
export interface Overlay {
    id: string;
    status: BehaviorSubject<boolean>;
}
export interface Wizard {
    id: string;
    active: BehaviorSubject<number>;
    on: number;
    completed: BehaviorSubject<boolean>;
    next: {
        index: number;
        id: string;
    };
    prev: {
        index: number;
        id: string;
    };
    components: [string];
}
export interface Slideshow {
    id: string;
    playInterval: any;
    timer: number;
    next: BehaviorSubject<boolean>;
    previous: BehaviorSubject<boolean>;
    active: BehaviorSubject<number>;
    play: BehaviorSubject<boolean>;
}
export interface OffCanvas {
    id: string;
    status: BehaviorSubject<boolean>;
}
export interface Tab {
    active: BehaviorSubject<string>;
    components: [string];
}
export declare class MaterialgrammiService {
    private widgets;
    private collapse;
    private dropdown;
    private megamenu;
    private modal;
    private overlay;
    private wizard;
    private slideshow;
    private offcanvas;
    private tab;
    constructor();
    makeid(length: number, str: string | number): string;
    registerTab(id: string, components: any, active: string): void;
    openTab(id: string, component_id: string): void;
    closeAllTab(id: string): void;
    watchTab(id: string): any;
    registerOffCanvas(id: string, status: boolean): void;
    openCanvas(id: string): void;
    closeCanvas(id: string): void;
    watchCanvas(id: string): any;
    registerSlideshow(id: string, activePage: number, play: boolean, next: boolean, previous: boolean, playInterval: any, timer: number): void;
    watchSlideshowPlay(id: string): any;
    watchSlideshowNext(id: string): any;
    watchSlideshowPrevious(id: string): any;
    watchSlideshowActivePage(id: string): any;
    nextSlide(id: string): void;
    previousSlide(id: string): void;
    changeSlidePlay(id: string, play: boolean): void;
    changeSlideActivePage(id: string, activePage: number): void;
    playSlideShow(id: string): void;
    pauseSlideshow(id: string): void;
    registerWizard(wizardId: string, components: any, active?: number): void;
    wizardNextStep(wizardId: string): void;
    WizardPreviousStep(wizardId: string): void;
    WizardCloseAll(wizardId: string): void;
    activateWizardStep(wizardId: string, index: number): void;
    isWizardComplete(wizardId: string): void;
    isWizardNotComplete(wizardId: string): void;
    watchWizardActive(wizardId: string): Observable<number>;
    watchWizardCompleted(wizardId: string): Observable<true | false>;
    registerOverlay(id: string, status: boolean): void;
    openOverlay(id: string): void;
    closeOverlay(id: string): void;
    watchOverlay(id: string): any;
    registerModal(id: string, status: boolean): void;
    openModal(id: string): void;
    closeModal(id: string): void;
    watchModal(id: string): any;
    registerDropDown(id: string, status: boolean): void;
    openDropDown(id: string): void;
    closeDropDown(id: string): void;
    watchDropDown(id: string): any;
    registerCollapse(id: string, status: boolean): void;
    openCollapse(id: string): void;
    closeCollapse(id: string): void;
    watchCollapse(id: string): any;
    getWidgetId(id: string, type: string, parent_id: string): string;
    widgetExists(id: string, parent_type: string, parent_id: string): boolean;
    registerWidget(id: string, parent_type: string, parent_id: string, options?: any): void;
    openWidget(id: string, parent_type: string, parent_id: string): void;
    closeWidget(id: string, parent_type: string, parent_id: string): void;
    closeAllParentWidgets(parent_type: string, parent_id: string): void;
    watchWidget(id: string, parent_type: string, parent_id: string): Observable<boolean>;
    watchOptions(id: string, parent_type: string, parent_id: string): Observable<any>;
    registerMegaMenu(id: string, links: string[]): void;
    watchMegaMenu(id: string): any;
    openMegaMenu(id: string, targetid: string): void;
    closeMegaMenu(id: string): void;
    fallbackCopyTextToClipboard(text: string): void;
    copyToClipboard(text: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialgrammiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaterialgrammiService>;
}
