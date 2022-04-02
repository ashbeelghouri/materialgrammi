import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.css']
})
export class CssGridComponent implements OnInit {
  title_1 = "12 Column Grid";
  code_1 = `<div class="row font-12">
  <div class="col m12 l12 s12">
      <p class="pad-10 grey2 text-center">col m12 l12 s12</p>
  </div>
</div>
<div class="row font-12">
  <div class="col m6 l6 s6">
      <p class="pad-10 grey1 text-center">col m6 l6 s6</p>
  </div>
  <div class="col m4 l4 s4">
      <p class="pad-10 grey3 text-center">col m4 l4 s4</p>
  </div>
  <div class="col m2 l2 s2">
      <p class="pad-10 grey4 text-center">col m2 l2 s2</p>
  </div>
</div>
<div class="row font-12">
  <div class="col m7 l7 s7">
      <p class="pad-10 grey4 text-center">col m7 l7 s7</p>
  </div>
  <div class="col m5 l5 s5">
      <p class="pad-10 grey1 text-center">col m5 l5 s5</p>
  </div>
</div>
<div class="row font-12">
  <div class="col m1 l1 s1">
      <p class="pad-10 grey2 text-center">col m1 l1 s1</p>
  </div>
  <div class="col m3 l3 s3">
      <p class="pad-10 grey1 text-center">col m3 l3 s3</p>
  </div>
  <div class="col m8 l8 s8">
      <p class="pad-10 grey3 text-center">col m8 l8 s8</p>
  </div>
</div>`;


  images: string[] = [];

  sizes = [
    "300",
    "200",
    "100",
    "400",
    "150",
    "250",
    "350",
    "450"
  ];

  code_2 = `<div class="row masonary col-m-4 col-s-2 col-l-6 font-12">
  <div *ngFor="let img of images" class="pad-5">
      <mg-image [src]="img" [rounded]="true"></mg-image>
  </div>
</div>`;

  constructor(private seo: SeoService) { }

  rndm(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Grid");
    let size = "300x300";
    for(let i = 0; i < 20; i++){
      this.images.push(`https://source.unsplash.com/random/${size}`);
      size = `${this.sizes[this.rndm(0, this.sizes.length)]}x${this.sizes[this.rndm(0, this.sizes.length)]}`;
    }
  }

}
