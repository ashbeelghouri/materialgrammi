import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RadioComponent implements OnInit {
    options: any;
    name: string;
    size: string;
    isInline: boolean;
    theme: string;
    onDark: boolean;
    value: EventEmitter<any>;
    selected: FormControl;
    constructor();
    ngOnInit(): void;
    select(value: any): void;
    mainClasses(): string;
    classesOnLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioComponent, "mg-radio", never, { "options": "options"; "name": "name"; "size": "size"; "isInline": "isInline"; "theme": "theme"; "onDark": "onDark"; }, { "value": "value"; }, never, never>;
}
//# sourceMappingURL=radio.component.d.ts.map