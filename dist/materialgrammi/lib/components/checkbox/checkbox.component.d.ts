import { EventEmitter, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class CheckboxComponent implements OnInit {
    private service;
    size: string;
    theme: string;
    onDark: boolean;
    isSelected: boolean;
    class: string;
    isChecked: EventEmitter<any>;
    id: string;
    selected: boolean;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    mainClasses(): string;
    labelClass(): string;
    toggleCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "mg-checkbox", never, { "size": "size"; "theme": "theme"; "onDark": "onDark"; "isSelected": "isSelected"; "class": "class"; }, { "isChecked": "isChecked"; }, never, ["*"]>;
}
//# sourceMappingURL=checkbox.component.d.ts.map