import { OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class TabComponent implements OnInit {
    private service;
    options: any;
    isVertical: boolean;
    bg: string;
    active: string;
    id: string;
    theme: string;
    components: any;
    activeComponent: string;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    getComponents(): void;
    watchActive(): void;
    activateWidget(widgetID: string): void;
    mainClasses(): string;
    buttonClass(componentId: string): "active" | "";
    static ɵfac: i0.ɵɵFactoryDeclaration<TabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabComponent, "mg-tab", never, { "options": "options"; "isVertical": "isVertical"; "bg": "bg"; "active": "active"; "id": "id"; "theme": "theme"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=tab.component.d.ts.map