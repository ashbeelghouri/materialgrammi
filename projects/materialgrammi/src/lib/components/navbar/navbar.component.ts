import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavPartition, Theme } from '../../types';

@Component({
  selector: 'mg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchedText = new EventEmitter();
  @Input() spaceAround = true;
  @Input() theme: Theme = "primary";
  @Input() onSmallMenuButton:string = "=";
  @Input() isFixed = false;
  @Input() partitionType: NavPartition = "2:1";
  @Input() navData:any = {};

  onSmallActive = false;

  searchQuery = "";

  constructor() { }

  ngOnInit(): void {
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
    } else if (this.partitionType == "1:2") {
      classes += ` position-1-2`;
    } else if (this.partitionType == "1:1") {
      classes += ` position-1-1`;
    }

    return classes;
  }

  onEnterSearchQuery(event: any): void {
    if (event.key == "Enter") {
      this.sendSearch();
    } else {
      this.searchQuery = event.target.value;
    }
  }

  sendSearch() {
    this.searchedText.emit(this.searchQuery);
  }

}
