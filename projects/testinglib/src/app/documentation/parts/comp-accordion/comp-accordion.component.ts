import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-accordion',
  templateUrl: './comp-accordion.component.html',
  styleUrls: ['./comp-accordion.component.css']
})
export class CompAccordionComponent implements OnInit {

  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "items",
    allowed: "[{title: string, description: string, active: boolean}]",
    type: "array",
    default: "[ ]"
  }];

  selector = "mg-accordion";

  title = "Accordion";

  exmaple = [{
    title: "Accordion panel 01",
    description: `
      <p class="pad-20">Hi this is panel 01</p>
    `,
    active: true
  }, {
    title: "Accordion panel 02",
    description: `
      <p class="pad-20">Hi this is panel 02</p>
    `,
    active: false
  }, {
    title: "Accordion panel 03",
    description: `
      <p class="pad-20">Hi this is panel 03</p>
    `,
    active: false
  }];

  code = `<mg-accordion theme="info" [items]="exmaple"></mg-accordion>`;


  optionsApplied = {
    example: this.exmaple
  }

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
