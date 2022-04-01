import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  gettingStartedDescription = `The purpose of this library is giving the user expirience as well as ease-of-use for the developers. There is a vast scale-ability for your design ideas, all of the angular components are configure-able.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
