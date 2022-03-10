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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRXhGLDhCQUF3RztJQUE1Qix3TkFBUywyQkFBaUIsSUFBQztJQUNyRyxZQUNGO0lBQUEsaUJBQU07Ozs7SUFGdUMsc0RBQThCO0lBQ3pFLGVBQ0Y7SUFERSx3Q0FDRjs7QURHRixNQUFNLE9BQU8sbUJBQW1CO0lBb0I5QjtRQW5CVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFHO1lBQ2YsSUFBSSxFQUFFLHNDQUFzQztZQUM1QyxRQUFRLEVBQUUscUNBQXFDO1NBQ2hELENBQUE7UUFFRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFaEIsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUdDLENBQUM7SUFFakIsUUFBUTtRQUNOLElB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dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBAT3V0cHV0KCkgcGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGdldGRhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJ0ZXh0LW9uLWRhcmtcIjtcbiAgQElucHV0KCkgZGF0YTogYW55ID0gW107XG4gIEBJbnB1dCgpIGZ1bGxEYXRhTW9kZSA9IHRydWU7XG4gIEBJbnB1dCgpIHBlclBhZ2UgPSAxMDtcbiAgQElucHV0KCkgY3VycmVudFBhZ2UgPSAxO1xuICBASW5wdXQoKSBpY29ucyA9IHtcbiAgICBuZXh0OiBgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5gLFxuICAgIHByZXZpb3VzOiBgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPmBcbiAgfVxuXG4gIHRvdGFsUGFnZXMgPSAwO1xuICB0b3RhbENvdW50ID0gMDtcbiAgcGFnZXM6IGFueSA9IFtdO1xuXG4gIF9kYXRhOmFueSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBhZ2UoKTtcbiAgICBcbiAgICB0aGlzLnNlbmREYXRhKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZWRcIiwgdGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jYWxjdWxhdGVQYWdlKCk7XG4gICAgdGhpcy5zZW5kRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZXNcIiwgdGhpcy5wYWdlcyk7XG4gIH1cblxuICBjYWxjdWxhdGVQYWdlKCkge1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICBpZiAodGhpcy5mdWxsRGF0YU1vZGUgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMuZGF0YTtcbiAgICB9XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxDb3VudCAvIHRoaXMucGVyUGFnZSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICBzZW5kRGF0YSgpIHtcbiAgICBpZiAodGhpcy5mdWxsRGF0YU1vZGUgJiYgdGhpcy50b3RhbENvdW50ID4gMCkge1xuICAgICAgbGV0IHRvYmVTbGljZWRGcm9tID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGVyUGFnZTtcbiAgICAgIGxldCB0b2JlU2xpY2VkVG8gPSB0aGlzLmN1cnJlbnRQYWdlICogdGhpcy5wZXJQYWdlO1xuICAgICAgbGV0IHJlZm9ybWVkRGF0YSA9IFtdO1xuICAgICAgZm9yKGxldCBpID0gdG9iZVNsaWNlZEZyb207IGkgPCB0b2JlU2xpY2VkVG87IGkrKyl7XG4gICAgICAgIHJlZm9ybWVkRGF0YS5wdXNoKHRoaXMuZGF0YVtpXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdldGRhdGEuZW1pdChyZWZvcm1lZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldGRhdGEuZW1pdCgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wZXJQYWdlKTtcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDbGljayhwYWdlTnVtYmVyOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHBhZ2VOdW1iZXIgIT0gXCJudW1iZXJcIikge1xuICAgICAgcGFnZU51bWJlciA9IHBhcnNlSW50KHBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcbiAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLnNlbmREYXRhKCk7XG4gIH1cblxuICBpc0FjdGl2ZVBhZ2UocGFnZU51bWJlcjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBwYWdlTnVtYmVyICE9IFwibnVtYmVyXCIpIHtcbiAgICAgIHBhZ2VOdW1iZXIgPSBwYXJzZUludChwYWdlTnVtYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPT0gcGFnZU51bWJlciA/ICdhY3RpdmUnIDogJyc7XG4gIH1cblxuICBvbk5leHQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgPCB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLmN1cnJlbnRQYWdlICsgMSA6IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgdGhpcy5zZW5kRGF0YSgpO1xuICB9XG5cbiAgb25QcmV2aW91cygpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSA+IDEgPyB0aGlzLmN1cnJlbnRQYWdlIC0gMSA6IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgdGhpcy5zZW5kRGF0YSgpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLXdyYXBwZXIgcGFnaW5hdGlvbi17e3RoZW1lfX1cIj5cbiAgPGRpdiBjbGFzcz1cInBhZ2UgcGFnZS1wcmV2aW91c1wiIFtpbm5lckh0bWxdPVwiaWNvbnMucHJldmlvdXNcIiAoY2xpY2spPVwib25QcmV2aW91cygpXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIiBbbmdDbGFzc109XCJpc0FjdGl2ZVBhZ2UocGFnZSlcIiAoY2xpY2spPVwib25QYWdlQ2xpY2socGFnZSlcIj5cbiAgICB7e3BhZ2V9fVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZ2UgcGFnZS1uZXh0XCIgW2lubmVySHRtbF09XCJpY29ucy5uZXh0XCIgKGNsaWNrKT1cIm9uTmV4dCgpXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==