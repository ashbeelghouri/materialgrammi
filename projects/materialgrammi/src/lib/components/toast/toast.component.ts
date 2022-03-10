import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'mg-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnChanges {
  @Input() show = true;
  @Input() position = "bottom";
  @Input() theme = "dark";
  @Input() timeout = 4000;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.show) {
      this.setTimer();
    }
  }

  showToast() {
    return this.show ? "active " + this.theme + " toast-" + this.position : this.theme + " toast-" + this.position;
  }

  close() {
    this.show = false;
  }

  setTimer() {
    if (this.timeout !== 0) {
      var $this = this;
      setTimeout(function () {
        $this.show = !$this.show;
      }, $this.timeout);
    }
  }

}
