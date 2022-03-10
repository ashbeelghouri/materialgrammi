import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input() size: string = "n";
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

  containerClass() {
    let results = "";
    results += this.size == "s" ? "pad-10" : "";
    results += this.size == "m" ? "pad-30" : "";
    results += this.size == "l" ? "pad-50" : "";
    results += this.size == "xl" ? "pad-80" : "";
    return results;
  }

}
