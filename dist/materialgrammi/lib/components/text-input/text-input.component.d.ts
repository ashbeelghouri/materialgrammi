import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextInputComponent implements OnInit {
    theme: string;
    fStyle: string;
    on_dark: boolean;
    label: string;
    control: FormControl;
    value: EventEmitter<FormControl>;
    isFocused: EventEmitter<boolean>;
    keyup: EventEmitter<string>;
    private inputElem;
    active: boolean;
    textValue: string;
    focused: boolean;
    constructor();
    ngOnInit(): void;
    onFocusIn(): void;
    onFocusOut(): void;
    onKeyUp(event: any): void;
    mainClasses(): string;
    labelClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextInputComponent, "mg-text", never, { "theme": "theme"; "fStyle": "fStyle"; "on_dark": "on_dark"; "label": "label"; "control": "control"; }, { "value": "value"; "isFocused": "isFocused"; "keyup": "keyup"; }, never, never>;
}
//# sourceMappingURL=text-input.component.d.ts.map