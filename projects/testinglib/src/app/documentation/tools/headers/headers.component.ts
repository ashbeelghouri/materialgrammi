import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  menuActive = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(active:boolean){
    this.menuActive = active;
  }

}
