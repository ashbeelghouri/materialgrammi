import { OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class DropdownComponent implements OnInit {
    private service;
    id: string;
    active: boolean;
    position: {
        hotizontal: string;
        vertical: string;
    };
    class: string;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    watch(): void;
    openDropDown(): void;
    closeDropDown(): void;
    dropdownClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "mg-dropdown", never, { "id": "id"; "active": "active"; "position": "position"; "class": "class"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=dropdown.component.d.ts.map