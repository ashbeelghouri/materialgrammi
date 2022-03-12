import { AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ImageComponent implements OnInit, AfterViewInit {
    private renderer;
    src: string;
    responsive: boolean;
    rounded: boolean;
    circled: boolean;
    shadowed: boolean;
    class: string;
    filters: any;
    private image;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    applyFilters(): void;
    imageClasses(): string;
    createFilters(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageComponent, "mg-image", never, { "src": "src"; "responsive": "responsive"; "rounded": "rounded"; "circled": "circled"; "shadowed": "shadowed"; "class": "class"; "filters": "filters"; }, {}, never, never>;
}
