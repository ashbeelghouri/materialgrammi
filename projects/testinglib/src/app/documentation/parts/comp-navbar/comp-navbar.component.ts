import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-navbar',
  templateUrl: './comp-navbar.component.html',
  styleUrls: ['./comp-navbar.component.css']
})
export class CompNavbarComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark"
  }, {
    name: "spaceAround",
    allowed: "true | false",
    type: "boolean",
    default: "true"
  }, {
    name: "onSmallMenuButton",
    allowed: "html",
    type: "string",
    default: "="
  }, {
    name: "isFixed",
    allowed: "true | false",
    type: "boolean",
    default: "false"
  }, {
    name: "partitionType",
    allowed: "1:1 | 1:2 | 2:1",
    type: "string",
    default: "2:1"
  }, {
    name: "navData",
    allowed: "{brand: {name: html, link: string} , left: {navType: input | links, data: {if input(btn: boolean, name: html, placeholder: string, id: string) | if links(name: html, link: string, active: boolean | type: dropdown -> links: [links])}}} - same for the right",
    type: "object",
    default: "{}"
  }];

  selector = "mg-navbar";

  title = "Navbar";
  code = `<mg-navbar [navData]="optionsApplied.navData" [theme]="optionsApplied.theme"></mg-navbar>`;

  optionsApplied = {
    navData: {
      brand: {
        name: `Simple <B>Navbar</B>`,
        link: '/'
      },
      left: {
        navType: "input",
        data: {
          btn: true,
          name: `<i class="fas fa-search"></i>`,
          placeholder: "search",
          id: "navbar-search"
        }
      },
      right: {
        navType: "links",
        data: [{
          name: `<i class="fas fa-home"></i>`,
          link: "",
          active: false
        }, {
          name: `<i class="fas fa-book"></i>`,
          link: "",
          active: true
        }]
      }
    },
    theme: "dark"
  }

  outputOptions = [{
    name: "searchedText",
    type: "string"
  }];


  example_code_2 = `<mg-navbar>
  <div slot="brand">Brand</div>
  <div slot="left-nav">Left</div>
  <div slot="right-nav">Right</div>
</mg-navbar>`;

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Navbar");
  }

}
