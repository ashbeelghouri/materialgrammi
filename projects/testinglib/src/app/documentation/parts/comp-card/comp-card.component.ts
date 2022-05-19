import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-card',
  templateUrl: './comp-card.component.html',
  styleUrls: ['./comp-card.component.css']
})
export class CompCardComponent implements OnInit {
  inputOptions = [{
    name: "class",
    allowed: "any css class",
    type: "string",
    default: "",
    definition: ``
  }];

  selector = "mg-card";

  title = "Card";

  code = `<div class="row">
  <div class="col m3 l3 s12">
      <mg-card class="margin-5 pink radiusT-5">
          <mg-image class=" radiusT-5" src="https://picsum.photos/300/300?random=1"></mg-image>
          <h3 class="text-grey2 pad-5 padY-10">Title</h3>
          <p class="pad-5 text-grey1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate pariatur nihil vitae, tenetur ullam accusamus a, reiciendis ipsa omnis eligendi sint quam quia! Recusandae qui necessitatibus corrupti hic deserunt?</p>
          <div class="text-right">
              <mg-button class="pad-5" btnStyle="link" theme="lite">read more</mg-button>
          </div>
      </mg-card>
  </div>
  <div class="col m3 l3 s12">
      <mg-card class="margin-5 grey8 radiusT-5">
          <mg-image class=" radiusT-5" src="https://picsum.photos/300/300?random=4"></mg-image>
          <h3 class="text-grey2 pad-5 padY-10">Title</h3>
          <p class="pad-5 text-grey1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate pariatur nihil vitae, tenetur ullam accusamus a, reiciendis ipsa omnis eligendi sint quam quia! Recusandae qui necessitatibus corrupti hic deserunt?</p> 
          <div class="text-right">
              <mg-button class="pad-5" btnStyle="link" theme="lite">read more</mg-button>
          </div>
      </mg-card>
  </div>
  <div class="col m3 l3 s12">
      <mg-card class="margin-5 blue radiusT-5">
          <mg-image class=" radiusT-5" src="https://picsum.photos/300/300?random=2"></mg-image>
          <h3 class="text-grey2 pad-5 padY-10">Title</h3>
          <p class="pad-5 text-grey1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate pariatur nihil vitae, tenetur ullam accusamus a, reiciendis ipsa omnis eligendi sint quam quia! Recusandae qui necessitatibus corrupti hic deserunt?</p> 
          <div class="text-right">
              <mg-button class="pad-5" btnStyle="link" theme="lite">read more</mg-button>
          </div>
          
      </mg-card>
  </div>
  <div class="col m3 l3 s12">
      <mg-card class="margin-5 orange radiusT-5">
          <mg-image class=" radiusT-5" src="https://picsum.photos/300/300?random=3"></mg-image>
          <h3 class="text-grey2 pad-5 padY-10">Title</h3>
          <p class="pad-5 text-grey1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate pariatur nihil vitae, tenetur ullam accusamus a, reiciendis ipsa omnis eligendi sint quam quia! Recusandae qui necessitatibus corrupti hic deserunt?</p> 
          <div class="text-right">
              <mg-button class="pad-5" btnStyle="link" theme="lite">read more</mg-button>
          </div>
      </mg-card>
  </div>
</div>`;

  optionsApplied = {}

  outputOptions = [];


  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Card");
  }

}
