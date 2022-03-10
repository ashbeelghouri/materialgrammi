import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-color-pill',
  templateUrl: './color-pill.component.html',
  styleUrls: ['./color-pill.component.css']
})
export class ColorPillComponent implements OnInit {
  @Input() color: any  = [];
  @Input() name = "";

  pre = "";

  states = [
    "",
    "hover-",
    "text-",
    "text-hover-",
    "outline-",
    "outline-hover-"
  ];

  stateDescription = [
    "(color[shade-number])",
    "hover-(color[shade-number])",
    "text-(color[shade-number])",
    "text-hover-(color[shade-number])",
    "outline-(color[shade-number])",
    "outline-hover-(color[shade-number])"
  ];

  active = 0;

  description = "";

  timeout = setTimeout(function(){}, 1000);

  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.pre = this.states[this.active];
    this.description = this.stateDescription[this.active];
  }

  onClickChange(forced:boolean){
    if(!forced && this.active+1 <= this.states.length) {
      this.active++;
    }else {
      this.active = 0;
    }
    this.pre = this.states[this.active];
    this.description = this.stateDescription[this.active] ? this.stateDescription[this.active] : this.stateDescription[0];
  }

  copiedText = "";
  showToast = false;

  selected = "";

  copy(text: string){
    var $this = this;
    clearTimeout($this.timeout);
    this.copiedText = this.pre+text;
    this.selected = text;
    console.log();
    this.service.copyToClipboard(this.copiedText);
    this.showToast = true;
    this.timeout = setTimeout(function(){
      $this.showToast = false;
      $this.copiedText = "";
    }, 1000);
  }

}
