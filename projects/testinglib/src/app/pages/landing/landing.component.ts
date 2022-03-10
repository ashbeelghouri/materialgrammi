import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  installNpm = ["npm i materialgrammi ng-materialgrammi -s"];
  mgcss = "www.downloadlinkhere.com";
  constructor() { }

  ngOnInit(): void {
  }

}
