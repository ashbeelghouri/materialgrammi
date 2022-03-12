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
        this.removePages();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRXhGLDhCQUF1SDtJQUE1Qix3TkFBUywyQkFBaUIsSUFBQztJQUNwSCxZQUNGO0lBQUEsaUJBQU07Ozs7SUFGc0Qsc0RBQThCO0lBQ3hGLGVBQ0Y7SUFERSx3Q0FDRjs7QURHRixNQUFNLE9BQU8sbUJBQW1CO0lBc0I5QjtRQXJCVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFHO1lBQ2YsSUFBSSxFQUFFLHNDQUFzQztZQUM1QyxRQUFRLEVBQUUscUNBQXFDO1NBQ2hELENBQUE7UUFFUSxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FB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VyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOztzRkF2R1UsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUNQaEMsMkJBQXFEO1FBQ25ELDhCQUFtRztRQUF2Qiw2RkFBUyxnQkFBWSxJQUFDO1FBQUMsaUJBQU07UUFDekcsb0VBRU07UUFDTiw4QkFBdUY7UUFBbkIsNkZBQVMsWUFBUSxJQUFDO1FBQUMsaUJBQU07UUFDL0YsaUJBQU07O1FBTkQsMEVBQStDO1FBQ0gsZUFBNEI7UUFBNUIsaUVBQTRCO1FBQ3pCLGVBQVE7UUFBUixtQ0FBUTtRQUdmLGVBQXdCO1FBQXhCLDZEQUF3Qjs7dUZERXhELG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGVBQWU7c0NBS2YsSUFBSTtrQkFBYixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNFLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBS0csR0FBRztrQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBPdXRwdXQoKSBwYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZ2V0ZGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdGhlbWUgPSBcInRleHQtb24tZGFya1wiO1xuICBASW5wdXQoKSBkYXRhOiBhbnkgPSBbXTtcbiAgQElucHV0KCkgZnVsbERhdGFNb2RlID0gdHJ1ZTtcbiAgQElucHV0KCkgcGVyUGFnZSA9IDEwO1xuICBASW5wdXQoKSBjdXJyZW50UGFnZSA9IDE7XG4gIEBJbnB1dCgpIGljb25zID0ge1xuICAgIG5leHQ6IGA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPmAsXG4gICAgcHJldmlvdXM6IGA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+YFxuICB9XG5cbiAgQElucHV0KCkgbWF4ID0gMjI7XG5cbiAgdG90YWxQYWdlcyA9IDA7XG4gIHRvdGFsQ291bnQgPSAwO1xuICBwYWdlczogYW55ID0gW107XG4gIHN0YXJ0RnJvbSA9IDE7XG4gIF9kYXRhOmFueSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBhZ2UoKTtcbiAgICBcbiAgICB0aGlzLnNlbmREYXRhKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZVBhZ2VzKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVQYWdlKCk7XG4gICAgdGhpcy5zZW5kRGF0YSgpO1xuICB9XG5cbiAgY2FsY3VsYXRlUGFnZSgpIHtcbiAgICB0aGlzLnBhZ2VzID0gW107XG4gICAgaWYgKHRoaXMuZnVsbERhdGFNb2RlICYmIHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLmRhdGE7XG4gICAgfVxuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsQ291bnQgLyB0aGlzLnBlclBhZ2UpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXJ0RnJvbTsgaSA8PSB0aGlzLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgaWYodGhpcy5wYWdlcy5sZW5ndGggPCAodGhpcy5tYXgrMSkpIHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbmREYXRhKCkge1xuICAgIGlmICh0aGlzLmZ1bGxEYXRhTW9kZSAmJiB0aGlzLnRvdGFsQ291bnQgPiAwKSB7XG4gICAgICBsZXQgdG9iZVNsaWNlZEZyb20gPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wZXJQYWdlO1xuICAgICAgbGV0IHRvYmVTbGljZWRUbyA9IHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLnBlclBhZ2U7XG4gICAgICBsZXQgcmVmb3JtZWREYXRhID0gW107XG4gICAgICBmb3IobGV0IGkgPSB0b2JlU2xpY2VkRnJvbTsgaSA8IHRvYmVTbGljZWRUbzsgaSsrKXtcbiAgICAgICAgcmVmb3JtZWREYXRhLnB1c2godGhpcy5kYXRhW2ldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0ZGF0YS5lbWl0KHJlZm9ybWVkRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0ZGF0YS5lbWl0KCh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBlclBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBhZ2VzKCl7XG4gICAgdGhpcy5zdGFydEZyb20gPSAodGhpcy5jdXJyZW50UGFnZSA+IDEpICYmIFxuICAgICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50b3RhbFBhZ2VzIC0gdGhpcy5tYXggfHwgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm1heCAtIHRoaXMubWF4LzIpKSA/IHRoaXMuY3VycmVudFBhZ2UgLSAxIDogdGhpcy5zdGFydEZyb207XG4gIH1cblxuICBvblBhZ2VDbGljayhwYWdlTnVtYmVyOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHBhZ2VOdW1iZXIgIT0gXCJudW1iZXJcIikge1xuICAgICAgcGFnZU51bWJlciA9IHBhcnNlSW50KHBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcbiAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLnNlbmREYXRhKCk7XG4gICAgdGhpcy5yZW1vdmVQYWdlcygpO1xuICAgIHRoaXMuY2FsY3VsYXRlUGFnZSgpO1xuICB9XG5cbiAgaXNBY3RpdmVQYWdlKHBhZ2VOdW1iZXI6IGFueSkge1xuICAgIGlmICh0eXBlb2YgcGFnZU51bWJlciAhPSBcIm51bWJlclwiKSB7XG4gICAgICBwYWdlTnVtYmVyID0gcGFyc2VJbnQocGFnZU51bWJlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlID09IHBhZ2VOdW1iZXIgPyAnYWN0aXZlJyA6ICcnO1xuICB9XG5cbiAgb25OZXh0KCkge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50b3RhbFBhZ2VzID8gdGhpcy5jdXJyZW50UGFnZSArIDEgOiB0aGlzLmN1cnJlbnRQYWdlO1xuICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuY3VycmVudFBhZ2UpO1xuICAgIHRoaXMuc2VuZERhdGEoKTtcbiAgICB0aGlzLnJlbW92ZVBhZ2VzKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVQYWdlKCk7XG4gIH1cblxuICBvblByZXZpb3VzKCkge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlID4gMSA/IHRoaXMuY3VycmVudFBhZ2UgLSAxIDogdGhpcy5jdXJyZW50UGFnZTtcbiAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLnNlbmREYXRhKCk7XG4gICAgdGhpcy5yZW1vdmVQYWdlcygpO1xuICAgIHRoaXMuY2FsY3VsYXRlUGFnZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi13cmFwcGVyIHBhZ2luYXRpb24te3t0aGVtZX19XCI+XG4gIDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2UtcHJldmlvdXMgbm90LXNlbGVjdGFibGVcIiBbaW5uZXJIdG1sXT1cImljb25zLnByZXZpb3VzXCIgKGNsaWNrKT1cIm9uUHJldmlvdXMoKVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFnZSBub3Qtc2VsZWN0YWJsZVwiICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCIgW25nQ2xhc3NdPVwiaXNBY3RpdmVQYWdlKHBhZ2UpXCIgKGNsaWNrKT1cIm9uUGFnZUNsaWNrKHBhZ2UpXCI+XG4gICAge3twYWdlfX1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2UtbmV4dCBub3Qtc2VsZWN0YWJsZVwiIFtpbm5lckh0bWxdPVwiaWNvbnMubmV4dFwiIChjbGljayk9XCJvbk5leHQoKVwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=