import { Component, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
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
export class SlideshowComponent {
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
SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) { return new (t || SlideshowComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.MaterialgrammiService)); };
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
    } }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideshowComponent, [{
        type: Component,
        args: [{ selector: 'mg-slideshow', template: "<div class=\"slideshow-wrapper\" #slideshowWrapper [ngClass]=\"class\">\n  <div class=\"slideshow\">\n    <ng-container *ngFor=\"let item of items; let i = index;\">\n      <div class=\"slide-wrapper\">\n        <div class=\"slide\" [innerHtml]=\"item\" [ngClass]=\"slideClasses()\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"controls\" *ngIf=\"showControls\">\n    <a class=\"control-previous\" (click)=\"previousPage()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"control-next\" (click)=\"nextPage()\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.MaterialgrammiService }]; }, { perPage: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzaG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0V6Ryw2QkFBeUQ7SUFDdkQsOEJBQTJCO0lBQ3pCLHlCQUF1RTtJQUN6RSxpQkFBTTtJQUNSLDBCQUFlOzs7O0lBRlEsZUFBa0I7SUFBbEIsc0RBQWtCLGtDQUFBOzs7O0lBSTNDLDhCQUEyQztJQUN6Qyw0QkFBcUQ7SUFBekIsMEpBQVMscUJBQWMsSUFBQztJQUFDLHVCQUFtQztJQUFBLGlCQUFJO0lBQzVGLDZCQUE2QztJQUFyQiwwSkFBUyxpQkFBVSxJQUFDO0lBQUMsd0JBQW9DO0lBQUEsaUJBQUk7SUFDdkYsaUJBQU07O0FESFIsTUFBTSxPQUFPLGtCQUFrQjtJQTZDN0IsWUFBb0IsUUFBbUIsRUFBVSxJQUFnQixFQUFVLE9BQThCO1FBQXJGLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUE1Q2hHLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixPQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsVUFB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LE9BQU87a0JBQWYsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBY0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUE4Q04sUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsZ3JhbW1pU2VydmljZSB9IGZyb20gJy4uLy4uL21hdGVyaWFsZ3JhbW1pLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1zbGlkZXNob3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVzaG93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2xpZGVzaG93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXNob3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwZXJQYWdlID0gNTtcbiAgQElucHV0KCkgaWQgPSBcIjFcIjtcbiAgQElucHV0KCkgYWN0aXZlUGFnZSA9IDE7XG4gIEBJbnB1dCgpIGZ1bGxXaWR0aFNsaWRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYXkgPSB0cnVlO1xuICBASW5wdXQoKSB0aW1lciA9IDEwMDA7XG4gIEBJbnB1dCgpIGl0ZW1zID0gW1xuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM2Mjk3NDYxNzA5LTA4MTIyOTBhOWRjYz9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTgxJnE9ODBcIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5gLFxuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQwMDY3MTgxODY2LTMwNDFhZDFkOWFlMj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTgwJnE9ODBcIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5gLFxuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQxOTQ1MTY1NzAwLTJmNjIwOTY0NDcxOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDY0JnE9ODBcIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5gLFxuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQwMTA3NTg4MjQ0LThmZTc5OTk3YWE4ZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAzMiZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzNzU5MjQ0MDIzNy1hMWZiYzU1OTkwZDU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTM4NyZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzNDkxMzk0MDc4NS05NzMwMDUxMjAwYWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MSZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MTc2MDM3ODY2MS02ZjI5MGE1MGE2MmQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTM4NyZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MTUwNTM5NjUwMi1mYjM0OTE4NGI1MDY/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTM4NyZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MjE3OTkzMDc5OS00NTAzYWZkZDA3YjQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NzQmcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmAsXG4gICAgYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NDIxNzk5MzA3OTktNDUwM2FmZGQwN2I0P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTc0JnE9ODBcIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5gLFxuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQxOTQ1MTY1NzAwLTJmNjIwOTY0NDcxOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDY0JnE9ODBcIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5gLFxuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQwMTA3NTg4MjQ0LThmZTc5OTk3YWE4ZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAzMiZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YFxuICBdO1xuICBASW5wdXQoKSBoZWlnaHRBZGp1c3RtZW50ID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4SGVpZ2h0ID0gMzAwO1xuICBASW5wdXQoKSBzaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgQElucHV0KCkgZ2FwID0gMztcbiAgLy8gMTogNXB4LCAyOiAxMHB4LCAzOiAxNXB4LCA0OiAyMHB4OyA1OiAyNXB4O1xuICBASW5wdXQoKSBjbGFzcyA9IFwiXCI7XG4gIHNsaWRlc2hvd193cmFwcGVyOiBhbnk7XG5cbiAgc2NyZWVuUHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcblxuICBtYWluV3JhcHBlcldpZHRoID0gMDtcbiAgc2luZ2xlU2xpZGVXaWR0aCA9IDA7XG5cbiAgdG90YWxQYWdlID0gMTtcbiAgdG90YWxJdGVtcyA9IDA7XG5cbiAgc2xpZGVzaG93TWFyZ2luTGVmdCA9IDA7XG5cbiAgc2xpZGVJbnRlcnZhbDogYW55O1xuXG4gIGRhdGFDaGVjazogYW55ID0ge307XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIHNlcnZpY2U6IE1hdGVyaWFsZ3JhbW1pU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGVyUGFnZSA8IDEpIHtcbiAgICAgIHRoaXMucGVyUGFnZSA9IDE7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc3R5bGVTZXR1cCgpO1xuICAgIHRoaXMuc2VydmljZS5yZWdpc3RlclNsaWRlc2hvdyh0aGlzLmlkLCB0aGlzLmFjdGl2ZVBhZ2UsIHRoaXMucGxheSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdGhpcy50aW1lcik7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGVTZXR1cCgpO1xuICAgIHRoaXMuYXV0b1BsYXkoKTtcbiAgfVxuXG4gIHN1YnNjcmlwdGlvbigpIHtcbiAgICB0aGlzLndhdGNoTmV4dCgpO1xuICAgIHRoaXMud2F0Y2hBY3RpdmVQYWdlKCk7XG4gICAgdGhpcy53YXRjaFByZXZpb3VzKCk7XG4gICAgdGhpcy5hdXRvUGxheSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc3R5bGVTZXR1cCgpO1xuICB9XG5cbiAgaGFuZGxpbmdzKCkge1xuICAgIHRoaXMucGVyUGFnZSA9IHRoaXMucGVyUGFnZSA+IDAgPyB0aGlzLnBlclBhZ2UgOiAxO1xuICAgIHRoaXMuYWN0aXZlUGFnZSA9IHRoaXMuYWN0aXZlUGFnZSA+IDAgPyB0aGlzLmFjdGl2ZVBhZ2UgOiAxO1xuICB9XG5cblxuXG4gIHN0eWxlU2V0dXAoKSB7XG4gICAgdGhpcy5zbGlkZXNob3dfd3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93LXdyYXBwZXJcIik7XG4gICAgdGhpcy5zY3JlZW5Qcm9wZXJ0aWVzLndpZHRoID0gdGhpcy5zbGlkZXNob3dfd3JhcHBlci5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLnNpbmdsZVNsaWRlV2lkdGggPSB0aGlzLnNjcmVlblByb3BlcnRpZXMud2lkdGggLyB0aGlzLnBlclBhZ2U7XG4gICAgdGhpcy5tYWluV3JhcHBlcldpZHRoID0gdGhpcy5zY3JlZW5Qcm9wZXJ0aWVzLndpZHRoICogKHRoaXMuaXRlbXMubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcbiAgICB0aGlzLnNjcmVlblByb3BlcnRpZXMuaGVpZ2h0ID0gdGhpcy5zbGlkZXNob3dfd3JhcHBlci5vZmZzZXRIZWlnaHQ7XG4gICAgdGhpcy5tYWluV3JhcHBlclN0eWxlcygpO1xuICB9XG5cbiAgY2FsY3VsYXRlUGFnZXMoKSB7XG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgdGhpcy50b3RhbFBhZ2UgPSB0aGlzLmZ1bGxXaWR0aFNsaWRlID8gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMucGVyUGFnZSkgOiB0aGlzLnRvdGFsSXRlbXM7XG4gIH1cblxuICBtYWluV3JhcHBlclN0eWxlcygpIHtcbiAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgbGV0IG1heEhlaWdodCA9IHRoaXMuc2xpZGVXcmFwcGVyU3R5bGVzKCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbm5lcldyYXBwZXIsIFwiaGVpZ2h0XCIsIGAke21heEhlaWdodH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIndpZHRoXCIsIGAke3RoaXMubWFpbldyYXBwZXJXaWR0aH1weGApO1xuICAgIHRoaXMuY2FsY3VsYXRlUGFnZXMoKTtcbiAgfVxuXG4gIHNsaWRlV3JhcHBlclN0eWxlcygpIHtcbiAgICB2YXIgc2xpZGVzID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlLXdyYXBwZXInKTtcbiAgICBsZXQgbWF4U2xpZGVIZWlnaHQgPSB0aGlzLm1heEhlaWdodCA+IDAgPyB0aGlzLm1heEhlaWdodCA6IHRoaXMuZ2V0TWF4SGVpZ2h0KHNsaWRlcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpZGVzW2ldLCBcImhlaWdodFwiLCBgJHttYXhTbGlkZUhlaWdodH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzbGlkZXNbaV0sICd3aWR0aCcsIGAke3RoaXMuc2luZ2xlU2xpZGVXaWR0aH1weGApO1xuICAgIH1cbiAgICB2YXIgc2luZ2xlU2xpZGVzID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyk7XG5cbiAgICBpZiAodGhpcy5oZWlnaHRBZGp1c3RtZW50KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmdsZVNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2luZ2xlU2xpZGVIZWlnaHQgPSBzaW5nbGVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgbWFyZ2ludG9wID0gKG1heFNsaWRlSGVpZ2h0IC0gc2luZ2xlU2xpZGVIZWlnaHQpIC8gMjtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzaW5nbGVTbGlkZXNbaV0sIFwibWFyZ2luLXRvcFwiLCBtYXJnaW50b3AgKyBcInB4XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXhTbGlkZUhlaWdodDtcbiAgfVxuXG4gIGdldE1heEhlaWdodChzbGlkZXM6IGFueSkge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBtYXhIZWlnaHQgPSBzbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0ID4gbWF4SGVpZ2h0ID8gc2xpZGVzW2ldLm9mZnNldEhlaWdodCA6IG1heEhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIG1heEhlaWdodDtcbiAgfVxuXG4gIHNsaWRlQ2xhc3NlcygpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLmdhcCA+IDAgPyBgcGFkLSR7KHRoaXMuZ2FwICogNSl9YCA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICB3YXRjaE5leHQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoU2xpZGVzaG93TmV4dCh0aGlzLmlkKS5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybU5leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHdhdGNoUHJldmlvdXMoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLndhdGNoU2xpZGVzaG93UHJldmlvdXModGhpcy5pZCkuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1QcmV2aW91cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgd2F0Y2hBY3RpdmVQYWdlKCkge1xuICAgIHRoaXMuc2VydmljZS53YXRjaFNsaWRlc2hvd0FjdGl2ZVBhZ2UodGhpcy5pZCkuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVQYWdlID0gdmFsO1xuICAgIH0pO1xuICB9XG5cbiAgcGVyZm9ybU5leHQoKSB7XG4gICAgaWYgKCF0aGlzLmZ1bGxXaWR0aFNsaWRlKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVQYWdlICsgKHRoaXMucGVyUGFnZSAtIDEpIDwgdGhpcy50b3RhbFBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHRoaXMuYWN0aXZlUGFnZSArIDEpO1xuICAgICAgICB0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnQgLT0gdGhpcy5zaW5nbGVTbGlkZVdpZHRoO1xuICAgICAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIm1hcmdpbi1sZWZ0XCIsIGAke3RoaXMuc2xpZGVzaG93TWFyZ2luTGVmdH1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKDEpO1xuICAgICAgICB0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnQgPSAwO1xuICAgICAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIm1hcmdpbi1sZWZ0XCIsIGAwYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2UgPCB0aGlzLnRvdGFsUGFnZSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UodGhpcy5hY3RpdmVQYWdlICsgMSk7XG4gICAgICAgIHRoaXMuc2xpZGVzaG93TWFyZ2luTGVmdCAtPSAxMDA7XG4gICAgICAgIGxldCBpbm5lcldyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvd1wiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbm5lcldyYXBwZXIsIFwibWFyZ2luLWxlZnRcIiwgYCR7dGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0fSVgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFnZSgxKTtcbiAgICAgICAgdGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0ID0gMDtcbiAgICAgICAgbGV0IGlubmVyV3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93XCIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlubmVyV3JhcHBlciwgXCJtYXJnaW4tbGVmdFwiLCBgMGApO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcGVyZm9ybVByZXZpb3VzKCkge1xuICAgIGlmICghdGhpcy5mdWxsV2lkdGhTbGlkZSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZSAtICh0aGlzLnBlclBhZ2UgLTEpID4gMSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UodGhpcy5hY3RpdmVQYWdlIC0gMSk7XG4gICAgICAgIHRoaXMuc2xpZGVzaG93TWFyZ2luTGVmdCArPSB0aGlzLnNpbmdsZVNsaWRlV2lkdGg7XG4gICAgICAgIGxldCBpbm5lcldyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvd1wiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbm5lcldyYXBwZXIsIFwibWFyZ2luLWxlZnRcIiwgYCR7dGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0fXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UodGhpcy50b3RhbFBhZ2UpO1xuICAgICAgICB0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnQgPSAtKCh0aGlzLnRvdGFsUGFnZSAtICh0aGlzLnBlclBhZ2UpKSAqIHRoaXMuc2luZ2xlU2xpZGVXaWR0aCk7XG4gICAgICAgIGxldCBpbm5lcldyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvd1wiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbm5lcldyYXBwZXIsIFwibWFyZ2luLWxlZnRcIiwgYCR7dGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0fXB4YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2UgPiAxKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFnZSh0aGlzLmFjdGl2ZVBhZ2UgLSAxKTtcbiAgICAgICAgdGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0ICs9IDEwMDtcbiAgICAgICAgbGV0IGlubmVyV3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93XCIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlubmVyV3JhcHBlciwgXCJtYXJnaW4tbGVmdFwiLCBgJHt0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnR9JWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHRoaXMudG90YWxQYWdlKTtcbiAgICAgICAgdGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0ID0gKHRoaXMudG90YWxQYWdlIC0gMSkgKiAtMTAwO1xuICAgICAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIm1hcmdpbi1sZWZ0XCIsIGAke3RoaXMuc2xpZGVzaG93TWFyZ2luTGVmdH0lYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlUGFnZShhY3RpdmU6IG51bWJlcikge1xuICAgIHRoaXMuc2VydmljZS5jaGFuZ2VTbGlkZUFjdGl2ZVBhZ2UodGhpcy5pZCwgYWN0aXZlKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5uZXh0UGFnZSgpO1xuICB9XG4gIHByZXZpb3VzKCkge1xuICAgIHRoaXMucHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLnNlcnZpY2UubmV4dFNsaWRlKHRoaXMuaWQpO1xuICB9XG4gIHByZXZpb3VzUGFnZSgpIHtcbiAgICB0aGlzLnNlcnZpY2UucHJldmlvdXNTbGlkZSh0aGlzLmlkKTtcbiAgfVxuXG4gIHBsYXlTbGlkZXNPcCgpIHtcbiAgICB0aGlzLnBhdXNlU2xpZGVPcCgpO1xuICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5zZXJ2aWNlLnBsYXlTbGlkZVNob3codGhpcy5pZCk7XG4gIH1cblxuICBwYXVzZVNsaWRlT3AoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnBhdXNlU2xpZGVzaG93KHRoaXMuaWQpO1xuICB9XG5cblxuICBhdXRvUGxheSgpIHtcbiAgICBpZiAodGhpcy5wbGF5KSB7XG4gICAgICB0aGlzLnBsYXlTbGlkZXNPcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhdXNlU2xpZGVPcCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwic2xpZGVzaG93LXdyYXBwZXJcIiAjc2xpZGVzaG93V3JhcHBlciBbbmdDbGFzc109XCJjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwic2xpZGVzaG93XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZS13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZVwiIFtpbm5lckh0bWxdPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInNsaWRlQ2xhc3NlcygpXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiICpuZ0lmPVwic2hvd0NvbnRyb2xzXCI+XG4gICAgPGEgY2xhc3M9XCJjb250cm9sLXByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZpb3VzUGFnZSgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT5cbiAgICA8YSBjbGFzcz1cImNvbnRyb2wtbmV4dFwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=