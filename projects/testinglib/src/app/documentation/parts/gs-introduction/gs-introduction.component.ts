import { Component, OnInit } from '@angular/core';
import { SeoService } from 'dist/materialgrammi/public-api';
import { DocServiceService } from '../../../doc-service.service';

@Component({
  selector: 'app-gs-introduction',
  templateUrl: './gs-introduction.component.html',
  styleUrls: ['./gs-introduction.component.css']
})
export class GsIntroductionComponent implements OnInit {
  categories:any = [];
  constructor(private docService: DocServiceService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Introduction");
    this.categories = this.docService.categories;
  }

}
