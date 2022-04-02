import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-toast',
  templateUrl: './comp-toast.component.html',
  styleUrls: ['./comp-toast.component.css']
})
export class CompToastComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "position",
    allowed: "top | bottom | left | right",
    type: "string",
    default: "bottom"
  }, {
    name: "timeout",
    allowed: "number",
    type: "number",
    default: "4000"
  }];

  selector = "mg-toast";

  title = "Toast";
  code = `<mg-button theme="primary" (clicked)="optionsApplied.show()">Toast is <span class="marginL-5 pad-5 blue" [innerHtml]="show ? 'on' : 'off'"></span></mg-button>
  <mg-toast [show]="show">Hi, I am simple taost!></mg-toast>`;
  show = true;
  optionsApplied = {
    show: () => { 
      this.show = !this.show; 
      return this.show; 
    },
    showFunction: "function that will toggle the show, show = !show"
  }

  outputOptions = [];


  

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Toast");
  }

}
