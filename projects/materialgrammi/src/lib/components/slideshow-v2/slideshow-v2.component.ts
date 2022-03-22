import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-slideshow-v2',
  templateUrl: './slideshow-v2.component.html',
  styleUrls: ['./slideshow-v2.component.css']
})
export class SlideshowV2Component implements OnInit {
  @Input() items = ["wid-1-slide", "wid-2-slide", "wid-3-slide", "wid-4-slide", "wid-5-slide"];
  @Input() id = "";


  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.id = this.service.registerSlideShowv2(this.id, this.items);
  }

}
