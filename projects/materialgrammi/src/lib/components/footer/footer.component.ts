import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() theme = "success";
  @Input() toBottom = false;
  @Input() class = "";
  constructor() { }

  ngOnInit(): void {
  }

  mainFooterClasses(){
    let results = "";
    results += this.theme;
    results += this.toBottom ? " stick-to-bottom" : "";
    return results;
  }
}
