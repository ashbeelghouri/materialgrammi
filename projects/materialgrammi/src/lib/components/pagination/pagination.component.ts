import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() page = new EventEmitter();
  @Output() getdata = new EventEmitter();
  @Input() theme = "text-on-dark";
  @Input() data: any = [];
  @Input() fullDataMode = true;
  @Input() perPage = 10;
  @Input() currentPage = 1;
  @Input() icons = {
    next: `<i class="fas fa-chevron-right"></i>`,
    previous: `<i class="fas fa-chevron-left"></i>`
  }

  @Input() max = 22;

  totalPages = 0;
  totalCount = 0;
  pages: any = [];
  startFrom = 1;
  _data:any = [];


  constructor() { }

  ngOnInit(): void {
    this._data = JSON.parse(JSON.stringify(this.data));
    this.calculatePage();
    
    this.sendData();
  }

  ngOnChanges(): void {
    this.calculatePage();
    this.sendData();
  }

  calculatePage() {
    this.pages = [];
    if (this.fullDataMode && this.data.length > 0) {
      this.totalCount = this.data.length;
    } else {
      this.totalCount = this.data;
    }
    this.totalPages = Math.ceil(this.totalCount / this.perPage);
    for (let i = this.startFrom; i <= this.totalPages; i++) {
      if(this.pages.length < (this.max+1)) {
        this.pages.push(i);
      }
    }
  }

  sendData() {
    if (this.fullDataMode && this.totalCount > 0) {
      let tobeSlicedFrom = (this.currentPage - 1) * this.perPage;
      let tobeSlicedTo = this.currentPage * this.perPage;
      let reformedData = [];
      for(let i = tobeSlicedFrom; i < tobeSlicedTo; i++){
        reformedData.push(this.data[i]);
      }
      this.getdata.emit(reformedData);
    } else {
      this.getdata.emit((this.currentPage - 1) * this.perPage);
    }
  }

  removePages(){
    this.startFrom = (this.currentPage > 1) && 
    (this.currentPage < this.totalPages - this.max || (this.currentPage > this.max - this.max/2)) ? this.currentPage - 1 : this.startFrom;
  }

  onPageClick(pageNumber: any) {
    if (typeof pageNumber != "number") {
      pageNumber = parseInt(pageNumber);
    }
    this.currentPage = pageNumber;
    this.page.emit(this.currentPage);
    this.sendData();
    this.removePages();
    this.calculatePage();
  }

  isActivePage(pageNumber: any) {
    if (typeof pageNumber != "number") {
      pageNumber = parseInt(pageNumber);
    }
    return this.currentPage == pageNumber ? 'active' : '';
  }

  onNext() {
    this.currentPage = this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
    this.page.emit(this.currentPage);
    this.sendData();
    this.removePages();
    this.calculatePage();
  }

  onPrevious() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
    this.page.emit(this.currentPage);
    this.sendData();
    this.removePages();
    this.calculatePage();
  }

}
