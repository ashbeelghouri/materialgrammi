import { OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class TestComponentComponent implements OnInit {
    private myservice;
    widgetID: string;
    constructor(myservice: MaterialgrammiService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TestComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TestComponentComponent, "lib-test", never, {}, {}, never, ["*"]>;
}
