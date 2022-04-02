import { Component, Input, OnInit } from '@angular/core';

export interface multiOption {
  name?: string,
  value?: string
};

@Component({
  selector: 'mg-muliselect',
  templateUrl: './muliselect.component.html',
  styleUrls: ['./muliselect.component.css']
})
export class MuliselectComponent implements OnInit {
  @Input() theme = "primary";
  @Input() options: multiOption[] = [];
  @Input() allowDuplicates: boolean = false;
  @Input() deleteIcon = `<i class="fas fa-times"></i>`;



  constructor() { }

  ngOnInit(): void {
  }

}
