import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-component',
  templateUrl: './comp-component.component.html',
  styleUrls: ['./comp-component.component.css']
})
export class CompComponentComponent implements OnInit {
  inputOptions = [{
    name: "size",
    allowed: "n | s | m | l | xl",
    type: "string",
    default: "n"
  }];

  selector = "mg-component";

  title = "Component";

  code = `<mg-component size="s">
  <p class="pad-10 grey2">Simple TEXT in the component of size small (s)</p>
</mg-component>
<mg-component size="m">
  <p class="pad-10 grey2">Simple TEXT in the component of size medium (m)</p>
</mg-component>
<mg-component size="l">
  <p class="pad-10 grey2">Simple TEXT in the component of size large (l)</p>
</mg-component>`;

  optionsApplied = {}

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
