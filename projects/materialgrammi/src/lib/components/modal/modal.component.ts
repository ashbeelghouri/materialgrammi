import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() show = false;
  @Input() id = "0";
  @Input() position = "top";
  @Input() modalSize = "md";
  @Input() overlayClass = "grey8";

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.close();
  }

  constructor( private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.service.registerModal(this.id, this.show);
    this.subscribeToModal();
  }

  subscribeToModal() {
    this.service.watchModal(this.id).subscribe((val:any) => {
      this.show = val;
    })
  }

  close() {
    this.service.closeModal(this.id);
  }

  mainModelClasses() {
    let classes = "";

    classes += `${this.show ? 'active' : ''}`;

    return classes;
  }

  overlayClasses() {

    let classes = "";

    classes += `${this.show ? 'active' : ''}`;
    classes += ` ${this.overlayClass}`;

    return classes;
  }


}
