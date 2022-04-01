import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  gettingStartedDescription = `The purpose of this library is giving the user expirience as well as ease-of-use for the developers. There is a vast scale-ability for your design ideas, all of the angular components are configure-able.`;
  
  rules = [
    "Create your branch directly from the master, branch name should match your functionality.",
    "Your pull request must be approved from the author as well as one more developer.",
    "Try adding comments in your code.",
    "Send your pull requests for verification to the mentioned email addresses.",
    "Explain, what you have done in the changes.",
    "The selectors and input/output params should not be updated in developed components.",
    "The new components of library can not be simillar and should be documented in the testing lib project."
  ];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
