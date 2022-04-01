import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  installNpm = ["npm i materialgrammi ng-materialgrammi -s"];
  importCss = ["Edit angular.json, find the styles array and add materialgrammi to your styles", 
              `"styles": [
                "src/styles.css",
                "materialgrammi/materialgrammi.min.css"]`];
  listOfImports = ["Edit your module, import Materitalgrammi's module to your imports", "import { MaterialgrammiModule } from 'ng-materialgrammi';",
                  `imports: [MaterialgrammiModule]`];


  feedbackEmail = "ashbeelghouri@protonmail.com";

  constructor() { }

  ngOnInit(): void {
  }

}
