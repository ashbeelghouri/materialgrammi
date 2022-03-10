import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchedText = new EventEmitter();
  @Input() spaceAround = true;
  @Input() theme = "dark";
  @Input() onSmallMenuButton = "=";
  @Input() isFixed = false;
  @Input() partitionType = "2:1";
  // 2:1
  // 1:2
  // 1:1
  @Input() navData: any = {
    brand: {
      name: `Material <B>Grammi</B>`,
      link: '/'
      },
      left: {
        navType: "input",
        data: {
          btn: true,
          name: `<i class="fas fa-search"></i>`,
          placeholder: "search",
          id: "1"
        }
      },
    right: {
      navType: "links",
      data: [{
        name: `<i class="fas fa-home"></i>`,
        link: "/",
        active: false
      }, {
        name: `<i class="far fa-bell"></i>`,
        link: "/",
        active: false
      }, {
        type: "dropdown",
        name: `<i class="fas fa-user"></i>`,
        links: [{
          name: `<p>Login</p>`,
          link: "/"
        }, {
          name: `<p>Register</p>`,
          link: "/"
        }],
        active: false
      }, {
        name: `<i class="far fa-envelope"></i>`,
        link: "/",
        active: false
      }]
    }
  };

  onSmallActive = false;

  searchQuery = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSmallClass() {
    return this.onSmallActive ? 'active' : '';
  }

  toggleNav() {
    this.onSmallActive = !this.onSmallActive;
  }

  mainNavClasses() {
    let classes = this.onSmallClass();

    if (this.isFixed) {
      classes += ` fixed`;
    }

    classes += this.spaceAround ? " space-around" : "";

    if (this.partitionType == "2:1") {
      classes += ` position-2-1`;
    } else if (this.partitionType == "1:2") {
      classes += ` position-1-2`;
    } else if (this.partitionType == "1:1") {
      classes += ` position-1-1`;
    }

    return classes;
  }

  onEnterSearchQuery(event: any): void {
    if (event.key == "Enter") {
      this.sendSearch();
    } else {
      this.searchQuery = event.target.value;
    }
  }

  sendSearch() {
    this.searchedText.emit(this.searchQuery);
  }

}
