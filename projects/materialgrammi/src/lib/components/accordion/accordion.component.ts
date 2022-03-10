import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() theme = "dark";

  @Input() items: any = [{
    title: "Panel 1",
    description: "description of panel 1",
    active: false
  }, {
    title: "Panel 2",
    description: "description of panel 2",
    active: true
  }, {
    title: "Panel 3",
    description: "description of panel 3",
    active: false
  }, {
    title: "Panel 4",
    description: "description of panel 4",
    active: false
  }, {
    title: "Panel 5",
    description: "description of panel 5",
    active: false
  }];

  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

  turnAllOff(missItem: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (missItem != i) {
        this.items[i].active = false;
      }
    }
  }

  toggleItem(itemNumber: any) {
    this.items[itemNumber].active = !this.items[itemNumber].active;
    this.turnAllOff(itemNumber);
  }



}
