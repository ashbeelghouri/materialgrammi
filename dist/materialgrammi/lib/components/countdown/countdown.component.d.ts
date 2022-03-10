import { EventEmitter, AfterContentInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CountdownComponent implements AfterContentInit {
    till: string;
    expiredText: string;
    parseProperties: {
        day: string;
        days: string;
        hour: string;
        hours: string;
        minute: string;
        minutes: string;
        second: string;
        seconds: string;
    };
    class: string;
    timeover: EventEmitter<any>;
    endDate: Date;
    display: string;
    constructor();
    ngAfterContentInit(): void;
    count(): void;
    getDays(): number;
    updateDisplay(amount: number, unit?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CountdownComponent, "mg-countdown", never, { "till": "till"; "expiredText": "expiredText"; "parseProperties": "parseProperties"; "class": "class"; }, { "timeover": "timeover"; }, never, never>;
}
//# sourceMappingURL=countdown.component.d.ts.map