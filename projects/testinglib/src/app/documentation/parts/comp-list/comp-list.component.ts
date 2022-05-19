import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

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
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "items",
    allowed: "[`string here` ...`]",
    type: "array of string",
    default: "[ ]",
    definition: ``
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

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | List");
  }

}
