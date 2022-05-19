import { Component, OnInit } from '@angular/core';
import { MaterialgrammiComponent, MaterialgrammiService, SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-notifications',
  templateUrl: './comp-notifications.component.html',
  styleUrls: ['./comp-notifications.component.css']
})
export class CompNotificationsComponent implements OnInit {
  inputOptions = [{
    name: "position",
    allowed: "topLeft | topRight | topCenter | centerLeft | centerCenter | centerRight | bottomLeft | bottomCenter | bottomRight",
    type: "string",
    default: "topLeft",
    definition: ``
  }, {
    name: "close",
    allowed: "any html string",
    type: "string",
    default: `<i class="fas fa-times"></i>`,
    definition: ``
  }];

  selector = "mg-notification";

  title = "Notification";
  code = `<div class="row">
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <mg-input label="message" textValue="Simple Message" (keyup)="setMessage($event)"></mg-input>
      </div>
  </div>
  <div class="col m2 l2 s12">
      <div class="pad-5">
          <mg-input label="timeout" type="number" textValue="1000" (keyup)="setTimeout($event)"></mg-input>
      </div>
  </div>
  <div class="col m3 l3 s12">
      <div class="pad-5">
          <p>position</p>
          <mg-select [options]="selectOptions.position" (value)="setPosition($event)"></mg-select>
      </div>
  </div>
  <div class="col m2 l2 s12">
      <div class="pad-5">
          <p>size</p>
          <mg-select [options]="selectOptions.size"></mg-select>
      </div>
  </div>
  <div class="col m1 l1 s12">
      <div class="pad-5">
          <br/>
          <mg-button (clicked)="generateNotification()">Generate</mg-button>
      </div>
  </div>
</div>

<ng-container *ngFor="let pos of selectOptions.position">
  <mg-notifications [position]="pos.val"></mg-notifications>
</ng-container>

`;

  optionsApplied = {
    options: {
      size: "",
      timer: 1000
    },
    position: "",
    message: ""
  }

  outputOptions = [];

  selectOptions = {
    size: [{
    name: "small",
    val: "s"
  }, {
    name: "medium",
    val: "m"
  }, {
    name: "large",
    val: "l"
  }],
  position: [{
    name: "top-left",
    val: "topLeft"
  }, {
    name: "top-center",
    val: "topCenter"
  }, {
    name: "top-right",
    val: "topRight"
  }, {
    name: "center-left",
    val: "centerLeft"
  }, {
    name: "center-center",
    val: "centerCenter"
  }, {
    name: "center-right",
    val: "centerRight"
  }, {
    name: "bottom-left",
    val: "bottomLeft"
  }, {
    name: "bottom-center",
    val: "bottomCenter"
  }, {
    name: "bottom-right",
    val: "bottomRight"
  }]
};

  generateNotification(){
    console.log("Clicked");
    this.optionsApplied.options.size = this.size;
    this.optionsApplied.options.timer = this.timeout;
    this.optionsApplied.position = this.position;
    this.optionsApplied.message = this.message;
    this.mgService.addNotification(this.optionsApplied.position, this.optionsApplied.message, this.optionsApplied.options);
  }

  message = "Simple Message";
  timeout = 1000;

  setMessage(event:any){
    this.message = event.target.value;
  }
  setTimeout(event:any){
    this.timeout = event.target.value;
  }

  position = "topRight";
  size = "s";
  

  setPosition(event:any){
    this.position = event;
  }
  setSize(event:any){
    this.size = event;
  }

  constructor(private mgService: MaterialgrammiService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Notifications");
  }

}
