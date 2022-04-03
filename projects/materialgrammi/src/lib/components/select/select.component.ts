import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Theme } from '../../types';

export interface Option {
  name: string,
  val: any
};

@Component({
  selector: 'mg-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Output() value = new EventEmitter();
  @Input() searchOpt: FormControl = new FormControl('');
  @Input() theme: Theme | string = "dark";
  @Input() selectTitle = "Select";
  @Input() selectType = "control";
  @Input() enableSearch = false;
  @Input() options: Option[] = [{
    name: "Option 01",
    val: "option_1"
  }, {
    name: "Option 02",
    val: "option_2"
  }, {
    name: "Option 03",
    val: "option_3"
  }, {
    name: "Option 04",
    val: "option_4"
  }, {
    name: "Option 05",
    val: "option_5"
  }];

  selectedOption = {
    name: "",
    val: ""
  };

  highlighted = "";

  optionsActive = false;

  titleDisplay = this.selectTitle;

  selectInput = new FormControl("");


  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.searchOpt.setValue("");
      this.optionsActive = false;
    }
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.searchOpt.setValue("");
    this.optionsActive = false;
  }

  toggleOptions() {
    this.optionsActive = !this.optionsActive;
  }

  optionsClasses() {
    let classes = ``;
    classes += this.optionsActive ? "active" : "";
    return classes;
  }

  selectOption(opt: any) {
    this.value.emit(opt.val);
    this.selectedOption = opt;
    this.titleDisplay = this.selectedOption ? this.selectedOption.name : this.selectTitle;
    this.selectInput.setValue(opt.val);
    this.toggleOptions();
  }

  isHighlighted(name:string){
    if(this.highlighted == name){
      return "highlighted";
    }else{
      return "";
    }
  }

  searchFromOptions(val:any){
    let enterPressed = false;
    if(val && val.code == "Enter" || val.key == "Enter"){
      enterPressed = true;
    }
    val = val.target.value;
    var opt:any = false;
    for(let i = 0; i < this.options.length; i++) {
      if(val.length > 0 && this.options[i].name.indexOf(val) > 1){
        this.highlighted = this.options[i].name;
        opt = this.options[i];
      }else if(val.length > 0 && this.options[i].val.indexOf(val) > 1){
        this.highlighted = this.options[i].name;
        opt = this.options[i];
      }
    }
    if(val.length < 1){
      this.highlighted = "";
    }
    if(enterPressed && this.highlighted.length > 0){
      this.searchOpt.setValue("");
      this.selectOption(opt);
    }
  }

  inputTheme(){
    if(["primary", "success", "danger", "dark", "info"].includes(this.theme)){
      return "lite";
    }else{
      return "dark";
    }
  }

}
