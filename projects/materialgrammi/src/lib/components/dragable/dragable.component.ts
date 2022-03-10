import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.css']
})
export class DragableComponent implements OnInit {
  @Input() dragable = true;
  @Input() data: any = {
    name: "Ashbeel",
    profession: "Software Engineer"
  };
  @Input() class = "";

  @Output() onEvent = new EventEmitter();

  eventProperties = {
    isInDragMode: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  onDrag(event: any) {
    event.dataTransfer.setData("text", JSON.stringify(this.data));
    event.dataTransfer.effectAllowed = "all";
    event.stopPropagation();
    this.onEvent.emit(this.eventProperties);
  }

}
