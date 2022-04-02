import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

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
  code = `<mg-slideshow [perPage]="optionsApplied.perPage" id="example-slideshow" [gap]="optionsApplied.gap"
  [items]="optionsApplied.items" [heightAdjustment]="false" [maxHeight]="optionsApplied.maxHeight"
  [showControls]="optionsApplied.showControls"></mg-slideshow>

<mg-slideshow-v2 id="id">
  <mg-widget type="slideshowv2" id="wid-1-slide" parent="id">
      <h1 class="blue text-white">Slide 1</h1>
  </mg-widget>
  <mg-widget type="slideshowv2" id="wid-2-slide" parent="id">
      <h1 class="blue text-white">Slide 2</h1>
  </mg-widget>
  <mg-widget type="slideshowv2" id="wid-3-slide" parent="id">
      <h1 class="blue text-white">Slide 3</h1>
  </mg-widget>
  <mg-widget type="slideshowv2" id="wid-4-slide" parent="id">
      <h1 class="blue text-white">Slide 4</h1>
  </mg-widget>
  <mg-widget type="slideshowv2" id="wid-5-slide" parent="id">
      <h1 class="blue text-white">Slide 5</h1>
  </mg-widget>
</mg-slideshow-v2>
<mg-button taskType="slideshowV2" task="prev" target="id">Previous</mg-button>
<mg-button taskType="slideshowV2" task="next" target="id">Next</mg-button>`;

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
    showControls: true,
    slideV2Items: [
      "wid-1-slide",
      "wid-2-slide",
      "wid-3-slide",
      "wid-4-slide",
      "wid-5-slide"
    ]
  }

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Slideshow");
  }

}
