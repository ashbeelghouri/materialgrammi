import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialgrammi-demo';
  accordion_options = {
    header: {
      always: true
    },
    footer: {
      always: false
    }
  };

  radioOptions = [{
    name: "Option 01",
    value: "option01"
  }, {
    name: "Option 02",
    value: "option02"
  }, {
    name: "Option 03",
    value: "option03"
  }];

  wizardData = {
    id: "wizard-1",
    options: {
      next: true,
      previous: true
    },
    widgets: ["widget01", "widget02", "widget03", "widget04"]
  };

  tabsOptions = [{
    name: "Login",
    widget: "login-tab"
  }, {
    name: "tab 2",
    widget: "tab-widget-2"
  }, {
    name: "tab 3",
    widget: "tab-widget-3"
  }, {
    name: "tab 4",
    widget: "tab-widget-4"
  }];

  switchOptions = {
    left: `<span class="text-blue">Login Anounymously</span>`,
    right: `<span class="text-blue">Keep me logged in</span>`
  };
}
