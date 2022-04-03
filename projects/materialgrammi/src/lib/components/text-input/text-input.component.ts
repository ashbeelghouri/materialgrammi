import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputStyle } from '../../types';

@Component({
  selector: 'mg-text',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() theme = "primary";
  @Input() form: InputStyle = "control";
  @Input() dark = false;
  @Input() value = "";
  @Input() control: FormControl = new FormControl('');
  @Input() filled = false;
  @Output() data = new EventEmitter<FormControl>();
  @Output() isFocused = new EventEmitter<boolean>();
  @Output() keyup = new EventEmitter<string>();
  @Input() info = {
    type: "success",
    msg: ""
  };
  @ViewChild('inputElementText') private inputElem!: ElementRef;
  active = false;
  focused = false;
  constructor() { }

  ngOnInit(): void {
  }
  onFocusIn() {
    this.active = true;
    this.focused = true;
    this.isFocused.emit(this.active);
  }

  onFocusOut() {
    this.focused = false;
    if (!(this.value.length > 0)) {
      this.active = false;
    }
    this.isFocused.emit(this.active);
  }

  onKeyUp(event: any) {
    this.value = event.target.value;
    this.control.setValue(event.target.value);
    this.keyup.emit(this.value);
    this.data.emit(this.control);
  }

  mainClasses() {
    let classes = ``;
    classes += ` ${this.active ? 'active' : ''}`;
    classes += this.dark ? " on-dark" : " on-lite";
    classes += this.form === "control" ? (this.filled ? " filled" : " outline") : "";
    return classes;
  }

  labelClick(){
    this.inputElem.nativeElement.focus();
  }

  infoClasses(){
    let classes = "";
    if(this.info.type === "error"){
      classes += "text-red";
    }else if(this.info.type === "success"){
      classes += "text-green";
    }else if(this.info.type === "info"){
      classes += "text-blue";
    }else if(this.info.type === "lite"){
      classes += "text-grey2";
    }else if(this.info.type === "dark"){
      classes += "text-grey8";
    }
    return classes;
  }
}
