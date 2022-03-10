import { OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';
import * as i0 from "@angular/core";
export declare class ModalComponent implements OnInit {
    private service;
    show: boolean;
    id: string;
    position: string;
    modalSize: string;
    overlayClass: string;
    constructor(service: MaterialgrammiService);
    ngOnInit(): void;
    subscribeToModal(): void;
    close(): void;
    mainModelClasses(): string;
    overlayClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "mg-modal", never, { "show": "show"; "id": "id"; "position": "position"; "modalSize": "modalSize"; "overlayClass": "overlayClass"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=modal.component.d.ts.map