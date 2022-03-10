import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class WizardComponent implements OnInit, OnChanges {
    private service;
    active: number;
    id: string;
    widgets: string[];
    step: EventEmitter<any>;
    isCompleted: EventEmitter<any>;
    activeStep: number;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    ngOnChanges(): void;
    watch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WizardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WizardComponent, "mg-wizard", never, { "active": "active"; "id": "id"; "widgets": "widgets"; }, { "step": "step"; "isCompleted": "isCompleted"; }, never, ["*"]>;
}
//# sourceMappingURL=wizard.component.d.ts.map