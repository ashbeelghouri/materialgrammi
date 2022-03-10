import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() theme = "dark";
  @Input() outline = false;
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

  chipClass(){
    let results = "";
    results += this.theme;

    results += this.outline ? " outlined" : "";

    return results;
  }

}
