import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../types';

@Component({
  selector: 'mg-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() theme: Theme = "primary";
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
