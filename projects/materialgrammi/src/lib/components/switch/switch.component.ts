import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() options = {
    left: "Forget i logged in?",
    right: "Keep me logged in?"
  };
  @Input() type = "filled"; /* filled | empty */
  @Input() theme = "primary";
  @Input() size = "s";
  @Input() showChoices = true;

  @Input() onDark = false;

  @Input() selected = true;

  @Output() value = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  classesOnInput() {
    let results = "";
    results += this.type == "filled" ? "switch-filled" : "empty-switch";

    results += " " + this.theme;

    results += this.size == "s" ? " switch-small" :
      (this.size == "m" ? " switch-medium" :
        (this.size == "l" ? " switch-large" : ""));

    return results;
  }

  toggleChoices() {
    this.selected = !this.selected;
    this.value.emit(this.selected);
  }

  leftClasses() {
    let results = "";
    results += this.onDark ? 'on-dark' : 'on-lite';
    results += !this.selected ? " active" : "";
    return results;
  }

  rightClasses() {
    let results = "";
    results += this.onDark ? 'on-dark' : 'on-lite';
    results += this.selected ? " active" : "";
    return results;
  }

}
