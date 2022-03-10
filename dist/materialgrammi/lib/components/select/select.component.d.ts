import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SelectComponent implements OnInit {
    private eRef;
    value: EventEmitter<any>;
    searchOpt: FormControl;
    theme: string;
    selectTitle: string;
    selectType: string;
    enableSearch: boolean;
    options: {
        name: string;
        val: string;
    }[];
    selectedOption: {
        name: string;
        val: string;
    };
    highlighted: string;
    optionsActive: boolean;
    titleDisplay: string;
    selectInput: FormControl;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    clickout(event: any): void;
    handleKeyboardEvent(event: KeyboardEvent): void;
    toggleOptions(): void;
    optionsClasses(): string;
    selectOption(opt: any): void;
    isHighlighted(name: string): "" | "highlighted";
    searchFromOptions(val: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "mg-select", never, { "searchOpt": "searchOpt"; "theme": "theme"; "selectTitle": "selectTitle"; "selectType": "selectType"; "enableSearch": "enableSearch"; "options": "options"; }, { "value": "value"; }, never, never>;
}
//# sourceMappingURL=select.component.d.ts.map