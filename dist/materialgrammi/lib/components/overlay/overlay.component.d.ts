import { EventEmitter, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class OverlayComponent implements OnInit {
    private service;
    bgClass: string;
    overlayClass: string;
    offSize: string;
    canvasPosition: string;
    id: string;
    active: boolean;
    isClosed: EventEmitter<any>;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    activator(): "active" | "";
    subscribe(): void;
    mainClasses(): string;
    overlayClasses(): string;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OverlayComponent, "mg-overlay", never, { "bgClass": "bgClass"; "overlayClass": "overlayClass"; "offSize": "offSize"; "canvasPosition": "canvasPosition"; "id": "id"; "active": "active"; }, { "isClosed": "isClosed"; }, never, ["*"]>;
}
//# sourceMappingURL=overlay.component.d.ts.map