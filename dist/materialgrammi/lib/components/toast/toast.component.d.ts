import { OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToastComponent implements OnInit, OnChanges {
    show: boolean;
    position: string;
    theme: string;
    timeout: number;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    showToast(): string;
    close(): void;
    setTimer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "mg-toast", never, { "show": "show"; "position": "position"; "theme": "theme"; "timeout": "timeout"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=toast.component.d.ts.map