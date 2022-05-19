import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() closeBtn = `<i class="fas fa-times"></i>`;
  @Output() close = new EventEmitter();
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
