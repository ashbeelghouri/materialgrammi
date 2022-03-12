import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SwitchComponent implements OnInit {
    options: {
        left: string;
        right: string;
    };
    type: string;
    theme: string;
    size: string;
    showChoices: boolean;
    onDark: boolean;
    selected: boolean;
    value: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    classesOnInput(): string;
    toggleChoices(): void;
    leftClasses(): string;
    rightClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchComponent, "mg-switch", never, { "options": "options"; "type": "type"; "theme": "theme"; "size": "size"; "showChoices": "showChoices"; "onDark": "onDark"; "selected": "selected"; }, { "value": "value"; }, never, never>;
}
