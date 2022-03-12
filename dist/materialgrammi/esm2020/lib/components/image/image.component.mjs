import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
ImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ImageComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
ImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ImageComponent, selector: "mg-image", inputs: { src: "src", responsive: "responsive", rounded: "rounded", circled: "circled", shadowed: "shadowed", class: "class", filters: "filters" }, viewQueries: [{ propertyName: "image", first: true, predicate: ["myImage"], descendants: true }], ngImport: i0, template: "<img [src]=\"src\" [ngClass]=\"imageClasses()\" #myImage/>\n", styles: [".img.rounded{border-radius:5px}.img.circled{border-radius:50%}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-image', template: "<img [src]=\"src\" [ngClass]=\"imageClasses()\" #myImage/>\n", styles: [".img.rounded{border-radius:5px}.img.circled{border-radius:50%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { src: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0ZXJpYWxncmFtbWkvc3JjL2xpYi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzFHLE1BQU0sT0FBTyxjQUFjO0lBc0J6QixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBckI5QixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsWUFBTyxHQUFRO1lBQ3RCLElBQUksRUFBRSxLQUFLO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQTtJQUkwQyxDQUFDO0lBRTVDLFFBQVE7SUFFUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEQsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xILE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekksTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JJLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekgsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0SCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdILE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakksTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNySCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OzJHQTVEVSxjQUFjOytGQUFkLGNBQWMsc1NDUDNCLDhEQUNBOzJGRE1hLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsVUFBVTtnR0FLWCxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVHLE9BQU87c0JBQWYsS0FBSztnQkFZd0IsS0FBSztzQkFBbEMsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZy1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNyYyA9IFwiXCI7XG4gIEBJbnB1dCgpIHJlc3BvbnNpdmUgPSB0cnVlO1xuICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNpcmNsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hhZG93ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG4gIEBJbnB1dCgpIGZpbHRlcnM6IGFueSA9IHtcbiAgICBibHVyOiBmYWxzZSxcbiAgICBicmlnaHRuZXNzOiBmYWxzZSxcbiAgICBjb250cmFzdDogZmFsc2UsXG4gICAgZ3JheXNjYWxlOiBmYWxzZSxcbiAgICBpbnZlcnQ6IGZhbHNlLFxuICAgIGh1ZTogZmFsc2UsXG4gICAgb3BhY2l0eTogZmFsc2UsXG4gICAgc2F0dXJhdGU6IGZhbHNlLFxuICAgIHNlcGlhOiBmYWxzZVxuICB9XG5cbiAgQFZpZXdDaGlsZCgnbXlJbWFnZScpIHByaXZhdGUgaW1hZ2UhOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5RmlsdGVycygpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXJzKCl7XG4gICAgbGV0IGZpbHRlcnMgPSB0aGlzLmNyZWF0ZUZpbHRlcnMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudCwgJ2ZpbHRlcicsIGZpbHRlcnMpO1xuICB9XG5cbiAgaW1hZ2VDbGFzc2VzKCkge1xuICAgIGxldCByZXN1bHRzID0gXCJpbWdcIjtcbiAgICByZXN1bHRzICs9IHRoaXMucmVzcG9uc2l2ZSA/IFwiIGltZy1yZXNwb25zaXZlXCIgOiBcIlwiO1xuICAgIHJlc3VsdHMgKz0gdGhpcy5yb3VuZGVkID8gXCIgcm91bmRlZFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9ICF0aGlzLnJvdW5kZWQgJiYgdGhpcy5jaXJjbGVkID8gXCIgY2lyY2xlZFwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IHRoaXMuc2hhZG93ZWQgPyBcIiBzaGFkb3ctMlwiIDogXCJcIjtcbiAgICByZXN1bHRzICs9IGAgJHt0aGlzLmNsYXNzfWA7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBjcmVhdGVGaWx0ZXJzKCkge1xuICAgIGxldCBmaWx0ZXIgPSBcIlwiO1xuICAgIGZpbHRlciArPSAodGhpcy5maWx0ZXJzLmJsdXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpbHRlcnMuYmx1ciAhPT0gZmFsc2UpID8gYCBibHVyKCR7dGhpcy5maWx0ZXJzLmJsdXJ9cHgpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmlsdGVycy5icmlnaHRuZXNzICE9PSBmYWxzZSkgPyBgIGJyaWdodG5lc3MoJHt0aGlzLmZpbHRlcnMuYnJpZ2h0bmVzc30lKWAgOiBcIlwiO1xuICAgIGZpbHRlciArPSAodGhpcy5maWx0ZXJzLmNvbnRyYXN0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmNvbnRyYXN0ICE9PSBmYWxzZSkgPyBgIGNvbnRyYXN0KCR7dGhpcy5maWx0ZXJzLmNvbnRyYXN0fSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuZ3JheXNjYWxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmdyYXlzY2FsZSAhPT0gZmFsc2UpID8gYCBncmF5c2NhbGUoJHt0aGlzLmZpbHRlcnMuZ3JheXNjYWxlfSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuaW52ZXJ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmludmVydCAhPT0gZmFsc2UpID8gYCBpbnZlcnQoJHt0aGlzLmZpbHRlcnMuaW52ZXJ0fSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuaHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLmh1ZSAhPT0gZmFsc2UpID8gYCBodWUtcm90YXRlKCR7dGhpcy5maWx0ZXJzLmh1ZX1kZWcpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMub3BhY2l0eSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmlsdGVycy5vcGFjaXR5ICE9PSBmYWxzZSkgPyBgIG9wYWNpdHkoJHt0aGlzLmZpbHRlcnMub3BhY2l0eX0lKWAgOiBcIlwiO1xuICAgIGZpbHRlciArPSAodGhpcy5maWx0ZXJzLnNhdHVyYXRlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWx0ZXJzLnNhdHVyYXRlICE9PSBmYWxzZSkgPyBgIHNhdHVyYXRlKCR7dGhpcy5maWx0ZXJzLnNhdHVyYXRlfSUpYCA6IFwiXCI7XG4gICAgZmlsdGVyICs9ICh0aGlzLmZpbHRlcnMuc2VwaWEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZpbHRlcnMuc2VwaWEgIT09IGZhbHNlKSA/IGAgc2VwaWEoJHt0aGlzLmZpbHRlcnMuc2VwaWF9JSlgIDogXCJcIjtcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBsb29va3MgbGlrZSA9PT4gXCIsIGZpbHRlcik7XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxuXG5cbn1cbiIsIjxpbWcgW3NyY109XCJzcmNcIiBbbmdDbGFzc109XCJpbWFnZUNsYXNzZXMoKVwiICNteUltYWdlLz5cbiJdfQ==