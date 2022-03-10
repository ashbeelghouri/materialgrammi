import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { RangeSelected } from '../../interfaces';
import * as i0 from "@angular/core";
export interface DisabledRange {
    before: false | string | Date;
    after: false | string | Date;
}
export declare class DateRangeComponent implements OnInit, OnChanges {
    labels: {
        start: string;
        end: string;
    };
    style: {
        input: {
            theme: string;
            style: string;
            darkmode: boolean;
            class: string;
        };
        calendar: {
            disabled: never[];
            theme: string;
        };
    };
    class: string;
    formattedInput?: any;
    disable_range_start: DisabledRange;
    disable_range_end: DisabledRange;
    selected: RangeSelected;
    range: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    initInput(): void;
    selectedStartDate(event: any): void;
    selectedEndDate(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangeComponent, "mg-daterange", never, { "labels": "labels"; "style": "style"; "class": "class"; }, { "range": "range"; }, never, never>;
}
//# sourceMappingURL=date-range.component.d.ts.map