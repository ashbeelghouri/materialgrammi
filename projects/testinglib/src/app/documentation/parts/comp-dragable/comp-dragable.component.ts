import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-dragable',
  templateUrl: './comp-dragable.component.html',
  styleUrls: ['./comp-dragable.component.css']
})
export class CompDragableComponent implements OnInit {
  inputOptions = [{
    name: "dragable",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "data",
    allowed: "any",
    type: "any",
    default: ""
  }];

  selector = "mg-dragable";

  title = "Dragable";

  code = `<div class="row">
  <div class="col m3 l3 s3">
      <mg-dragable [draggable]="true" data="First Dragable">
          <div class="pad-10 green1 outline-red margin-10">This is dragable <p>Data is: "First Dragable"</p></div>
      </mg-dragable>
  </div>
  <div class="col m3 l3 s3">
      <mg-dragable [draggable]="true" data="2nd Dragable">
          <div class="pad-10 green1 outline-red margin-10">This is dragable <p>Data is: "2nd Dragable"</p></div>
      </mg-dragable>
  </div>
  <div class="col m3 l3 s3">
      <mg-dragable [draggable]="true" data="3rd Dragable">
          <div class="pad-10 green1 outline-red margin-10">This is dragable <p>Data is: "3rd Dragable"</p></div>
      </mg-dragable>
  </div>
  <div class="col m3 l3 s3">
      <mg-dragable [draggable]="true" data="4th Dragable">
          <div class="pad-10 green1 outline-red margin-10">This is dragable <p>Data is: "4th Dragable"</p></div>
      </mg-dragable>

  </div>
</div>


<mg-dropable (dataRecieved)="dataDropped($event)">
  <div class="pad-20 yellow">This is dropable</div>
</mg-dropable>

<div class="shadow-1 pad-10 marginT-10">
  <h4>Results</h4>
  <p class="text-grey7">Data Transffered from dragable</p> 
  {{dropped}}
</div>`;

  optionsApplied = {}

  dropped:any = false;

  dataDropped(event: any){
    this.dropped = event;
  }

  outputOptions = [{
    name: "onEvent",
    type: "{ isInDragMode: boolean }"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
