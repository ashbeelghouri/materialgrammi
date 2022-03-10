import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() perPage = 5;
  @Input() id = "1";
  @Input() activePage = 1;
  @Input() fullWidthSlide = false;
  @Input() play = true;
  @Input() timer = 1000;
  @Input() items = [
    `<img src="https://images.unsplash.com/photo-1636297461709-0812290a9dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1640067181866-3041ad1d9ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1641945165700-2f6209644719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1640107588244-8fe79997aa8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1637592440237-a1fbc55990d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1634913940785-9730051200ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1641760378661-6f290a50a62d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1641505396502-fb349184b506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1642179930799-4503afdd07b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1642179930799-4503afdd07b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1641945165700-2f6209644719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="img img-responsive"/>`,
    `<img src="https://images.unsplash.com/photo-1640107588244-8fe79997aa8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="img img-responsive"/>`
  ];
  @Input() heightAdjustment = true;
  @Input() maxHeight = 300;
  @Input() showControls = false;
  @Input() gap = 3;
  // 1: 5px, 2: 10px, 3: 15px, 4: 20px; 5: 25px;
  @Input() class = "";
  slideshow_wrapper: any;

  screenProperties = {
    width: 0,
    height: 0
  };

  mainWrapperWidth = 0;
  singleSlideWidth = 0;

  totalPage = 1;
  totalItems = 0;

  slideshowMarginLeft = 0;

  slideInterval: any;

  dataCheck: any = {};
  constructor(private renderer: Renderer2, private elem: ElementRef, private service: MaterialgrammiService) { }

  ngOnInit(): void {
    if (this.perPage < 1) {
      this.perPage = 1;
    }
  }

  ngAfterViewInit() {
    this.styleSetup();
    this.service.registerSlideshow(this.id, this.activePage, this.play, false, false, false, this.timer);
    this.subscription();
  }

  ngOnChanges(): void {
    this.styleSetup();
    this.autoPlay();
  }

  subscription() {
    this.watchNext();
    this.watchActivePage();
    this.watchPrevious();
    this.autoPlay();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.styleSetup();
  }

  handlings() {
    this.perPage = this.perPage > 0 ? this.perPage : 1;
    this.activePage = this.activePage > 0 ? this.activePage : 1;
  }



  styleSetup() {
    this.slideshow_wrapper = this.elem.nativeElement.querySelector(".slideshow-wrapper");
    this.screenProperties.width = this.slideshow_wrapper.offsetWidth;
    this.singleSlideWidth = this.screenProperties.width / this.perPage;
    this.mainWrapperWidth = this.screenProperties.width * (this.items.length / this.perPage);
    this.screenProperties.height = this.slideshow_wrapper.offsetHeight;
    this.mainWrapperStyles();
  }

  calculatePages() {
    this.totalItems = this.items.length;
    this.totalPage = this.fullWidthSlide ? Math.ceil(this.totalItems / this.perPage) : this.totalItems;
  }

  mainWrapperStyles() {
    let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
    let maxHeight = this.slideWrapperStyles();
    this.renderer.setStyle(innerWrapper, "height", `${maxHeight}px`);
    this.renderer.setStyle(innerWrapper, "width", `${this.mainWrapperWidth}px`);
    this.calculatePages();
  }

  slideWrapperStyles() {
    var slides = this.elem.nativeElement.querySelectorAll('.slide-wrapper');
    let maxSlideHeight = this.maxHeight > 0 ? this.maxHeight : this.getMaxHeight(slides);
    for (let i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], "height", `${maxSlideHeight}px`);
      this.renderer.setStyle(slides[i], 'width', `${this.singleSlideWidth}px`);
    }
    var singleSlides = this.elem.nativeElement.querySelectorAll('.slide');

    if (this.heightAdjustment) {
      for (let i = 0; i < singleSlides.length; i++) {
        let singleSlideHeight = singleSlides[i].offsetHeight;
        let margintop = (maxSlideHeight - singleSlideHeight) / 2;
        this.renderer.setStyle(singleSlides[i], "margin-top", margintop + "px");
      }
    }

    return maxSlideHeight;
  }

  getMaxHeight(slides: any) {
    let maxHeight = 0;
    for (let i = 0; i < slides.length; i++) {
      maxHeight = slides[i].offsetHeight > maxHeight ? slides[i].offsetHeight : maxHeight;
    }
    return maxHeight;
  }

  slideClasses() {
    let results = "";
    results += this.gap > 0 ? `pad-${(this.gap * 5)}` : "";
    return results;
  }

  watchNext() {
    this.service.watchSlideshowNext(this.id).subscribe((val: any) => {
      if (val) {
        this.performNext();
      }
    });
  }

  watchPrevious() {
    this.service.watchSlideshowPrevious(this.id).subscribe((val: any) => {
      if (val) {
        this.performPrevious();
      }
    });
  }

  watchActivePage() {
    this.service.watchSlideshowActivePage(this.id).subscribe((val: any) => {
      this.activePage = val;
    });
  }

  performNext() {
    if (!this.fullWidthSlide) {
      if (this.activePage + (this.perPage - 1) < this.totalPage) {
        this.setActivePage(this.activePage + 1);
        this.slideshowMarginLeft -= this.singleSlideWidth;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}px`);
      } else {
        this.setActivePage(1);
        this.slideshowMarginLeft = 0;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `0`);
      }
    } else {
      if (this.activePage < this.totalPage) {
        this.setActivePage(this.activePage + 1);
        this.slideshowMarginLeft -= 100;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}%`);
      } else {
        this.setActivePage(1);
        this.slideshowMarginLeft = 0;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `0`);
      }
    }

  }

  performPrevious() {
    if (!this.fullWidthSlide) {
      if (this.activePage - (this.perPage -1) > 1) {
        this.setActivePage(this.activePage - 1);
        this.slideshowMarginLeft += this.singleSlideWidth;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}px`);
      } else {
        this.setActivePage(this.totalPage);
        this.slideshowMarginLeft = -((this.totalPage - (this.perPage)) * this.singleSlideWidth);
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}px`);
      }
    } else {
      if (this.activePage > 1) {
        this.setActivePage(this.activePage - 1);
        this.slideshowMarginLeft += 100;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}%`);
      } else {
        this.setActivePage(this.totalPage);
        this.slideshowMarginLeft = (this.totalPage - 1) * -100;
        let innerWrapper = this.elem.nativeElement.querySelector(".slideshow");
        this.renderer.setStyle(innerWrapper, "margin-left", `${this.slideshowMarginLeft}%`);
      }
    }
  }

  setActivePage(active: number) {
    this.service.changeSlideActivePage(this.id, active);
  }

  next() {
    this.nextPage();
  }
  previous() {
    this.previousPage();
  }

  nextPage() {
    this.service.nextSlide(this.id);
  }
  previousPage() {
    this.service.previousSlide(this.id);
  }

  playSlidesOp() {
    this.pauseSlideOp();
    var $this = this;
    this.service.playSlideShow(this.id);
  }

  pauseSlideOp() {
    this.service.pauseSlideshow(this.id);
  }


  autoPlay() {
    if (this.play) {
      this.playSlidesOp();
    } else {
      this.pauseSlideOp();
    }
  }

}
