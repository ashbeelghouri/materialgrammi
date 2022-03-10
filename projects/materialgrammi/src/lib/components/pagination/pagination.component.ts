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

  totalPages = 0;
  totalCount = 0;
  pages: any = [];

  _data:any = [];


  constructor() { }

  ngOnInit(): void {
    this._data = JSON.parse(JSON.stringify(this.data));
    this.calculatePage();
    
    this.sendData();
  }

  ngOnChanges(): void {
    console.log("changed", this._data);
    this.calculatePage();
    this.sendData();
    console.log("Pages", this.pages);
  }

  calculatePage() {
    this.pages = [];
    if (this.fullDataMode && this.data.length > 0) {
      this.totalCount = this.data.length;
    } else {
      this.totalCount = this.data;
    }
    this.totalPages = Math.ceil(this.totalCount / this.perPage);
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
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

  onPageClick(pageNumber: any) {
    if (typeof pageNumber != "number") {
      pageNumber = parseInt(pageNumber);
    }
    this.currentPage = pageNumber;
    this.page.emit(this.currentPage);
    this.sendData();
  }

  isActivePage(pageNumber: any) {
    if (typeof pageNumber != "number") {
      pageNumber = parseInt(pageNumber);
    }
    return this.currentPage == pageNumber ? 'active' : '';
  }

  onNext() {
    this.currentPage = this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
    this.sendData();
  }

  onPrevious() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
    this.sendData();
  }

}
