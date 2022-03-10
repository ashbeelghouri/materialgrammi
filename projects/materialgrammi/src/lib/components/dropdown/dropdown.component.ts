import { Component, Input, OnInit } from '@angular/core';
import { MaterialgrammiService } from '../../materialgrammi.service';

@Component({
  selector: 'mg-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() id = "1";
  @Input() active = false;
  @Input() position = {
    hotizontal: "right",
    vertical: "bottom"
  };
  @Input() class = "";
  constructor(private service: MaterialgrammiService) { }

  ngOnInit(): void {
    this.service.registerDropDown(this.id, this.active);
    if (this.active) {
      this.service.openDropDown(this.id);
    }
    this.watch();
  }

  watch() {
    this.service.watchDropDown(this.id).subscribe((data: boolean) => {
      console.log("Dropdown triggered", data);
      this.active = data;
    });
  }

  openDropDown() {
    this.service.openDropDown(this.id);
  }

  closeDropDown() {
    this.service.closeDropDown(this.id);
  }

  dropdownClasses() {
    let results = "";
    results += this.active ? 'active' : '';
    results += " " + this.position.hotizontal + " " + this.position.vertical;
    return results;
  }

}
