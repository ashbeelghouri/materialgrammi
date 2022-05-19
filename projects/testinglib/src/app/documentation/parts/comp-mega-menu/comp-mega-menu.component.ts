import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-mega-menu',
  templateUrl: './comp-mega-menu.component.html',
  styleUrls: ['./comp-mega-menu.component.css']
})
export class CompMegaMenuComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "id",
    allowed: "id of main menu",
    type: "string",
    default: "1",
    definition: ``
  }, {
    name: "menu",
    allowed: "[{name: string, id: string}]",
    type: "array of objects",
    default: "[]",
    definition: ``
  }];

  selector = "mg-megamenu";

  title = "Megamenu";
  code = `<mg-megamenu id="example-megamenu" [menu]="optionsApplied.menu">
  <mg-widget id="menu-link-01" parent="example-megamenu" type="megamenu">
      <p class="grey8 text-white pad-30">First Menu</p>
  </mg-widget>
  <mg-widget id="menu-link-02" parent="example-megamenu" type="megamenu">
      <p class="grey8 text-white pad-30">Second Menu</p>
  </mg-widget>
  <mg-widget id="menu-link-03" parent="example-megamenu" type="megamenu">
      <p class="grey8 text-white pad-30">Third Menu</p>
  </mg-widget>
  <mg-widget id="menu-link-04" parent="example-megamenu" type="megamenu">
      <p class="grey8 text-white pad-30">Fourth Menu</p>
  </mg-widget>
  <mg-widget id="menu-link-05" parent="example-megamenu" type="megamenu">
      <p class="grey8 text-white pad-30">Fifth Menu</p>
  </mg-widget>
</mg-megamenu>`;

  optionsApplied = {
    menu: [{
      name: "Menu Link 01",
      id: "menu-link-01"
    }, {
      name: "Menu Link 02",
      id: "menu-link-02"
    }, {
      name: "Menu Link 03",
      id: "menu-link-03"
    }, {
      name: "Menu Link 04",
      id: "menu-link-04"
    }, {
      name: "Menu Link 05",
      id: "menu-link-05"
    }]
  }

  outputOptions = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Megamenu");
  }

}
