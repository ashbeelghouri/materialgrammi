import { Component, OnInit } from '@angular/core';
import { SeoService } from 'projects/materialgrammi/src/public-api';

@Component({
  selector: 'app-comp-chat',
  templateUrl: './comp-chat.component.html',
  styleUrls: ['./comp-chat.component.css']
})
export class CompChatComponent implements OnInit {
  inputOptions = [{
    name: "theme",
    allowed: "primary | success | warning | danger | info | lite | dark",
    type: "string",
    default: "dark",
    definition: `This property implements the color scheme which includes background as well as text color.`
  }, {
    name: "header",
    allowed: "",
    type: "string",
    default: "Chat Box",
    definition: ``
  }, {
    name: "show",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "openBody",
    allowed: "true | false",
    type: "boolean",
    default: "true",
    definition: ``
  }, {
    name: "time",
    allowed: "string",
    type: "string",
    default: "",
    definition: ``
  }, {
    name: "messages",
    allowed: "[{sender: string, description: string, isSender: boolean}]",
    type: "array of objects",
    default: "[]",
    definition: ``
  }];

  selector = "mg-chat";

  title = "Chat";

  code = `<mg-chat [messages]="optionsApplied.messages" [header]="optionsApplied.header"></mg-chat>`;

  optionsApplied = {
    theme: "primary",
    header: "example chat",
    messages: [{
      sender: "Person 1",
      description: "Hello world",
      time: "2 december 2021 12:12 AM",
      isSender: false
    }, {
      sender: "Person 2",
      description: "Hello world",
      time: "2 december 2021 12:12 AM",
      isSender: true
    }, {
      sender: "Person 1",
      description: "Hello world",
      time: "2 december 2021 12:12 AM",
      isSender: false
    }, {
      sender: "Person 2",
      description: "Hello world",
      time: "2 december 2021 12:12 AM",
      isSender: true
    }, {
      sender: "Person 1",
      description: "Hello world",
      time: "2 december 2021 12:12 AM",
      isSender: false
    }, {
      sender: "Person 1",
      description: "Hello world",
      time: "2 december 2021 12:12 AM",
      isSender: false
    }]
  }

  outputOptions = [{
    name: "chatInput",
    type: "string"
  }];


  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.setTitle("Materialgrammi | Chat");
  }

}
