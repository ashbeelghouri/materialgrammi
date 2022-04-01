import { Component, OnInit } from '@angular/core';
import { DocServiceService } from '../../doc-service.service';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  navData: any = {
    brand: {
      name: `Material <B>Grammi</B>`,
      link: '/'
    },
    right: {
      navType: "links",
      data: [{
        name: `<i class="fas fa-home"></i>`,
        link: "/",
        active: false
      }, {
        name: `<i class="fas fa-book"></i>`,
        link: "/documentation",
        active: true
      }]
    }
  };

  categories:any = [];
  
  constructor(private docService: DocServiceService) { }

  ngOnInit(): void {
    this.categories = this.docService.categories;
  }

  search(event: any){
    console.log("from nav search ==> ", event);
  }
}
