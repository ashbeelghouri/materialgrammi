import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() theme = "primary";
  @Input() fStyle = "control";
  // control | material
  @Input() label = "Input Value";
  @Input() placeholder = "";
  @Input() control: FormControl = new FormControl('');
  @Input() type = "text";
  @Input() onDark = false;
  @Input() class = "";
  @Output() value = new EventEmitter<FormControl>();
  @Output() isFocused = new EventEmitter();
  @Output() keyup = new EventEmitter();
  @Input() textValue = "";
  @Input() rounded = false;

  @Input() info = {
    type: "success",
    msg: ""
  };

  @ViewChild('inputElement') private inputElem!: ElementRef;

  active = false;
  focused = false;
  input_placeholder = this.fStyle == "control" && this.placeholder != "" ? this.placeholder : "";
  
  constructor() { }

  ngOnInit(): void {
    this.input_placeholder = this.fStyle == "control" && this.placeholder != "" ? this.placeholder : "";
    if (this.textValue != "") {
      this.active = true;
    }
  }

  onFocusIn() {
    this.focused = true;
    this.active = true;
    this.isFocused.emit(true);
  }

  onFocusOut() {
    this.focused = false;
    if (!(this.textValue.length > 0)) {
      this.active = false;
    }
    this.isFocused.emit(false);
  }

  onKeyUp(event: any) {
    this.textValue = event.target.value;
    this.control.setValue(event.target.value);
    this.keyup.emit(event);
    this.value.emit(this.control);
  }

  mainClasses() {
    let classes = ``;
    classes += ` ${this.active ? 'active' : ''}`;
    classes += this.onDark ? " on-dark" : " on-lite";
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
