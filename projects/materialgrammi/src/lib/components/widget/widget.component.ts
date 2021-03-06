import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit, OnChanges, AfterContentChecked {
  @Input() id = "general-widget-1";
  @Input() parent = "general-parent-1";
  @Input() type = "general";
  @Input() options: any = false;
  @Input() status = false;
  @Input() standalone = false;
  @Input() class="";
  @Output() triggered = new EventEmitter();

  settings = {
    header: {
      always: false
    },
    footer: {
      always: false
    }
  };

  myClasses = "";
  constructor(private mainService: MaterialgrammiService, private cd: ChangeDetectorRef) { }



  ngOnInit(): void {
    this.init();
    this.myClasses = this.class;
  }

  ngOnChanges(): void {
    this.init();
    this.myClasses = this.class;
  }

  ngAfterContentChecked(): void {
    this.myClasses = this.class;
  }

  init() {
    if (this.standalone) {
      this.registerWidget();
      if (this.status) {
        this.openWidget();
      } else {
        this.closeWidget();
      }
    }
    this.watch();
    this.watchOptions();
  }

  setOptions() {
    if (this.options && this.options.header.always) {
      this.settings.header.always = true;
    }
    if (this.options && this.options.footer.always) {
      this.settings.footer.always = true;
    }
  }

  registerWidget() {
    this.mainService.registerWidget(this.id, this.type, this.parent, this.options);
    if (this.status) {
      this.openWidget();
    }
  }

  openWidget() {
    this.mainService.openWidget(this.id, this.type, this.parent);
  }

  closeWidget() {
    this.mainService.closeWidget(this.id, this.type, this.parent);
  }

  watch() {
    if (this.mainService.widgetExists(this.id, this.type, this.parent)) {
      this.mainService.watchWidget(this.id, this.type, this.parent).subscribe((data: any) => {
        this.status = data;
        this.triggered.emit({
          status: this.status,
          options: this.options
        });
      });
    }
  }

  watchOptions() {
    if (this.mainService.widgetExists(this.id, this.type, this.parent)) {
      this.mainService.watchWidget(this.id, this.type, this.parent).subscribe((data: any) => {
        this.options = data;
      });
    }
  }
}
