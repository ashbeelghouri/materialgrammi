import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../collapse/collapse.component";
import * as i3 from "../button/button.component";
import * as i4 from "../select/select.component";
import * as i5 from "../input/input.component";
import * as i6 from "../pagination/pagination.component";
import * as i7 from "../dropable/dropable.component";
import * as i8 from "../dragable/dragable.component";
function TableComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, "Table");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r0.tableTitle, i0.ɵɵsanitizeHtml);
} }
function TableComponent_small_4_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 21);
    i0.ɵɵlistener("click", function TableComponent_small_4_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.openSorter(); });
    i0.ɵɵelementEnd();
} }
function TableComponent_small_4_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 22);
    i0.ɵɵlistener("click", function TableComponent_small_4_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.openFilter(); });
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
    const filter_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("control", filter_r13.val)("label", filter_r13.name);
} }
function TableComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "mg-pagination", 26);
    i0.ɵɵlistener("page", function TableComponent_div_19_Template_mg_pagination_page_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.setCurrentPage($event); })("getdata", function TableComponent_div_19_Template_mg_pagination_getdata_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.updatePaginatedData($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("currentPage", ctx_r3.currentPage)("theme", ctx_r3.theme)("fullDataMode", true)("data", ctx_r3.mgData)("perPage", ctx_r3.paginate.perPage);
} }
const _c0 = function (a0) { return { order: a0 }; };
function TableComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "span", 27);
    i0.ɵɵlistener("click", function TableComponent_th_23_Template_span_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const head_r17 = restoredCtx.$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.sort(head_r17); });
    i0.ɵɵelementStart(2, "mg-dropable", 28);
    i0.ɵɵlistener("dataRecieved", function TableComponent_th_23_Template_mg_dropable_dataRecieved_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r20); const k_r18 = restoredCtx.index; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.recieveData($event, k_r18); });
    i0.ɵɵelementStart(3, "mg-dragable", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const head_r17 = ctx.$implicit;
    const k_r18 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("data", i0.ɵɵpureFunction1(3, _c0, k_r18))("dragable", ctx_r4.dragableSort);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", head_r17, " ");
} }
function TableComponent_tr_26_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 17);
} if (rf & 2) {
    const col_r24 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", col_r24, i0.ɵɵsanitizeHtml);
} }
function TableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_26_td_1_Template, 1, 1, "td", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", data_r22);
} }
function TableComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "mg-pagination", 26);
    i0.ɵɵlistener("page", function TableComponent_div_27_Template_mg_pagination_page_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.setCurrentPage($event); })("getdata", function TableComponent_div_27_Template_mg_pagination_getdata_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.updatePaginatedData($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("currentPage", ctx_r6.currentPage)("theme", ctx_r6.theme)("fullDataMode", true)("data", ctx_r6.mgData)("perPage", ctx_r6.paginate.perPage);
} }
export class TableComponent {
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
        this.pagingPosition = {
            top: true,
            bottom: true
        };
        this.columnsOrder = [];
        this.showOptions = {
            title: false,
            filter: false,
            sort: false,
            count: false
        };
        this.currentPage = 1;
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
    setCurrentPage(event) {
        this.currentPage = event;
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
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["mg-table"]], inputs: { theme: "theme", mgData: "mgData", ignoredColumns: "ignoredColumns", sortBy: "sortBy", sortDirection: "sortDirection", tableTitle: "tableTitle", fixedHeader: "fixedHeader", dragableSort: "dragableSort", paginate: "paginate", pagingPosition: "pagingPosition", columnsOrder: "columnsOrder", showOptions: "showOptions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 28, vars: 14, consts: [[1, "pad-10"], [1, "pad-5"], [3, "innerHtml", 4, "ngIf"], ["class", "right", 4, "ngIf"], ["widgetId", "1", 3, "show"], [1, "pad-10", "collapse-filter-box"], ["theme", "success", "btnSize", "sm", 3, "clicked"], [1, "fas", "fa-search", "padR-5"], [1, "row"], ["class", "col m3 l3 s6", 4, "ngFor", "ngForOf"], ["widgetId", "2", 3, "show"], [1, "pad-10", "collapse-sorter-box"], [2, "margin-bottom", "5px"], [3, "options", "value"], ["class", "padV-5", 4, "ngIf"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "innerHtml"], [1, "right"], ["class", "fas fa-list-ol padL-5 pointer", 3, "click", 4, "ngIf"], ["class", "fas fa-filter padL-5 font-16 pointer", 3, "click", 4, "ngIf"], [1, "fas", "fa-list-ol", "padL-5", "pointer", 3, "click"], [1, "fas", "fa-filter", "padL-5", "font-16", "pointer", 3, "click"], [1, "col", "m3", "l3", "s6"], [3, "control", "label"], [1, "padV-5"], [3, "currentPage", "theme", "fullDataMode", "data", "perPage", "page", "getdata"], [3, "click"], [3, "dataRecieved"], [3, "data", "dragable"], [3, "innerHtml", 4, "ngFor", "ngForOf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(19, TableComponent_div_19_Template, 2, 5, "div", 14);
        i0.ɵɵelementStart(20, "table");
        i0.ɵɵelementStart(21, "thead", 15);
        i0.ɵɵelementContainerStart(22);
        i0.ɵɵtemplate(23, TableComponent_th_23_Template, 5, 5, "th", 16);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "tbody");
        i0.ɵɵelementContainerStart(25);
        i0.ɵɵtemplate(26, TableComponent_tr_26_Template, 2, 1, "tr", 16);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, TableComponent_div_27_Template, 2, 5, "div", 14);
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
        i0.ɵɵproperty("ngIf", ctx.paginate.status && ctx.pagingPosition.top);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.theme);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.fixedHeader ? "fixed-header" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.headings);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.reformedData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.paginate.status && ctx.pagingPosition.bottom);
    } }, directives: [i1.NgIf, i2.CollapseComponent, i3.ButtonComponent, i1.NgForOf, i4.SelectComponent, i1.NgClass, i5.InputComponent, i6.PaginationComponent, i7.DropableComponent, i8.DragableComponent], styles: [".fixed-header[_ngcontent-%COMP%]{position:sticky;top:45px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'mg-table', template: "<div class=\"pad-10\">\n  <div class=\"pad-5\">\n    <h3><span [innerHtml]=\"tableTitle\" *ngIf=\"showOptions.title\">Table</span> <small class=\"right\" *ngIf=\"showOptions.count\">{{count}} <i\n          class=\"fas fa-list-ol padL-5 pointer\" (click)=\"openSorter()\" *ngIf=\"showOptions.sort\"></i> <i\n          class=\"fas fa-filter padL-5 font-16 pointer\" (click)=\"openFilter()\" *ngIf=\"showOptions.filter\"></i></small></h3>\n    <mg-collapse widgetId=\"1\" [show]=\"openFilterBox\">\n      <div class=\"pad-10 collapse-filter-box\">\n        <h4>Filter </h4>\n        <mg-button (clicked)=\"search($event)\" theme=\"success\" btnSize=\"sm\"><i class=\"fas fa-search padR-5\"></i> Search\n        </mg-button>\n        <div class=\"row\">\n          <div class=\"col m3 l3 s6\" *ngFor=\"let filter of filterQuery\">\n            <mg-input [control]=\"filter.val\" [label]=\"filter.name\"></mg-input>\n          </div>\n        </div>\n      </div>\n    </mg-collapse>\n\n    <mg-collapse widgetId=\"2\" [show]=\"openSortBox\">\n      <div class=\"pad-10 collapse-sorter-box\">\n        <h4 style=\"margin-bottom: 5px;\">Sort</h4>\n        <mg-select [options]=\"sortOptions\" (value)=\"sort($event)\"></mg-select>\n      </div>\n    </mg-collapse>\n  </div>\n  <div class=\"padV-5\" *ngIf=\"paginate.status && pagingPosition.top\">\n    <mg-pagination (page)=\"setCurrentPage($event)\" [currentPage]=\"currentPage\" [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n  <table class=\"{{theme}}\">\n    <thead [ngClass]=\"fixedHeader ? 'fixed-header' : ''\">\n      <ng-container>\n        \n        <th *ngFor=\"let head of headings; let k = index\"><span (click)=\"sort(head)\">\n          <mg-dropable (dataRecieved)=\"recieveData($event, k)\">\n            <mg-dragable [data]=\"{order: k}\" [dragable]=\"dragableSort\">\n              {{head}}\n            </mg-dragable>\n          </mg-dropable>\n          </span></th>\n      </ng-container>\n      \n    </thead>\n    <tbody>\n      <ng-container>\n        <tr *ngFor=\"let data of reformedData\">\n          <td *ngFor=\"let col of data\" [innerHtml]=\"col\"></td>\n        </tr>\n      </ng-container>\n      \n    </tbody>\n  </table>\n  <div class=\"padV-5\" *ngIf=\"paginate.status && pagingPosition.bottom\">\n    <mg-pagination (page)=\"setCurrentPage($event)\" [currentPage]=\"currentPage\" [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n</div>\n", styles: [".fixed-header{position:sticky;top:45px}\n"] }]
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
        }], pagingPosition: [{
            type: Input
        }], columnsOrder: [{
            type: Input
        }], showOptions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTBDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNDckMsZ0NBQXlEO0lBQUEscUJBQUs7SUFBQSxpQkFBTzs7O0lBQS9ELGdFQUF3Qjs7OztJQUFpRyw2QkFDdkM7SUFBaEQsOEpBQVMsbUJBQVksSUFBQztJQUEwQixpQkFBSTs7OztJQUFDLDZCQUNJO0lBQWxELCtKQUFTLG9CQUFZLElBQUM7SUFBNEIsaUJBQUk7OztJQUYvQixpQ0FBK0M7SUFBQSxZQUFVO0lBQUEsb0VBQ25DO0lBQUMsb0VBQ1E7SUFBQSxpQkFBUTs7O0lBRlEsZUFBVTtJQUFWLDRDQUFVO0lBQy9ELGVBQXNCO0lBQXRCLDhDQUFzQjtJQUNmLGVBQXdCO0lBQXhCLGdEQUF3Qjs7O0lBTzdGLCtCQUE2RDtJQUMzRCwrQkFBa0U7SUFDcEUsaUJBQU07OztJQURNLGVBQXNCO0lBQXRCLHdDQUFzQiwwQkFBQTs7OztJQWExQywrQkFBa0U7SUFDaEUseUNBQXNNO0lBQXZMLHlLQUFRLDhCQUFzQixJQUFDLGtLQUEySCxtQ0FBMkIsSUFBdEo7SUFBd0osaUJBQWdCO0lBQ3hOLGlCQUFNOzs7SUFEMkMsZUFBMkI7SUFBM0IsZ0RBQTJCLHVCQUFBLHNCQUFBLHVCQUFBLG9DQUFBOzs7OztJQU10RSwwQkFBaUQ7SUFBQSxn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QixrQ0FBcUQ7UUFDbkQsOEJBQWM7UUFFWixnRUFNYztRQUNoQiwwQkFBZTtRQUVqQixpQkFBUTtRQUNSLDhCQUFPO1FBQ0wsOEJBQWM7UUFDWixnRUFFSztRQUNQLDBCQUFlO1FBRWpCLGlCQUFRO1FBQ1YsaUJBQVE7UUFDUixrRUFFTTtRQUNSLGlCQUFNOztRQXBEa0MsZUFBdUI7UUFBdkIsNENBQXVCO1FBQXFDLGVBQXVCO1FBQXZCLDRDQUF1QjtRQUc3RixlQUFzQjtRQUF0Qix3Q0FBc0I7UUFNRyxlQUFjO1FBQWQseUNBQWM7UUFPdkMsZUFBb0I7UUFBcEIsc0NBQW9CO1FBRy9CLGVBQXVCO1FBQXZCLHlDQUF1QjtRQUluQixlQUEyQztRQUEzQyxvRUFBMkM7UUFHekQsZUFBaUI7UUFBakIsd0JBQWlCO1FBQ2YsZUFBNkM7UUFBN0MsK0RBQTZDO1FBRzNCLGVBQWE7UUFBYixzQ0FBYTtRQVliLGVBQWU7UUFBZiwwQ0FBZTtRQU9yQixlQUE4QztRQUE5Qyx1RUFBOEM7O3VGRDNDeEQsY0FBYztjQUwxQixTQUFTOzJCQUNFLFVBQVU7b0VBS1gsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBS0csY0FBYztrQkFBdEIsS0FBSztZQUtHLFlBQVk7a0JBQXBCLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkYXJrXCI7XG4gIEBJbnB1dCgpIG1nRGF0YTogYW55ID0gW107XG4gIEBJbnB1dCgpIGlnbm9yZWRDb2x1bW5zOiBhbnkgPSBbXCJpZFwiXTtcbiAgQElucHV0KCkgc29ydEJ5OiBhbnkgPSBcIlwiO1xuICBASW5wdXQoKSBzb3J0RGlyZWN0aW9uID0gXCJBU0NcIjtcbiAgQElucHV0KCkgdGFibGVUaXRsZSA9IFwiVGFibGVcIjtcbiAgQElucHV0KCkgZml4ZWRIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZHJhZ2FibGVTb3J0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2luYXRlPzphbnkgPSB7XG4gICAgc3RhdHVzOiBmYWxzZSwgXG4gICAgcGVyUGFnZTogNVxuICB9O1xuXG4gIEBJbnB1dCgpIHBhZ2luZ1Bvc2l0aW9uID0ge1xuICAgIHRvcDogdHJ1ZSxcbiAgICBib3R0b206IHRydWVcbiAgfVxuXG4gIEBJbnB1dCgpIGNvbHVtbnNPcmRlcjphbnkgPSBbXTtcblxuICBASW5wdXQoKSBzaG93T3B0aW9ucyA9IHtcbiAgICB0aXRsZTogZmFsc2UsXG4gICAgZmlsdGVyOiBmYWxzZSxcbiAgICBzb3J0OiBmYWxzZSxcbiAgICBjb3VudDogZmFsc2VcbiAgfTtcbiAgY3VycmVudFBhZ2UgPSAxO1xuICBzaG93ID0gZmFsc2U7XG4gIFxuICBzZXRDdXJyZW50UGFnZShldmVudDpudW1iZXIpe1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBldmVudDtcbiAgfVxuXG4gIHNldFNob3dUaW1lcigpOiBhbnkge1xuICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICByZWZvcm1lZERhdGE6IGFueSA9IFtdO1xuICByZWZvcm1lZEhlYWRzOiBhbnkgPSB7fTtcblxuICBoZWFkaW5nczogYW55ID0gW107XG5cbiAgZmlsdGVyUXVlcnk6IGFueSA9IFtdO1xuXG4gIGNvdW50ID0gMDtcblxuICBwYWdpbmF0ZWREYXRhID0gW107XG5cbiAgb3BlbkZpbHRlckJveCA9IGZhbHNlO1xuICBvcGVuU29ydEJveCA9IGZhbHNlO1xuICBzb3J0T3B0aW9uczogYW55ID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zZXRTaG93VGltZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdEhlYWRpbmdzKCk7XG4gICAgdGhpcy5yZWZhY3RvckRhdGEoKTtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5yZWZvcm1lZERhdGEubGVuZ3RoO1xuICB9XG5cbiAgY29uY2F0SGVhZHMoaGVhZE9iajogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkT2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaGVhZGluZ3MuaW5jbHVkZXMoaGVhZE9ialtpXSkgJiYgIXRoaXMuaWdub3JlZENvbHVtbnMuaW5jbHVkZXMoaGVhZE9ialtpXSkpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5ncy5wdXNoKGhlYWRPYmpbaV0pO1xuICAgICAgICB0aGlzLnNvcnRPcHRpb25zLnB1c2goeyBuYW1lOiBoZWFkT2JqW2ldLCB2YWw6IGhlYWRPYmpbaV0gfSk7XG4gICAgICAgIHRoaXMuZmlsdGVyUXVlcnkucHVzaCh7IG5hbWU6IGhlYWRPYmpbaV0sIHZhbDogbmV3IEZvcm1Db250cm9sKFwiXCIpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRDb2x1bW5zKCl7XG4gICAgaWYodGhpcy5jb2x1bW5zT3JkZXIgJiYgdGhpcy5jb2x1bW5zT3JkZXIubGVuZ3RoID4gMCl7XG4gICAgICBsZXQgbmV3SGVhZHM6YW55ID0gW107XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zT3JkZXIubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5oZWFkaW5ncy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgaWYodGhpcy5jb2x1bW5zT3JkZXJbaV0gPT09IHRoaXMuaGVhZGluZ3Nbal0pe1xuICAgICAgICAgICAgbmV3SGVhZHMucHVzaCh0aGlzLmhlYWRpbmdzW2pdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IG5ld0RpZmYgPSB0aGlzLmhlYWRpbmdzLmZpbHRlcigoeDphbnkpID0+ICFuZXdIZWFkcy5pbmNsdWRlcyh4KSk7XG4gICAgICBuZXdIZWFkcyA9IFsuLi5uZXdIZWFkcywgLi4ubmV3RGlmZl07XG4gICAgICB0aGlzLmhlYWRpbmdzID0gbmV3SGVhZHM7XG4gICAgfVxuICB9XG5cbiAgZXh0cmFjdEhlYWRpbmdzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYmpIZWFkcyA9IE9iamVjdC5rZXlzKHRoaXMubWdEYXRhW2ldKTtcbiAgICAgIHRoaXMuY29uY2F0SGVhZHMob2JqSGVhZHMpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRDb2x1bW5zKCk7XG4gIH1cblxuICByZWZhY3RvckRhdGEoZGF0YVRvVXBkYXRlOiBhbnlbXSA9IHRoaXMubWdEYXRhKSB7XG5cbiAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVG9VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlYWRpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmKGRhdGFUb1VwZGF0ZVtpXSl7XG4gICAgICAgICAgbGV0IGQgPSBkYXRhVG9VcGRhdGVbaV1bdGhpcy5oZWFkaW5nc1tqXV0gIT0gdW5kZWZpbmVkID8gZGF0YVRvVXBkYXRlW2ldW3RoaXMuaGVhZGluZ3Nbal1dIDogXCItXCI7XG4gICAgICAgICAgZGF0YS5wdXNoKGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlZm9ybWVkRGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5yZWZvcm1lZEhlYWRzID0gdGhpcy5yZWZvcm1lZERhdGFbMF07XG4gICAgdGhpcy5zb3J0QnlFeGNlcHRpb24oKTtcbiAgfVxuXG4gIHNvcnRGbGlwKG5ld0tleTogYW55KSB7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5zb3J0RGlyZWN0aW9uID09PSBcIlwiID8gXCJBU0NcIiA6IHRoaXMuc29ydERpcmVjdGlvbjtcbiAgICBpZiAodGhpcy5zb3J0QnkgIT0gXCJcIikge1xuICAgICAgaWYgKHRoaXMuc29ydEJ5ID09IG5ld0tleSkge1xuICAgICAgICBpZiAodGhpcy5zb3J0RGlyZWN0aW9uID09IFwiQVNDXCIpIHtcbiAgICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBcIkRFU0NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBcIkFTQ1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBcIkFTQ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnQoc29ydEtleTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJrZXkgPT0+IFwiLCBzb3J0S2V5KTtcbiAgICB0aGlzLnNvcnRCeUV4Y2VwdGlvbigpO1xuICAgIGlmICh0aGlzLnNvcnRCeSAhPSBcIlwiKSB7XG4gICAgICB0aGlzLnNvcnRGbGlwKHNvcnRLZXkpO1xuICAgICAgdGhpcy5zb3J0QnkgPSBzb3J0S2V5O1xuICAgICAgbGV0IHNvcnRlciA9IHRoaXMuaGVhZGluZ3MuaW5kZXhPZih0aGlzLnNvcnRCeSk7XG4gICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgbGV0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgYVtzb3J0ZXJdID0gYVtzb3J0ZXJdLnRvU3RyaW5nKCk7XG4gICAgICAgIGJbc29ydGVyXSA9IGJbc29ydGVyXS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChhW3NvcnRlcl0gPCBiW3NvcnRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gJHRoaXMuc29ydERpcmVjdGlvbiA9PT0gXCJBU0NcIiA/IC0xIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtzb3J0ZXJdID4gYltzb3J0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuICR0aGlzLnNvcnREaXJlY3Rpb24gPT09IFwiQVNDXCIgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IHRoaXMucmVmb3JtZWREYXRhLnNvcnQoY29tcGFyZSk7XG4gICAgfVxuXG4gIH1cblxuICBzb3J0QnlFeGNlcHRpb24oKSB7XG4gICAgaWYgKHRoaXMuc29ydEJ5ID09IFwiXCIpIHtcbiAgICAgIHRoaXMuc29ydEJ5ID0gdGhpcy5oZWFkaW5nc1swXTtcbiAgICB9XG4gIH1cblxuXG4gIGZpbHRlcihmaWx0ZXJLZXk6IGFueSkge1xuICAgIHRoaXMucmVmb3JtZWREYXRhID0gdGhpcy5yZWZvcm1lZERhdGEuZmlsdGVyKGZ1bmN0aW9uIChlbDogYW55KSB7XG4gICAgICByZXR1cm4gZWwucHJpY2UgPD0gMTAwMCAmJlxuICAgICAgICBlbC5zcWZ0ID49IDUwMCAmJlxuICAgICAgICBlbC5udW1fb2ZfYmVkcyA+PSAyICYmXG4gICAgICAgIGVsLm51bV9vZl9iYXRocyA+PSAyLjU7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuU29ydGVyKCkge1xuICAgIHRoaXMub3BlblNvcnRCb3ggPSAhdGhpcy5vcGVuU29ydEJveDtcbiAgICB0aGlzLm9wZW5GaWx0ZXJCb3ggPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5GaWx0ZXIoKSB7XG4gICAgdGhpcy5vcGVuRmlsdGVyQm94ID0gIXRoaXMub3BlbkZpbHRlckJveDtcbiAgICB0aGlzLm9wZW5Tb3J0Qm94ID0gZmFsc2U7XG4gIH1cblxuICBzZWFyY2goZW5hYmxlOiBib29sZWFuKSB7XG4gICAgY29uc29sZS5sb2coZW5hYmxlKTtcbiAgfVxuXG4gIHJlY2lldmVEYXRhKGV2ZW50OiBhbnksIGs6IG51bWJlcil7XG4gICAgaWYodGhpcy5kcmFnYWJsZVNvcnQpe1xuICAgICAgbGV0IGZyb21Db2x1bW4gPSB0aGlzLmNvbHVtbnNPcmRlcltldmVudC5vcmRlcl07XG4gICAgICB0aGlzLmNvbHVtbnNPcmRlcltldmVudC5vcmRlcl0gPSB0aGlzLmNvbHVtbnNPcmRlcltrXTtcbiAgICAgIHRoaXMuY29sdW1uc09yZGVyW2tdID0gZnJvbUNvbHVtbjtcbiAgICAgIGZyb21Db2x1bW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmV4dHJhY3RIZWFkaW5ncygpO1xuICAgICAgaWYodGhpcy5wYWdpbmF0ZS5zdGF0dXMpe1xuICAgICAgICB0aGlzLnJlZmFjdG9yRGF0YSh0aGlzLnBhZ2luYXRlZERhdGEpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJlZmFjdG9yRGF0YSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhZ2luYXRlZERhdGEoZGF0YTphbnkpe1xuICAgIHRoaXMucGFnaW5hdGVkRGF0YSA9IGRhdGE7XG4gICAgaWYodGhpcy5wYWdpbmF0ZS5zdGF0dXMpIHRoaXMucmVmYWN0b3JEYXRhKHRoaXMucGFnaW5hdGVkRGF0YSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInBhZC0xMFwiPlxuICA8ZGl2IGNsYXNzPVwicGFkLTVcIj5cbiAgICA8aDM+PHNwYW4gW2lubmVySHRtbF09XCJ0YWJsZVRpdGxlXCIgKm5nSWY9XCJzaG93T3B0aW9ucy50aXRsZVwiPlRhYmxlPC9zcGFuPiA8c21hbGwgY2xhc3M9XCJyaWdodFwiICpuZ0lmPVwic2hvd09wdGlvbnMuY291bnRcIj57e2NvdW50fX0gPGlcbiAgICAgICAgICBjbGFzcz1cImZhcyBmYS1saXN0LW9sIHBhZEwtNSBwb2ludGVyXCIgKGNsaWNrKT1cIm9wZW5Tb3J0ZXIoKVwiICpuZ0lmPVwic2hvd09wdGlvbnMuc29ydFwiPjwvaT4gPGlcbiAgICAgICAgICBjbGFzcz1cImZhcyBmYS1maWx0ZXIgcGFkTC01IGZvbnQtMTYgcG9pbnRlclwiIChjbGljayk9XCJvcGVuRmlsdGVyKClcIiAqbmdJZj1cInNob3dPcHRpb25zLmZpbHRlclwiPjwvaT48L3NtYWxsPjwvaDM+XG4gICAgPG1nLWNvbGxhcHNlIHdpZGdldElkPVwiMVwiIFtzaG93XT1cIm9wZW5GaWx0ZXJCb3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWQtMTAgY29sbGFwc2UtZmlsdGVyLWJveFwiPlxuICAgICAgICA8aDQ+RmlsdGVyIDwvaDQ+XG4gICAgICAgIDxtZy1idXR0b24gKGNsaWNrZWQpPVwic2VhcmNoKCRldmVudClcIiB0aGVtZT1cInN1Y2Nlc3NcIiBidG5TaXplPVwic21cIj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2ggcGFkUi01XCI+PC9pPiBTZWFyY2hcbiAgICAgICAgPC9tZy1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG0zIGwzIHM2XCIgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmaWx0ZXJRdWVyeVwiPlxuICAgICAgICAgICAgPG1nLWlucHV0IFtjb250cm9sXT1cImZpbHRlci52YWxcIiBbbGFiZWxdPVwiZmlsdGVyLm5hbWVcIj48L21nLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWctY29sbGFwc2U+XG5cbiAgICA8bWctY29sbGFwc2Ugd2lkZ2V0SWQ9XCIyXCIgW3Nob3ddPVwib3BlblNvcnRCb3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWQtMTAgY29sbGFwc2Utc29ydGVyLWJveFwiPlxuICAgICAgICA8aDQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCI+U29ydDwvaDQ+XG4gICAgICAgIDxtZy1zZWxlY3QgW29wdGlvbnNdPVwic29ydE9wdGlvbnNcIiAodmFsdWUpPVwic29ydCgkZXZlbnQpXCI+PC9tZy1zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L21nLWNvbGxhcHNlPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBhZFYtNVwiICpuZ0lmPVwicGFnaW5hdGUuc3RhdHVzICYmIHBhZ2luZ1Bvc2l0aW9uLnRvcFwiPlxuICAgIDxtZy1wYWdpbmF0aW9uIChwYWdlKT1cInNldEN1cnJlbnRQYWdlKCRldmVudClcIiBbY3VycmVudFBhZ2VdPVwiY3VycmVudFBhZ2VcIiBbdGhlbWVdPVwidGhlbWVcIiBbZnVsbERhdGFNb2RlXT1cInRydWVcIiBbZGF0YV09XCJtZ0RhdGFcIiBbcGVyUGFnZV09XCJwYWdpbmF0ZS5wZXJQYWdlXCIgKGdldGRhdGEpPVwidXBkYXRlUGFnaW5hdGVkRGF0YSgkZXZlbnQpXCI+PC9tZy1wYWdpbmF0aW9uPlxuICA8L2Rpdj5cbiAgPHRhYmxlIGNsYXNzPVwie3t0aGVtZX19XCI+XG4gICAgPHRoZWFkIFtuZ0NsYXNzXT1cImZpeGVkSGVhZGVyID8gJ2ZpeGVkLWhlYWRlcicgOiAnJ1wiPlxuICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgXG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZCBvZiBoZWFkaW5nczsgbGV0IGsgPSBpbmRleFwiPjxzcGFuIChjbGljayk9XCJzb3J0KGhlYWQpXCI+XG4gICAgICAgICAgPG1nLWRyb3BhYmxlIChkYXRhUmVjaWV2ZWQpPVwicmVjaWV2ZURhdGEoJGV2ZW50LCBrKVwiPlxuICAgICAgICAgICAgPG1nLWRyYWdhYmxlIFtkYXRhXT1cIntvcmRlcjoga31cIiBbZHJhZ2FibGVdPVwiZHJhZ2FibGVTb3J0XCI+XG4gICAgICAgICAgICAgIHt7aGVhZH19XG4gICAgICAgICAgICA8L21nLWRyYWdhYmxlPlxuICAgICAgICAgIDwvbWctZHJvcGFibGU+XG4gICAgICAgICAgPC9zcGFuPjwvdGg+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIFxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIHJlZm9ybWVkRGF0YVwiPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sIG9mIGRhdGFcIiBbaW5uZXJIdG1sXT1cImNvbFwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIFxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG4gIDxkaXYgY2xhc3M9XCJwYWRWLTVcIiAqbmdJZj1cInBhZ2luYXRlLnN0YXR1cyAmJiBwYWdpbmdQb3NpdGlvbi5ib3R0b21cIj5cbiAgICA8bWctcGFnaW5hdGlvbiAocGFnZSk9XCJzZXRDdXJyZW50UGFnZSgkZXZlbnQpXCIgW2N1cnJlbnRQYWdlXT1cImN1cnJlbnRQYWdlXCIgW3RoZW1lXT1cInRoZW1lXCIgW2Z1bGxEYXRhTW9kZV09XCJ0cnVlXCIgW2RhdGFdPVwibWdEYXRhXCIgW3BlclBhZ2VdPVwicGFnaW5hdGUucGVyUGFnZVwiIChnZXRkYXRhKT1cInVwZGF0ZVBhZ2luYXRlZERhdGEoJGV2ZW50KVwiPjwvbWctcGFnaW5hdGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==