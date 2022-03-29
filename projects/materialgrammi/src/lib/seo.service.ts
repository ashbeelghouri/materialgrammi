import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private keywords?: string[] = [];
  private apptitle = "materialgrammi";


  constructor(private meta: Meta, private title: Title) { }

  setDescription(desc: string){
    this.meta.addTag({
      name: "description",
      content: desc
    });
  }

  setAuthor(desc: string){
    this.meta.addTag({
      name: "author",
      content: desc
    });
  }

  addKeywords(keyw: string[] | string){
    if(typeof keyw === "string") {
      this.keywords?.push(keyw);
    }else{
      for(let i = 0; i < keyw.length; i++) {
        this.keywords?.push(keyw[i]);
      }
    }
    this.setKeyWords();
  }

  private setKeyWords(){
    if(this.keywords){
      this.meta.addTag({
        name: "description",
        content: this.keywords.join(", ")
      });
    }
  }

  clearKeyWords(){
    this.keywords = [];
  }

  setTitle(t: string){
    this.apptitle = t;
    this.title.setTitle(this.apptitle);
  }

  enableCrawlers(status: boolean = true){
    if(status) {
      this.meta.addTag({
        name: "robots",
        content: "index, follow"
      });
    }
  }
}
