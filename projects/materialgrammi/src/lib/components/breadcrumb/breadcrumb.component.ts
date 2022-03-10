import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() links: any = [];
  @Input() darkmode = false;
  @Input() devider = "/";
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

  showDarkMode() {
    return this.darkmode ? "dark" : "lite";
  }

  active(link: any) {
    return link.active ? 'active' : '';
  }

}
