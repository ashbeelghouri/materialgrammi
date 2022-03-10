import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, OnChanges {
  @Input() active = 0;
  @Input() id = "1";
  @Input() widgets = ["step1", "step2", "step3"];
  @Output() step = new EventEmitter();
  @Output() isCompleted = new EventEmitter();
  activeStep = 0;
  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.service.registerWizard(this.id, this.widgets, this.active);
    this.watch();
  }

  ngOnChanges(): void {
    this.service.registerWizard(this.id, this.widgets, this.active);
  }

  watch(){
    this.service.watchWizardActive(this.id).subscribe((activeNumber: number) => {
      console.log("watching step number", activeNumber);
      this.step.emit({
        id: this.widgets[activeNumber],
        number: activeNumber
      });
    });
    this.service.watchWizardCompleted(this.id).subscribe((completed: boolean) => {
      console.log("watching completed", completed);
      this.isCompleted.emit(completed);
    });
  }
}
