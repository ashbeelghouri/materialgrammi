import { Component, Input, OnInit } from '@angular/core';
import { Megamenu } from '../../interfaces';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.css']
})
export class MegamenuComponent implements OnInit {
  @Input() id = "1";
  @Input() theme = "primary";
  @Input() menu: Megamenu[] = [];
  active = false;
  isHovering = false;

  activeLink = "";

  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.service.registerMegaMenu(this.id, this.getAllIds());
  }

  getAllIds(){
    let ids = [];
    for(let i = 0; i < this.menu.length; i++){
      ids.push(this.menu[i].id);
    }
    return ids;
  }


  watchMenu(){
    this.service.watchMegaMenu(this.id).subscribe((data: string | false) => {
      if(data){
        this.active = true;
        this.activeLink = data;
      }
    });
  }

  setActive(ac:boolean){
    this.active = ac;
  }

  closeMenu(){
    this.active = false;
    this.service.closeMegaMenu(this.id);
  }

  openMenu(targetId: string){
    this.closeMenu();
    this.service.openMegaMenu(this.id, targetId);
    this.active = true;
  }

  megamenuContentClass(){
    let results = "";

    results += this.active ? "active" : "";

    return results;
  }

  menuBtnClass(targetId: string){
    let classes = "";
    classes += `${this.theme}`;
    classes += this.activeLink === targetId ? ` active` : '';
    return classes;
  }


}
