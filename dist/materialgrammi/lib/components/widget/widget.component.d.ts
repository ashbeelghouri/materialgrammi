import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class WidgetComponent implements OnInit, OnChanges {
    private mainService;
    id: string;
    parent: string;
    type: string;
    options: any;
    status: boolean;
    standalone: boolean;
    triggered: EventEmitter<any>;
    settings: {
        header: {
            always: boolean;
        };
        footer: {
            always: boolean;
        };
    };
    constructor(mainService: MaterialgrammiService);
    ngOnInit(): void;
    ngOnChanges(): void;
    init(): void;
    setOptions(): void;
    registerWidget(): void;
    openWidget(): void;
    closeWidget(): void;
    watch(): void;
    watchOptions(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetComponent, "mg-widget", never, { "id": "id"; "parent": "parent"; "type": "type"; "options": "options"; "status": "status"; "standalone": "standalone"; }, { "triggered": "triggered"; }, never, ["[mg-data=header]", "*", "[mg-data=footer]"]>;
}
