import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalendarForDateInput, DisabledRange } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class DateInputComponent implements OnInit, OnChanges {
    input: {
        theme: string;
        style: string;
        control: FormControl;
        darkmode: boolean;
        class: string;
    };
    label: string;
    class: string;
    calendar: CalendarForDateInput;
    disabledRange: DisabledRange;
    icons: {
        close: string;
    };
    format: string;
    getdate: EventEmitter<String>;
    active: boolean;
    textValue: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    calendarClass(): string;
    inputFocused(event: any): void;
    dateSelected(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateInputComponent, "mg-date", never, { "input": "input"; "label": "label"; "class": "class"; "calendar": "calendar"; "disabledRange": "disabledRange"; "icons": "icons"; "format": "format"; }, { "getdate": "getdate"; }, never, never>;
}
