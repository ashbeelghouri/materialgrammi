import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AccordionItemComponent implements OnInit {
    item: any;
    isClicked: EventEmitter<boolean>;
    itemid: any;
    theme: string;
    constructor();
    ngOnInit(): void;
    onClickTitle(): void;
    isActive(state: any): "" | "active";
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "mg-accordion-item", never, { "item": "item"; "itemid": "itemid"; "theme": "theme"; }, { "isClicked": "isClicked"; }, never, never>;
}
//# sourceMappingURL=accordion-item.component.d.ts.map