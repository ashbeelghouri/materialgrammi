import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mg-fixer',
  templateUrl: './fixer.component.html',
  styleUrls: ['./fixer.component.css']
})
export class FixerComponent implements OnInit, OnChanges {
  @Input() active = false;
  @Input() x = "left";
  @Input() y = "top";

  @Input() class = "";

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  mainClasses(){
    let classes = this.class;
    if(this.y != "center" || this.x != "center"){
      classes += " " + this.y;
      classes += " " + this.x;
    }else{
      classes += " center-center";
    }
    
    return classes;
  }

}
