import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input() item: any = {};
  @Output() isClicked = new EventEmitter<boolean>();
  @Input() itemid: any = 0;
  @Input() theme = "primary"
  constructor() { }

  ngOnInit(): void {
  }

  onClickTitle() {
    this.isClicked.emit(this.itemid);
  }

  isActive(state: any) {
    return state ? 'active' : '';
  }

}
