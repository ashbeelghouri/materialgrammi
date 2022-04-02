import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-css-animation',
  templateUrl: './css-animation.component.html',
  styleUrls: ['./css-animation.component.css']
})
export class CssAnimationComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Animations");
  }

}
