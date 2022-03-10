import { Component, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'lib-test',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  widgetID = "widget";
  constructor(private myservice: MaterialgrammiService) {   }

  ngOnInit(): void {
  }



}
