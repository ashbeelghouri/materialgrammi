import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-slide-show',
  templateUrl: './comp-slide-show.component.html',
  styleUrls: ['./comp-slide-show.component.css']
})
export class CompSlideShowComponent implements OnInit {
  inputOptions = [{
    name: "perPage",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "widgetId",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "activePage",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "fullWidthSlide",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "play",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "timer",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "heightAdjustment",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "maxHeight",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "showControls",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "gap",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "items",
    allowed: "[``]",
    type: "array of html",
    default: "[ ]"
  }];

  selector = "mg-slideshow";

  title = "Slideshow";
  code = `<mg-card>
            <p class="blue pad-10 text-grey1">Lorem Ipsum</p>
          </mg-card>`;

  optionsApplied = {
    items: [
      `<img src='https://picsum.photos/300/300?random=1' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=2' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=3' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=4' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=5' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=6' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=7' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=8' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=9' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=10' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=12' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=13' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=14' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=15' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=16' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=17' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=18' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=19' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=20' class='img img-responsive' />`,
      `<img src='https://picsum.photos/300/300?random=21' class='img img-responsive' />`
    ],
    gap: 1,
    perPage: 4,
    maxHeight: 230,
    showControls: true
  }

  outputOptions = [];

  constructor() { }

  ngOnInit(): void {
  }

}
