import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-note',
  templateUrl: './comp-note.component.html',
  styleUrls: ['./comp-note.component.css']
})
export class CompNoteComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "alignCenter",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }];

  selector = "mg-note";

  title = "Note";
  code = `<mg-note>
  This is a simple note
</mg-note>`;

  optionsApplied = {}

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Note");
  }

}
