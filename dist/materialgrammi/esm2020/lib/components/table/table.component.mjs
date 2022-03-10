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
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelement(1, "mg-pagination", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("theme", ctx_r5.theme)("fullDataMode", true)("data", ctx_r5.mgData)("perPage", ctx_r5.paginate.perPage);
} }
export class TableComponent {
    constructor() {
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
                let d = dataToUpdate[i][this.headings[j]] != undefined ? dataToUpdate[i][this.headings[j]] : "-";
                data.push(d);
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
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["mg-table"]], inputs: { theme: "theme", mgData: "mgData", ignoredColumns: "ignoredColumns", sortBy: "sortBy", sortDirection: "sortDirection", tableTitle: "tableTitle", fixedHeader: "fixedHeader", dragableSort: "dragableSort", paginate: "paginate", columnsOrder: "columnsOrder", showOptions: "showOptions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 27, vars: 13, consts: [[1, "pad-10"], [1, "pad-5"], [3, "innerHtml", 4, "ngIf"], ["class", "right", 4, "ngIf"], ["widgetId", "1", 3, "show"], [1, "pad-10", "collapse-filter-box"], ["theme", "success", "btnSize", "sm", 3, "clicked"], [1, "fas", "fa-search", "padR-5"], [1, "row"], ["class", "col m3 l3 s6", 4, "ngFor", "ngForOf"], ["widgetId", "2", 3, "show"], [1, "pad-10", "collapse-sorter-box"], [2, "margin-bottom", "5px"], [3, "options", "value"], [3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "padV-5", 4, "ngIf"], [3, "innerHtml"], [1, "right"], ["class", "fas fa-list-ol padL-5 pointer", 3, "click", 4, "ngIf"], ["class", "fas fa-filter padL-5 font-16 pointer", 3, "click", 4, "ngIf"], [1, "fas", "fa-list-ol", "padL-5", "pointer", 3, "click"], [1, "fas", "fa-filter", "padL-5", "font-16", "pointer", 3, "click"], [1, "col", "m3", "l3", "s6"], [3, "control", "label"], [3, "click"], [3, "dataRecieved"], [3, "data", "dragable"], [3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "padV-5"], ["getdata", "updatePaginatedData($event)", 3, "theme", "fullDataMode", "data", "perPage"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'mg-table', template: "<div class=\"pad-10\">\n  <div class=\"pad-5\">\n    <h3><span [innerHtml]=\"tableTitle\" *ngIf=\"showOptions.title\">Table</span> <small class=\"right\" *ngIf=\"showOptions.count\">{{count}} <i\n          class=\"fas fa-list-ol padL-5 pointer\" (click)=\"openSorter()\" *ngIf=\"showOptions.sort\"></i> <i\n          class=\"fas fa-filter padL-5 font-16 pointer\" (click)=\"openFilter()\" *ngIf=\"showOptions.filter\"></i></small></h3>\n    <mg-collapse widgetId=\"1\" [show]=\"openFilterBox\">\n      <div class=\"pad-10 collapse-filter-box\">\n        <h4>Filter </h4>\n        <mg-button (clicked)=\"search($event)\" theme=\"success\" btnSize=\"sm\"><i class=\"fas fa-search padR-5\"></i> Search\n        </mg-button>\n        <div class=\"row\">\n          <div class=\"col m3 l3 s6\" *ngFor=\"let filter of filterQuery\">\n            <mg-input [control]=\"filter.val\" [label]=\"filter.name\"></mg-input>\n          </div>\n        </div>\n      </div>\n    </mg-collapse>\n\n    <mg-collapse widgetId=\"2\" [show]=\"openSortBox\">\n      <div class=\"pad-10 collapse-sorter-box\">\n        <h4 style=\"margin-bottom: 5px;\">Sort</h4>\n        <mg-select [options]=\"sortOptions\" (value)=\"sort($event)\"></mg-select>\n      </div>\n    </mg-collapse>\n  </div>\n  <table class=\"{{theme}}\">\n    <thead [ngClass]=\"fixedHeader ? 'fixed-header' : ''\">\n      <ng-container>\n        \n        <th *ngFor=\"let head of headings; let k = index\"><span (click)=\"sort(head)\">\n          <mg-dropable (dataRecieved)=\"recieveData($event, k)\">\n            <mg-dragable [data]=\"{order: k}\" [dragable]=\"dragableSort\">\n              {{head}}\n            </mg-dragable>\n          </mg-dropable>\n          </span></th>\n      </ng-container>\n      \n    </thead>\n    <tbody>\n      <ng-container>\n        <tr *ngFor=\"let data of reformedData\">\n          <td *ngFor=\"let col of data\" [innerHtml]=\"col\"></td>\n        </tr>\n      </ng-container>\n      \n    </tbody>\n  </table>\n  <div class=\"padV-5\" *ngIf=\"paginate.status\">\n    <mg-pagination [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" getdata=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n</div>\n", styles: [".fixed-header{position:sticky;top:45px}\n"] }]
    }], function () { return []; }, { theme: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ0NyQyxnQ0FBeUQ7SUFBQSxxQkFBSztJQUFBLGlCQUFPOzs7SUFBL0QsZ0VBQXdCOzs7O0lBQWlHLDZCQUN2QztJQUFoRCw2SkFBUyxtQkFBWSxJQUFDO0lBQTBCLGlCQUFJOzs7O0lBQUMsNkJBQ0k7SUFBbEQsK0pBQVMsb0JBQVksSUFBQztJQUE0QixpQkFBSTs7O0lBRi9CLGlDQUErQztJQUFBLFlBQVU7SUFBQSxvRUFDbkM7SUFBQyxvRUFDUTtJQUFBLGlCQUFROzs7SUFGUSxlQUFVO0lBQVYsNENBQVU7SUFDL0QsZUFBc0I7SUFBdEIsOENBQXNCO0lBQ2YsZUFBd0I7SUFBeEIsZ0RBQXdCOzs7SUFPN0YsK0JBQTZEO0lBQzNELCtCQUFrRTtJQUNwRSxpQkFBTTs7O0lBRE0sZUFBc0I7SUFBdEIsd0NBQXNCLDBCQUFBOzs7OztJQWlCcEMsMEJBQWlEO0lBQUEsZ0NBQTJCO0lBQXJCLHVOQUFTLHNCQUFVLElBQUM7SUFDekUsdUNBQXFEO0lBQXhDLDJPQUFnQixrQ0FBc0IsSUFBQztJQUNsRCx1Q0FBMkQ7SUFDekQsWUFDRjtJQUFBLGlCQUFjO0lBQ2hCLGlCQUFjO0lBQ2QsaUJBQU87SUFBQSxpQkFBSzs7Ozs7SUFKRyxlQUFt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YUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFJRyxZQUFZO2tCQUFwQixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHRoZW1lID0gXCJkYXJrXCI7XG4gIEBJbnB1dCgpIG1nRGF0YTogYW55ID0gW107XG4gIEBJbnB1dCgpIGlnbm9yZWRDb2x1bW5zOiBhbnkgPSBbXCJpZFwiXTtcbiAgQElucHV0KCkgc29ydEJ5OiBhbnkgPSBcIlwiO1xuICBASW5wdXQoKSBzb3J0RGlyZWN0aW9uID0gXCJBU0NcIjtcbiAgQElucHV0KCkgdGFibGVUaXRsZSA9IFwiVGFibGVcIjtcbiAgQElucHV0KCkgZml4ZWRIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZHJhZ2FibGVTb3J0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2luYXRlID0ge1xuICAgIHN0YXR1czogZmFsc2UsIFxuICAgIHBlclBhZ2U6IDVcbiAgfTtcbiAgQElucHV0KCkgY29sdW1uc09yZGVyOmFueSA9IFtdO1xuXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zID0ge1xuICAgIHRpdGxlOiBmYWxzZSxcbiAgICBmaWx0ZXI6IGZhbHNlLFxuICAgIHNvcnQ6IGZhbHNlLFxuICAgIGNvdW50OiBmYWxzZVxuICB9O1xuXG4gIHNob3cgPSBmYWxzZTtcbiAgc2V0U2hvd1RpbWVyKCk6IGFueSB7XG4gICAgdmFyICR0aGlzID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICR0aGlzLnNob3cgPSB0cnVlO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIHJlZm9ybWVkRGF0YTogYW55ID0gW107XG4gIHJlZm9ybWVkSGVhZHM6IGFueSA9IHt9O1xuXG4gIGhlYWRpbmdzOiBhbnkgPSBbXTtcblxuICBmaWx0ZXJRdWVyeTogYW55ID0gW107XG5cbiAgY291bnQgPSAwO1xuXG4gIHBhZ2luYXRlZERhdGEgPSBbXTtcblxuICBvcGVuRmlsdGVyQm94ID0gZmFsc2U7XG4gIG9wZW5Tb3J0Qm94ID0gZmFsc2U7XG4gIHNvcnRPcHRpb25zOiBhbnkgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnNldFNob3dUaW1lcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZXh0cmFjdEhlYWRpbmdzKCk7XG4gICAgdGhpcy5yZWZhY3RvckRhdGEoKTtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5yZWZvcm1lZERhdGEubGVuZ3RoO1xuICB9XG5cbiAgY29uY2F0SGVhZHMoaGVhZE9iajogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkT2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaGVhZGluZ3MuaW5jbHVkZXMoaGVhZE9ialtpXSkgJiYgIXRoaXMuaWdub3JlZENvbHVtbnMuaW5jbHVkZXMoaGVhZE9ialtpXSkpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5ncy5wdXNoKGhlYWRPYmpbaV0pO1xuICAgICAgICB0aGlzLnNvcnRPcHRpb25zLnB1c2goeyBuYW1lOiBoZWFkT2JqW2ldLCB2YWw6IGhlYWRPYmpbaV0gfSk7XG4gICAgICAgIHRoaXMuZmlsdGVyUXVlcnkucHVzaCh7IG5hbWU6IGhlYWRPYmpbaV0sIHZhbDogbmV3IEZvcm1Db250cm9sKFwiXCIpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRDb2x1bW5zKCl7XG4gICAgaWYodGhpcy5jb2x1bW5zT3JkZXIgJiYgdGhpcy5jb2x1bW5zT3JkZXIubGVuZ3RoID4gMCl7XG4gICAgICBsZXQgbmV3SGVhZHM6YW55ID0gW107XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zT3JkZXIubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5oZWFkaW5ncy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgaWYodGhpcy5jb2x1bW5zT3JkZXJbaV0gPT09IHRoaXMuaGVhZGluZ3Nbal0pe1xuICAgICAgICAgICAgbmV3SGVhZHMucHVzaCh0aGlzLmhlYWRpbmdzW2pdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IG5ld0RpZmYgPSB0aGlzLmhlYWRpbmdzLmZpbHRlcigoeDphbnkpID0+ICFuZXdIZWFkcy5pbmNsdWRlcyh4KSk7XG4gICAgICBuZXdIZWFkcyA9IFsuLi5uZXdIZWFkcywgLi4ubmV3RGlmZl07XG4gICAgICB0aGlzLmhlYWRpbmdzID0gbmV3SGVhZHM7XG4gICAgfVxuICB9XG5cbiAgZXh0cmFjdEhlYWRpbmdzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYmpIZWFkcyA9IE9iamVjdC5rZXlzKHRoaXMubWdEYXRhW2ldKTtcbiAgICAgIHRoaXMuY29uY2F0SGVhZHMob2JqSGVhZHMpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRDb2x1bW5zKCk7XG4gIH1cblxuICByZWZhY3RvckRhdGEoZGF0YVRvVXBkYXRlOiBhbnlbXSA9IHRoaXMubWdEYXRhKSB7XG5cbiAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVG9VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhOiBhbnkgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlYWRpbmdzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgbGV0IGQgPSBkYXRhVG9VcGRhdGVbaV1bdGhpcy5oZWFkaW5nc1tqXV0gIT0gdW5kZWZpbmVkID8gZGF0YVRvVXBkYXRlW2ldW3RoaXMuaGVhZGluZ3Nbal1dIDogXCItXCI7XG4gICAgICAgIGRhdGEucHVzaChkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWZvcm1lZERhdGEucHVzaChkYXRhKTtcblxuICAgIH1cblxuICAgIHRoaXMucmVmb3JtZWRIZWFkcyA9IHRoaXMucmVmb3JtZWREYXRhWzBdO1xuICAgIHRoaXMuc29ydEJ5RXhjZXB0aW9uKCk7XG4gIH1cblxuICBzb3J0RmxpcChuZXdLZXk6IGFueSkge1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHRoaXMuc29ydERpcmVjdGlvbiA9PT0gXCJcIiA/IFwiQVNDXCIgOiB0aGlzLnNvcnREaXJlY3Rpb247XG4gICAgaWYgKHRoaXMuc29ydEJ5ICE9IFwiXCIpIHtcbiAgICAgIGlmICh0aGlzLnNvcnRCeSA9PSBuZXdLZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PSBcIkFTQ1wiKSB7XG4gICAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gXCJERVNDXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gXCJBU0NcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gXCJBU0NcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0KHNvcnRLZXk6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwia2V5ID09PiBcIiwgc29ydEtleSk7XG4gICAgdGhpcy5zb3J0QnlFeGNlcHRpb24oKTtcbiAgICBpZiAodGhpcy5zb3J0QnkgIT0gXCJcIikge1xuICAgICAgdGhpcy5zb3J0RmxpcChzb3J0S2V5KTtcbiAgICAgIHRoaXMuc29ydEJ5ID0gc29ydEtleTtcbiAgICAgIGxldCBzb3J0ZXIgPSB0aGlzLmhlYWRpbmdzLmluZGV4T2YodGhpcy5zb3J0QnkpO1xuICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgIGxldCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGFbc29ydGVyXSA9IGFbc29ydGVyXS50b1N0cmluZygpO1xuICAgICAgICBiW3NvcnRlcl0gPSBiW3NvcnRlcl0udG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAoYVtzb3J0ZXJdIDwgYltzb3J0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuICR0aGlzLnNvcnREaXJlY3Rpb24gPT09IFwiQVNDXCIgPyAtMSA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbc29ydGVyXSA+IGJbc29ydGVyXSkge1xuICAgICAgICAgIHJldHVybiAkdGhpcy5zb3J0RGlyZWN0aW9uID09PSBcIkFTQ1wiID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZvcm1lZERhdGEgPSB0aGlzLnJlZm9ybWVkRGF0YS5zb3J0KGNvbXBhcmUpO1xuICAgIH1cblxuICB9XG5cbiAgc29ydEJ5RXhjZXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnNvcnRCeSA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnNvcnRCeSA9IHRoaXMuaGVhZGluZ3NbMF07XG4gICAgfVxuICB9XG5cblxuICBmaWx0ZXIoZmlsdGVyS2V5OiBhbnkpIHtcbiAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IHRoaXMucmVmb3JtZWREYXRhLmZpbHRlcihmdW5jdGlvbiAoZWw6IGFueSkge1xuICAgICAgcmV0dXJuIGVsLnByaWNlIDw9IDEwMDAgJiZcbiAgICAgICAgZWwuc3FmdCA+PSA1MDAgJiZcbiAgICAgICAgZWwubnVtX29mX2JlZHMgPj0gMiAmJlxuICAgICAgICBlbC5udW1fb2ZfYmF0aHMgPj0gMi41O1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblNvcnRlcigpIHtcbiAgICB0aGlzLm9wZW5Tb3J0Qm94ID0gIXRoaXMub3BlblNvcnRCb3g7XG4gICAgdGhpcy5vcGVuRmlsdGVyQm94ID0gZmFsc2U7XG4gIH1cblxuICBvcGVuRmlsdGVyKCkge1xuICAgIHRoaXMub3BlbkZpbHRlckJveCA9ICF0aGlzLm9wZW5GaWx0ZXJCb3g7XG4gICAgdGhpcy5vcGVuU29ydEJveCA9IGZhbHNlO1xuICB9XG5cbiAgc2VhcmNoKGVuYWJsZTogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKGVuYWJsZSk7XG4gIH1cblxuICByZWNpZXZlRGF0YShldmVudDogYW55LCBrOiBudW1iZXIpe1xuICAgIGlmKHRoaXMuZHJhZ2FibGVTb3J0KXtcbiAgICAgIGxldCBmcm9tQ29sdW1uID0gdGhpcy5jb2x1bW5zT3JkZXJbZXZlbnQub3JkZXJdO1xuICAgICAgdGhpcy5jb2x1bW5zT3JkZXJbZXZlbnQub3JkZXJdID0gdGhpcy5jb2x1bW5zT3JkZXJba107XG4gICAgICB0aGlzLmNvbHVtbnNPcmRlcltrXSA9IGZyb21Db2x1bW47XG4gICAgICBmcm9tQ29sdW1uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5leHRyYWN0SGVhZGluZ3MoKTtcbiAgICAgIGlmKHRoaXMucGFnaW5hdGUuc3RhdHVzKXtcbiAgICAgICAgdGhpcy5yZWZhY3RvckRhdGEodGhpcy5wYWdpbmF0ZWREYXRhKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yZWZhY3RvckRhdGEoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdpbmF0ZWREYXRhKGRhdGE6YW55KXtcbiAgICBcbiAgICB0aGlzLnBhZ2luYXRlZERhdGEgPSBkYXRhO1xuICAgIGlmKHRoaXMucGFnaW5hdGUuc3RhdHVzKSB0aGlzLnJlZmFjdG9yRGF0YSh0aGlzLnBhZ2luYXRlZERhdGEpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwYWQtMTBcIj5cbiAgPGRpdiBjbGFzcz1cInBhZC01XCI+XG4gICAgPGgzPjxzcGFuIFtpbm5lckh0bWxdPVwidGFibGVUaXRsZVwiICpuZ0lmPVwic2hvd09wdGlvbnMudGl0bGVcIj5UYWJsZTwvc3Bhbj4gPHNtYWxsIGNsYXNzPVwicmlnaHRcIiAqbmdJZj1cInNob3dPcHRpb25zLmNvdW50XCI+e3tjb3VudH19IDxpXG4gICAgICAgICAgY2xhc3M9XCJmYXMgZmEtbGlzdC1vbCBwYWRMLTUgcG9pbnRlclwiIChjbGljayk9XCJvcGVuU29ydGVyKClcIiAqbmdJZj1cInNob3dPcHRpb25zLnNvcnRcIj48L2k+IDxpXG4gICAgICAgICAgY2xhc3M9XCJmYXMgZmEtZmlsdGVyIHBhZEwtNSBmb250LTE2IHBvaW50ZXJcIiAoY2xpY2spPVwib3BlbkZpbHRlcigpXCIgKm5nSWY9XCJzaG93T3B0aW9ucy5maWx0ZXJcIj48L2k+PC9zbWFsbD48L2gzPlxuICAgIDxtZy1jb2xsYXBzZSB3aWRnZXRJZD1cIjFcIiBbc2hvd109XCJvcGVuRmlsdGVyQm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFkLTEwIGNvbGxhcHNlLWZpbHRlci1ib3hcIj5cbiAgICAgICAgPGg0PkZpbHRlciA8L2g0PlxuICAgICAgICA8bWctYnV0dG9uIChjbGlja2VkKT1cInNlYXJjaCgkZXZlbnQpXCIgdGhlbWU9XCJzdWNjZXNzXCIgYnRuU2l6ZT1cInNtXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoIHBhZFItNVwiPjwvaT4gU2VhcmNoXG4gICAgICAgIDwvbWctYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtMyBsMyBzNlwiICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgZmlsdGVyUXVlcnlcIj5cbiAgICAgICAgICAgIDxtZy1pbnB1dCBbY29udHJvbF09XCJmaWx0ZXIudmFsXCIgW2xhYmVsXT1cImZpbHRlci5uYW1lXCI+PC9tZy1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21nLWNvbGxhcHNlPlxuXG4gICAgPG1nLWNvbGxhcHNlIHdpZGdldElkPVwiMlwiIFtzaG93XT1cIm9wZW5Tb3J0Qm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFkLTEwIGNvbGxhcHNlLXNvcnRlci1ib3hcIj5cbiAgICAgICAgPGg0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNXB4O1wiPlNvcnQ8L2g0PlxuICAgICAgICA8bWctc2VsZWN0IFtvcHRpb25zXT1cInNvcnRPcHRpb25zXCIgKHZhbHVlKT1cInNvcnQoJGV2ZW50KVwiPjwvbWctc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9tZy1jb2xsYXBzZT5cbiAgPC9kaXY+XG4gIDx0YWJsZSBjbGFzcz1cInt7dGhlbWV9fVwiPlxuICAgIDx0aGVhZCBbbmdDbGFzc109XCJmaXhlZEhlYWRlciA/ICdmaXhlZC1oZWFkZXInIDogJydcIj5cbiAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgIFxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWQgb2YgaGVhZGluZ3M7IGxldCBrID0gaW5kZXhcIj48c3BhbiAoY2xpY2spPVwic29ydChoZWFkKVwiPlxuICAgICAgICAgIDxtZy1kcm9wYWJsZSAoZGF0YVJlY2lldmVkKT1cInJlY2lldmVEYXRhKCRldmVudCwgaylcIj5cbiAgICAgICAgICAgIDxtZy1kcmFnYWJsZSBbZGF0YV09XCJ7b3JkZXI6IGt9XCIgW2RyYWdhYmxlXT1cImRyYWdhYmxlU29ydFwiPlxuICAgICAgICAgICAgICB7e2hlYWR9fVxuICAgICAgICAgICAgPC9tZy1kcmFnYWJsZT5cbiAgICAgICAgICA8L21nLWRyb3BhYmxlPlxuICAgICAgICAgIDwvc3Bhbj48L3RoPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICBcbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiByZWZvcm1lZERhdGFcIj5cbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbCBvZiBkYXRhXCIgW2lubmVySHRtbF09XCJjb2xcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICBcbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuICA8ZGl2IGNsYXNzPVwicGFkVi01XCIgKm5nSWY9XCJwYWdpbmF0ZS5zdGF0dXNcIj5cbiAgICA8bWctcGFnaW5hdGlvbiBbdGhlbWVdPVwidGhlbWVcIiBbZnVsbERhdGFNb2RlXT1cInRydWVcIiBbZGF0YV09XCJtZ0RhdGFcIiBbcGVyUGFnZV09XCJwYWdpbmF0ZS5wZXJQYWdlXCIgZ2V0ZGF0YT1cInVwZGF0ZVBhZ2luYXRlZERhdGEoJGV2ZW50KVwiPjwvbWctcGFnaW5hdGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==