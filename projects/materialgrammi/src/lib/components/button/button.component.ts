import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() clicked = new EventEmitter();
  @Input() taskType = "none";
  @Input() btnStyle = "solid";
  @Input() task = "open";
  @Input() target: any = "/";
  @Input() theme = "default";
  @Input() class = "";
  @Input() btnSize = "md";
  @Input() isBlock = false;
  @Input() round = false;
  @Input() allowMargin = true;
  @Input() link = "";
  @Input() allowShrink = true;
  @Input() options: any = {};


  @Input() isExternalLink = false;
  @Input() newTab = false;

  @Output() active = new EventEmitter();

  route = [""];
  buttonType = "none";
  buttonClasses = "";
  shrink = false;
  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {

    if (this.taskType != "link") {
      this.route = [""];
    } else {
      this.route = this.target;
    }

    if (this.isExternalLink && this.taskType == "link") {
      this.buttonType = "external";
    } else if (!this.isExternalLink && this.taskType == "link") {
      this.buttonType = "internal";
    } else {
      this.buttonType = "widget";
    }

  }

  isClicked() {
    this.clicked.emit(true);
    if (this.taskType == "modal") {
      this.modal();
    } else if (this.taskType == "offCanvas") {
      this.offCanvas();
    } else if (this.taskType == "slideShow") {
      this.slideShow();
    } else if (this.taskType == "wizard") {
      this.wizard();
    } else if (this.taskType == "collapse") {
      this.collapse();
    } else if (this.taskType == "overlay") {
      this.overlay();
    }
  }

  btnClasses() {
    this.buttonClasses = this.class + " " + this.theme;

    this.buttonClasses += ` ${this.btnSize}`;

    this.buttonClasses += this.shrink ? " shrink" : ""

    this.buttonClasses += this.isBlock ? ` btn-block` : ``;

    this.buttonClasses += this.btnStyle == "link" ? " link" : (this.btnStyle == "outline" ? " btn-outline" : "");

    this.buttonClasses += this.round ? " radius-5" : "";
    this.buttonClasses += this.allowMargin ? " marginR-5" : "";

    return this.buttonClasses;
  }

  collapse() {
    if (this.task == "open") {
      this.service.openCollapse(this.target);
      this.active.emit(true);
    } else if (this.task == "close") {
      this.service.closeCollapse(this.target);
      this.active.emit(false);
    }
  }

  wizard() {
    if (this.task == "next") {
      this.buttonClasses += this.options.next && !this.buttonClasses.includes("disable") ? " disable" : "";
      if (this.options.next) {
        this.service.wizardNextStep(this.target);
      }
    } else if (this.task == "previous") {
      this.buttonClasses += this.options.previous && !this.buttonClasses.includes("disable") ? " disable" : "";
      if (this.options.previous) {
        this.service.WizardPreviousStep(this.target);
      }
    }
  }

  mouseEnter() {
    if (this.taskType == "dropdown") {
      console.log("to trigger dropdown");
      this.service.openDropDown(this.target);
    }
  }

  mouseLeave() {
    this.mouseup();
    if (this.taskType == "dropdown") {
      this.service.closeDropDown(this.target);
    }
  }

  slideShow() {
    if (this.task == "play") {
      // this.slideShowService.play(this.target);
    } else if (this.task == "next") {
      // this.slideShowService.next(this.target);
    } else if (this.task == "previous") {
      // this.slideShowService.previous(this.target);
    } else {
      // this.slideShowService.pause(this.target);
    }
  }

  modal() {
    if (this.task == "open") {
      this.service.openModal(this.target);
      this.active.emit(true);
    } else {
      this.service.closeModal(this.target);
      this.active.emit(false);
    }
  }

  overlay() {
    if (this.task == "open") {
      console.log("opening target", this.target);
      this.service.openOverlay(this.target);
      this.active.emit(true);
    } else {
      this.service.closeOverlay(this.target);
      this.active.emit(false);
    }
  }

  offCanvas() {
    console.log("Task type is offcanvas");
    if (this.task == "open") {
      console.log("opening target", this.target);
      this.service.openCanvas(this.target);
      this.active.emit(true);
    } else {
      console.log("Closing the canvas");
      this.service.closeCanvas(this.target);
      this.active.emit(false);
    }
  }

  mousedown() {
    if (this.allowShrink) {
      this.shrink = true;
    }

  }

  mouseup() {
    if (this.allowShrink) {
      this.shrink = false;
    }
  }

}
