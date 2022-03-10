import * as i0 from "@angular/core";
export interface SplittedDate {
    date: number;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}
export declare class DaterService {
    now: Date;
    months: string[];
    weekDays: string[];
    dateSplit?: SplittedDate;
    constructor();
    assign(dateString: string): Date;
    dater(dd?: string | false): Date;
    getMonth(date?: Date): number;
    getDate(date?: Date): number;
    getYear(date?: Date): number;
    getDay(date?: Date): number;
    getWeekDay(date?: Date): string;
    getHour(date?: Date): number;
    getMinute(date?: Date): number;
    getSeconds(date?: Date): number;
    format(date: Date, formatString: string): string;
    twelveHour(dd: number, addZ?: boolean): string | number;
    getAp(dd: number, sm?: boolean): string;
    private firstDigits;
    private addZero;
    initializeSplit(): {
        date: number;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
    };
    splitDate(date: Date): SplittedDate;
    getMonths(month?: number | false): string | string[];
    getMonthsLong(month?: number | false): string | string[];
    daysInMonth(month: number, year?: number): number;
    isGreater(date1: string, date2: string): boolean;
    isLessThan(date1: string, date2: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DaterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DaterService>;
}
//# sourceMappingURL=dater.service.d.ts.map