import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-tab',
  templateUrl: './comp-tab.component.html',
  styleUrls: ['./comp-tab.component.css']
})
export class CompTabComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "success"
  }, {
    name: "options",
    allowed: "[]",
    type: "array of objects",
    default: "[ ]"
  }, {
    name: "isVertical",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "bg",
    allowed: "css class",
    type: "string",
    default: ""
  }, {
    name: "active",
    allowed: "widgetid",
    type: "string",
    default: "1"
  }, {
    name: "id",
    allowed: "string",
    type: "string",
    default: "1"
  }];

  selector = "mg-tab";

  title = "Tab";
  code = `<mg-tab [options]="optionsApplied.options" [isVertical]="true" theme="lite" id="example-tab">
  <mg-widget [id]="optionsApplied.options[0].widget" parent="example-tab" type="tab">
      <div class="pad-10 grey1">
          <h2>Tab Content 01</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </mg-widget>
  <mg-widget [id]="optionsApplied.options[1].widget" parent="example-tab" type="tab">
      <div class="pad-10">
          <h2>Tab Content 02</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
  </mg-widget>
</mg-tab>`;

  optionsApplied = {
    options: [{
      name: `Tab 01`,
      widget:  "example-tab-1"
    }, {
      name: `Tab 02`,
      widget: "example-tab-2"
    }]
  }

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Tab");
  }

}
