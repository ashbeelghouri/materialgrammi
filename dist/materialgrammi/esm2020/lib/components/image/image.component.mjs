import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["myImage"];
export class ImageComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.src = "";
        this.responsive = true;
        this.rounded = false;
        this.circled = false;
        this.shadowed = false;
        this.class = "";
        this.filters = {
            blur: false,
            brightness: false,
            contrast: false,
            grayscale: false,
            invert: false,
            hue: false,
            opacity: false,
            saturate: false,
            sepia: false
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.applyFilters();
    }
    applyFilters() {
        let filters = this.createFilters();
        this.renderer.setStyle(this.image.nativeElement, 'filter', filters);
    }
    imageClasses() {
        let results = "img";
        results += this.responsive ? " img-responsive" : "";
        results += this.rounded ? " rounded" : "";
        results += !this.rounded && this.circled ? " circled" : "";
        results += this.shadowed ? " shadow-2" : "";
        results += ` ${this.class}`;
        return results;
    }
    createFilters() {
        let filter = "";
        filter += (this.filters.blur !== undefined && this.filters.blur !== false) ? ` blur(${this.filters.blur}px)` : "";
        filter += (this.filters.brightness !== undefined && this.filters.brightness !== false) ? ` brightness(${this.filters.brightness}%)` : "";
        filter += (this.filters.contrast !== undefined && this.filters.contrast !== false) ? ` contrast(${this.filters.contrast}%)` : "";
        filter += (this.filters.grayscale !== undefined && this.filters.grayscale !== false) ? ` grayscale(${this.filters.grayscale}%)` : "";
        filter += (this.filters.invert !== undefined && this.filters.invert !== false) ? ` invert(${this.filters.invert}%)` : "";
        filter += (this.filters.hue !== undefined && this.filters.hue !== false) ? ` hue-rotate(${this.filters.hue}deg)` : "";
        filter += (this.filters.opacity !== undefined && this.filters.opacity !== false) ? ` opacity(${this.filters.opacity}%)` : "";
        filter += (this.filters.saturate !== undefined && this.filters.saturate !== false) ? ` saturate(${this.filters.saturate}%)` : "";
        filter += (this.filters.sepia !== undefined && this.filters.sepia !== false) ? ` sepia(${this.filters.sepia}%)` : "";
        console.log("Filter loooks like ==> ", filter);
        return filter;
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
ImageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageComponent, selectors: [["mg-image"]], viewQuery: function ImageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.image = _t.first);
    } }, inputs: { src: "src", responsive: "responsive", rounded: "rounded", circled: "circled", shadowed: "shadowed", class: "class", filters: "filters" }, decls: 2, vars: 2, consts: [[3, "src", "ngClass"], ["myImage", ""]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "img", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("src", ctx.src, i0.ɵɵsanitizeUrl)("ngClass", ctx.imageClasses());
    } }, directives: [i1.NgClass], styles: [".img.rounded[_ngcontent-%COMP%]{border-radius:5px}.img.circled[_ngcontent-%COMP%]{border-radius:50%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageComponent, [{
        type: Component,
        args: [{ selector: 'mg-image', template: "<img [src]=\"src\" [ngClass]=\"imageClasses()\" #myImage/>\n", styles: [".img.rounded{border-radius:5px}.img.circled{border-radius:50%}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { src: [{
            type: Input
        }], responsive: [{
            type: Input
        }], rounded: [{
            type: Input
        }], circled: [{
            type: Input
        }], shadowed: [{
            type: Input
        }], class: [{
            type: Input
        }], filters: [{
            type: Input
        }], image: [{
            type: ViewChild,
            args: ['myImage']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8xRyxNQUFNLE9BQU8sY0FBYztJQXNCekIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXJCOUIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFlBQU8sR0FBUTtZQUN0QixJQUFJLEVBQUUsS0FBSztZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUE7SUFJMEMsQ0FBQztJQUU1QyxRQUFRO0lBRVIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BELE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNELE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsSCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pJLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakksTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNySSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pILE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEgsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3SCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pJLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs0RUE1RFUsY0FBYztpRUFBZCxjQUFjOzs7Ozs7UUNQM0IsNEJBQXNEOztRQUFqRCwrQ0FBVywrQkFBQTs7dUZET0gsY0FBYztjQUwxQixTQUFTOzJCQUNFLFVBQVU7NERBS1gsR0FBRztrQkFBWCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxPQUFPO2tCQUFmLEtBQUs7WUFZd0IsS0FBSztrQkFBbEMsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNyYyA9IFwiXCI7XG4gIEBJbnB1dCgpIHJlc3BvbnNpdmUgPSB0cnVlO1xuICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNpcmNsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hhZG93ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBJbnB1dCgpIGZpbHRlcnM6IGFueSA9IHtcbiAgICBibHVyOiBmYWxzZSxcbiAgICBicmlnaHRuZXNzOiBmYWxzZSxcbiAgICBjb250cmFzdDogZmFsc2UsXG4gICAgZ3JheXNjYWxlOiBmYWxzZSxcbiAgICBpbnZlcnQ6IGZhbHNlLFxuICAgIGh1ZTogZmFsc2UsXG4gICAgb3BhY2l0eTogZmFsc2UsXG4gICAgc2F0dXJhdGU6IGZhbHNlLFxuICAgIHNlcGlhOiBmYWxzZVxuICB9XG5cbiAgQFZpZXdDaGlsZCgnbXlJbWFnZScpIHByaXZhdGUgaW1hZ2UhOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5RmlsdGVycygpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXJzKCl7XG4gICAgbGV0IGZpbHRlcnMgPSB0aGlzLmNyZWF0ZUZpbHRlcnMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudCwgJ2ZpbHRlcicsIGZpbHRlcnMpO1xuICB9XG5cbiAgaW1hZ2VDbGFzc2VzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJpbWdcIjtcbiAgICByZXN1bHRzICs9IHRoaXMucmVzcG9uc2l2ZSA/IFwiIGltZy1yZXNwb25zaXZlXCIgOiBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5yb3VuZGVkID8gXCIgcm91bmRlZFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9ICF0aGlzLnJvdW5kZWQgJiYgdGhpcy5jaXJjbGVkID8gXCIgY2lyY2xlZFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2hhZG93ZWQgPyBcIiBzaGFkb3ctMlwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IGAgJHt0aGlzLmNsYXNzfWA7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBjcmVhdGVGaWx0ZXJzKCkge1xuICAgIGxldCBmaWx0ZXIgPSBcIlwiO1xuICAgIGZpbHRlciArPSAodGhpcy5maWx0ZXJzLmJsdXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpbHRlcnMuYmx1ciAhPT0gZmFsc2UpID8gYCBibHVyKCR7dGhpcy5maWx0ZXJzLmJsdXJ9cHgpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmlsdGVycy5icmlnaHRuZXNzICE9PSBmYWxzZSkgPyBgIGJyaWdodG5lc3MoJHt0aGlzLmZpbHRlcnMuYnJpZ2h0bmVzc30lKWAgOiBcIlwiO1xuICAgIGZpbHRlciArPSAodGhpcy5maWx0ZXJzLmNvbnRyYXN0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmNvbnRyYXN0ICE9PSBmYWxzZSkgPyBgIGNvbnRyYXN0KCR7dGhpcy5maWx0ZXJzLmNvbnRyYXN0fSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuZ3JheXNjYWxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmdyYXlzY2FsZSAhPT0gZmFsc2UpID8gYCBncmF5c2NhbGUoJHt0aGlzLmZpbHRlcnMuZ3JheXNjYWxlfSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuaW52ZXJ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmludmVydCAhPT0gZmFsc2UpID8gYCBpbnZlcnQoJHt0aGlzLmZpbHRlcnMuaW52ZXJ0fSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuaHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmh1ZSAhPT0gZmFsc2UpID8gYCBodWUtcm90YXRlKCR7dGhpcy5maWx0ZXJzLmh1ZX1kZWcpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMub3BhY2l0eSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmlsdGVycy5vcGFjaXR5ICE9PSBmYWxzZSkgPyBgIG9wYWNpdHkoJHt0aGlzLmZpbHRlcnMub3BhY2l0eX0lKWAgOiBcIlwiO1xuICAgIGZpbHRlciArPSAodGhpcy5maWx0ZXJzLnNhdHVyYXRlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLnNhdHVyYXRlICE9PSBmYWxzZSkgPyBgIHNhdHVyYXRlKCR7dGhpcy5maWx0ZXJzLnNhdHVyYXRlfSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuc2VwaWEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpbHRlcnMuc2VwaWEgIT09IGZhbHNlKSA/IGAgc2VwaWEoJHt0aGlzLmZpbHRlcnMuc2VwaWF9JSlgIDogXCJcIjtcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBsb29va3MgbGlrZSA9PT4gXCIsIGZpbHRlcik7XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxuXG5cbn1cbiIsIjxpbWcgW3NyY109XCJzcmNcIiBbbmdDbGFzc109XCJpbWFnZUNsYXNzZXMoKVwiICNteUltYWdlLz5cbiJdfQ==