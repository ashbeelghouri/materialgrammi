import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DropableComponent implements OnInit {
    onEvent: EventEmitter<any>;
    dataRecieved: EventEmitter<any>;
    dropFiles: boolean;
    class: string;
    onEventProperties: {
        isDraggedOver: boolean;
        dragEntered: boolean;
        dragLeft: boolean;
        dropped: boolean;
    };
    data: any;
    constructor();
    ngOnInit(): void;
    onDrop(event: any): void;
    draggedOver(event: any): void;
    dragEntered(event: any): void;
    dragLeft(event: any): void;
    emitEvents(): void;
    emitData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropableComponent, "mg-dropable", never, { "dropFiles": "dropFiles"; "class": "class"; }, { "onEvent": "onEvent"; "dataRecieved": "dataRecieved"; }, never, ["*"]>;
}
