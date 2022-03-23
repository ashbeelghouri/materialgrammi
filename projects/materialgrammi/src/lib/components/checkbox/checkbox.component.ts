import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() size = "m";
  @Input() theme = "primary";
  @Input() onDark = false;
  @Input() isSelected = false;
  @Input() class = "";


  @Output() isChecked = new EventEmitter();
  id = "";
  selected = this.isSelected;
  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.isChecked.emit(this.selected);
    this.selected = this.isSelected;
    this.id = "input-checkbox-" + this.service.makeid(10, "checkbox");
  }
  mainClasses() {
    let results = "";
    results += this.size == "s" ? "small" : this.size == "m" ? "medium" : "large";
    results += " " + this.theme;
    return results;
  }

  labelClass() {
    let results = "";
    results += this.onDark ? "lite" : "dark";
    results += this.selected ? " active" : "";
    return results;
  }

  toggleCheck() {
    this.selected = !this.selected;
    this.isChecked.emit(this.selected);
  }

}
