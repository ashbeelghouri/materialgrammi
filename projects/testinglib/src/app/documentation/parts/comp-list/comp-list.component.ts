import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.css']
})
export class CompListComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "items",
    allowed: "[`string here` ...`]",
    type: "array of string",
    default: "[ ]"
  }];

  selector = "mg-list";

  title = "List";

  code = `<mg-list [items] = "optionsApplied.listitems" [theme]="optionsApplied.theme"></mg-list>`;

  optionsApplied = {
    listitems: [
      `This is simple output`,
      `<p>This is paragraph output</p>`,
      `<h1>This is h1 tag</h1>`
    ],
    theme: "lite"
  }

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
