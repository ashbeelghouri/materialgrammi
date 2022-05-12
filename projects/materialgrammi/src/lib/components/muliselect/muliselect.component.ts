import { Component, Input, OnInit, HostListener, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface multiOption {
  name: string,
  value: string
};

@Component({
  selector: 'mg-muliselect',
  templateUrl: './muliselect.component.html',
  styleUrls: ['./muliselect.component.css']
})
export class MuliselectComponent implements OnInit, OnChanges {
  @Input() theme = "primary";
  @Input() title = "multi select title";
  @Input() searchOpt: FormControl = new FormControl('');
  @Input() placeholder = "click here";
  @Input() removeIcon = `<i class="fas fa-times"></i>`;
  @Input() options: multiOption[] = [{
    name: "option 001",
    value: "value of option 1"
  }, {
    name: "option 002",
    value: "value of option 2"
  }, {
    name: "option 003",
    value: "value of option 3"
  }, {
    name: "option 004",
    value: "value of option 4"
  }];
  @Input() allowDuplicates: boolean = false;
  @Input() deleteIcon = `<i class="fas fa-times"></i>`;
  @Input() viewType = "option";
  @Input() enableSearch = false;

  @Output() data = new EventEmitter();

  selectedValues: any = [];
  selectedOptions: any = [];
  openOptions = false;
  highlighted = "";
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.data.emit(this.selectedValues);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.searchOpt.setValue("");
      this.openOptions = false;
    }
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.openOptions = false;
  }


  toggleOptions() {
    this.openOptions = !this.openOptions;
  }

  closeOptions() {
    this.openOptions = false;
  }

  valueFromOption(option: any){
    for(let op of this.options) {
      if(op.name === option) {
        return op.value;
      }
    }
    return false;
  }

  removeOptions(opt: any) {
    if (this.viewType === "option") { 
      let opValue = this.valueFromOption(opt);
      if(opValue) {
        this.selectedValues = this.selectedValues.filter((o: any) => {
          return o !== opValue;
        });
      }
      this.selectedOptions = this.selectedOptions.filter((o: any) => {
        return o !== opt;
      });
    }else {
      this.selectedValues = this.selectedValues.filter((o: any) => {
        return o !== opt;
      });
    }
    this.data.emit(this.selectedValues);
  }

  selectValue(value: any, name: any) {
    if ((!this.allowDuplicates && !this.selectedValues.includes(value)) || this.allowDuplicates) {
      this.selectedValues.push(value);
      this.selectedOptions.push(name);
    }
    this.closeOptions()
    this.data.emit(this.selectedValues);
  }

  mainClasses() {
    let classes = "";
    classes += this.theme;
    classes += this.openOptions ? " active" : "";
    return classes;
  }

  searchFromOptions(val:any){
    let enterPressed = false;
    if(val && val.code == "Enter" || val.key == "Enter"){
      enterPressed = true;
    }
    val = val.target.value;
    var opt:any = false;
    for(let i = 0; i < this.options.length; i++) {
      if(val.length > 0 && this.options && this.options[i] && this.options[i].name && this.options[i].name.indexOf(val) > 1){
        this.highlighted = this.options[i].name;
        opt = this.options[i];
      }else if(val.length > 0 && this.options[i].value.indexOf(val) > 1){
        this.highlighted = this.options[i].name;
        opt = this.options[i];
      }
    }
    if(val.length < 1){
      this.highlighted = "";
    }
    if(enterPressed && this.highlighted.length > 0){
      this.searchOpt.setValue("");
      this.selectValue(opt.value, opt.name);
    }
  }

  inputTheme(){
    if(["primary", "success", "danger", "dark", "info"].includes(this.theme)){
      return "lite";
    }else{
      return "dark";
    }
  }

  isHighlighted(name: string){
    if(this.highlighted == name){
      return "highlighted";
    }else{
      return "";
    }
  }

}
