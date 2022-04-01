import { Component, OnInit } from '@angular/core';
import { DocServiceService } from '../../../doc-service.service';

@Component({
  selector: 'app-gs-introduction',
  templateUrl: './gs-introduction.component.html',
  styleUrls: ['./gs-introduction.component.css']
})
export class GsIntroductionComponent implements OnInit {
  categories:any = [];
  constructor(private docService: DocServiceService) { }

  ngOnInit(): void {
    this.categories = this.docService.categories;
  }

}
