import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-css-helper',
  templateUrl: './css-helper.component.html',
  styleUrls: ['./css-helper.component.css']
})
export class CssHelperComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Helpers");
  }

}
