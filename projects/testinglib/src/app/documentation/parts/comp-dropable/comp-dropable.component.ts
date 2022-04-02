import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-dropable',
  templateUrl: './comp-dropable.component.html',
  styleUrls: ['./comp-dropable.component.css']
})
export class CompDropableComponent implements OnInit {
  inputOptions = [{
    name: "dropFiles",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }];

  selector = "mg-dropable";

  title = "Dropable";

  code = `<p>Do Cool stuff like updating the classes with dragable and dropable</p>
  <div class="row">
      <div class="col m3 l3 s3">
          <mg-dragable [draggable]="true" data="blue8 text-grey2">
              <div class="pad-10 blue8 outline-grey text-white margin-10">.blue8 .text-grey2</div>
          </mg-dragable>
      </div>
      <div class="col m3 l3 s3">
          <mg-dragable [draggable]="true" data="green8 text-grey2">
              <div class="pad-10 green8 outline-grey text-white margin-10">.green8 .text-grey2</div>
          </mg-dragable>
      </div>
      <div class="col m3 l3 s3">
          <mg-dragable [draggable]="true" data="yellow">
              <div class="pad-10 yellow outline-grey margin-10">.yellow</div>
          </mg-dragable>
      </div>
      <div class="col m3 l3 s3">
          <mg-dragable [draggable]="true" data="grey8 text-yellow3">
              <div class="pad-10 grey8 outline-grey text-yellow3 margin-10">.grey8 .text-yellow3</div>
          </mg-dragable>
  
      </div>
  </div>
  

  <mg-dropable (dataRecieved)="dataDropped($event)">
      <div class="pad-20 font-20 outline-grey" [ngClass]="dropped">This is dropable, drop from above colors to see the result class</div>
  </mg-dropable>`;

  optionsApplied = {}

  dropped:any = false;

  dataDropped(event: any){
    this.dropped = event;
  }
  

  outputOptions = [{
      name: "onEvent",
      type: "{ isDraggedOver: boolean, dragEntered: boolean, dragLeft: boolean, dropped: boolean }"
  }, {
      name: "dataRecieved",
      type: "data set by dragable : any"
  }];



  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Dropable");
  }

}
