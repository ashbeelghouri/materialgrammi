import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  @Input() id = "1";
  @Input() show = false;
  @Input() class = "";

  @Output() active = new EventEmitter();

  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.service.registerCollapse(this.id, this.show);
    this.watch();
  }

  watch() {
    this.service.watchCollapse(this.id).subscribe((val: boolean) => {
      this.show = val;
      this.active.emit(val);
    });
  }

  close() {
    this.service.closeCollapse(this.id);
  }

  open() {
    this.service.openCollapse(this.id);
  }

  mainCollapseClasses() {
    let classes = ``;
    classes += this.show ? 'active' : '';
    return classes;
  }

}
