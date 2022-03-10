import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-dropable',
  templateUrl: './dropable.component.html',
  styleUrls: ['./dropable.component.css']
})
export class DropableComponent implements OnInit {
  @Output() onEvent = new EventEmitter();
  @Output() dataRecieved = new EventEmitter();

  @Input() dropFiles = false;
  @Input() class = "";
  onEventProperties = {
    isDraggedOver: false,
    dragEntered: false,
    dragLeft: false,
    dropped: false
  };

  data:any = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: any) {
    event.preventDefault();
    this.onEventProperties.dropped = true;
    this.emitEvents();
    if(this.dropFiles) {
      this.data = event.dataTransfer.files;
    }else{
      var data = event.dataTransfer.getData("text");
      this.data = data ? JSON.parse(data) : false;
    }
    if(this.data){
      this.emitData();
    }
  }
  draggedOver(event: any) {
    event.stopPropagation();
    this.onEventProperties.isDraggedOver = true;
    this.emitEvents();
    event.preventDefault();
  }
  dragEntered(event:any){
    event.stopPropagation();
    this.onEventProperties.dragEntered = true;
    this.onEventProperties.dragLeft = false;
    this.emitEvents();
    event.preventDefault();
  }
  dragLeft(event:any){
    event.stopPropagation();
    this.onEventProperties.dragLeft = true;
    this.onEventProperties.dragEntered = false;
    this.emitEvents();
    event.preventDefault();
  }


  emitEvents(){
    this.onEvent.emit(this.onEventProperties);
  }

  emitData(){
    this.dataRecieved.emit(this.data);
  }

}
