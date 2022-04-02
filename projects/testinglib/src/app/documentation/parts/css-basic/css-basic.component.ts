import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-css-basic',
  templateUrl: './css-basic.component.html',
  styleUrls: ['./css-basic.component.css']
})
export class CssBasicComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Basics");
  }

}
