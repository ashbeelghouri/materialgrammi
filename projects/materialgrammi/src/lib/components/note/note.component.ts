import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() theme = "primary";
  @Input() alignCenter = false;
  constructor() { }

  ngOnInit(): void {
  }

}
