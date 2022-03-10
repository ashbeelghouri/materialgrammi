import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function NavbarComponent_ng_container_6_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 10);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHtml", ctx_r3.navData.left.data.name, i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 8);
    i0.ɵɵlistener("keyup", function NavbarComponent_ng_container_6_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onEnterSearchQuery($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_6_a_2_Template, 1, 1, "a", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r0.navData.left.data.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.navData.left.data.btn);
} }
function NavbarComponent_ng_container_7_ng_container_1_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 16);
} if (rf & 2) {
    const droplink_r11 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", droplink_r11.name, i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_ng_container_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "a", 13);
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtemplate(4, NavbarComponent_ng_container_7_ng_container_1_ng_container_1_a_4_Template, 1, 1, "a", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ndata_r7.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r7.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ndata_r7.links);
} }
function NavbarComponent_ng_container_7_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "a", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ndata_r7.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r7.link);
} }
function NavbarComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_7_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 6);
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_7_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ndata_r7.type && ndata_r7.type == "dropdown");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ndata_r7.type);
} }
function NavbarComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_7_ng_container_1_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.navData.left.data);
} }
function NavbarComponent_ng_container_9_ng_container_1_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 16);
} if (rf & 2) {
    const droplink_r19 = ctx.$implicit;
    i0.ɵɵproperty("innerHtml", droplink_r19.name, i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "a", 13);
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtemplate(4, NavbarComponent_ng_container_9_ng_container_1_ng_container_1_a_4_Template, 1, 1, "a", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ndata_r15.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r15.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ndata_r15.links);
} }
function NavbarComponent_ng_container_9_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "a", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ndata_r15.name, i0.ɵɵsanitizeHtml)("routerLink", ndata_r15.link);
} }
function NavbarComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_9_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 6);
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_9_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ndata_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ndata_r15.type && ndata_r15.type == "dropdown");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ndata_r15.type);
} }
function NavbarComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_9_ng_container_1_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.navData.right.data);
} }
export class NavbarComponent {
    constructor() {
        this.searchedText = new EventEmitter();
        this.spaceAround = true;
        this.theme = "dark";
        this.onSmallMenuButton = "=";
        this.isFixed = false;
        this.partitionType = "2:1";
        // 2:1
        // 1:2
        // 1:1
        this.navData = {
            brand: {
                name: `Material <B>Grammi</B>`,
                link: '/'
            },
            left: {
                navType: "input",
                data: {
                    btn: true,
                    name: `<i class="fas fa-search"></i>`,
                    placeholder: "search",
                    id: "1"
                }
            },
            right: {
                navType: "links",
                data: [{
                        name: `<i class="fas fa-home"></i>`,
                        link: "/",
                        active: false
                    }, {
                        name: `<i class="far fa-bell"></i>`,
                        link: "/",
                        active: false
                    }, {
                        type: "dropdown",
                        name: `<i class="fas fa-user"></i>`,
                        links: [{
                                name: `<p>Login</p>`,
                                link: "/"
                            }, {
                                name: `<p>Register</p>`,
                                link: "/"
                            }],
                        active: false
                    }, {
                        name: `<i class="far fa-envelope"></i>`,
                        link: "/",
                        active: false
                    }]
            }
        };
        this.onSmallActive = false;
        this.searchQuery = "";
    }
    ngOnInit() {
    }
    onSmallClass() {
        return this.onSmallActive ? 'active' : '';
    }
    toggleNav() {
        this.onSmallActive = !this.onSmallActive;
    }
    mainNavClasses() {
        let classes = this.onSmallClass();
        if (this.isFixed) {
            classes += ` fixed`;
        }
        classes += this.spaceAround ? " space-around" : "";
        if (this.partitionType == "2:1") {
            classes += ` position-2-1`;
        }
        else if (this.partitionType == "1:2") {
            classes += ` position-1-2`;
        }
        else if (this.partitionType == "1:1") {
            classes += ` position-1-1`;
        }
        return classes;
    }
    onEnterSearchQuery(event) {
        if (event.key == "Enter") {
            this.sendSearch();
        }
        else {
            this.searchQuery = event.target.value;
        }
    }
    sendSearch() {
        this.searchedText.emit(this.searchQuery);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["mg-navbar"]], inputs: { spaceAround: "spaceAround", theme: "theme", onSmallMenuButton: "onSmallMenuButton", isFixed: "isFixed", partitionType: "partitionType", navData: "navData" }, outputs: { searchedText: "searchedText" }, decls: 10, vars: 10, consts: [[1, "navbar-wrapper"], [3, "ngClass"], [1, "section", "brand"], [3, "innerHtml", "routerLink"], [1, "small-only-open-nav", 3, "innerHtml", "click"], [1, "section", "left-nav"], [4, "ngIf"], [1, "section", "right-nav"], ["type", "text", 1, "input", 3, "placeholder", "keyup"], ["class", "input-button", 3, "innerHtml", 4, "ngIf"], [1, "input-button", 3, "innerHtml"], [4, "ngFor", "ngForOf"], [1, "dropdown"], [1, "trigger-dropdown", 3, "innerHtml", "routerLink"], [1, "drop-menu"], [3, "innerHtml", 4, "ngFor", "ngForOf"], [3, "innerHtml"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "a", 3);
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_4_listener() { return ctx.toggleNav(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, NavbarComponent_ng_container_6_Template, 3, 2, "ng-container", 6);
        i0.ɵɵtemplate(7, NavbarComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵtemplate(9, NavbarComponent_ng_container_9_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("navbar ", ctx.theme, "");
        i0.ɵɵproperty("ngClass", ctx.mainNavClasses());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.navData.brand.name, i0.ɵɵsanitizeHtml)("routerLink", ctx.navData.brand.link);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHtml", ctx.onSmallMenuButton, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.navData && ctx.navData.left && ctx.navData.left.navType == "input");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.navData && ctx.navData.left && ctx.navData.left.navType == "links");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.navData && ctx.navData.right && ctx.navData.right.navType == "links");
    } }, directives: [i1.NgClass, i2.RouterLinkWithHref, i1.NgIf, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'mg-navbar', template: "<div class=\"navbar-wrapper\">\n  <div class=\"navbar {{theme}}\" [ngClass]=\"mainNavClasses()\">\n    <div class=\"section brand\">\n      <a [innerHtml]=\"navData.brand.name\" [routerLink]=\"navData.brand.link\"></a>\n      <a (click)=\"toggleNav()\" class=\"small-only-open-nav\" [innerHtml]=\"onSmallMenuButton\"></a>\n    </div>\n\n    <div class=\"section left-nav\">\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'input'\">\n        <input type=\"text\" (keyup) = \"onEnterSearchQuery($event)\" class=\"input\" [placeholder]=\"navData.left.data.placeholder\" />\n        <a class=\"input-button\" *ngIf=\"navData.left.data.btn\" [innerHtml]=\"navData.left.data.name\"></a>\n      </ng-container>\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.left.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n    <div class=\"section right-nav\">\n      <ng-container *ngIf=\"navData && navData.right && navData.right.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.right.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { searchedText: [{
            type: Output
        }], spaceAround: [{
            type: Input
        }], theme: [{
            type: Input
        }], onSmallMenuButton: [{
            type: Input
        }], isFixed: [{
            type: Input
        }], partitionType: [{
            type: Input
        }], navData: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDVXZFLHdCQUErRjs7O0lBQXpDLDRFQUFvQzs7OztJQUY1Riw2QkFBaUY7SUFDL0UsZ0NBQXdIO0lBQXJHLDBLQUFXLGlDQUEwQixJQUFDO0lBQXpELGlCQUF3SDtJQUN4SCwyRUFBK0Y7SUFDakcsMEJBQWU7OztJQUYyRCxlQUE2QztJQUE3QyxrRUFBNkM7SUFDNUYsZUFBMkI7SUFBM0IsbURBQTJCOzs7SUFTNUMsd0JBQXdFOzs7SUFBaEMsZ0VBQTJCOzs7SUFKekUsNkJBQTZEO0lBQzNELCtCQUFzQjtJQUNwQix3QkFBbUY7SUFDbkYsK0JBQXVCO0lBQ3JCLDBHQUF3RTtJQUMxRSxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxSLGVBQXdCO0lBQXhCLDREQUF3Qiw2QkFBQTtJQUVELGVBQWM7SUFBZCx3Q0FBYzs7O0lBSTVDLDZCQUFrQztJQUNoQyx1QkFBMEQ7SUFDNUQsMEJBQWU7OztJQURWLGVBQXdCO0lBQXhCLDREQUF3Qiw2QkFBQTs7O0lBWC9CLDZCQUFzRDtJQUVwRCxnSEFPZTtJQUNmLGdIQUVlO0lBQ2pCLDBCQUFlOzs7SUFYRSxlQUE0QztJQUE1QyxtRUFBNEM7SUFRNUMsZUFBaUI7SUFBakIscUNBQWlCOzs7SUFYcEMsNkJBQWlGO0lBQy9FLGtH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a0IsZUFBK0I7UUFBL0Isb0VBQStCO1FBSXJFLGVBQWdFO1FBQWhFLDZGQUFnRTtRQUloRSxlQUFnRTtRQUFoRSw2RkFBZ0U7UUFrQmhFLGVBQWtFO1FBQWxFLCtGQUFrRTs7dUZEdkIxRSxlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsV0FBVztzQ0FLWCxZQUFZO2tCQUFyQixNQUFNO1lBQ0UsV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFJRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBzZWFyY2hlZFRleHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHNwYWNlQXJvdW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgdGhlbWUgPSBcImRhcmtcIjtcbiAgQElucHV0KCkgb25TbWFsbE1lbnVCdXR0b24gPSBcIj1cIjtcbiAgQElucHV0KCkgaXNGaXhlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwYXJ0aXRpb25UeXBlID0gXCIyOjFcIjtcbiAgLy8gMjoxXG4gIC8vIDE6MlxuICAvLyAxOjFcbiAgQElucHV0KCkgbmF2RGF0YTogYW55ID0ge1xuICAgIGJyYW5kOiB7XG4gICAgICBuYW1lOiBgTWF0ZXJpYWwgPEI+R3JhbW1pPC9CPmAsXG4gICAgICBsaW5rOiAnLydcbiAgICAgIH0sXG4gICAgICBsZWZ0OiB7XG4gICAgICAgIG5hdlR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJ0bjogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiBgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPmAsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgaWQ6IFwiMVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIG5hdlR5cGU6IFwibGlua3NcIixcbiAgICAgIGRhdGE6IFt7XG4gICAgICAgIG5hbWU6IGA8aSBjbGFzcz1cImZhcyBmYS1ob21lXCI+PC9pPmAsXG4gICAgICAgIGxpbms6IFwiL1wiLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6IGA8aSBjbGFzcz1cImZhciBmYS1iZWxsXCI+PC9pPmAsXG4gICAgICAgIGxpbms6IFwiL1wiLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6IFwiZHJvcGRvd25cIixcbiAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmFzIGZhLXVzZXJcIj48L2k+YCxcbiAgICAgICAgbGlua3M6IFt7XG4gICAgICAgICAgbmFtZTogYDxwPkxvZ2luPC9wPmAsXG4gICAgICAgICAgbGluazogXCIvXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgIG5hbWU6IGA8cD5SZWdpc3RlcjwvcD5gLFxuICAgICAgICAgIGxpbms6IFwiL1wiXG4gICAgICAgIH1dLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6IGA8aSBjbGFzcz1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT5gLFxuICAgICAgICBsaW5rOiBcIi9cIixcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfV1cbiAgICB9XG4gIH07XG5cbiAgb25TbWFsbEFjdGl2ZSA9IGZhbHNlO1xuXG4gIHNlYXJjaFF1ZXJ5ID0gXCJcIjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25TbWFsbENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLm9uU21hbGxBY3RpdmUgPyAnYWN0aXZlJyA6ICcnO1xuICB9XG5cbiAgdG9nZ2xlTmF2KCkge1xuICAgIHRoaXMub25TbWFsbEFjdGl2ZSA9ICF0aGlzLm9uU21hbGxBY3RpdmU7XG4gIH1cblxuICBtYWluTmF2Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHRoaXMub25TbWFsbENsYXNzKCk7XG5cbiAgICBpZiAodGhpcy5pc0ZpeGVkKSB7XG4gICAgICBjbGFzc2VzICs9IGAgZml4ZWRgO1xuICAgIH1cblxuICAgIGNsYXNzZXMgKz0gdGhpcy5zcGFjZUFyb3VuZCA/IFwiIHNwYWNlLWFyb3VuZFwiIDogXCJcIjtcblxuICAgIGlmICh0aGlzLnBhcnRpdGlvblR5cGUgPT0gXCIyOjFcIikge1xuICAgICAgY2xhc3NlcyArPSBgIHBvc2l0aW9uLTItMWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRpdGlvblR5cGUgPT0gXCIxOjJcIikge1xuICAgICAgY2xhc3NlcyArPSBgIHBvc2l0aW9uLTEtMmA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRpdGlvblR5cGUgPT0gXCIxOjFcIikge1xuICAgICAgY2xhc3NlcyArPSBgIHBvc2l0aW9uLTEtMWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBvbkVudGVyU2VhcmNoUXVlcnkoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICB0aGlzLnNlbmRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZW5kU2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoZWRUZXh0LmVtaXQodGhpcy5zZWFyY2hRdWVyeSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5hdmJhci13cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJuYXZiYXIge3t0aGVtZX19XCIgW25nQ2xhc3NdPVwibWFpbk5hdkNsYXNzZXMoKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIGJyYW5kXCI+XG4gICAgICA8YSBbaW5uZXJIdG1sXT1cIm5hdkRhdGEuYnJhbmQubmFtZVwiIFtyb3V0ZXJMaW5rXT1cIm5hdkRhdGEuYnJhbmQubGlua1wiPjwvYT5cbiAgICAgIDxhIChjbGljayk9XCJ0b2dnbGVOYXYoKVwiIGNsYXNzPVwic21hbGwtb25seS1vcGVuLW5hdlwiIFtpbm5lckh0bWxdPVwib25TbWFsbE1lbnVCdXR0b25cIj48L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbiBsZWZ0LW5hdlwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdkRhdGEgJiYgbmF2RGF0YS5sZWZ0ICYmIG5hdkRhdGEubGVmdC5uYXZUeXBlID09ICdpbnB1dCdcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKSA9IFwib25FbnRlclNlYXJjaFF1ZXJ5KCRldmVudClcIiBjbGFzcz1cImlucHV0XCIgW3BsYWNlaG9sZGVyXT1cIm5hdkRhdGEubGVmdC5kYXRhLnBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgPGEgY2xhc3M9XCJpbnB1dC1idXR0b25cIiAqbmdJZj1cIm5hdkRhdGEubGVmdC5kYXRhLmJ0blwiIFtpbm5lckh0bWxdPVwibmF2RGF0YS5sZWZ0LmRhdGEubmFtZVwiPjwvYT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdkRhdGEgJiYgbmF2RGF0YS5sZWZ0ICYmIG5hdkRhdGEubGVmdC5uYXZUeXBlID09ICdsaW5rcydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbmRhdGEgb2YgbmF2RGF0YS5sZWZ0LmRhdGFcIj5cbiAgICAgICAgICA8IS0tIGRyb3Bkb3duIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuZGF0YS50eXBlICYmIG5kYXRhLnR5cGUgPT0gJ2Ryb3Bkb3duJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxhIFtpbm5lckh0bWxdPVwibmRhdGEubmFtZVwiIFtyb3V0ZXJMaW5rXT1cIm5kYXRhLmxpbmtcIiBjbGFzcz1cInRyaWdnZXItZHJvcGRvd25cIj48L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgZHJvcGxpbmsgb2YgbmRhdGEubGlua3NcIiBbaW5uZXJIdG1sXT1cImRyb3BsaW5rLm5hbWVcIj48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuZGF0YS50eXBlXCI+XG4gICAgICAgICAgICA8YSBbaW5uZXJIdG1sXT1cIm5kYXRhLm5hbWVcIiBbcm91dGVyTGlua109XCJuZGF0YS5saW5rXCI+PC9hPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHJpZ2h0LW5hdlwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdkRhdGEgJiYgbmF2RGF0YS5yaWdodCAmJiBuYXZEYXRhLnJpZ2h0Lm5hdlR5cGUgPT0gJ2xpbmtzJ1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBuZGF0YSBvZiBuYXZEYXRhLnJpZ2h0LmRhdGFcIj5cbiAgICAgICAgICA8IS0tIGRyb3Bkb3duIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuZGF0YS50eXBlICYmIG5kYXRhLnR5cGUgPT0gJ2Ryb3Bkb3duJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxhIFtpbm5lckh0bWxdPVwibmRhdGEubmFtZVwiIFtyb3V0ZXJMaW5rXT1cIm5kYXRhLmxpbmtcIiBjbGFzcz1cInRyaWdnZXItZHJvcGRvd25cIj48L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgZHJvcGxpbmsgb2YgbmRhdGEubGlua3NcIiBbaW5uZXJIdG1sXT1cImRyb3BsaW5rLm5hbWVcIj48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuZGF0YS50eXBlXCI+XG4gICAgICAgICAgICA8YSBbaW5uZXJIdG1sXT1cIm5kYXRhLm5hbWVcIiBbcm91dGVyTGlua109XCJuZGF0YS5saW5rXCI+PC9hPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19