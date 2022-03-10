import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NavbarComponent implements OnInit {
    searchedText: EventEmitter<any>;
    spaceAround: boolean;
    theme: string;
    onSmallMenuButton: string;
    isFixed: boolean;
    partitionType: string;
    navData: any;
    onSmallActive: boolean;
    searchQuery: string;
    constructor();
    ngOnInit(): void;
    onSmallClass(): "" | "active";
    toggleNav(): void;
    mainNavClasses(): string;
    onEnterSearchQuery(event: any): void;
    sendSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavbarComponent, "mg-navbar", never, { "spaceAround": "spaceAround"; "theme": "theme"; "onSmallMenuButton": "onSmallMenuButton"; "isFixed": "isFixed"; "partitionType": "partitionType"; "navData": "navData"; }, { "searchedText": "searchedText"; }, never, never>;
}
//# sourceMappingURL=navbar.component.d.ts.map