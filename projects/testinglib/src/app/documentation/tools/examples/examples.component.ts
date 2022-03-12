import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../../../../../materialgrammi/src/lib/materialgrammi.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  @Input() name = "";
  @Input() code = ``;
  @Input() title = "";
  @Input() subtitle = "";
  @Input() optionsApplied:any = [];
  @Input() explaination = "";

  optionsProvided = false;

  id = this.service.makeid(10, this.service.makeid(10, "mg"));
  options: any = [{
    name: `<i class="fas fa-laptop"></i> Preview`,
    widget: this.id + "exampletab"
  }];
  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.checkOptions();
    if(this.code || this.optionsApplied.length > 0) {
      this.options.push({
        name: `<i class="fas fa-code"></i> Code`,
        widget: this.id + "codetab"
      });
    }
    if(this.subtitle == "") {
      this.title = "Example"
    }
  }


  checkOptions(){
    let keys = Object.keys(this.optionsApplied);
    this.optionsProvided = keys.length > 0 ? true : false;
  }

}
