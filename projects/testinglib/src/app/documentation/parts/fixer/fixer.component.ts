import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-fixer',
  templateUrl: './fixer.component.html',
  styleUrls: ['./fixer.component.css']
})
export class FixerComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Fixer");
  }

  inputOptions = [{
    name: "x",
    allowed: "left | center | right",
    type: "string",
    default: "left"
  }, {
    name: "y",
    allowed: "top | center | bottom",
    type: "string",
    default: "top"
  }, {
    name: "class",
    allowed: "any css class",
    type: "string",
    default: ""
  }, {
    name: "active",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }];

  selector = "mg-fixer";

  title = "Fixer";
  code = `<div class="row">
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <p>Position X</p>
          <mg-select theme="lite" [options]="otherOptions.x" (value)="handleInput($event, 'x')"></mg-select>
      </div>

  </div>
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <p>Position Y</p>
          <mg-select theme="lite" [options]="otherOptions.y" (value)="handleInput($event, 'y')"></mg-select>
      </div>
  </div>
  <div class="col m4 l4 s12">
      <div class="pad-5">
          <p>Status</p>
          <mg-select theme="lite" [options]="otherOptions.active" (value)="handleInput($event, 'active')"></mg-select>
      </div>
  </div>
</div>
<mg-fixer [class]="optionsApplied.class" [x]="optionsApplied.x" [y]="optionsApplied.y"
  [active]="optionsApplied.active">
  <p>I am fixed</p>
</mg-fixer>`;

  otherOptions = {
    x: [
      { name: "left", val: "left" },
      { name: "right", val: "right" },
      { name: "center", val: "center" }
    ],
    y: [
      { name: "top", val: "top" },
      { name: "bottom", val: "bottom" },
      { name: "center", val: "center" }
    ],
    active: [
      { name: "show", val: true },
      { name: "hide", val: false }
    ]
  };

  optionsApplied = {
    x: "left",
    y: "top",
    active: false,
    class: "pad-10 grey8 text-grey1 shadow-1 margin-5"
  }

  handleInput(event: any, type: string) {
    if (type === "x") {
      this.optionsApplied.x = event;
    } else if (type === "y") {
      this.optionsApplied.y = event;
    } else if (type === "active") {
      this.optionsApplied.active = event;
    }
  }


  outputOptions = [];

}
