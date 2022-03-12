import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export class PaginationComponent {
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
        this.max = 22;
        this.totalPages = 0;
        this.totalCount = 0;
        this.pages = [];
        this.startFrom = 1;
        this._data = [];
    }
    ngOnInit() {
        this._data = JSON.parse(JSON.stringify(this.data));
        this.calculatePage();
        this.sendData();
    }
    ngOnChanges() {
        this.calculatePage();
        this.sendData();
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
        for (let i = this.startFrom; i <= this.totalPages; i++) {
            if (this.pages.length < (this.max + 1)) {
                this.pages.push(i);
            }
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
    removePages() {
        this.startFrom = (this.currentPage > 1) &&
            (this.currentPage < this.totalPages - this.max || (this.currentPage > this.max - this.max / 2)) ? this.currentPage - 1 : this.startFrom;
    }
    onPageClick(pageNumber) {
        if (typeof pageNumber != "number") {
            pageNumber = parseInt(pageNumber);
        }
        this.currentPage = pageNumber;
        this.page.emit(this.currentPage);
        this.sendData();
        this.removePages();
        this.calculatePage();
    }
    isActivePage(pageNumber) {
        if (typeof pageNumber != "number") {
            pageNumber = parseInt(pageNumber);
        }
        return this.currentPage == pageNumber ? 'active' : '';
    }
    onNext() {
        this.currentPage = this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
        this.page.emit(this.currentPage);
        this.sendData();
        this.removePages();
        this.calculatePage();
    }
    onPrevious() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
        this.page.emit(this.currentPage);
        this.sendData();
        this.removePages();
        this.calculatePage();
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["mg-pagination"]], inputs: { theme: "theme", data: "data", fullDataMode: "fullDataMode", perPage: "perPage", currentPage: "currentPage", icons: "icons", max: "max" }, outputs: { page: "page", getdata: "getdata" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[1, "page", "page-previous", "not-selectable", 3, "innerHtml", "click"], ["class", "page not-selectable", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page", "page-next", "not-selectable", 3, "innerHtml", "click"], [1, "page", "not-selectable", 3, "ngClass", "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'mg-pagination', template: "<div class=\"pagination-wrapper pagination-{{theme}}\">\n  <div class=\"page page-previous not-selectable\" [innerHtml]=\"icons.previous\" (click)=\"onPrevious()\"></div>\n  <div class=\"page not-selectable\" *ngFor=\"let page of pages\" [ngClass]=\"isActivePage(page)\" (click)=\"onPageClick(page)\">\n    {{page}}\n  </div>\n  <div class=\"page page-next not-selectable\" [innerHtml]=\"icons.next\" (click)=\"onNext()\"></div>\n</div>\n", styles: [""] }]
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
        }], max: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRXhGLDhCQUF1SDtJQUE1Qix3TkFBUywyQkFBaUIsSUFBQztJQUNwSCxZQUNGO0lBQUEsaUJBQU07Ozs7SUFGc0Qsc0RBQThCO0lBQ3hGLGVBQ0Y7SUFERSx3Q0FDRjs7QURHRixNQUFNLE9BQU8sbUJBQW1CO0lBc0I5QjtRQXJCVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFHO1lBQ2YsSUFBSSxFQUFFLHNDQUFzQztZQUM1QyxRQUFRLEVBQUUscUNBQXFDO1NBQ2hELENBQUE7UUFFUSxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FB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QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O3NGQXRHVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1BoQywyQkFBcUQ7UUFDbkQsOEJBQW1HO1FBQXZCLDZGQUFTLGdCQUFZLElBQUM7UUFBQyxpQkFBTTtRQUN6RyxvRUFFTTtRQUNOLDhCQUF1RjtRQUFuQiw2RkFBUyxZQUFRLElBQUM7UUFBQyxpQkFBTTtRQUMvRixpQkFBTTs7UUFORCwwRUFBK0M7UUFDSCxlQUE0QjtRQUE1QixpRUFBNEI7UUFDekIsZUFBUTtRQUFSLG1DQUFRO1FBR2YsZUFBd0I7UUFBeEIsNkRBQXdCOzt1RkRFeEQsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0UsZUFBZTtzQ0FLZixJQUFJO2tCQUFiLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0UsS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFLRyxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQE91dHB1dCgpIHBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBnZXRkYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0aGVtZSA9IFwidGV4dC1vbi1kYXJrXCI7XG4gIEBJbnB1dCgpIGRhdGE6IGFueSA9IFtdO1xuICBASW5wdXQoKSBmdWxsRGF0YU1vZGUgPSB0cnVlO1xuICBASW5wdXQoKSBwZXJQYWdlID0gMTA7XG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlID0gMTtcbiAgQElucHV0KCkgaWNvbnMgPSB7XG4gICAgbmV4dDogYDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+YCxcbiAgICBwcmV2aW91czogYDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5gXG4gIH1cblxuICBASW5wdXQoKSBtYXggPSAyMjtcblxuICB0b3RhbFBhZ2VzID0gMDtcbiAgdG90YWxDb3VudCA9IDA7XG4gIHBhZ2VzOiBhbnkgPSBbXTtcbiAgc3RhcnRGcm9tID0gMTtcbiAgX2RhdGE6YW55ID0gW107XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xuICAgIHRoaXMuY2FsY3VsYXRlUGFnZSgpO1xuICAgIFxuICAgIHRoaXMuc2VuZERhdGEoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2FsY3VsYXRlUGFnZSgpO1xuICAgIHRoaXMuc2VuZERhdGEoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBhZ2UoKSB7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGlmICh0aGlzLmZ1bGxEYXRhTW9kZSAmJiB0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50b3RhbENvdW50ID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbENvdW50ID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbENvdW50IC8gdGhpcy5wZXJQYWdlKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydEZyb207IGkgPD0gdGhpcy50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgIGlmKHRoaXMucGFnZXMubGVuZ3RoIDwgKHRoaXMubWF4KzEpKSB7XG4gICAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZW5kRGF0YSgpIHtcbiAgICBpZiAodGhpcy5mdWxsRGF0YU1vZGUgJiYgdGhpcy50b3RhbENvdW50ID4gMCkge1xuICAgICAgbGV0IHRvYmVTbGljZWRGcm9tID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGVyUGFnZTtcbiAgICAgIGxldCB0b2JlU2xpY2VkVG8gPSB0aGlzLmN1cnJlbnRQYWdlICogdGhpcy5wZXJQYWdlO1xuICAgICAgbGV0IHJlZm9ybWVkRGF0YSA9IFtdO1xuICAgICAgZm9yKGxldCBpID0gdG9iZVNsaWNlZEZyb207IGkgPCB0b2JlU2xpY2VkVG87IGkrKyl7XG4gICAgICAgIHJlZm9ybWVkRGF0YS5wdXNoKHRoaXMuZGF0YVtpXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdldGRhdGEuZW1pdChyZWZvcm1lZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldGRhdGEuZW1pdCgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wZXJQYWdlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVQYWdlcygpe1xuICAgIHRoaXMuc3RhcnRGcm9tID0gKHRoaXMuY3VycmVudFBhZ2UgPiAxKSAmJiBcbiAgICAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudG90YWxQYWdlcyAtIHRoaXMubWF4IHx8ICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy5tYXggLSB0aGlzLm1heC8yKSkgPyB0aGlzLmN1cnJlbnRQYWdlIC0gMSA6IHRoaXMuc3RhcnRGcm9tO1xuICB9XG5cbiAgb25QYWdlQ2xpY2socGFnZU51bWJlcjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBwYWdlTnVtYmVyICE9IFwibnVtYmVyXCIpIHtcbiAgICAgIHBhZ2VOdW1iZXIgPSBwYXJzZUludChwYWdlTnVtYmVyKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XG4gICAgdGhpcy5wYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gICAgdGhpcy5zZW5kRGF0YSgpO1xuICAgIHRoaXMucmVtb3ZlUGFnZXMoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBhZ2UoKTtcbiAgfVxuXG4gIGlzQWN0aXZlUGFnZShwYWdlTnVtYmVyOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHBhZ2VOdW1iZXIgIT0gXCJudW1iZXJcIikge1xuICAgICAgcGFnZU51bWJlciA9IHBhcnNlSW50KHBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSA9PSBwYWdlTnVtYmVyID8gJ2FjdGl2ZScgOiAnJztcbiAgfVxuXG4gIG9uTmV4dCgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudG90YWxQYWdlcyA/IHRoaXMuY3VycmVudFBhZ2UgKyAxIDogdGhpcy5jdXJyZW50UGFnZTtcbiAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLnNlbmREYXRhKCk7XG4gICAgdGhpcy5yZW1vdmVQYWdlcygpO1xuICAgIHRoaXMuY2FsY3VsYXRlUGFnZSgpO1xuICB9XG5cbiAgb25QcmV2aW91cygpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSA+IDEgPyB0aGlzLmN1cnJlbnRQYWdlIC0gMSA6IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgdGhpcy5wYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gICAgdGhpcy5zZW5kRGF0YSgpO1xuICAgIHRoaXMucmVtb3ZlUGFnZXMoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBhZ2UoKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi13cmFwcGVyIHBhZ2luYXRpb24te3t0aGVtZX19XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2UtcHJldmlvdXMgbm90LXNlbGVjdGFibGVcIiBbaW5uZXJIdG1sXT1cImljb25zLnByZXZpb3VzXCIgKGNsaWNrKT1cIm9uUHJldmlvdXMoKVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnZSBub3Qtc2VsZWN0YWJsZVwiICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCIgW25nQ2xhc3NdPVwiaXNBY3RpdmVQYWdlKHBhZ2UpXCIgKGNsaWNrKT1cIm9uUGFnZUNsaWNrKHBhZ2UpXCI+XG4gICAge3twYWdlfX1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2UtbmV4dCBub3Qtc2VsZWN0YWJsZVwiIFtpbm5lckh0bWxdPVwiaWNvbnMubmV4dFwiIChjbGljayk9XCJvbk5leHQoKVwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=