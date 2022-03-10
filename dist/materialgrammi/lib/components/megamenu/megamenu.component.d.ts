import { OnInit } from '@angular/core';
import { Megamenu } from '../../interfaces';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class MegamenuComponent implements OnInit {
    private service;
    id: string;
    theme: string;
    menu: Megamenu[];
    active: boolean;
    isHovering: boolean;
    activeLink: string;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    getAllIds(): string[];
    watchMenu(): void;
    setActive(ac: boolean): void;
    closeMenu(): void;
    openMenu(targetId: string): void;
    megamenuContentClass(): string;
    menuBtnClass(targetId: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MegamenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MegamenuComponent, "mg-megamenu", never, { "id": "id"; "theme": "theme"; "menu": "menu"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=megamenu.component.d.ts.map