import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-options',
  templateUrl: './input-options.component.html',
  styleUrls: ['./input-options.component.css']
})
export class InputOptionsComponent implements OnInit {
  @Input() options:any = [];
  columnsOrder = [
    "name", "allowed", "type", "default"
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addData(){
    for(let i=0; i < this.options.length; i++) {

    }
  }

}
