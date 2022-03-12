import { Component, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../materialgrammi.service";
import * as i2 from "@angular/common";
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
SlideshowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SlideshowComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.MaterialgrammiService }], target: i0.ɵɵFactoryTarget.Component });
SlideshowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SlideshowComponent, selector: "mg-slideshow", inputs: { perPage: "perPage", id: "id", activePage: "activePage", fullWidthSlide: "fullWidthSlide", play: "play", timer: "timer", items: "items", heightAdjustment: "heightAdjustment", maxHeight: "maxHeight", showControls: "showControls", gap: "gap", class: "class" }, host: { listeners: { "window:resize": "onResize($event)" } }, usesOnChanges: true, ngImport: i0, template: "<div class=\"slideshow-wrapper\" #slideshowWrapper [ngClass]=\"class\">\n  <div class=\"slideshow\">\n    <ng-container *ngFor=\"let item of items; let i = index;\">\n      <div class=\"slide-wrapper\">\n        <div class=\"slide\" [innerHtml]=\"item\" [ngClass]=\"slideClasses()\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"controls\" *ngIf=\"showControls\">\n    <a class=\"control-previous\" (click)=\"previousPage()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"control-next\" (click)=\"nextPage()\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SlideshowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-slideshow', template: "<div class=\"slideshow-wrapper\" #slideshowWrapper [ngClass]=\"class\">\n  <div class=\"slideshow\">\n    <ng-container *ngFor=\"let item of items; let i = index;\">\n      <div class=\"slide-wrapper\">\n        <div class=\"slide\" [innerHtml]=\"item\" [ngClass]=\"slideClasses()\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"controls\" *ngIf=\"showControls\">\n    <a class=\"control-previous\" (click)=\"previousPage()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"control-next\" (click)=\"nextPage()\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.MaterialgrammiService }]; }, propDecorators: { perPage: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzaG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTdHLE1BQU0sT0FBTyxrQkFBa0I7SUE2QzdCLFlBQW9CLFFBQW1CLEVBQVUsSUFBZ0IsRUFBVSxPQUE4QjtRQUFyRixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBNUNoRyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNULGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFVBQUssR0FBRztZQUNmLHVNQUF1TTtZQUN2TSx1TUFBdU07WUFDdk0sdU1BQXVNO1lBQ3ZNLHdNQUF3TTtZQUN4TSx1TUFBdU07WUFDdk0sdU1BQXVNO1lBQ3ZNLHVNQUF1TTtZQUN2TSx1TUFBdU07WUFDdk0sd01BQXdNO1lBQ3hNLHdNQUF3TTtZQUN4TSx1TUFBdU07WUFDdk0sd01BQXdNO1NBQ3pNLENBQUM7UUFDTyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixpQkFBWSxHQUFH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ZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbGdyYW1taVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXRlcmlhbGdyYW1taS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctc2xpZGVzaG93JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlc2hvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlc2hvdy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVzaG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcGVyUGFnZSA9IDU7XG4gIEBJbnB1dCgpIGlkID0gXCIxXCI7XG4gIEBJbnB1dCgpIGFjdGl2ZVBhZ2UgPSAxO1xuICBASW5wdXQoKSBmdWxsV2lkdGhTbGlkZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGF5ID0gdHJ1ZTtcbiAgQElucHV0KCkgdGltZXIgPSAxMDAwO1xuICBASW5wdXQoKSBpdGVtcyA9IFtcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzNjI5NzQ2MTcwOS0wODEyMjkwYTlkY2M/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTU4MSZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MDA2NzE4MTg2Ni0zMDQxYWQxZDlhZTI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTU4MCZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MTk0NTE2NTcwMC0yZjYyMDk2NDQ3MTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQ2NCZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MDEwNzU4ODI0NC04ZmU3OTk5N2FhOGU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMzImcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmAsXG4gICAgYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2Mzc1OTI0NDAyMzctYTFmYmM1NTk5MGQ1P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zODcmcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmAsXG4gICAgYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzQ5MTM5NDA3ODUtOTczMDA1MTIwMGFkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzEmcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmAsXG4gICAgYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NDE3NjAzNzg2NjEtNmYyOTBhNTBhNjJkP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zODcmcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmAsXG4gICAgYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NDE1MDUzOTY1MDItZmIzNDkxODRiNTA2P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zODcmcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmAsXG4gICAgYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NDIxNzk5MzA3OTktNDUwM2FmZGQwN2I0P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTc0JnE9ODBcIiBjbGFzcz1cImltZyBpbWctcmVzcG9uc2l2ZVwiLz5gLFxuICAgIGA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQyMTc5OTMwNzk5LTQ1MDNhZmRkMDdiND9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk3NCZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MTk0NTE2NTcwMC0yZjYyMDk2NDQ3MTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQ2NCZxPTgwXCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+YCxcbiAgICBgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MDEwNzU4ODI0NC04ZmU3OTk5N2FhOGU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMzImcT04MFwiIGNsYXNzPVwiaW1nIGltZy1yZXNwb25zaXZlXCIvPmBcbiAgXTtcbiAgQElucHV0KCkgaGVpZ2h0QWRqdXN0bWVudCA9IHRydWU7XG4gIEBJbnB1dCgpIG1heEhlaWdodCA9IDMwMDtcbiAgQElucHV0KCkgc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdhcCA9IDM7XG4gIC8vIDE6IDVweCwgMjogMTBweCwgMzogMTVweCwgNDogMjBweDsgNTogMjVweDtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuICBzbGlkZXNob3dfd3JhcHBlcjogYW55O1xuXG4gIHNjcmVlblByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG5cbiAgbWFpbldyYXBwZXJXaWR0aCA9IDA7XG4gIHNpbmdsZVNsaWRlV2lkdGggPSAwO1xuXG4gIHRvdGFsUGFnZSA9IDE7XG4gIHRvdGFsSXRlbXMgPSAwO1xuXG4gIHNsaWRlc2hvd01hcmdpbkxlZnQgPSAwO1xuXG4gIHNsaWRlSW50ZXJ2YWw6IGFueTtcblxuICBkYXRhQ2hlY2s6IGFueSA9IHt9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBNYXRlcmlhbGdyYW1taVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBlclBhZ2UgPCAxKSB7XG4gICAgICB0aGlzLnBlclBhZ2UgPSAxO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlU2V0dXAoKTtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXJTbGlkZXNob3codGhpcy5pZCwgdGhpcy5hY3RpdmVQYWdlLCB0aGlzLnBsYXksIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRoaXMudGltZXIpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlU2V0dXAoKTtcbiAgICB0aGlzLmF1dG9QbGF5KCk7XG4gIH1cblxuICBzdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy53YXRjaE5leHQoKTtcbiAgICB0aGlzLndhdGNoQWN0aXZlUGFnZSgpO1xuICAgIHRoaXMud2F0Y2hQcmV2aW91cygpO1xuICAgIHRoaXMuYXV0b1BsYXkoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnN0eWxlU2V0dXAoKTtcbiAgfVxuXG4gIGhhbmRsaW5ncygpIHtcbiAgICB0aGlzLnBlclBhZ2UgPSB0aGlzLnBlclBhZ2UgPiAwID8gdGhpcy5wZXJQYWdlIDogMTtcbiAgICB0aGlzLmFjdGl2ZVBhZ2UgPSB0aGlzLmFjdGl2ZVBhZ2UgPiAwID8gdGhpcy5hY3RpdmVQYWdlIDogMTtcbiAgfVxuXG5cblxuICBzdHlsZVNldHVwKCkge1xuICAgIHRoaXMuc2xpZGVzaG93X3dyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvdy13cmFwcGVyXCIpO1xuICAgIHRoaXMuc2NyZWVuUHJvcGVydGllcy53aWR0aCA9IHRoaXMuc2xpZGVzaG93X3dyYXBwZXIub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5zaW5nbGVTbGlkZVdpZHRoID0gdGhpcy5zY3JlZW5Qcm9wZXJ0aWVzLndpZHRoIC8gdGhpcy5wZXJQYWdlO1xuICAgIHRoaXMubWFpbldyYXBwZXJXaWR0aCA9IHRoaXMuc2NyZWVuUHJvcGVydGllcy53aWR0aCAqICh0aGlzLml0ZW1zLmxlbmd0aCAvIHRoaXMucGVyUGFnZSk7XG4gICAgdGhpcy5zY3JlZW5Qcm9wZXJ0aWVzLmhlaWdodCA9IHRoaXMuc2xpZGVzaG93X3dyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMubWFpbldyYXBwZXJTdHlsZXMoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBhZ2VzKCkge1xuICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIHRoaXMudG90YWxQYWdlID0gdGhpcy5mdWxsV2lkdGhTbGlkZSA/IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLnBlclBhZ2UpIDogdGhpcy50b3RhbEl0ZW1zO1xuICB9XG5cbiAgbWFpbldyYXBwZXJTdHlsZXMoKSB7XG4gICAgbGV0IGlubmVyV3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93XCIpO1xuICAgIGxldCBtYXhIZWlnaHQgPSB0aGlzLnNsaWRlV3JhcHBlclN0eWxlcygpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcImhlaWdodFwiLCBgJHttYXhIZWlnaHR9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlubmVyV3JhcHBlciwgXCJ3aWR0aFwiLCBgJHt0aGlzLm1haW5XcmFwcGVyV2lkdGh9cHhgKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBhZ2VzKCk7XG4gIH1cblxuICBzbGlkZVdyYXBwZXJTdHlsZXMoKSB7XG4gICAgdmFyIHNsaWRlcyA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZS13cmFwcGVyJyk7XG4gICAgbGV0IG1heFNsaWRlSGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHQgPiAwID8gdGhpcy5tYXhIZWlnaHQgOiB0aGlzLmdldE1heEhlaWdodChzbGlkZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHNsaWRlc1tpXSwgXCJoZWlnaHRcIiwgYCR7bWF4U2xpZGVIZWlnaHR9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpZGVzW2ldLCAnd2lkdGgnLCBgJHt0aGlzLnNpbmdsZVNsaWRlV2lkdGh9cHhgKTtcbiAgICB9XG4gICAgdmFyIHNpbmdsZVNsaWRlcyA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xuXG4gICAgaWYgKHRoaXMuaGVpZ2h0QWRqdXN0bWVudCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVTbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNpbmdsZVNsaWRlSGVpZ2h0ID0gc2luZ2xlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IG1hcmdpbnRvcCA9IChtYXhTbGlkZUhlaWdodCAtIHNpbmdsZVNsaWRlSGVpZ2h0KSAvIDI7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2luZ2xlU2xpZGVzW2ldLCBcIm1hcmdpbi10b3BcIiwgbWFyZ2ludG9wICsgXCJweFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF4U2xpZGVIZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhIZWlnaHQoc2xpZGVzOiBhbnkpIHtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbWF4SGVpZ2h0ID0gc2xpZGVzW2ldLm9mZnNldEhlaWdodCA+IG1heEhlaWdodCA/IHNsaWRlc1tpXS5vZmZzZXRIZWlnaHQgOiBtYXhIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBtYXhIZWlnaHQ7XG4gIH1cblxuICBzbGlkZUNsYXNzZXMoKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5nYXAgPiAwID8gYHBhZC0keyh0aGlzLmdhcCAqIDUpfWAgOiBcIlwiO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgd2F0Y2hOZXh0KCkge1xuICAgIHRoaXMuc2VydmljZS53YXRjaFNsaWRlc2hvd05leHQodGhpcy5pZCkuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1OZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB3YXRjaFByZXZpb3VzKCkge1xuICAgIHRoaXMuc2VydmljZS53YXRjaFNsaWRlc2hvd1ByZXZpb3VzKHRoaXMuaWQpLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtUHJldmlvdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHdhdGNoQWN0aXZlUGFnZSgpIHtcbiAgICB0aGlzLnNlcnZpY2Uud2F0Y2hTbGlkZXNob3dBY3RpdmVQYWdlKHRoaXMuaWQpLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlUGFnZSA9IHZhbDtcbiAgICB9KTtcbiAgfVxuXG4gIHBlcmZvcm1OZXh0KCkge1xuICAgIGlmICghdGhpcy5mdWxsV2lkdGhTbGlkZSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFnZSArICh0aGlzLnBlclBhZ2UgLSAxKSA8IHRoaXMudG90YWxQYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFnZSh0aGlzLmFjdGl2ZVBhZ2UgKyAxKTtcbiAgICAgICAgdGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0IC09IHRoaXMuc2luZ2xlU2xpZGVXaWR0aDtcbiAgICAgICAgbGV0IGlubmVyV3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93XCIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlubmVyV3JhcHBlciwgXCJtYXJnaW4tbGVmdFwiLCBgJHt0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnR9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFnZSgxKTtcbiAgICAgICAgdGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0ID0gMDtcbiAgICAgICAgbGV0IGlubmVyV3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93XCIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlubmVyV3JhcHBlciwgXCJtYXJnaW4tbGVmdFwiLCBgMGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVQYWdlIDwgdGhpcy50b3RhbFBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHRoaXMuYWN0aXZlUGFnZSArIDEpO1xuICAgICAgICB0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnQgLT0gMTAwO1xuICAgICAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIm1hcmdpbi1sZWZ0XCIsIGAke3RoaXMuc2xpZGVzaG93TWFyZ2luTGVmdH0lYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UoMSk7XG4gICAgICAgIHRoaXMuc2xpZGVzaG93TWFyZ2luTGVmdCA9IDA7XG4gICAgICAgIGxldCBpbm5lcldyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvd1wiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbm5lcldyYXBwZXIsIFwibWFyZ2luLWxlZnRcIiwgYDBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHBlcmZvcm1QcmV2aW91cygpIHtcbiAgICBpZiAoIXRoaXMuZnVsbFdpZHRoU2xpZGUpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2UgLSAodGhpcy5wZXJQYWdlIC0xKSA+IDEpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHRoaXMuYWN0aXZlUGFnZSAtIDEpO1xuICAgICAgICB0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnQgKz0gdGhpcy5zaW5nbGVTbGlkZVdpZHRoO1xuICAgICAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIm1hcmdpbi1sZWZ0XCIsIGAke3RoaXMuc2xpZGVzaG93TWFyZ2luTGVmdH1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYWdlKHRoaXMudG90YWxQYWdlKTtcbiAgICAgICAgdGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0ID0gLSgodGhpcy50b3RhbFBhZ2UgLSAodGhpcy5wZXJQYWdlKSkgKiB0aGlzLnNpbmdsZVNsaWRlV2lkdGgpO1xuICAgICAgICBsZXQgaW5uZXJXcmFwcGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXNob3dcIik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5uZXJXcmFwcGVyLCBcIm1hcmdpbi1sZWZ0XCIsIGAke3RoaXMuc2xpZGVzaG93TWFyZ2luTGVmdH1weGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVQYWdlID4gMSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhZ2UodGhpcy5hY3RpdmVQYWdlIC0gMSk7XG4gICAgICAgIHRoaXMuc2xpZGVzaG93TWFyZ2luTGVmdCArPSAxMDA7XG4gICAgICAgIGxldCBpbm5lcldyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlc2hvd1wiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbm5lcldyYXBwZXIsIFwibWFyZ2luLWxlZnRcIiwgYCR7dGhpcy5zbGlkZXNob3dNYXJnaW5MZWZ0fSVgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFnZSh0aGlzLnRvdGFsUGFnZSk7XG4gICAgICAgIHRoaXMuc2xpZGVzaG93TWFyZ2luTGVmdCA9ICh0aGlzLnRvdGFsUGFnZSAtIDEpICogLTEwMDtcbiAgICAgICAgbGV0IGlubmVyV3JhcHBlciA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzaG93XCIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlubmVyV3JhcHBlciwgXCJtYXJnaW4tbGVmdFwiLCBgJHt0aGlzLnNsaWRlc2hvd01hcmdpbkxlZnR9JWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZVBhZ2UoYWN0aXZlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlcnZpY2UuY2hhbmdlU2xpZGVBY3RpdmVQYWdlKHRoaXMuaWQsIGFjdGl2ZSk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMubmV4dFBhZ2UoKTtcbiAgfVxuICBwcmV2aW91cygpIHtcbiAgICB0aGlzLnByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLm5leHRTbGlkZSh0aGlzLmlkKTtcbiAgfVxuICBwcmV2aW91c1BhZ2UoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnByZXZpb3VzU2xpZGUodGhpcy5pZCk7XG4gIH1cblxuICBwbGF5U2xpZGVzT3AoKSB7XG4gICAgdGhpcy5wYXVzZVNsaWRlT3AoKTtcbiAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuc2VydmljZS5wbGF5U2xpZGVTaG93KHRoaXMuaWQpO1xuICB9XG5cbiAgcGF1c2VTbGlkZU9wKCkge1xuICAgIHRoaXMuc2VydmljZS5wYXVzZVNsaWRlc2hvdyh0aGlzLmlkKTtcbiAgfVxuXG5cbiAgYXV0b1BsYXkoKSB7XG4gICAgaWYgKHRoaXMucGxheSkge1xuICAgICAgdGhpcy5wbGF5U2xpZGVzT3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXVzZVNsaWRlT3AoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInNsaWRlc2hvdy13cmFwcGVyXCIgI3NsaWRlc2hvd1dyYXBwZXIgW25nQ2xhc3NdPVwiY2xhc3NcIj5cbiAgPGRpdiBjbGFzcz1cInNsaWRlc2hvd1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xpZGUtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVcIiBbaW5uZXJIdG1sXT1cIml0ZW1cIiBbbmdDbGFzc109XCJzbGlkZUNsYXNzZXMoKVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIiAqbmdJZj1cInNob3dDb250cm9sc1wiPlxuICAgIDxhIGNsYXNzPVwiY29udHJvbC1wcmV2aW91c1wiIChjbGljayk9XCJwcmV2aW91c1BhZ2UoKVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+XG4gICAgPGEgY2xhc3M9XCJjb250cm9sLW5leHRcIiAoY2xpY2spPVwibmV4dFBhZ2UoKVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19