import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-wizard',
  templateUrl: './comp-wizard.component.html',
  styleUrls: ['./comp-wizard.component.css']
})
export class CompWizardComponent implements OnInit {
  inputOptions = [{
    name: "active",
    allowed: "number",
    type: "number",
    default: "0"
  }, {
    name: "id",
    allowed: "string",
    type: "string",
    default: "1"
  }, {
    name: "widgets",
    allowed: "['widget ids']",
    type: "array of strings",
    default: "[ ]"
  }];

  selector = "mg-wizard";

  title = "Wizard";
  code = `<mg-wizard id="wizard-example" [widgets]="optionsApplied.steps" (step)="setStep($event)" (isCompleted)="setCompleted($event)">
  <h2>Wizard Example <small class="font-15 text-green">Step {{step}} of {{optionsApplied.steps.length}}</small></h2>
  <mg-widget id="wizard-step-1" parent="wizard-example" type="wizard">
      <div class="padV-10">
          <div class="row">
              <div class="col m6 l6 s12">
                  <div class="marginR-5">
                      <mg-input label="First Name" fStyle="material"></mg-input>
                  </div>
              </div>
              <div class="col m6 l6 s12">
                  <div class="marginL-5">
                      <mg-input label="Last Name" fStyle="material"></mg-input>
                  </div>
              </div>
              
          </div>
      </div>
  </mg-widget>
  <mg-widget id="wizard-step-2" parent="wizard-example" type="wizard">
      <div class="padV-10">
          <div class="row">
              <div class="col m6 l6 s12">
                  <div class="marginR-5">
                      <mg-input label="Password" fStyle="material"></mg-input>
                  </div>
              </div>
              <div class="col m6 l6 s12">
                  <div class="marginL-5">
                      <mg-input label="Confirm Password" fStyle="material"></mg-input>
                  </div>
              </div>
              
          </div>
      </div>
  </mg-widget>
  <mg-widget id="wizard-step-3" parent="wizard-example" type="wizard">
      <div class="padV-10">
          <div class="row">
              <div class="col m12 l12 s12">
                  <div class="marginR-5">
                      <mg-input label="Phone" fStyle="material"></mg-input>
                  </div>
              </div>
          </div>
      </div>
  </mg-widget>
  <mg-widget id="wizard-step-4" parent="wizard-example" type="wizard">
      <div class="padV-10">
          <div class="row">
              <div class="col m12 l12 s12">
                  <div class="marginR-5">
                      <mg-text label="Address" fStyle="material"></mg-text>
                  </div>
              </div>
          </div>
      </div>
  </mg-widget>
  <mg-widget id="wizard-step-5" parent="wizard-example" type="wizard">
      <h1 class="text-green padT-20">Congratulations - <small class="text-green8">Your account is registered</small></h1>
  </mg-widget>
  <div class="padT-10 text-right">
      <ng-container *ngIf="step > 1">
          <mg-button theme="warning" taskType="wizard" task="previous" target="wizard-example" [options]="optionsApplied.wizardOptions">Previous</mg-button>
      </ng-container>
      <ng-container *ngIf="!wizard_completed">
          <mg-button theme="success" taskType="wizard" task="next" target="wizard-example" [options]="optionsApplied.wizardOptions">Next</mg-button>
      </ng-container>
  </div>
</mg-wizard>`;

  optionsApplied = {
    steps: [
      "wizard-step-1",
      "wizard-step-2",
      "wizard-step-3",
      "wizard-step-4",
      "wizard-step-5"
    ],
    active: 0,
    wizardOptions: {
      next: true,
      previous: true
    }
  }

  outputOptions = [{
    name: "step",
    type: "{id: string, number: number}"
  }, {
    name: "isCompleted",
    type: "boolean  "
  }];

  step = 1;
  wizard_completed = false;
  setStep(event:any){
    console.log("EVENT", event);
    this.step = event.number + 1;
  }

  setCompleted(event:boolean){
    this.wizard_completed = event;
  }

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Wizard");
  }

}
