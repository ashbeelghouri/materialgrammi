import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'mg-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, AfterViewInit {
  @Input() src = "";
  @Input() responsive = true;
  @Input() rounded = false;
  @Input() circled = false;
  @Input() shadowed = false;
  @Input() class = "";

  @Input() filters: any = {
    blur: false,
    brightness: false,
    contrast: false,
    grayscale: false,
    invert: false,
    hue: false,
    opacity: false,
    saturate: false,
    sepia: false
  }

  @ViewChild('myImage') private image!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.applyFilters();
  }

  applyFilters(){
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
