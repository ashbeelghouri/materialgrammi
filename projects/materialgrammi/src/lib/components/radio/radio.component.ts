import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mg-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() options:any = false;
  @Input() name: string = "opt";
  @Input() size: string = "s";
  @Input() isInline = true;
  @Input() theme:string = "primary";
  @Input() onDark: boolean = false;
  @Output() value = new EventEmitter<any>();

  selected = new FormControl("");
  constructor() { }

  ngOnInit(): void {
    this.selected.patchValue(this.options[0].value);
  }

  select(value:any){
    this.selected.patchValue(value)
    this.value.emit(this.selected);
  }

  mainClasses(){
    let classes = "";

    classes += this.theme;

    classes += this.isInline ? " radio-inline" : "";

    classes += this.size == "s" ? " radio-small" : (this.size == "m" ? " radio-medium" : (this.size == "l" ? "radio-large" : ""));

    return classes;
  }

  classesOnLabel(){
    let results = "";

    results += this.onDark ? "on-dark" : "on-lite";

    return results;
  }

}
