import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mg-inview',
  templateUrl: './inview.component.html',
  styleUrls: ['./inview.component.css']
})
export class InviewComponent implements OnInit, AfterViewInit {

  @Output() active = new EventEmitter();
  @Output() boxOnScreen = new EventEmitter();

  viewport = {
    width: 0,
    height: 0
  };

  box = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };

  @ViewChild("inView") inView?: ElementRef;

  boxInView = false;

  constructor() { }

  ngOnInit(): void {
    this.calculateScreen();
    this.calculateBox();
    this.inviewCheck();
  }

  ngAfterViewInit(): void {
    this.calculateScreen();
    this.calculateBox();
    this.inviewCheck();
  }

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.calculateBox();
    this.inviewCheck();
  }

  calculateScreen() {
    this.viewport.width = document.documentElement.clientWidth;
    this.viewport.height = document.documentElement.clientHeight;
  }

  calculateBox() {
    if (this.inView) {
      this.box.top = this.inView.nativeElement.getBoundingClientRect().top;
      this.box.bottom = this.inView.nativeElement.getBoundingClientRect().bottom;
      this.box.left = this.inView.nativeElement.getBoundingClientRect().left;
      this.box.right = this.inView.nativeElement.getBoundingClientRect().right;
      this.boxOnScreen.emit(this.box);
    }
  }

  inviewCheck() {
    if (
      this.box.top < this.viewport.height &&
      this.box.bottom > 0 &&
      this.box.left < this.viewport.width &&
      this.box.right > 0
      ) {
      this.boxInView = true;
    } else {
      this.boxInView = false;
    }
    this.active.emit(this.boxInView);
  }
}
