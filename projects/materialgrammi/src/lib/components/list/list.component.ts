import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: any = [];
  @Input() theme: string = "dark";
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

}
