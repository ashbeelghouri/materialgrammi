import { OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class NotificationsComponent implements OnInit {
    private service;
    theme: string;
    id: string;
    position: string;
    timer: number;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationsComponent, "mg-notifications", never, { "theme": "theme"; "id": "id"; "position": "position"; "timer": "timer"; }, {}, never, never>;
}
