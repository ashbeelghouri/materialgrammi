import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../collapse/collapse.component";
import * as i3 from "../button/button.component";
import * as i4 from "../select/select.component";
import * as i5 from "../input/input.component";
import * as i6 from "../dropable/dropable.component";
import * as i7 from "../dragable/dragable.component";
import * as i8 from "../pagination/pagination.component";
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
const _c0 = function (a0) { return { order: a0 }; };
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
    i0.ɵɵproperty("data", i0.ɵɵpureFunction1(3, _c0, k_r14))("dragable", ctx_r3.dragableSort);
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
    } }, directives: [i1.NgIf, i2.CollapseComponent, i3.ButtonComponent, i1.NgForOf, i4.SelectComponent, i1.NgClass, i5.InputComponent, i6.DropableComponent, i7.DragableComponent, i8.PaginationComponent], styles: [".fixed-header[_ngcontent-%COMP%]{position:sticky;top:45px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTBDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNDckMsZ0NBQXlEO0lBQUEscUJBQUs7SUFBQSxpQkFBTzs7O0lBQS9ELGdFQUF3Qjs7OztJQUFpRyw2QkFDdkM7SUFBaEQsNkpBQVMsbUJBQVksSUFBQztJQUEwQixpQkFBSTs7OztJQUFDLDZCQUNJO0lBQWxELCtKQUFTLG9CQUFZLElBQUM7SUFBNEIsaUJBQUk7OztJQUYvQixpQ0FBK0M7SUFBQSxZQUFVO0lBQUEsb0VBQ25DO0lBQUMsb0VBQ1E7SUFBQSxpQkFBUTs7O0lBRlEsZUFBVTtJQUFWLDRDQUFVO0lBQy9ELGVBQXNCO0lBQXRCLDhDQUFzQjtJQUNmLGVBQXdCO0lBQXhCLGdEQUF3Qjs7O0lBTzdGLCtCQUE2RDtJQUMzRCwrQkFBa0U7SUFDcEUsaUJBQU07OztJQURNLGVBQXNCO0lBQXRCLHdDQUFzQiwwQkFBQTs7Ozs7SUFpQnBDLDBCQUFpRDtJQUFBLGdDQUEyQjtJQUFyQix1TkFBUyxzQkFBVSxJQUFDO0lBQ3pFLHVDQUFxRDtJQUF4QywyT0FBZ0Isa0NBQXNCLElBQUM7SUFDbEQsdUNBQTJEO0lBQ3pELFlBQ0Y7SUFBQSxpQkFBYztJQUNoQixpQkFBYztJQUNkLGlCQUFPO0lBQUEsaUJBQUs7Ozs7O0lBSkcsZUFB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YTtRQUFiLHNDQUFhO1FBWWIsZUFBZTtRQUFmLDBDQUFlO1FBT3JCLGVBQXFCO1FBQXJCLDBDQUFxQjs7dUZEeEMvQixjQUFjO2NBTDFCLFNBQVM7MkJBQ0UsVUFBVTtvRUFLWCxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFJRyxZQUFZO2tCQUFwQixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBtZ0RhdGE6IGFueSA9IFtdO1xuICBASW5wdXQoKSBpZ25vcmVkQ29sdW1uczogYW55ID0gW1wiaWRcIl07XG4gIEBJbnB1dCgpIHNvcnRCeTogYW55ID0gXCJcIjtcbiAgQElucHV0KCkgc29ydERpcmVjdGlvbiA9IFwiQVNDXCI7XG4gIEBJbnB1dCgpIHRhYmxlVGl0bGUgPSBcIlRhYmxlXCI7XG4gIEBJbnB1dCgpIGZpeGVkSGVhZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRyYWdhYmxlU29ydCA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmF0ZSA9IHtcbiAgICBzdGF0dXM6IGZhbHNlLCBcbiAgICBwZXJQYWdlOiA1XG4gIH07XG4gIEBJbnB1dCgpIGNvbHVtbnNPcmRlcjphbnkgPSBbXTtcblxuICBASW5wdXQoKSBzaG93T3B0aW9ucyA9IHtcbiAgICB0aXRsZTogZmFsc2UsXG4gICAgZmlsdGVyOiBmYWxzZSxcbiAgICBzb3J0OiBmYWxzZSxcbiAgICBjb3VudDogZmFsc2VcbiAgfTtcblxuICBzaG93ID0gZmFsc2U7XG4gIHNldFNob3dUaW1lcigpOiBhbnkge1xuICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICByZWZvcm1lZERhdGE6IGFueSA9IFtdO1xuICByZWZvcm1lZEhlYWRzOiBhbnkgPSB7fTtcblxuICBoZWFkaW5nczogYW55ID0gW107XG5cbiAgZmlsdGVyUXVlcnk6IGFueSA9IFtdO1xuXG4gIGNvdW50ID0gMDtcblxuICBwYWdpbmF0ZWREYXRhID0gW107XG5cbiAgb3BlbkZpbHRlckJveCA9IGZhbHNlO1xuICBvcGVuU29ydEJveCA9IGZhbHNlO1xuICBzb3J0T3B0aW9uczogYW55ID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zZXRTaG93VGltZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdEhlYWRpbmdzKCk7XG4gICAgdGhpcy5yZWZhY3RvckRhdGEoKTtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5yZWZvcm1lZERhdGEubGVuZ3RoO1xuICB9XG5cbiAgY29uY2F0SGVhZHMoaGVhZE9iajogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkT2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaGVhZGluZ3MuaW5jbHVkZXMoaGVhZE9ialtpXSkgJiYgIXRoaXMuaWdub3JlZENvbHVtbnMuaW5jbHVkZXMoaGVhZE9ialtpXSkpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5ncy5wdXNoKGhlYWRPYmpbaV0pO1xuICAgICAgICB0aGlzLnNvcnRPcHRpb25zLnB1c2goeyBuYW1lOiBoZWFkT2JqW2ldLCB2YWw6IGhlYWRPYmpbaV0gfSk7XG4gICAgICAgIHRoaXMuZmlsdGVyUXVlcnkucHVzaCh7IG5hbWU6IGhlYWRPYmpbaV0sIHZhbDogbmV3IEZvcm1Db250cm9sKFwiXCIpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRDb2x1bW5zKCl7XG4gICAgaWYodGhpcy5jb2x1bW5zT3JkZXIgJiYgdGhpcy5jb2x1bW5zT3JkZXIubGVuZ3RoID4gMCl7XG4gICAgICBsZXQgbmV3SGVhZHM6YW55ID0gW107XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zT3JkZXIubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5oZWFkaW5ncy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgaWYodGhpcy5jb2x1bW5zT3JkZXJbaV0gPT09IHRoaXMuaGVhZGluZ3Nbal0pe1xuICAgICAgICAgICAgbmV3SGVhZHMucHVzaCh0aGlzLmhlYWRpbmdzW2pdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IG5ld0RpZmYgPSB0aGlzLmhlYWRpbmdzLmZpbHRlcigoeDphbnkpID0+ICFuZXdIZWFkcy5pbmNsdWRlcyh4KSk7XG4gICAgICBuZXdIZWFkcyA9IFsuLi5uZXdIZWFkcywgLi4ubmV3RGlmZl07XG4gICAgICB0aGlzLmhlYWRpbmdzID0gbmV3SGVhZHM7XG4gICAgfVxuICB9XG5cbiAgZXh0cmFjdEhlYWRpbmdzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYmpIZWFkcyA9IE9iamVjdC5rZXlzKHRoaXMubWdEYXRhW2ldKTtcbiAgICAgIHRoaXMuY29uY2F0SGVhZHMob2JqSGVhZHMpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRDb2x1bW5zKCk7XG4gIH1cblxuICByZWZhY3RvckRhdGEoZGF0YVRvVXBkYXRlOiBhbnlbXSA9IHRoaXMubWdEYXRhKSB7XG5cbiAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVG9VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlYWRpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmKGRhdGFUb1VwZGF0ZVtpXSl7XG4gICAgICAgICAgbGV0IGQgPSBkYXRhVG9VcGRhdGVbaV1bdGhpcy5oZWFkaW5nc1tqXV0gIT0gdW5kZWZpbmVkID8gZGF0YVRvVXBkYXRlW2ldW3RoaXMuaGVhZGluZ3Nbal1dIDogXCItXCI7XG4gICAgICAgICAgZGF0YS5wdXNoKGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlZm9ybWVkRGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5yZWZvcm1lZEhlYWRzID0gdGhpcy5yZWZvcm1lZERhdGFbMF07XG4gICAgdGhpcy5zb3J0QnlFeGNlcHRpb24oKTtcbiAgfVxuXG4gIHNvcnRGbGlwKG5ld0tleTogYW55KSB7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5zb3J0RGlyZWN0aW9uID09PSBcIlwiID8gXCJBU0NcIiA6IHRoaXMuc29ydERpcmVjdGlvbjtcbiAgICBpZiAodGhpcy5zb3J0QnkgIT0gXCJcIikge1xuICAgICAgaWYgKHRoaXMuc29ydEJ5ID09IG5ld0tleSkge1xuICAgICAgICBpZiAodGhpcy5zb3J0RGlyZWN0aW9uID09IFwiQVNDXCIpIHtcbiAgICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBcIkRFU0NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBcIkFTQ1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBcIkFTQ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnQoc29ydEtleTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJrZXkgPT0+IFwiLCBzb3J0S2V5KTtcbiAgICB0aGlzLnNvcnRCeUV4Y2VwdGlvbigpO1xuICAgIGlmICh0aGlzLnNvcnRCeSAhPSBcIlwiKSB7XG4gICAgICB0aGlzLnNvcnRGbGlwKHNvcnRLZXkpO1xuICAgICAgdGhpcy5zb3J0QnkgPSBzb3J0S2V5O1xuICAgICAgbGV0IHNvcnRlciA9IHRoaXMuaGVhZGluZ3MuaW5kZXhPZih0aGlzLnNvcnRCeSk7XG4gICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgbGV0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgYVtzb3J0ZXJdID0gYVtzb3J0ZXJdLnRvU3RyaW5nKCk7XG4gICAgICAgIGJbc29ydGVyXSA9IGJbc29ydGVyXS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChhW3NvcnRlcl0gPCBiW3NvcnRlcl0pIHtcbiAgICAgICAgICByZXR1cm4gJHRoaXMuc29ydERpcmVjdGlvbiA9PT0gXCJBU0NcIiA/IC0xIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtzb3J0ZXJdID4gYltzb3J0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuICR0aGlzLnNvcnREaXJlY3Rpb24gPT09IFwiQVNDXCIgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IHRoaXMucmVmb3JtZWREYXRhLnNvcnQoY29tcGFyZSk7XG4gICAgfVxuXG4gIH1cblxuICBzb3J0QnlFeGNlcHRpb24oKSB7XG4gICAgaWYgKHRoaXMuc29ydEJ5ID09IFwiXCIpIHtcbiAgICAgIHRoaXMuc29ydEJ5ID0gdGhpcy5oZWFkaW5nc1swXTtcbiAgICB9XG4gIH1cblxuXG4gIGZpbHRlcihmaWx0ZXJLZXk6IGFueSkge1xuICAgIHRoaXMucmVmb3JtZWREYXRhID0gdGhpcy5yZWZvcm1lZERhdGEuZmlsdGVyKGZ1bmN0aW9uIChlbDogYW55KSB7XG4gICAgICByZXR1cm4gZWwucHJpY2UgPD0gMTAwMCAmJlxuICAgICAgICBlbC5zcWZ0ID49IDUwMCAmJlxuICAgICAgICBlbC5udW1fb2ZfYmVkcyA+PSAyICYmXG4gICAgICAgIGVsLm51bV9vZl9iYXRocyA+PSAyLjU7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuU29ydGVyKCkge1xuICAgIHRoaXMub3BlblNvcnRCb3ggPSAhdGhpcy5vcGVuU29ydEJveDtcbiAgICB0aGlzLm9wZW5GaWx0ZXJCb3ggPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5GaWx0ZXIoKSB7XG4gICAgdGhpcy5vcGVuRmlsdGVyQm94ID0gIXRoaXMub3BlbkZpbHRlckJveDtcbiAgICB0aGlzLm9wZW5Tb3J0Qm94ID0gZmFsc2U7XG4gIH1cblxuICBzZWFyY2goZW5hYmxlOiBib29sZWFuKSB7XG4gICAgY29uc29sZS5sb2coZW5hYmxlKTtcbiAgfVxuXG4gIHJlY2lldmVEYXRhKGV2ZW50OiBhbnksIGs6IG51bWJlcil7XG4gICAgaWYodGhpcy5kcmFnYWJsZVNvcnQpe1xuICAgICAgbGV0IGZyb21Db2x1bW4gPSB0aGlzLmNvbHVtbnNPcmRlcltldmVudC5vcmRlcl07XG4gICAgICB0aGlzLmNvbHVtbnNPcmRlcltldmVudC5vcmRlcl0gPSB0aGlzLmNvbHVtbnNPcmRlcltrXTtcbiAgICAgIHRoaXMuY29sdW1uc09yZGVyW2tdID0gZnJvbUNvbHVtbjtcbiAgICAgIGZyb21Db2x1bW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmV4dHJhY3RIZWFkaW5ncygpO1xuICAgICAgaWYodGhpcy5wYWdpbmF0ZS5zdGF0dXMpe1xuICAgICAgICB0aGlzLnJlZmFjdG9yRGF0YSh0aGlzLnBhZ2luYXRlZERhdGEpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJlZmFjdG9yRGF0YSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhZ2luYXRlZERhdGEoZGF0YTphbnkpe1xuICAgIHRoaXMucGFnaW5hdGVkRGF0YSA9IGRhdGE7XG4gICAgaWYodGhpcy5wYWdpbmF0ZS5zdGF0dXMpIHRoaXMucmVmYWN0b3JEYXRhKHRoaXMucGFnaW5hdGVkRGF0YSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInBhZC0xMFwiPlxuICA8ZGl2IGNsYXNzPVwicGFkLTVcIj5cbiAgICA8aDM+PHNwYW4gW2lubmVySHRtbF09XCJ0YWJsZVRpdGxlXCIgKm5nSWY9XCJzaG93T3B0aW9ucy50aXRsZVwiPlRhYmxlPC9zcGFuPiA8c21hbGwgY2xhc3M9XCJyaWdodFwiICpuZ0lmPVwic2hvd09wdGlvbnMuY291bnRcIj57e2NvdW50fX0gPGlcbiAgICAgICAgICBjbGFzcz1cImZhcyBmYS1saXN0LW9sIHBhZEwtNSBwb2ludGVyXCIgKGNsaWNrKT1cIm9wZW5Tb3J0ZXIoKVwiICpuZ0lmPVwic2hvd09wdGlvbnMuc29ydFwiPjwvaT4gPGlcbiAgICAgICAgICBjbGFzcz1cImZhcyBmYS1maWx0ZXIgcGFkTC01IGZvbnQtMTYgcG9pbnRlclwiIChjbGljayk9XCJvcGVuRmlsdGVyKClcIiAqbmdJZj1cInNob3dPcHRpb25zLmZpbHRlclwiPjwvaT48L3NtYWxsPjwvaDM+XG4gICAgPG1nLWNvbGxhcHNlIHdpZGdldElkPVwiMVwiIFtzaG93XT1cIm9wZW5GaWx0ZXJCb3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWQtMTAgY29sbGFwc2UtZmlsdGVyLWJveFwiPlxuICAgICAgICA8aDQ+RmlsdGVyIDwvaDQ+XG4gICAgICAgIDxtZy1idXR0b24gKGNsaWNrZWQpPVwic2VhcmNoKCRldmVudClcIiB0aGVtZT1cInN1Y2Nlc3NcIiBidG5TaXplPVwic21cIj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2ggcGFkUi01XCI+PC9pPiBTZWFyY2hcbiAgICAgICAgPC9tZy1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG0zIGwzIHM2XCIgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmaWx0ZXJRdWVyeVwiPlxuICAgICAgICAgICAgPG1nLWlucHV0IFtjb250cm9sXT1cImZpbHRlci52YWxcIiBbbGFiZWxdPVwiZmlsdGVyLm5hbWVcIj48L21nLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWctY29sbGFwc2U+XG5cbiAgICA8bWctY29sbGFwc2Ugd2lkZ2V0SWQ9XCIyXCIgW3Nob3ddPVwib3BlblNvcnRCb3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWQtMTAgY29sbGFwc2Utc29ydGVyLWJveFwiPlxuICAgICAgICA8aDQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCI+U29ydDwvaDQ+XG4gICAgICAgIDxtZy1zZWxlY3QgW29wdGlvbnNdPVwic29ydE9wdGlvbnNcIiAodmFsdWUpPVwic29ydCgkZXZlbnQpXCI+PC9tZy1zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L21nLWNvbGxhcHNlPlxuICA8L2Rpdj5cbiAgPHRhYmxlIGNsYXNzPVwie3t0aGVtZX19XCI+XG4gICAgPHRoZWFkIFtuZ0NsYXNzXT1cImZpeGVkSGVhZGVyID8gJ2ZpeGVkLWhlYWRlcicgOiAnJ1wiPlxuICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgXG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZCBvZiBoZWFkaW5nczsgbGV0IGsgPSBpbmRleFwiPjxzcGFuIChjbGljayk9XCJzb3J0KGhlYWQpXCI+XG4gICAgICAgICAgPG1nLWRyb3BhYmxlIChkYXRhUmVjaWV2ZWQpPVwicmVjaWV2ZURhdGEoJGV2ZW50LCBrKVwiPlxuICAgICAgICAgICAgPG1nLWRyYWdhYmxlIFtkYXRhXT1cIntvcmRlcjoga31cIiBbZHJhZ2FibGVdPVwiZHJhZ2FibGVTb3J0XCI+XG4gICAgICAgICAgICAgIHt7aGVhZH19XG4gICAgICAgICAgICA8L21nLWRyYWdhYmxlPlxuICAgICAgICAgIDwvbWctZHJvcGFibGU+XG4gICAgICAgICAgPC9zcGFuPjwvdGg+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIFxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIHJlZm9ybWVkRGF0YVwiPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sIG9mIGRhdGFcIiBbaW5uZXJIdG1sXT1cImNvbFwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIFxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG4gIDxkaXYgY2xhc3M9XCJwYWRWLTVcIiAqbmdJZj1cInBhZ2luYXRlLnN0YXR1c1wiPlxuICAgIDxtZy1wYWdpbmF0aW9uIFt0aGVtZV09XCJ0aGVtZVwiIFtmdWxsRGF0YU1vZGVdPVwidHJ1ZVwiIFtkYXRhXT1cIm1nRGF0YVwiIFtwZXJQYWdlXT1cInBhZ2luYXRlLnBlclBhZ2VcIiAoZ2V0ZGF0YSk9XCJ1cGRhdGVQYWdpbmF0ZWREYXRhKCRldmVudClcIj48L21nLXBhZ2luYXRpb24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=