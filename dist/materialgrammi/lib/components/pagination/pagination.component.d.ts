import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaginationComponent implements OnInit, OnChanges {
    page: EventEmitter<any>;
    getdata: EventEmitter<any>;
    theme: string;
    data: any;
    fullDataMode: boolean;
    perPage: number;
    currentPage: number;
    icons: {
        next: string;
        previous: string;
    };
    max: number;
    totalPages: number;
    totalCount: number;
    pages: any;
    startFrom: number;
    _data: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    calculatePage(): void;
    sendData(): void;
    removePages(): void;
    onPageClick(pageNumber: any): void;
    isActivePage(pageNumber: any): "" | "active";
    onNext(): void;
    onPrevious(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "mg-pagination", never, { "theme": "theme"; "data": "data"; "fullDataMode": "fullDataMode"; "perPage": "perPage"; "currentPage": "currentPage"; "icons": "icons"; "max": "max"; }, { "page": "page"; "getdata": "getdata"; }, never, never>;
}
