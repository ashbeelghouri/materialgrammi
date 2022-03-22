import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Widget {
  id: string,
  type: string,
  options?: BehaviorSubject<any>,
  status: BehaviorSubject<boolean>
};

export interface AccordionItem {
  // widgetId
  id?: string
};

export interface Accordion {
  id: string,
  items?: [AccordionItem],
  activeItem?: BehaviorSubject<boolean>
};

export interface Collapse {
  id: string,
  status: BehaviorSubject<boolean>
}

export interface Dropdown {
  id: string,
  status: BehaviorSubject<boolean>
}

export interface MegaMenu {
  id: string,
  active: BehaviorSubject<string | boolean>
}

export interface Modal {
  id: string,
  status: BehaviorSubject<boolean>
}

export interface Overlay {
  id: string,
  status: BehaviorSubject<boolean>
}



export interface Wizard {
  id: string,
  active: BehaviorSubject<number>,
  on: number,
  completed: BehaviorSubject<boolean>,
  next: {
    index: number,
    id: string
  },
  prev: {
    index: number,
    id: string
  },
  components: [string]
};

export interface Slideshow {
  id: string,
  playInterval: any,
  timer: number,
  next: BehaviorSubject<boolean>,
  previous: BehaviorSubject<boolean>,
  active: BehaviorSubject<number>,
  play: BehaviorSubject<boolean>
}

export interface OffCanvas {
  id: string,
  status: BehaviorSubject<boolean>
}

export interface Tab {
  active: BehaviorSubject<string>,
  components: [string]
}

@Injectable({
  providedIn: 'root'
})
export class MaterialgrammiService {

  private widgets: [Widget] | any = [];
  private collapse: [Collapse] | any = [];
  private dropdown: [Dropdown] | any = [];
  private megamenu: [MegaMenu] | any = [];
  private modal: [Modal] | any = [];
  private overlay: [Overlay] | any = [];
  private wizard: [Wizard] | any = [];
  private slideshow: [Slideshow] | any = [];
  private offcanvas: [OffCanvas] | any = [];
  private tab: [Tab] | any = [];

  private slideshowv2:any = [];

  constructor() { }

  makeid(length: number, str: string | number) {
    str = typeof str == "string" ? str.split(" ").join("") : str;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOP+QRSTUVWXYZabcdefgh_ijklmnopqrst=uvwxyz0123456789-';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result + '-' + str;
  }

  registerSlideShowv2(id: string, items: any, active: string = items[0]){
    id = id === "" ? this.makeid(10, "slideshowv2") : id;
    this.slideshowv2[id] = {
      items, 
      current: active,
      active: new BehaviorSubject(active)
    };
    for(let i = 0; i < items.length; i++){
      this.registerWidget(items[i], "slideshowv2", id);
    }
    this.openWidget(active, "slideshowv2", id);
    return id;
  }

  watchSlideShowv2(id:string){
    return this.slideshowv2[id].active.asObservable();
  }

  nextSlideV2(id: string){
    let current = this.slideshowv2[id].current;
    let next = "";
    for(let i = 0; i < this.slideshowv2[id].items.length; i++) {
      if(this.slideshowv2[id].items[i] === current) {
        next = this.slideshowv2[id].items[i + 1] ? this.slideshowv2[id].items[i + 1] : this.slideshowv2[id].items[0];
      }
      this.closeWidget(this.slideshowv2[id].items[i], "slideshowv2", id);
    }
    this.slideshowv2[id].current = next;
    this.openWidget(next, "slideshowv2", id);
    this.slideshowv2[id].active.next(next);
  }

  prevSlideV2(id: string){
    let current = this.slideshowv2[id].current;
    let next = "";
    for(let i = 0; i < this.slideshowv2[id].items.length; i++) {
      if(this.slideshowv2[id].items[i] === current) {
        next = this.slideshowv2[id].items[i - 1] ? this.slideshowv2[id].items[i - 1] : this.slideshowv2[id].items[this.slideshowv2[id].items.length - 1];
        this.closeWidget(this.slideshowv2[id].items[i], "slideshowv2", id);
      }
    }
    this.slideshowv2[id].current = next;
    this.openWidget(next, "slideshowv2", id);
    this.slideshowv2[id].active.next(next);
  }

  registerTab(id: string, components: any, active: string) {
    this.tab[id] = {
      components,
      active: new BehaviorSubject(active)
    };
    for (let i = 0; i < components.length; i++) {
      this.registerWidget(components[i], "tab", id);
    }
    this.openTab(id, components[0]);
  }

  openTab(id: string, component_id: string) {
    this.closeAllTab(id);
    this.openWidget(component_id, "tab", id);
    this.tab[id].active.next(component_id);
  }

  closeAllTab(id: string) {
    if (this.tab && this.tab[id]) {
      for (let i = 0; i < this.tab[id].components.length; i++) {
        this.closeWidget(this.tab[id].components[i], "tab", id);
      }
    }
  }

  watchTab(id: string) {
    return this.tab[id].active.asObservable();
  }

  registerOffCanvas(id: string, status: boolean) {
    this.offcanvas[id] = {
      id,
      status: new BehaviorSubject(status)
    };
  }

  openCanvas(id: string) {
    this.offcanvas[id].status.next(true);
  }

  closeCanvas(id: string) {
    this.offcanvas[id].status.next(false);
  }

  watchCanvas(id: string) {
    return this.offcanvas[id].status.asObservable();
  }


  registerSlideshow(id: string, activePage: number, play: boolean, next: boolean, previous: boolean, playInterval: any, timer: number) {
    var obj: any = {
      id,
      playInterval,
      timer,
      next: new BehaviorSubject(next),
      previous: new BehaviorSubject(previous),
      active: new BehaviorSubject(activePage),
      play: new BehaviorSubject(play)
    };
    this.slideshow[id] = obj;
  }

  watchSlideshowPlay(id: string) {
    return this.slideshow[id].play.asObservable();
  }

  watchSlideshowNext(id: string) {
    return this.slideshow[id].next.asObservable();
  }

  watchSlideshowPrevious(id: string) {
    return this.slideshow[id].previous.asObservable();
  }

  watchSlideshowActivePage(id: string) {
    return this.slideshow[id].active.asObservable();
  }

  nextSlide(id: string) {
    this.slideshow[id].next.next(true);
  }

  previousSlide(id: string) {
    this.slideshow[id].previous.next(true);
  }

  changeSlidePlay(id: string, play: boolean) {
    this.slideshow[id].play.next(play);
  }

  changeSlideActivePage(id: string, activePage: number) {
    this.slideshow[id].active.next(activePage);
  }

  playSlideShow(id: string) {
    var selected = this.slideshow[id];
    if (selected) {
      if (selected.playInterval) {
        this.pauseSlideshow(id);
      }
      selected.play.next(true);
      var _this = this;
      this.nextSlide(id);
      selected.playInterval = setInterval(() => {
        _this.nextSlide(id);
      }, selected.timer);
    }
  }

  pauseSlideshow(id: string) {
    var selected = this.slideshow[id];
    if (selected && selected.playInterval) {
      clearInterval(selected.playInterval);
      selected.playInterval = false;
    }
  }

  registerWizard(wizardId: string, components: any, active = 0) {
    let next = {};
    let prev = {};
    if (components[active]) {
      next = {
        index: components && components[active + 1] ? active + 1 : active,
        id: components && components[active + 1] ? components[active + 1] : components[active]
      };
      prev = {
        index: components && components[active - 1] ? active - 1 : active,
        id: components && components[active - 1] ? components[active - 1] : components[active]
      };
    } else {
      // defaults
      active = 0;
      next = {
        index: components && components[1] ? 1 : 0,
        id: components && components[1] ? components[1] : components[0]
      };
      prev = {
        index: 0,
        id: components[0]
      };
    }

    this.wizard[wizardId] = {
      active: new BehaviorSubject(0),
      on: active,
      completed: new BehaviorSubject(false),
      next,
      prev,
      components
    };

    for (let i = 0; i < components.length; i++) {
      this.registerWidget(components[i], "wizard", wizardId);
    }

    this.openWidget(components[0], "wizard", wizardId);
  }

  wizardNextStep(wizardId: string) {
    let activateIndex = this.wizard[wizardId].on + 1;
    this.activateWizardStep(wizardId, activateIndex);
  }

  WizardPreviousStep(wizardId: string) {
    let activateIndex = this.wizard[wizardId].on - 1;
    this.activateWizardStep(wizardId, activateIndex);
  }

  WizardCloseAll(wizardId: string) {
    if (this.wizard[wizardId] && this.wizard[wizardId].components) {
      for (let i = 0; i < this.wizard[wizardId].components.length; i++) {
        this.closeWidget(this.wizard[wizardId].components[i], "wizard", wizardId);
      }
    }
  }

  activateWizardStep(wizardId: string, index: number) {

    if (this.wizard[wizardId].components[index]) {
      if(index >= this.wizard[wizardId].components.length -1){
        this.isWizardComplete(wizardId);
      }else {
        this.isWizardNotComplete(wizardId);
      }
      this.wizard[wizardId].on = index;
      this.wizard[wizardId].prev.index = this.wizard[wizardId].components[index - 1] ? index - 1 : index;
      this.wizard[wizardId].next.index = this.wizard[wizardId].components[index + 1] ? index + 1 : index;
      this.wizard[wizardId].prev.id = this.wizard[wizardId].components[index - 1] ?
        this.wizard[wizardId].components[index - 1] : this.wizard[wizardId].components[index];
      this.wizard[wizardId].next.id = this.wizard[wizardId].components[index + 1] ?
        this.wizard[wizardId].components[index + 1] : this.wizard[wizardId].components[index];;
      this.WizardCloseAll(wizardId);
      this.openWidget(this.wizard[wizardId].components[index], "wizard", wizardId);
      this.watchWidget(this.wizard[wizardId].components[index], "wizard", wizardId).subscribe((data: any) => {
        if (data) {
          this.wizard[wizardId].active.next(index);
        }
      });
    }
  }

  isWizardComplete(wizardId: string) {
    this.wizard[wizardId].completed.next(true);
  }

  isWizardNotComplete(wizardId: string) {
    this.wizard[wizardId].completed.next(false);
  }

  watchWizardActive(wizardId: string): Observable<number> {
    return this.wizard[wizardId].active.asObservable();
  }

  watchWizardCompleted(wizardId: string): Observable<true | false> {
    return this.wizard[wizardId].completed.asObservable();
  }


  registerOverlay(id: string, status: boolean) {
    this.overlay[id] = {
      id,
      status: new BehaviorSubject(status)
    };
  }

  openOverlay(id: string) {
    this.overlay[id].status.next(true);
  }

  closeOverlay(id: string) {
    this.overlay[id].status.next(false);
  }

  watchOverlay(id: string) {
    return this.overlay[id].status.asObservable();
  }

  registerModal(id: string, status: boolean) {
    this.modal[id] = {
      id,
      status: new BehaviorSubject(status)
    };
  }

  openModal(id: string) {
    this.modal[id].status.next(true);
  }

  closeModal(id: string) {
    this.modal[id].status.next(false);
  }

  watchModal(id: string) {
    return this.modal[id].status.asObservable();
  }

  registerDropDown(id: string, status: boolean) {
    this.dropdown[id] = {
      id,
      status: new BehaviorSubject(status)
    };
  }

  openDropDown(id: string) {
    this.dropdown[id].status.next(true);
  }

  closeDropDown(id: string) {
    this.dropdown[id].status.next(false);
  }

  watchDropDown(id: string) {
    return this.dropdown[id].status.asObservable();
  }

  registerCollapse(id: string, status: boolean) {
    this.collapse[id] = {
      id,
      status: new BehaviorSubject(status)
    };
  }

  openCollapse(id: string) {
    this.collapse[id].status.next(true);
  }

  closeCollapse(id: string) {
    this.collapse[id].status.next(false);
  }

  watchCollapse(id: string) {
    return this.collapse[id].status.asObservable();
  }

  getWidgetId(id: string, type: string, parent_id: string) {
    return id + '_' + type + '_' + parent_id;
  }

  widgetExists(id: string, parent_type: string, parent_id: string) {
    return this.widgets[this.getWidgetId(id, parent_type, parent_id)] ? true : false;
  }

  registerWidget(id: string, parent_type: string, parent_id: string, options: any = {}) {
    
    
    
    let mywidgetid = this.getWidgetId(id, parent_type, parent_id);
    this.widgets[mywidgetid] = {
      id,
      type: parent_type,
      parent_id: parent_id,
      options: new BehaviorSubject(options),
      status: new BehaviorSubject(false)
    }
  }

  openWidget(id: string, parent_type: string, parent_id: string): void {
    
    let mywidgetid = this.getWidgetId(id, parent_type, parent_id);
    if (this.widgets && this.widgets[mywidgetid]) {
      this.widgets[mywidgetid].status.next(true);
    }
  }

  closeWidget(id: string, parent_type: string, parent_id: string): void {
    let mywidgetid = this.getWidgetId(id, parent_type, parent_id);
    if (this.widgets && this.widgets[mywidgetid]) {
      this.widgets[mywidgetid].status.next(false);
    }

  }

  closeAllParentWidgets(parent_type: string, parent_id: string) {
    let allWidgetIds = Object.keys(this.widgets);
    for (let i = 0; i < allWidgetIds.length; i++) {
      if (this.widgets[allWidgetIds[i]].type == parent_type && this.widgets[allWidgetIds[i]].parent_id == parent_id) {
        this.closeWidget(this.widgets[allWidgetIds[i]].id, parent_type, parent_id);
      }
    }
  }

  watchWidget(id: string, parent_type: string, parent_id: string): Observable<boolean> {
    return this.widgets[this.getWidgetId(id, parent_type, parent_id)].status.asObservable();
  }

  watchOptions(id: string, parent_type: string, parent_id: string): Observable<any> {
    return this.widgets[this.getWidgetId(id, parent_type, parent_id)].options.asObservable();
  }

  registerMegaMenu(id: string, links: string[]) {
    this.megamenu[id] = {
      id,
      active: new BehaviorSubject("")
    };
    for (let i = 0; i < links.length; i++) {
      this.registerWidget(links[i], "megamenu", id);
    }
  }

  watchMegaMenu(id: string) {
    return this.megamenu[id].active.asObservable();
  }

  openMegaMenu(id: string, targetid: string) {
    this.megamenu[id].active.next(targetid);
    if (this.widgetExists(targetid, "megamenu", id)) {
      this.closeMegaMenu(id);
      this.openWidget(targetid, "megamenu", id);
    }
  }

  closeMegaMenu(id: string) {
    this.closeAllParentWidgets("megamenu", id);
    this.megamenu[id].active.next(false);
  }

  fallbackCopyTextToClipboard(text:string) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  copyToClipboard(text:string) {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }



}
