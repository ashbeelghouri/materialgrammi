import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-card',
  templateUrl: './comp-card.component.html',
  styleUrls: ['./comp-card.component.css']
})
export class CompCardComponent implements OnInit {
  inputOptions = [{
    name: "class",
    allowed: "any css class",
    type: "string",
    default: ""
  }];

  selector = "mg-card";

  title = "Card";

  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {}

  outputOptions = [];


  constructor() { }

  ngOnInit(): void {
  }

}
