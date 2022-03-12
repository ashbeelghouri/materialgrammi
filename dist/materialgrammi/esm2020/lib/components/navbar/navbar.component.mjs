import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
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
NavbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: NavbarComponent, selector: "mg-navbar", inputs: { spaceAround: "spaceAround", theme: "theme", onSmallMenuButton: "onSmallMenuButton", isFixed: "isFixed", partitionType: "partitionType", navData: "navData" }, outputs: { searchedText: "searchedText" }, ngImport: i0, template: "<div class=\"navbar-wrapper\">\n  <div class=\"navbar {{theme}}\" [ngClass]=\"mainNavClasses()\">\n    <div class=\"section brand\">\n      <a [innerHtml]=\"navData.brand.name\" [routerLink]=\"navData.brand.link\"></a>\n      <a (click)=\"toggleNav()\" class=\"small-only-open-nav\" [innerHtml]=\"onSmallMenuButton\"></a>\n    </div>\n\n    <div class=\"section left-nav\">\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'input'\">\n        <input type=\"text\" (keyup) = \"onEnterSearchQuery($event)\" class=\"input\" [placeholder]=\"navData.left.data.placeholder\" />\n        <a class=\"input-button\" *ngIf=\"navData.left.data.btn\" [innerHtml]=\"navData.left.data.name\"></a>\n      </ng-container>\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.left.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n    <div class=\"section right-nav\">\n      <ng-container *ngIf=\"navData && navData.right && navData.right.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.right.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-navbar', template: "<div class=\"navbar-wrapper\">\n  <div class=\"navbar {{theme}}\" [ngClass]=\"mainNavClasses()\">\n    <div class=\"section brand\">\n      <a [innerHtml]=\"navData.brand.name\" [routerLink]=\"navData.brand.link\"></a>\n      <a (click)=\"toggleNav()\" class=\"small-only-open-nav\" [innerHtml]=\"onSmallMenuButton\"></a>\n    </div>\n\n    <div class=\"section left-nav\">\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'input'\">\n        <input type=\"text\" (keyup) = \"onEnterSearchQuery($event)\" class=\"input\" [placeholder]=\"navData.left.data.placeholder\" />\n        <a class=\"input-button\" *ngIf=\"navData.left.data.btn\" [innerHtml]=\"navData.left.data.name\"></a>\n      </ng-container>\n      <ng-container *ngIf=\"navData && navData.left && navData.left.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.left.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n    <div class=\"section right-nav\">\n      <ng-container *ngIf=\"navData && navData.right && navData.right.navType == 'links'\">\n        <ng-container *ngFor=\"let ndata of navData.right.data\">\n          <!-- dropdown -->\n          <ng-container *ngIf=\"ndata.type && ndata.type == 'dropdown'\">\n            <div class=\"dropdown\">\n              <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\" class=\"trigger-dropdown\"></a>\n              <div class=\"drop-menu\">\n                <a *ngFor=\"let droplink of ndata.links\" [innerHtml]=\"droplink.name\"></a>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!ndata.type\">\n            <a [innerHtml]=\"ndata.name\" [routerLink]=\"ndata.link\"></a>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { searchedText: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPL0UsTUFBTSxPQUFPLGVBQWU7SUF5RDFCO1FBeERVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ0csWUFBTyxHQUFRO1lBQ3RCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixJQUFJLEVBQUUsR0FBRzthQUNSO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osR0FBRyxFQUFFLElBQUk7b0JBQ1QsSUFBSSxFQUFFLCtCQUErQjtvQkFDckMsV0FBVyxFQUFFLFFBQVE7b0JBQ3JCLEVBQUUsRUFBRSxHQUFHO2lCQUNSO2FBQ0Y7WUFDSCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxDQUFDO3dCQUNMLElBQUksRUFBRSw2QkFBNkI7d0JBQ25DLElBQUksRUFBRSxHQUFHO3dCQUNULE1BQU0sRUFBRSxLQUFLO3FCQUNkLEVBQUU7d0JBQ0QsSUFBSSxFQUFFLDZCQUE2Qjt3QkFDbkMsSUFBSSxFQUFFLEdBQUc7d0JBQ1QsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsRUFBRTt3QkFDRCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLDZCQUE2Qjt3QkFDbkMsS0FBSyxFQUFFLENBQUM7Z0NBQ04sSUFBSSxFQUFFLGNBQWM7Z0NBQ3BCLElBQUksRUFBRSxHQUFHOzZCQUNWLEVBQUU7Z0NBQ0QsSUFBSSxFQUFFLGlCQUFpQjtnQ0FDdkIsSUFBSSxFQUFFLEdBQUc7NkJBQ1YsQ0FBQzt3QkFDRixNQUFNLEVBQUUsS0FBSztxQkFDZCxFQUFFO3dCQUNELElBQUksRUFBRSxpQ0FBaUM7d0JBQ3ZDLElBQUksRUFBRSxHQUFHO3dCQUNULE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUM7YUFDSDtTQUNGLENBQUM7UUFFRixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUVELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksUUFBUSxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRW5ELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7WUFDL0IsT0FBTyxJQUFJLGVBQWUsQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7WUFDdEMsT0FBTyxJQUFJLGVBQWUsQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7WUFDdEMsT0FBTyxJQUFJLGVBQWUsQ0FBQztTQUM1QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFVO1FBQzNCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7NEdBcEdVLGVBQWU7Z0dBQWYsZUFBZSxvUUNQNUIsczRFQWlEQTsyRkQxQ2EsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxXQUFXOzBFQUtYLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0UsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUlHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdmJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHNlYXJjaGVkVGV4dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgc3BhY2VBcm91bmQgPSB0cnVlO1xuICBASW5wdXQoKSB0aGVtZSA9IFwiZGFya1wiO1xuICBASW5wdXQoKSBvblNtYWxsTWVudUJ1dHRvbiA9IFwiPVwiO1xuICBASW5wdXQoKSBpc0ZpeGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhcnRpdGlvblR5cGUgPSBcIjI6MVwiO1xuICAvLyAyOjFcbiAgLy8gMToyXG4gIC8vIDE6MVxuICBASW5wdXQoKSBuYXZEYXRhOiBhbnkgPSB7XG4gICAgYnJhbmQ6IHtcbiAgICAgIG5hbWU6IGBNYXRlcmlhbCA8Qj5HcmFtbWk8L0I+YCxcbiAgICAgIGxpbms6ICcvJ1xuICAgICAgfSxcbiAgICAgIGxlZnQ6IHtcbiAgICAgICAgbmF2VHlwZTogXCJpbnB1dFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnRuOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IGA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+YCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJzZWFyY2hcIixcbiAgICAgICAgICBpZDogXCIxXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICByaWdodDoge1xuICAgICAgbmF2VHlwZTogXCJsaW5rc1wiLFxuICAgICAgZGF0YTogW3tcbiAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmFzIGZhLWhvbWVcIj48L2k+YCxcbiAgICAgICAgbGluazogXCIvXCIsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmFyIGZhLWJlbGxcIj48L2k+YCxcbiAgICAgICAgbGluazogXCIvXCIsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogXCJkcm9wZG93blwiLFxuICAgICAgICBuYW1lOiBgPGkgY2xhc3M9XCJmYXMgZmEtdXNlclwiPjwvaT5gLFxuICAgICAgICBsaW5rczogW3tcbiAgICAgICAgICBuYW1lOiBgPHA+TG9naW48L3A+YCxcbiAgICAgICAgICBsaW5rOiBcIi9cIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgbmFtZTogYDxwPlJlZ2lzdGVyPC9wPmAsXG4gICAgICAgICAgbGluazogXCIvXCJcbiAgICAgICAgfV0sXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmFyIGZhLWVudmVsb3BlXCI+PC9pPmAsXG4gICAgICAgIGxpbms6IFwiL1wiLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cbiAgfTtcblxuICBvblNtYWxsQWN0aXZlID0gZmFsc2U7XG5cbiAgc2VhcmNoUXVlcnkgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvblNtYWxsQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMub25TbWFsbEFjdGl2ZSA/ICdhY3RpdmUnIDogJyc7XG4gIH1cblxuICB0b2dnbGVOYXYoKSB7XG4gICAgdGhpcy5vblNtYWxsQWN0aXZlID0gIXRoaXMub25TbWFsbEFjdGl2ZTtcbiAgfVxuXG4gIG1haW5OYXZDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0gdGhpcy5vblNtYWxsQ2xhc3MoKTtcblxuICAgIGlmICh0aGlzLmlzRml4ZWQpIHtcbiAgICAgIGNsYXNzZXMgKz0gYCBmaXhlZGA7XG4gICAgfVxuXG4gICAgY2xhc3NlcyArPSB0aGlzLnNwYWNlQXJvdW5kID8gXCIgc3BhY2UtYXJvdW5kXCIgOiBcIlwiO1xuXG4gICAgaWYgKHRoaXMucGFydGl0aW9uVHlwZSA9PSBcIjI6MVwiKSB7XG4gICAgICBjbGFzc2VzICs9IGAgcG9zaXRpb24tMi0xYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFydGl0aW9uVHlwZSA9PSBcIjE6MlwiKSB7XG4gICAgICBjbGFzc2VzICs9IGAgcG9zaXRpb24tMS0yYDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFydGl0aW9uVHlwZSA9PSBcIjE6MVwiKSB7XG4gICAgICBjbGFzc2VzICs9IGAgcG9zaXRpb24tMS0xYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIG9uRW50ZXJTZWFyY2hRdWVyeShldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIHRoaXMuc2VuZFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hlZFRleHQuZW1pdCh0aGlzLnNlYXJjaFF1ZXJ5KTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmF2YmFyLXdyYXBwZXJcIj5cbiAgPGRpdiBjbGFzcz1cIm5hdmJhciB7e3RoZW1lfX1cIiBbbmdDbGFzc109XCJtYWluTmF2Q2xhc3NlcygpXCI+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gYnJhbmRcIj5cbiAgICAgIDxhIFtpbm5lckh0bWxdPVwibmF2RGF0YS5icmFuZC5uYW1lXCIgW3JvdXRlckxpbmtdPVwibmF2RGF0YS5icmFuZC5saW5rXCI+PC9hPlxuICAgICAgPGEgKGNsaWNrKT1cInRvZ2dsZU5hdigpXCIgY2xhc3M9XCJzbWFsbC1vbmx5LW9wZW4tbmF2XCIgW2lubmVySHRtbF09XCJvblNtYWxsTWVudUJ1dHRvblwiPjwvYT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIGxlZnQtbmF2XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2RGF0YSAmJiBuYXZEYXRhLmxlZnQgJiYgbmF2RGF0YS5sZWZ0Lm5hdlR5cGUgPT0gJ2lucHV0J1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApID0gXCJvbkVudGVyU2VhcmNoUXVlcnkoJGV2ZW50KVwiIGNsYXNzPVwiaW5wdXRcIiBbcGxhY2Vob2xkZXJdPVwibmF2RGF0YS5sZWZ0LmRhdGEucGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICA8YSBjbGFzcz1cImlucHV0LWJ1dHRvblwiICpuZ0lmPVwibmF2RGF0YS5sZWZ0LmRhdGEuYnRuXCIgW2lubmVySHRtbF09XCJuYXZEYXRhLmxlZnQuZGF0YS5uYW1lXCI+PC9hPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2RGF0YSAmJiBuYXZEYXRhLmxlZnQgJiYgbmF2RGF0YS5sZWZ0Lm5hdlR5cGUgPT0gJ2xpbmtzJ1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBuZGF0YSBvZiBuYXZEYXRhLmxlZnQuZGF0YVwiPlxuICAgICAgICAgIDwhLS0gZHJvcGRvd24gLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5kYXRhLnR5cGUgJiYgbmRhdGEudHlwZSA9PSAnZHJvcGRvd24nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPGEgW2lubmVySHRtbF09XCJuZGF0YS5uYW1lXCIgW3JvdXRlckxpbmtdPVwibmRhdGEubGlua1wiIGNsYXNzPVwidHJpZ2dlci1kcm9wZG93blwiPjwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3AtbWVudVwiPlxuICAgICAgICAgICAgICAgIDxhICpuZ0Zvcj1cImxldCBkcm9wbGluayBvZiBuZGF0YS5saW5rc1wiIFtpbm5lckh0bWxdPVwiZHJvcGxpbmsubmFtZVwiPjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW5kYXRhLnR5cGVcIj5cbiAgICAgICAgICAgIDxhIFtpbm5lckh0bWxdPVwibmRhdGEubmFtZVwiIFtyb3V0ZXJMaW5rXT1cIm5kYXRhLmxpbmtcIj48L2E+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gcmlnaHQtbmF2XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2RGF0YSAmJiBuYXZEYXRhLnJpZ2h0ICYmIG5hdkRhdGEucmlnaHQubmF2VHlwZSA9PSAnbGlua3MnXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5kYXRhIG9mIG5hdkRhdGEucmlnaHQuZGF0YVwiPlxuICAgICAgICAgIDwhLS0gZHJvcGRvd24gLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5kYXRhLnR5cGUgJiYgbmRhdGEudHlwZSA9PSAnZHJvcGRvd24nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPGEgW2lubmVySHRtbF09XCJuZGF0YS5uYW1lXCIgW3JvdXRlckxpbmtdPVwibmRhdGEubGlua1wiIGNsYXNzPVwidHJpZ2dlci1kcm9wZG93blwiPjwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3AtbWVudVwiPlxuICAgICAgICAgICAgICAgIDxhICpuZ0Zvcj1cImxldCBkcm9wbGluayBvZiBuZGF0YS5saW5rc1wiIFtpbm5lckh0bWxdPVwiZHJvcGxpbmsubmFtZVwiPjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW5kYXRhLnR5cGVcIj5cbiAgICAgICAgICAgIDxhIFtpbm5lckh0bWxdPVwibmRhdGEubmFtZVwiIFtyb3V0ZXJMaW5rXT1cIm5kYXRhLmxpbmtcIj48L2E+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=