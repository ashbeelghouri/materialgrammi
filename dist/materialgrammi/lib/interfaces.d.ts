export interface DisabledRange {
    before: false | string | Date;
    after: false | string | Date;
}
export interface CalendarForDateInput {
    disabled: string[];
    theme: string;
    abbreviation: boolean;
}
export interface RangeSelected {
    startdate: boolean | string;
    enddate: boolean | string;
}
export interface Megamenu {
    name: string;
    id: string;
}
