import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-footer',
  templateUrl: './comp-footer.component.html',
  styleUrls: ['./comp-footer.component.css']
})
export class CompFooterComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "toBottom",
    allowed: "true | false",
    type: "boolean",
    default: "false",
    definition: ``
  }];

  selector = "mg-footer";

  title = "Footer";

  code = `<mg-footer>
  <div class="" slot="left-section">
      <a class="block">Link 1</a>
      <a class="block">Link 4</a>
      <a class="block">Link 7</a>
  </div>
  <div class="" slot="middle-section">
      <a class="block">Link 2</a>
      <a class="block">Link 5</a>
      <a class="block">Link 8</a>
  </div>
  <div class="" slot="right-section">
      <a class="block">Link 3</a>
      <a class="block">Link 6</a>
      <a class="block">Link 9</a>
  </div>
  <div class="" slot="left-bottom-section">
      <p>created using materialgrammi</p>
  </div>
  <div class="" slot="right-bottom-section">
      <p>copyrights &copy; 2022 materialgrammi.com</p>
  </div>
</mg-footer>`;

  optionsApplied = {}

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Footer");
  }

}
