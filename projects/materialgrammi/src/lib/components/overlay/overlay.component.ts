import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  @Input() bgClass = "grey1";
  @Input() overlayClass = "bg-b-3";
  @Input() offSize: string = "1";
  @Input() canvasPosition: string = "top";
  @Input() id = "1";
  @Input() active = false;

  @Output() isClosed = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.close();
  }

  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.service.registerOverlay(this.id, this.active);
    this.subscribe();
  }

  activator() {
    return this.active ? "active" : "";
  }

  subscribe() {
    this.service.watchOverlay(this.id).subscribe((data:any) => {
      this.active = data;
    });
  }

  mainClasses() {
    let classes = "";

    classes += ` ${this.activator()}`;

    classes += ` ${this.bgClass}`;

    return classes;
  }

  overlayClasses() {
    let classes = "";
    classes += this.active ? 'active' : '';
    classes += ` ${this.overlayClass}`;
    return classes;
  }

  close() {
    this.service.closeOverlay(this.id);
    this.isClosed.emit(true);
  }

}
