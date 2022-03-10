import { OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class OffcanvasComponent implements OnInit {
    private service;
    active: boolean;
    id: string;
    widgetID: string;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    mainClasses(): string;
    open(): void;
    close(): void;
    watch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OffcanvasComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OffcanvasComponent, "mg-offcanvas", never, { "active": "active"; "id": "id"; }, {}, never, ["[mg-data=sidebar]", "*"]>;
}
//# sourceMappingURL=offcanvas.component.d.ts.map