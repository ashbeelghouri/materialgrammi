import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-collapse',
  templateUrl: './comp-collapse.component.html',
  styleUrls: ['./comp-collapse.component.css']
})
export class CompCollapseComponent implements OnInit {
  inputOptions = [{
    name: "id",
    allowed: "",
    type: "string",
    default: "1"
  }, {
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }];

  selector = "mg-collapse";

  title = "Collapse";


  code = `  <mg-button taskType="collapse" target="collapse-example-1" task="open">Open Collapse</mg-button>
  <mg-collapse id="collapse-example-1">
      <div class="pad-10 grey3">
          <p>This is the content in the collapse</p>
          <mg-button theme="danger" taskType="collapse" target="collapse-example-1" task="close">Close</mg-button>
      </div>
  </mg-collapse>`;

  optionsApplied = {}

  outputOptions = [{
    name: "active",
    type: "boolean"
  }];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Collapse");
  }

}
