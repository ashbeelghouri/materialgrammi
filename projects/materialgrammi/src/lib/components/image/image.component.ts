import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
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
  @Input() applyFilters = true;
  @Input() lazyLoad = true;
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

  @ViewChild('imageEl') private image!: ElementRef;
  @ViewChild('imageProgress') private imageProgress!: ElementRef;

  loaded = false;
  constructor(private renderer: Renderer2, private http: HttpClient) { }

  ngOnInit(): void {
    if(this.lazyLoad) {
      this.loadImage();
    }
  }

  ngAfterViewInit() {
    this.filterize();
  }

  loadImage(){
    this.http.get(this.src, {
      responseType: "blob",
      reportProgress: true,
      observe: "events",
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(event=>{
      if(event.type === HttpEventType.DownloadProgress && event.total) {
        const percentage = (event.loaded/event.total) * 100;
        this.imageProgress.nativeElement.value = percentage;
      }
      if(event.type === HttpEventType.Response && event.body){
        this.loaded = true;
        this.image.nativeElement.src = window.URL.createObjectURL(event.body);
        this.filterize();
      }
    });
  }

  filterize(){
    if(this.applyFilters && !this.loaded) {
      let filters = this.createFilters();
      this.renderer.setStyle(this.image.nativeElement, 'filter', filters);
    }
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
    return filter;
  }


}
