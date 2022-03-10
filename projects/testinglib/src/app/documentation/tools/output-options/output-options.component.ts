import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-options',
  templateUrl: './output-options.component.html',
  styleUrls: ['./output-options.component.css']
})
export class OutputOptionsComponent implements OnInit {
  @Input() options: any = [];
  columnsOrder = [
    "name", "Output Type"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
