import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../collapse/collapse.component";
import * as i2 from "../button/button.component";
import * as i3 from "../input/input.component";
import * as i4 from "../select/select.component";
import * as i5 from "../pagination/pagination.component";
import * as i6 from "../dropable/dropable.component";
import * as i7 from "../dragable/dragable.component";
import * as i8 from "@angular/common";
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
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TableComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TableComponent, selector: "mg-table", inputs: { theme: "theme", mgData: "mgData", ignoredColumns: "ignoredColumns", sortBy: "sortBy", sortDirection: "sortDirection", tableTitle: "tableTitle", fixedHeader: "fixedHeader", dragableSort: "dragableSort", paginate: "paginate", pagingPosition: "pagingPosition", columnsOrder: "columnsOrder", showOptions: "showOptions" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"pad-10\">\n  <div class=\"pad-5\">\n    <h3><span [innerHtml]=\"tableTitle\" *ngIf=\"showOptions.title\">Table</span> <small class=\"right\" *ngIf=\"showOptions.count\">{{count}} <i\n          class=\"fas fa-list-ol padL-5 pointer\" (click)=\"openSorter()\" *ngIf=\"showOptions.sort\"></i> <i\n          class=\"fas fa-filter padL-5 font-16 pointer\" (click)=\"openFilter()\" *ngIf=\"showOptions.filter\"></i></small></h3>\n    <mg-collapse widgetId=\"1\" [show]=\"openFilterBox\">\n      <div class=\"pad-10 collapse-filter-box\">\n        <h4>Filter </h4>\n        <mg-button (clicked)=\"search($event)\" theme=\"success\" btnSize=\"sm\"><i class=\"fas fa-search padR-5\"></i> Search\n        </mg-button>\n        <div class=\"row\">\n          <div class=\"col m3 l3 s6\" *ngFor=\"let filter of filterQuery\">\n            <mg-input [control]=\"filter.val\" [label]=\"filter.name\"></mg-input>\n          </div>\n        </div>\n      </div>\n    </mg-collapse>\n\n    <mg-collapse widgetId=\"2\" [show]=\"openSortBox\">\n      <div class=\"pad-10 collapse-sorter-box\">\n        <h4 style=\"margin-bottom: 5px;\">Sort</h4>\n        <mg-select [options]=\"sortOptions\" (value)=\"sort($event)\"></mg-select>\n      </div>\n    </mg-collapse>\n  </div>\n  <div class=\"padV-5\" *ngIf=\"paginate.status && pagingPosition.top\">\n    <mg-pagination (page)=\"setCurrentPage($event)\" [currentPage]=\"currentPage\" [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n  <table class=\"{{theme}}\">\n    <thead [ngClass]=\"fixedHeader ? 'fixed-header' : ''\">\n      <ng-container>\n        \n        <th *ngFor=\"let head of headings; let k = index\"><span (click)=\"sort(head)\">\n          <mg-dropable (dataRecieved)=\"recieveData($event, k)\">\n            <mg-dragable [data]=\"{order: k}\" [dragable]=\"dragableSort\">\n              {{head}}\n            </mg-dragable>\n          </mg-dropable>\n          </span></th>\n      </ng-container>\n      \n    </thead>\n    <tbody>\n      <ng-container>\n        <tr *ngFor=\"let data of reformedData\">\n          <td *ngFor=\"let col of data\" [innerHtml]=\"col\"></td>\n        </tr>\n      </ng-container>\n      \n    </tbody>\n  </table>\n  <div class=\"padV-5\" *ngIf=\"paginate.status && pagingPosition.bottom\">\n    <mg-pagination (page)=\"setCurrentPage($event)\" [currentPage]=\"currentPage\" [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n</div>\n", styles: [".fixed-header{position:sticky;top:45px}\n"], components: [{ type: i1.CollapseComponent, selector: "mg-collapse", inputs: ["id", "show", "class"], outputs: ["active"] }, { type: i2.ButtonComponent, selector: "mg-button", inputs: ["taskType", "btnStyle", "task", "target", "theme", "class", "btnSize", "isBlock", "round", "allowMargin", "link", "allowShrink", "options", "isExternalLink", "newTab"], outputs: ["clicked", "active"] }, { type: i3.InputComponent, selector: "mg-input", inputs: ["theme", "fStyle", "label", "placeholder", "control", "type", "onDark", "class", "textValue", "rounded"], outputs: ["value", "isFocused", "keyup"] }, { type: i4.SelectComponent, selector: "mg-select", inputs: ["searchOpt", "theme", "selectTitle", "selectType", "enableSearch", "options"], outputs: ["value"] }, { type: i5.PaginationComponent, selector: "mg-pagination", inputs: ["theme", "data", "fullDataMode", "perPage", "currentPage", "icons", "max"], outputs: ["page", "getdata"] }, { type: i6.DropableComponent, selector: "mg-dropable", inputs: ["dropFiles", "class"], outputs: ["onEvent", "dataRecieved"] }, { type: i7.DragableComponent, selector: "mg-dragable", inputs: ["dragable", "data", "class"], outputs: ["onEvent"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-table', template: "<div class=\"pad-10\">\n  <div class=\"pad-5\">\n    <h3><span [innerHtml]=\"tableTitle\" *ngIf=\"showOptions.title\">Table</span> <small class=\"right\" *ngIf=\"showOptions.count\">{{count}} <i\n          class=\"fas fa-list-ol padL-5 pointer\" (click)=\"openSorter()\" *ngIf=\"showOptions.sort\"></i> <i\n          class=\"fas fa-filter padL-5 font-16 pointer\" (click)=\"openFilter()\" *ngIf=\"showOptions.filter\"></i></small></h3>\n    <mg-collapse widgetId=\"1\" [show]=\"openFilterBox\">\n      <div class=\"pad-10 collapse-filter-box\">\n        <h4>Filter </h4>\n        <mg-button (clicked)=\"search($event)\" theme=\"success\" btnSize=\"sm\"><i class=\"fas fa-search padR-5\"></i> Search\n        </mg-button>\n        <div class=\"row\">\n          <div class=\"col m3 l3 s6\" *ngFor=\"let filter of filterQuery\">\n            <mg-input [control]=\"filter.val\" [label]=\"filter.name\"></mg-input>\n          </div>\n        </div>\n      </div>\n    </mg-collapse>\n\n    <mg-collapse widgetId=\"2\" [show]=\"openSortBox\">\n      <div class=\"pad-10 collapse-sorter-box\">\n        <h4 style=\"margin-bottom: 5px;\">Sort</h4>\n        <mg-select [options]=\"sortOptions\" (value)=\"sort($event)\"></mg-select>\n      </div>\n    </mg-collapse>\n  </div>\n  <div class=\"padV-5\" *ngIf=\"paginate.status && pagingPosition.top\">\n    <mg-pagination (page)=\"setCurrentPage($event)\" [currentPage]=\"currentPage\" [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n  <table class=\"{{theme}}\">\n    <thead [ngClass]=\"fixedHeader ? 'fixed-header' : ''\">\n      <ng-container>\n        \n        <th *ngFor=\"let head of headings; let k = index\"><span (click)=\"sort(head)\">\n          <mg-dropable (dataRecieved)=\"recieveData($event, k)\">\n            <mg-dragable [data]=\"{order: k}\" [dragable]=\"dragableSort\">\n              {{head}}\n            </mg-dragable>\n          </mg-dropable>\n          </span></th>\n      </ng-container>\n      \n    </thead>\n    <tbody>\n      <ng-container>\n        <tr *ngFor=\"let data of reformedData\">\n          <td *ngFor=\"let col of data\" [innerHtml]=\"col\"></td>\n        </tr>\n      </ng-container>\n      \n    </tbody>\n  </table>\n  <div class=\"padV-5\" *ngIf=\"paginate.status && pagingPosition.bottom\">\n    <mg-pagination (page)=\"setCurrentPage($event)\" [currentPage]=\"currentPage\" [theme]=\"theme\" [fullDataMode]=\"true\" [data]=\"mgData\" [perPage]=\"paginate.perPage\" (getdata)=\"updatePaginatedData($event)\"></mg-pagination>\n  </div>\n</div>\n", styles: [".fixed-header{position:sticky;top:45px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { theme: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTBDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQU83QyxNQUFNLE9BQU8sY0FBYztJQXdEekIsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUF2RG5DLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFRO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBRU8sbUJBQWMsR0FBRztZQUN4QixHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQTtRQUVRLGlCQUFZLEdBQU8sRUFBRSxDQUFDO1FBRXRCLGdCQUFXLEdBQUc7WUFDckIsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxLQUFL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R0FBRyxVQUFVLENBQUM7WUFDbEMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQztnQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdkM7aUJBQUs7Z0JBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBUTtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OzJHQS9OVSxjQUFjOytGQUFkLGNBQWMsNllDUjNCLHlsRkF1REE7MkZEL0NhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsVUFBVTt3R0FLWCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFLRyxjQUFjO3NCQUF0QixLQUFLO2dCQUtHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBtZ0RhdGE6IGFueSA9IFtdO1xuICBASW5wdXQoKSBpZ25vcmVkQ29sdW1uczogYW55ID0gW1wiaWRcIl07XG4gIEBJbnB1dCgpIHNvcnRCeTogYW55ID0gXCJcIjtcbiAgQElucHV0KCkgc29ydERpcmVjdGlvbiA9IFwiQVNDXCI7XG4gIEBJbnB1dCgpIHRhYmxlVGl0bGUgPSBcIlRhYmxlXCI7XG4gIEBJbnB1dCgpIGZpeGVkSGVhZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRyYWdhYmxlU29ydCA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmF0ZT86YW55ID0ge1xuICAgIHN0YXR1czogZmFsc2UsIFxuICAgIHBlclBhZ2U6IDVcbiAgfTtcblxuICBASW5wdXQoKSBwYWdpbmdQb3NpdGlvbiA9IHtcbiAgICB0b3A6IHRydWUsXG4gICAgYm90dG9tOiB0cnVlXG4gIH1cblxuICBASW5wdXQoKSBjb2x1bW5zT3JkZXI6YW55ID0gW107XG5cbiAgQElucHV0KCkgc2hvd09wdGlvbnMgPSB7XG4gICAgdGl0bGU6IGZhbHNlLFxuICAgIGZpbHRlcjogZmFsc2UsXG4gICAgc29ydDogZmFsc2UsXG4gICAgY291bnQ6IGZhbHNlXG4gIH07XG4gIGN1cnJlbnRQYWdlID0gMTtcbiAgc2hvdyA9IGZhbHNlO1xuICBcbiAgc2V0Q3VycmVudFBhZ2UoZXZlbnQ6bnVtYmVyKXtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gZXZlbnQ7XG4gIH1cblxuICBzZXRTaG93VGltZXIoKTogYW55IHtcbiAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJHRoaXMuc2hvdyA9IHRydWU7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgcmVmb3JtZWREYXRhOiBhbnkgPSBbXTtcbiAgcmVmb3JtZWRIZWFkczogYW55ID0ge307XG5cbiAgaGVhZGluZ3M6IGFueSA9IFtdO1xuXG4gIGZpbHRlclF1ZXJ5OiBhbnkgPSBbXTtcblxuICBjb3VudCA9IDA7XG5cbiAgcGFnaW5hdGVkRGF0YSA9IFtdO1xuXG4gIG9wZW5GaWx0ZXJCb3ggPSBmYWxzZTtcbiAgb3BlblNvcnRCb3ggPSBmYWxzZTtcbiAgc29ydE9wdGlvbnM6IGFueSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuc2V0U2hvd1RpbWVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xuICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmV4dHJhY3RIZWFkaW5ncygpO1xuICAgIHRoaXMucmVmYWN0b3JEYXRhKCk7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMucmVmb3JtZWREYXRhLmxlbmd0aDtcbiAgfVxuXG4gIGNvbmNhdEhlYWRzKGhlYWRPYmo6IGFueSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZE9iai5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmhlYWRpbmdzLmluY2x1ZGVzKGhlYWRPYmpbaV0pICYmICF0aGlzLmlnbm9yZWRDb2x1bW5zLmluY2x1ZGVzKGhlYWRPYmpbaV0pKSB7XG4gICAgICAgIHRoaXMuaGVhZGluZ3MucHVzaChoZWFkT2JqW2ldKTtcbiAgICAgICAgdGhpcy5zb3J0T3B0aW9ucy5wdXNoKHsgbmFtZTogaGVhZE9ialtpXSwgdmFsOiBoZWFkT2JqW2ldIH0pO1xuICAgICAgICB0aGlzLmZpbHRlclF1ZXJ5LnB1c2goeyBuYW1lOiBoZWFkT2JqW2ldLCB2YWw6IG5ldyBGb3JtQ29udHJvbChcIlwiKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0Q29sdW1ucygpe1xuICAgIGlmKHRoaXMuY29sdW1uc09yZGVyICYmIHRoaXMuY29sdW1uc09yZGVyLmxlbmd0aCA+IDApe1xuICAgICAgbGV0IG5ld0hlYWRzOmFueSA9IFtdO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uc09yZGVyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuaGVhZGluZ3MubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIGlmKHRoaXMuY29sdW1uc09yZGVyW2ldID09PSB0aGlzLmhlYWRpbmdzW2pdKXtcbiAgICAgICAgICAgIG5ld0hlYWRzLnB1c2godGhpcy5oZWFkaW5nc1tqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdEaWZmID0gdGhpcy5oZWFkaW5ncy5maWx0ZXIoKHg6YW55KSA9PiAhbmV3SGVhZHMuaW5jbHVkZXMoeCkpO1xuICAgICAgbmV3SGVhZHMgPSBbLi4ubmV3SGVhZHMsIC4uLm5ld0RpZmZdO1xuICAgICAgdGhpcy5oZWFkaW5ncyA9IG5ld0hlYWRzO1xuICAgIH1cbiAgfVxuXG4gIGV4dHJhY3RIZWFkaW5ncygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb2JqSGVhZHMgPSBPYmplY3Qua2V5cyh0aGlzLm1nRGF0YVtpXSk7XG4gICAgICB0aGlzLmNvbmNhdEhlYWRzKG9iakhlYWRzKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0Q29sdW1ucygpO1xuICB9XG5cbiAgcmVmYWN0b3JEYXRhKGRhdGFUb1VwZGF0ZTogYW55W10gPSB0aGlzLm1nRGF0YSkge1xuXG4gICAgdGhpcy5yZWZvcm1lZERhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRvVXBkYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YTogYW55ID0gW107XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWFkaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZihkYXRhVG9VcGRhdGVbaV0pe1xuICAgICAgICAgIGxldCBkID0gZGF0YVRvVXBkYXRlW2ldW3RoaXMuaGVhZGluZ3Nbal1dICE9IHVuZGVmaW5lZCA/IGRhdGFUb1VwZGF0ZVtpXVt0aGlzLmhlYWRpbmdzW2pdXSA6IFwiLVwiO1xuICAgICAgICAgIGRhdGEucHVzaChkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWZvcm1lZERhdGEucHVzaChkYXRhKTtcblxuICAgIH1cblxuICAgIHRoaXMucmVmb3JtZWRIZWFkcyA9IHRoaXMucmVmb3JtZWREYXRhWzBdO1xuICAgIHRoaXMuc29ydEJ5RXhjZXB0aW9uKCk7XG4gIH1cblxuICBzb3J0RmxpcChuZXdLZXk6IGFueSkge1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHRoaXMuc29ydERpcmVjdGlvbiA9PT0gXCJcIiA/IFwiQVNDXCIgOiB0aGlzLnNvcnREaXJlY3Rpb247XG4gICAgaWYgKHRoaXMuc29ydEJ5ICE9IFwiXCIpIHtcbiAgICAgIGlmICh0aGlzLnNvcnRCeSA9PSBuZXdLZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PSBcIkFTQ1wiKSB7XG4gICAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gXCJERVNDXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gXCJBU0NcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gXCJBU0NcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0KHNvcnRLZXk6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwia2V5ID09PiBcIiwgc29ydEtleSk7XG4gICAgdGhpcy5zb3J0QnlFeGNlcHRpb24oKTtcbiAgICBpZiAodGhpcy5zb3J0QnkgIT0gXCJcIikge1xuICAgICAgdGhpcy5zb3J0RmxpcChzb3J0S2V5KTtcbiAgICAgIHRoaXMuc29ydEJ5ID0gc29ydEtleTtcbiAgICAgIGxldCBzb3J0ZXIgPSB0aGlzLmhlYWRpbmdzLmluZGV4T2YodGhpcy5zb3J0QnkpO1xuICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgIGxldCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGFbc29ydGVyXSA9IGFbc29ydGVyXS50b1N0cmluZygpO1xuICAgICAgICBiW3NvcnRlcl0gPSBiW3NvcnRlcl0udG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAoYVtzb3J0ZXJdIDwgYltzb3J0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuICR0aGlzLnNvcnREaXJlY3Rpb24gPT09IFwiQVNDXCIgPyAtMSA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbc29ydGVyXSA+IGJbc29ydGVyXSkge1xuICAgICAgICAgIHJldHVybiAkdGhpcy5zb3J0RGlyZWN0aW9uID09PSBcIkFTQ1wiID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZvcm1lZERhdGEgPSB0aGlzLnJlZm9ybWVkRGF0YS5zb3J0KGNvbXBhcmUpO1xuICAgIH1cblxuICB9XG5cbiAgc29ydEJ5RXhjZXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnNvcnRCeSA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnNvcnRCeSA9IHRoaXMuaGVhZGluZ3NbMF07XG4gICAgfVxuICB9XG5cblxuICBmaWx0ZXIoZmlsdGVyS2V5OiBhbnkpIHtcbiAgICB0aGlzLnJlZm9ybWVkRGF0YSA9IHRoaXMucmVmb3JtZWREYXRhLmZpbHRlcihmdW5jdGlvbiAoZWw6IGFueSkge1xuICAgICAgcmV0dXJuIGVsLnByaWNlIDw9IDEwMDAgJiZcbiAgICAgICAgZWwuc3FmdCA+PSA1MDAgJiZcbiAgICAgICAgZWwubnVtX29mX2JlZHMgPj0gMiAmJlxuICAgICAgICBlbC5udW1fb2ZfYmF0aHMgPj0gMi41O1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblNvcnRlcigpIHtcbiAgICB0aGlzLm9wZW5Tb3J0Qm94ID0gIXRoaXMub3BlblNvcnRCb3g7XG4gICAgdGhpcy5vcGVuRmlsdGVyQm94ID0gZmFsc2U7XG4gIH1cblxuICBvcGVuRmlsdGVyKCkge1xuICAgIHRoaXMub3BlbkZpbHRlckJveCA9ICF0aGlzLm9wZW5GaWx0ZXJCb3g7XG4gICAgdGhpcy5vcGVuU29ydEJveCA9IGZhbHNlO1xuICB9XG5cbiAgc2VhcmNoKGVuYWJsZTogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKGVuYWJsZSk7XG4gIH1cblxuICByZWNpZXZlRGF0YShldmVudDogYW55LCBrOiBudW1iZXIpe1xuICAgIGlmKHRoaXMuZHJhZ2FibGVTb3J0KXtcbiAgICAgIGxldCBmcm9tQ29sdW1uID0gdGhpcy5jb2x1bW5zT3JkZXJbZXZlbnQub3JkZXJdO1xuICAgICAgdGhpcy5jb2x1bW5zT3JkZXJbZXZlbnQub3JkZXJdID0gdGhpcy5jb2x1bW5zT3JkZXJba107XG4gICAgICB0aGlzLmNvbHVtbnNPcmRlcltrXSA9IGZyb21Db2x1bW47XG4gICAgICBmcm9tQ29sdW1uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5leHRyYWN0SGVhZGluZ3MoKTtcbiAgICAgIGlmKHRoaXMucGFnaW5hdGUuc3RhdHVzKXtcbiAgICAgICAgdGhpcy5yZWZhY3RvckRhdGEodGhpcy5wYWdpbmF0ZWREYXRhKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5yZWZhY3RvckRhdGEoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdpbmF0ZWREYXRhKGRhdGE6YW55KXtcbiAgICB0aGlzLnBhZ2luYXRlZERhdGEgPSBkYXRhO1xuICAgIGlmKHRoaXMucGFnaW5hdGUuc3RhdHVzKSB0aGlzLnJlZmFjdG9yRGF0YSh0aGlzLnBhZ2luYXRlZERhdGEpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwYWQtMTBcIj5cbiAgPGRpdiBjbGFzcz1cInBhZC01XCI+XG4gICAgPGgzPjxzcGFuIFtpbm5lckh0bWxdPVwidGFibGVUaXRsZVwiICpuZ0lmPVwic2hvd09wdGlvbnMudGl0bGVcIj5UYWJsZTwvc3Bhbj4gPHNtYWxsIGNsYXNzPVwicmlnaHRcIiAqbmdJZj1cInNob3dPcHRpb25zLmNvdW50XCI+e3tjb3VudH19IDxpXG4gICAgICAgICAgY2xhc3M9XCJmYXMgZmEtbGlzdC1vbCBwYWRMLTUgcG9pbnRlclwiIChjbGljayk9XCJvcGVuU29ydGVyKClcIiAqbmdJZj1cInNob3dPcHRpb25zLnNvcnRcIj48L2k+IDxpXG4gICAgICAgICAgY2xhc3M9XCJmYXMgZmEtZmlsdGVyIHBhZEwtNSBmb250LTE2IHBvaW50ZXJcIiAoY2xpY2spPVwib3BlbkZpbHRlcigpXCIgKm5nSWY9XCJzaG93T3B0aW9ucy5maWx0ZXJcIj48L2k+PC9zbWFsbD48L2gzPlxuICAgIDxtZy1jb2xsYXBzZSB3aWRnZXRJZD1cIjFcIiBbc2hvd109XCJvcGVuRmlsdGVyQm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFkLTEwIGNvbGxhcHNlLWZpbHRlci1ib3hcIj5cbiAgICAgICAgPGg0PkZpbHRlciA8L2g0PlxuICAgICAgICA8bWctYnV0dG9uIChjbGlja2VkKT1cInNlYXJjaCgkZXZlbnQpXCIgdGhlbWU9XCJzdWNjZXNzXCIgYnRuU2l6ZT1cInNtXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoIHBhZFItNVwiPjwvaT4gU2VhcmNoXG4gICAgICAgIDwvbWctYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtMyBsMyBzNlwiICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgZmlsdGVyUXVlcnlcIj5cbiAgICAgICAgICAgIDxtZy1pbnB1dCBbY29udHJvbF09XCJmaWx0ZXIudmFsXCIgW2xhYmVsXT1cImZpbHRlci5uYW1lXCI+PC9tZy1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21nLWNvbGxhcHNlPlxuXG4gICAgPG1nLWNvbGxhcHNlIHdpZGdldElkPVwiMlwiIFtzaG93XT1cIm9wZW5Tb3J0Qm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFkLTEwIGNvbGxhcHNlLXNvcnRlci1ib3hcIj5cbiAgICAgICAgPGg0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNXB4O1wiPlNvcnQ8L2g0PlxuICAgICAgICA8bWctc2VsZWN0IFtvcHRpb25zXT1cInNvcnRPcHRpb25zXCIgKHZhbHVlKT1cInNvcnQoJGV2ZW50KVwiPjwvbWctc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9tZy1jb2xsYXBzZT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYWRWLTVcIiAqbmdJZj1cInBhZ2luYXRlLnN0YXR1cyAmJiBwYWdpbmdQb3NpdGlvbi50b3BcIj5cbiAgICA8bWctcGFnaW5hdGlvbiAocGFnZSk9XCJzZXRDdXJyZW50UGFnZSgkZXZlbnQpXCIgW2N1cnJlbnRQYWdlXT1cImN1cnJlbnRQYWdlXCIgW3RoZW1lXT1cInRoZW1lXCIgW2Z1bGxEYXRhTW9kZV09XCJ0cnVlXCIgW2RhdGFdPVwibWdEYXRhXCIgW3BlclBhZ2VdPVwicGFnaW5hdGUucGVyUGFnZVwiIChnZXRkYXRhKT1cInVwZGF0ZVBhZ2luYXRlZERhdGEoJGV2ZW50KVwiPjwvbWctcGFnaW5hdGlvbj5cbiAgPC9kaXY+XG4gIDx0YWJsZSBjbGFzcz1cInt7dGhlbWV9fVwiPlxuICAgIDx0aGVhZCBbbmdDbGFzc109XCJmaXhlZEhlYWRlciA/ICdmaXhlZC1oZWFkZXInIDogJydcIj5cbiAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgIFxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWQgb2YgaGVhZGluZ3M7IGxldCBrID0gaW5kZXhcIj48c3BhbiAoY2xpY2spPVwic29ydChoZWFkKVwiPlxuICAgICAgICAgIDxtZy1kcm9wYWJsZSAoZGF0YVJlY2lldmVkKT1cInJlY2lldmVEYXRhKCRldmVudCwgaylcIj5cbiAgICAgICAgICAgIDxtZy1kcmFnYWJsZSBbZGF0YV09XCJ7b3JkZXI6IGt9XCIgW2RyYWdhYmxlXT1cImRyYWdhYmxlU29ydFwiPlxuICAgICAgICAgICAgICB7e2hlYWR9fVxuICAgICAgICAgICAgPC9tZy1kcmFnYWJsZT5cbiAgICAgICAgICA8L21nLWRyb3BhYmxlPlxuICAgICAgICAgIDwvc3Bhbj48L3RoPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICBcbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiByZWZvcm1lZERhdGFcIj5cbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbCBvZiBkYXRhXCIgW2lubmVySHRtbF09XCJjb2xcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICBcbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuICA8ZGl2IGNsYXNzPVwicGFkVi01XCIgKm5nSWY9XCJwYWdpbmF0ZS5zdGF0dXMgJiYgcGFnaW5nUG9zaXRpb24uYm90dG9tXCI+XG4gICAgPG1nLXBhZ2luYXRpb24gKHBhZ2UpPVwic2V0Q3VycmVudFBhZ2UoJGV2ZW50KVwiIFtjdXJyZW50UGFnZV09XCJjdXJyZW50UGFnZVwiIFt0aGVtZV09XCJ0aGVtZVwiIFtmdWxsRGF0YU1vZGVdPVwidHJ1ZVwiIFtkYXRhXT1cIm1nRGF0YVwiIFtwZXJQYWdlXT1cInBhZ2luYXRlLnBlclBhZ2VcIiAoZ2V0ZGF0YSk9XCJ1cGRhdGVQYWdpbmF0ZWREYXRhKCRldmVudClcIj48L21nLXBhZ2luYXRpb24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=