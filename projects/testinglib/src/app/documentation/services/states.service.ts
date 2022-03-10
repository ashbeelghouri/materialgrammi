import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  openSideBar = true;
  constructor() { }

  setSidebar(v: boolean){
    this.openSideBar = v;
  }

  getSidebar(){
    return this.openSideBar;
  }

}
