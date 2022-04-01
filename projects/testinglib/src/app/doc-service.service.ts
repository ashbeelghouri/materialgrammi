import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocServiceService {

  constructor() { }

  categories = [{
    name: "Getting Started",
    links: [{
      name: "Contribute",
      link: "/documentation"
    }, {
      name: "Introduction",
      link: "/documentation/getting-started/introduction"
    }, {
      name: "Configure",
      link: "/documentation/getting-started/configure"
    }
    // , {
    //   name: "Templates",
    //   link: "/documentation/getting-started/templates"
    // }
  ]
  }, {
    name: "Css",
    links: [
    //   {
    //   name: "Basic",
    //   link: "/documentation/css/basic"
    // }, 
    {
      name: "Grid System",
      link: "/documentation/css/grid"
    }, {
      name: "Colors",
      link: "/documentation/css/colors"
    }, 
    // {
    //   name: "Animations",
    //   link: "/documentation/css/animations"
    // }, 
    {
      name: "Helpers",
      link: "/documentation/css/helpers"
    }, {
      name: "Typography",
      link: "/documentation/css/typography"
    }]
  }, {
    name: "Components",
    links: [{
      name: "Accordion",
      link: "/documentation/components/accordion"
    }, {
      name: "Alert",
      link: "/documentation/components/alert"
    }, {
      name: "Breadcrumbs",
      link: "/documentation/components/breadcrumb"
    }, {
      name: "Buttons",
      link: "/documentation/components/buttons"
    }, {
      name: "Calendar",
      link: "/documentation/components/calendar"
    }, {
      name: "Card",
      link: "/documentation/components/card"
    }, {
      name: "Chat",
      link: "/documentation/components/chat"
    }, {
      name: "Checkbox",
      link: "/documentation/components/checkbox"
    }, {
      name: "Chip",
      link: "/documentation/components/chip"
    }, {
      name: "Collapse",
      link: "/documentation/components/collapse"
    }, {
      name: "Component",
      link: "/documentation/components/component"
    }, {
      name: "Countdown",
      link: "/documentation/components/countdown"
    }, {
      name: "Date",
      link: "/documentation/components/date"
    }, {
      name: "Date Range",
      link: "/documentation/components/date-range"
    }, {
      name: "Dragable",
      link: "/documentation/components/dragable"
    }, {
      name: "Dropable",
      link: "/documentation/components/dropable"
    }, {
      name: "Dropdown",
      link: "/documentation/components/dropdown"
    }, {
      name: "Fixer",
      link: "/documentation/components/fixer"
    }, {
      name: "Footer",
      link: "/documentation/components/footer"
    }, {
      name: "Image",
      link: "/documentation/components/image"
    }, {
      name: "Input",
      link: "/documentation/components/input"
    }, {
      name: "List",
      link: "/documentation/components/list"
    }, 
    // {
    //   name: "Loaders",
    //   link: "/documentation/components/loaders"
    // }, 
    {
      name: "Megamenu",
      link: "/documentation/components/megamenu"
    }, {
      name: "Modal",
      link: "/documentation/components/modal"
    }, {
      name: "Navbar",
      link: "/documentation/components/navbar"
    }, {
      name: "Notes",
      link: "/documentation/components/note"
    }, 
    {
      name: "Notifications",
      link: "/documentation/components/notifications"
    }, 
    {
      name: "Offcanvas",
      link: "/documentation/components/offcanvas"
    }, {
      name: "Overlay",
      link: "/documentation/components/overlay"
    }, {
      name: "Pagination",
      link: "/documentation/components/pagination"
    }, {
      name: "Radio",
      link: "/documentation/components/radio"
    }, {
      name: "Select",
      link: "/documentation/components/select"
    }, 
    // {
    //   name: "Sidebar",
    //   link: "/documentation/components/sidebar"
    // }, 
    {
      name: "Slideshow",
      link: "/documentation/components/slideshow"
    }, {
      name: "Switch",
      link: "/documentation/components/switch"
    }, {
      name: "Tab",
      link: "/documentation/components/tab"
    }, {
      name: "Table",
      link: "/documentation/components/table"
    }, {
      name: "Text Input",
      link: "/documentation/components/text-input"
    }, {
      name: "Toast",
      link: "/documentation/components/toast"
    }, {
      name: "Widget",
      link: "/documentation/components/widget"
    }, {
      name: "Wizard",
      link: "/documentation/components/wizard"
    }]
  }];


}
