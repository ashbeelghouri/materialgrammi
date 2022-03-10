import { Component, OnInit } from '@angular/core';

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
    default: "dark"
  }, {
    name: "alignCenter",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }];

  selector = "mg-note";

  title = "Note";
  code = `<mg-note>
  This is a simple note
</mg-note>`;

  optionsApplied = {}

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
