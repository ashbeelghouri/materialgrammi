import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() show = true;
  @Input() type = "img";
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

}
