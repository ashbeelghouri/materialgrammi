import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent implements OnInit {
  @Input() active = false;
  @Input() id = this.service.makeid(10, this.service.makeid(10, "offcanvas"));

  widgetID = "";


  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.close();
  }

  constructor( private service: MaterialgrammiService ) { }

  ngOnInit(): void {
    this.service.registerOffCanvas(this.id, this.active);
    this.watch();
  }

  mainClasses(){
    let results = "";
    results += this.active ? " active" : "";
    return results;
  }

  open(){
    this.service.openCanvas(this.id);
  }

  close() {
    this.service.closeCanvas(this.id);
  }

  watch(){
    this.service.watchCanvas(this.id).subscribe((data:boolean) => {
      this.active = data;
    });
  }



}
