import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-offcanvas',
  templateUrl: './comp-offcanvas.component.html',
  styleUrls: ['./comp-offcanvas.component.css']
})
export class CompOffcanvasComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "isActive",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "id",
    allowed: "string",
    type: "string",
    default: "1"
  }];

  selector = "mg-offcanvas";

  title = "Offcanvas";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
