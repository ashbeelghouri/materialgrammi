import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-css-typography',
  templateUrl: './css-typography.component.html',
  styleUrls: ['./css-typography.component.css']
})
export class CssTypographyComponent implements OnInit {
  code = {
    traditional: `    <h1>This is h1 Tag</h1>
    <h2>This is h2 Tag</h2>
    <h3>This is h3 Tag</h3>
    <h4>This is h4 Tag</h4>
    <h5>This is h5 Tag</h5>
    <h6>This is h6 Tag</h6>
    <p>This is simple pagaraph tag</p>`,
    fonts: `    <p class="font-12">Font 12</p>
    <p class="font-15">Font 15</p>
    <p class="font-20">Font 20</p>
    <p class="font-25">Font 25</p>
    <p class="font-30">Font 30</p>
    <p class="font-50">Font 50</p>
    <p class="font-70">Font 70</p>
    <p class="font-100">Font 100</p>
    <p class="font-150">Font 150</p>
    <p class="font-200">Font 200</p>`,
    colors: `<div>
    <p class="text-blue marginB-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text-green marginB-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text-red marginB-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text-grey8 marginB-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="text-amber marginB-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`,
    placement: `    <h4 class="padT-10">Text Center</h4>
    <p class="text-center marginV-10 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h4 class="padT-10">Text Justify</h4>
    <p class="text-justify marginV-10 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h4 class="padT-10">Text Right</h4>
    <p class="text-right marginV-10 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h4 class="padT-10">Text Left</h4>
    <p class="text-left marginV-10 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    decoration: `        <p class="bold marginV-5 font-30">bold Text</p>
    <p class="italic marginV-5 font-30">italic Text</p>
    <p class="underline marginV-5 font-30">underline Text</p>
    <p class="lineThrough marginV-5 font-30">lineThrough Text</p>
    <p class="overline marginV-5 font-30">overline Text</p>`,
    heading: `    <p class="heading-1">Heading 1</p>
    <p class="heading-2">Heading 2</p>
    <p class="heading-3">Heading 3</p>
    <p class="heading-4">Heading 4</p>
    <p class="heading-5">Heading 5</p>
    <p class="heading-6">Heading 6</p>`
  };
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Typography");
  }

}
