import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DragableComponent implements OnInit {
    dragable: boolean;
    data: any;
    class: string;
    onEvent: EventEmitter<any>;
    eventProperties: {
        isInDragMode: boolean;
    };
    constructor();
    ngOnInit(): void;
    onDrag(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragableComponent, "mg-dragable", never, { "dragable": "dragable"; "data": "data"; "class": "class"; }, { "onEvent": "onEvent"; }, never, ["*"]>;
}
