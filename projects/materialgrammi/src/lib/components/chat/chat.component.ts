import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mg-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() header = `Chat box`;
  @Input() show = true;
  @Input() openBody = true;
  @Input() messages = [{
    sender: "Person A",
    time: "08:00 AM",
    description: `Hello I am Person A`,
    isSender: false
  }, {
    sender: "Person B",
    time: "08:02 AM",
    description: `Hello I am Person B`,
    isSender: true
  }, {
    sender: "Person A",
    time: "08:03 AM",
    description: `Whats up?`,
    isSender: false
  }, {
    sender: "Person B",
    time: "08:04 AM",
    description: `All good`,
    isSender: true
  }, {
    sender: "Person A",
    time: "08:00 AM",
    description: `Hello I am Person A`,
    isSender: false
  }, {
    sender: "Person B",
    time: "08:02 AM",
    description: `Hello I am Person B`,
    isSender: true
  }, {
    sender: "Person A",
    time: "08:03 AM",
    description: `Whats up?`,
    isSender: false
  }, {
    sender: "Person B",
    time: "08:04 AM",
    description: `All good`,
    isSender: true
  }];

  @Input() class = "";


  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  inputMessage = "";
  @Output() chatInput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngOnChanges() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  closeChat() {
    this.show = false;
  }

  mainChatClasses() {
    let results = "";
    results += this.openBody ? "active" : "";
    return results;
  }

  minimizeToggle() {
    this.openBody = !this.openBody;
    this.scrollToBottom();
  }

  storeMessage(event: any) {
    this.inputMessage = event.target.value;
    if (event.key == "Enter") {
      this.sendMessage();
    }
  }

  sendMessage() {
    this.inputMessage = "";
    this.chatInput.emit(this.inputMessage);
  }

}
