import { AfterContentChecked, ChangeDetectorRef, OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableComponent implements OnInit, OnChanges, AfterContentChecked {
    private cdref;
    theme: string;
    mgData: any;
    ignoredColumns: any;
    sortBy: any;
    sortDirection: string;
    tableTitle: string;
    fixedHeader: boolean;
    dragableSort: boolean;
    paginate: {
        status: boolean;
        perPage: number;
    };
    columnsOrder: any;
    showOptions: {
        title: boolean;
        filter: boolean;
        sort: boolean;
        count: boolean;
    };
    show: boolean;
    setShowTimer(): any;
    reformedData: any;
    reformedHeads: any;
    headings: any;
    filterQuery: any;
    count: number;
    paginatedData: never[];
    openFilterBox: boolean;
    openSortBox: boolean;
    sortOptions: any;
    constructor(cdref: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterContentChecked(): void;
    init(): void;
    concatHeads(headObj: any): void;
    sortColumns(): void;
    extractHeadings(): void;
    refactorData(dataToUpdate?: any[]): void;
    sortFlip(newKey: any): void;
    sort(sortKey: any): void;
    sortByException(): void;
    filter(filterKey: any): void;
    openSorter(): void;
    openFilter(): void;
    search(enable: boolean): void;
    recieveData(event: any, k: number): void;
    updatePaginatedData(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "mg-table", never, { "theme": "theme"; "mgData": "mgData"; "ignoredColumns": "ignoredColumns"; "sortBy": "sortBy"; "sortDirection": "sortDirection"; "tableTitle": "tableTitle"; "fixedHeader": "fixedHeader"; "dragableSort": "dragableSort"; "paginate": "paginate"; "columnsOrder": "columnsOrder"; "showOptions": "showOptions"; }, {}, never, never>;
}
//# sourceMappingURL=table.component.d.ts.map