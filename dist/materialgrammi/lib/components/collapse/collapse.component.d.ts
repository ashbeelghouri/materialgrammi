import { EventEmitter, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class CollapseComponent implements OnInit {
    private service;
    id: string;
    show: boolean;
    class: string;
    active: EventEmitter<any>;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    watch(): void;
    close(): void;
    open(): void;
    mainCollapseClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CollapseComponent, "mg-collapse", never, { "id": "id"; "show": "show"; "class": "class"; }, { "active": "active"; }, never, ["*"]>;
}
