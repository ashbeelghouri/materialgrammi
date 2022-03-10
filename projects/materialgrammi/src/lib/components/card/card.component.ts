import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() class = ``;
  constructor() { }

  ngOnInit(): void {
  }

}
