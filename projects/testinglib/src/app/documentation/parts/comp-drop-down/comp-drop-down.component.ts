import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-drop-down',
  templateUrl: './comp-drop-down.component.html',
  styleUrls: ['./comp-drop-down.component.css']
})
export class CompDropDownComponent implements OnInit {
  inputOptions = [{
    name: "id",
    allowed: "",
    type: "string",
    default: "",
    definition: ``
  }, {
    name: "active",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }, {
    name: "position",
    allowed: "{horizontal: string<right | left>, vertical: string<top | bottom>}",
    type: "object",
    default: "{horizontal: right, vertical: bottom}",
    definition: ``
  }];

  selector = "mg-dropdown";

  title = "Dropdown";

  code = `<mg-button target="dropdown-example" taskType="dropdown" task="open">Open dropdown</mg-button>
  <mg-dropdown id="dropdown-example">
      <p class="pad-30 grey3">Content of dropdown</p>
  </mg-dropdown>`;

  optionsApplied = {}

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Dropdown");
  }

}
