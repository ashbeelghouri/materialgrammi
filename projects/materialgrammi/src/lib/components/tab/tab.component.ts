import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() options: any = [];
  @Input() isVertical = true;
  @Input() bg = "";
  @Input() active = "";
  @Input() id = "";
  @Input() theme = "success";
  components: any = [];
  activeComponent = "";
  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    if (this.id == "") {
      this.id = this.service.makeid(10, "tab")
    }

    this.getComponents();

    if (this.active == "") {
      this.active = this.components[0];
    }

    this.service.registerTab(this.id, this.components, this.active);
    if(this.options && this.options[0] && this.options[0].widget){
      this.activateWidget(this.options[0].widget);
    }
    this.watchActive();
  }

  getComponents() {
    for (let i = 0; i < this.options.length; i++) {
      this.components.push(this.options[i].widget);
    }
  }

  watchActive(){
    this.service.watchTab(this.id).subscribe((res: string) => {
      this.activeComponent = res;
    });
  }

  activateWidget(widgetID: string) {
    this.service.openTab(this.id, widgetID);
  }

  mainClasses() {
    let classes = "";
    classes += this.isVertical ? "vertical" : "horizontal";
    classes += ` ${this.theme}`;
    return classes;
  }

  buttonClass(componentId:string){
    return this.activeComponent == componentId ? "active" : "";
  }

}
