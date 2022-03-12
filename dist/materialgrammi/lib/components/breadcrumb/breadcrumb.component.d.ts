import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent implements OnInit {
    links: any;
    darkmode: boolean;
    devider: string;
    class: string;
    constructor();
    ngOnInit(): void;
    showDarkMode(): "dark" | "lite";
    active(link: any): "" | "active";
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "mg-breadcrumb", never, { "links": "links"; "darkmode": "darkmode"; "devider": "devider"; "class": "class"; }, {}, never, never>;
}
