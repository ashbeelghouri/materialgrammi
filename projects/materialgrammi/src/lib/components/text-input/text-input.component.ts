import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mg-text',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() theme = "dark";
  @Input() fStyle = "control";
  @Input() on_dark = false;
  @Input() label = "textarea input";
  @Input() control: FormControl = new FormControl('');
  @Output() value = new EventEmitter<FormControl>();
  @Output() isFocused = new EventEmitter<boolean>();
  @Output() keyup = new EventEmitter<string>();
  @ViewChild('inputElementText') private inputElem!: ElementRef;
  active = false;
  textValue = "";
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
    if (!(this.textValue.length > 0)) {
      this.active = false;
    }
    this.isFocused.emit(this.active);
  }

  onKeyUp(event: any) {
    this.textValue = event.target.value;
    this.control.setValue(event.target.value);
    this.keyup.emit(this.textValue);
    this.value.emit(this.control);
  }

  mainClasses() {
    let classes = ``;
    classes += ` ${this.active ? 'active' : ''}`;
    classes += this.on_dark ? " on-dark" : " on-lite";
    return classes;
  }

  labelClick(){
    this.inputElem.nativeElement.focus();
  }
}
