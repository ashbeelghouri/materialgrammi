import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-overlay',
  templateUrl: './comp-overlay.component.html',
  styleUrls: ['./comp-overlay.component.css']
})
export class CompOverlayComponent implements OnInit {
  inputOptions = [{
    name: "bgClass",
    allowed: "css class",
    type: "string",
    default: "grey1"
  }, {
    name: "overlayClass",
    allowed: "css class",
    type: "string",
    default: "bg-b-3"
  }, {
    name: "offSize",
    allowed: "1 | 2 | 3 | 4 | 5",
    type: "string",
    default: "1"
  }, {
    name: "canvasPosition",
    allowed: "top | bottom | right | left",
    type: "string",
    default: "top"
  }, {
    name: "widgetId",
    allowed: "string",
    type: "string",
    default: "1"
  }, {
    name: "active",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }];

  selector = "mg-overlay";

  title = "Overlay";
  code = `<mg-button target="example-overlay" taskType="overlay" task="open">open overlay</mg-button>
  <mg-overlay id="example-overlay" canvasPosition="bottom">
      <p class="pad-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <div class="pad-20 text-right">
          <mg-button theme="danger" target="example-overlay" taskType="overlay" task="close">Close overlay</mg-button>
      </div>
  </mg-overlay>`;

  optionsApplied = {}

  outputOptions = [{
    name: "isClosed",
    type: "boolean"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
