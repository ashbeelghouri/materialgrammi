import { Component, Input, OnInit, HostListener, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';

export interface multiOption {
  name?: string,
  value?: string
};

@Component({
  selector: 'mg-muliselect',
  templateUrl: './muliselect.component.html',
  styleUrls: ['./muliselect.component.css']
})
export class MuliselectComponent implements OnInit, OnChanges {
  @Input() theme = "warning";
  @Input() title = "multi select title";
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

  @Output() data = new EventEmitter();

  selectedValues: any = [];
  selectedOptions: any = [];
  openOptions = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.data.emit(this.selectedValues);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
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
    console.log("Options close");
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

    this.data.emit(this.selectedValues);
  }

  mainClasses() {
    let classes = "";
    classes += this.theme;
    classes += this.openOptions ? " active" : "";
    return classes;
  }

}
