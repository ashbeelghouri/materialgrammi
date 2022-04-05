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

  @Output() data = new EventEmitter();

  selectedValues: any = [];
  openOptions = false;



  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.data.emit(this.selectedValues);
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.openOptions = false;
    }
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.openOptions = false;
  }
  

  toggleOptions(){
    this.openOptions = !this.openOptions;
  }

  closeOptions(){
    this.openOptions = false;
    console.log("Options close");
  }

  removeOptions(opt: any){
    this.selectedValues = this.selectedValues.filter((o:any)=>{
      return o !== opt;
    });
    this.data.emit(this.selectedValues);
  }

  selectValue(value: any){
    if((!this.allowDuplicates && !this.selectedValues.includes(value)) || this.allowDuplicates) {
      this.selectedValues.push(value);
    }

    this.data.emit(this.selectedValues);
  }

  mainClasses(){
    let classes = "";
    classes += this.theme;
    classes += this.openOptions ? " active" : "";
    return classes;
  }
  
}
