import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ChatComponent {
    constructor() {
        this.header = `Chat box`;
        this.show = true;
        this.openBody = true;
        this.messages = [{
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
        this.class = "";
        this.inputMessage = "";
        this.chatInput = new EventEmitter();
    }
    ngOnInit() {
        this.scrollToBottom();
    }
    ngOnChanges() {
        this.scrollToBottom();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
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
    storeMessage(event) {
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
ChatComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChatComponent, selector: "mg-chat", inputs: { header: "header", show: "show", openBody: "openBody", messages: "messages", class: "class" }, outputs: { chatInput: "chatInput" }, viewQueries: [{ propertyName: "myScrollContainer", first: true, predicate: ["scrollMe"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"chat-wrapper\" *ngIf=\"show\" [ngClass]=\"mainChatClasses() + ' ' + class\">\n  <div class=\"chat-header\">\n    <div class=\"row\">\n      <div class=\"col m8 l8 s8\" [innerHtml]=\"header\" (click)=\"minimizeToggle()\"></div>\n      <div class=\"col m4 l4 s4\">\n        <p class=\"text-right\"><a class=\"padR-10\" (click)=\"minimizeToggle()\"><i class=\"fas fa-minus\"></i></a><a (click)=\"closeChat()\"><i class=\"fas fa-times\"></i></a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"chat-body\"  #scrollMe>\n    <div class=\"chat-message\" *ngFor=\"let msg of messages\" [ngClass]=\"msg.isSender ? 'is-sender' : 'is-reciever'\">\n      <p class=\"message-info\">\n        <span class=\"by\">\n          {{msg.sender}}\n        </span>\n        <span class=\"time\">\n          {{msg.time}}\n        </span>\n      </p>\n      <p class=\"message-description\">\n        <span [innerHtml]=\"msg.description\"></span>\n      </p>\n    </div>\n  </div>\n  <div class=\"chat-footer\">\n    <input type=\"text\" placeholder=\"your message\" (keyup)=\"storeMessage($event)\"/>\n    <a (click)=\"sendMessage()\"><i class=\"fas fa-paper-plane\"></i></a>\n  </div>\n</div>\n", styles: [""], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mg-chat', template: "<div class=\"chat-wrapper\" *ngIf=\"show\" [ngClass]=\"mainChatClasses() + ' ' + class\">\n  <div class=\"chat-header\">\n    <div class=\"row\">\n      <div class=\"col m8 l8 s8\" [innerHtml]=\"header\" (click)=\"minimizeToggle()\"></div>\n      <div class=\"col m4 l4 s4\">\n        <p class=\"text-right\"><a class=\"padR-10\" (click)=\"minimizeToggle()\"><i class=\"fas fa-minus\"></i></a><a (click)=\"closeChat()\"><i class=\"fas fa-times\"></i></a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"chat-body\"  #scrollMe>\n    <div class=\"chat-message\" *ngFor=\"let msg of messages\" [ngClass]=\"msg.isSender ? 'is-sender' : 'is-reciever'\">\n      <p class=\"message-info\">\n        <span class=\"by\">\n          {{msg.sender}}\n        </span>\n        <span class=\"time\">\n          {{msg.time}}\n        </span>\n      </p>\n      <p class=\"message-description\">\n        <span [innerHtml]=\"msg.description\"></span>\n      </p>\n    </div>\n  </div>\n  <div class=\"chat-footer\">\n    <input type=\"text\" placeholder=\"your message\" (keyup)=\"storeMessage($event)\"/>\n    <a (click)=\"sendMessage()\"><i class=\"fas fa-paper-plane\"></i></a>\n  </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { header: [{
                type: Input
            }], show: [{
                type: Input
            }], openBody: [{
                type: Input
            }], messages: [{
                type: Input
            }], class: [{
                type: Input
            }], myScrollContainer: [{
                type: ViewChild,
                args: ['scrollMe']
            }], chatInput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT25JLE1BQU0sT0FBTyxhQUFhO0lBcUR4QjtRQXBEUyxXQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxDQUFDO2dCQUNuQixNQUFNLEVBQUUsVUFBVTtnQkFDbEIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxRQUFRLEVBQUUsSUFBSTthQUNmLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsUUFBUSxFQUFFLEtBQUs7YUFDaEIsRUFBRTtnQkFDRCxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSxVQUFVO2dCQUN2QixRQUFRLEVBQUUsSUFBSTthQUNmLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxRQUFRLEVBQUUsS0FBSzthQUNoQixFQUFFO2dCQUNELE1BQU0sRUFBRSxVQUFVO2dCQUNsQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsUUFBUSxFQUFFLElBQUk7YUFDZixFQUFFO2dCQUNELE1BQU0sRUFBRSxVQUFVO2dCQUNsQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBSXBCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ1IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFekIsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSTtZQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1NBQ3BHO1FBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzBHQWxHVSxhQUFhOzhGQUFiLGFBQWEsZ1VDUDFCLDBxQ0E2QkE7MkZEdEJhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsU0FBUzswRUFLVixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkEwQ0csS0FBSztzQkFBYixLQUFLO2dCQUd5QixpQkFBaUI7c0JBQS9DLFNBQVM7dUJBQUMsVUFBVTtnQkFFWCxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctY2hhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgaGVhZGVyID0gYENoYXQgYm94YDtcbiAgQElucHV0KCkgc2hvdyA9IHRydWU7XG4gIEBJbnB1dCgpIG9wZW5Cb2R5ID0gdHJ1ZTtcbiAgQElucHV0KCkgbWVzc2FnZXMgPSBbe1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDAgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYEhlbGxvIEkgYW0gUGVyc29uIEFgLFxuICAgIGlzU2VuZGVyOiBmYWxzZVxuICB9LCB7XG4gICAgc2VuZGVyOiBcIlBlcnNvbiBCXCIsXG4gICAgdGltZTogXCIwODowMiBBTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsbG8gSSBhbSBQZXJzb24gQmAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfSwge1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDMgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYFdoYXRzIHVwP2AsXG4gICAgaXNTZW5kZXI6IGZhbHNlXG4gIH0sIHtcbiAgICBzZW5kZXI6IFwiUGVyc29uIEJcIixcbiAgICB0aW1lOiBcIjA4OjA0IEFNXCIsXG4gICAgZGVzY3JpcHRpb246IGBBbGwgZ29vZGAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfSwge1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDAgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYEhlbGxvIEkgYW0gUGVyc29uIEFgLFxuICAgIGlzU2VuZGVyOiBmYWxzZVxuICB9LCB7XG4gICAgc2VuZGVyOiBcIlBlcnNvbiBCXCIsXG4gICAgdGltZTogXCIwODowMiBBTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsbG8gSSBhbSBQZXJzb24gQmAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfSwge1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDMgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYFdoYXRzIHVwP2AsXG4gICAgaXNTZW5kZXI6IGZhbHNlXG4gIH0sIHtcbiAgICBzZW5kZXI6IFwiUGVyc29uIEJcIixcbiAgICB0aW1lOiBcIjA4OjA0IEFNXCIsXG4gICAgZGVzY3JpcHRpb246IGBBbGwgZ29vZGAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfV07XG5cbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG5cbiAgQFZpZXdDaGlsZCgnc2Nyb2xsTWUnKSBwcml2YXRlIG15U2Nyb2xsQ29udGFpbmVyITogRWxlbWVudFJlZjtcbiAgaW5wdXRNZXNzYWdlID0gXCJcIjtcbiAgQE91dHB1dCgpIGNoYXRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5teVNjcm9sbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMubXlTY3JvbGxDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7IH1cbiAgfVxuXG4gIGNsb3NlQ2hhdCgpIHtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgfVxuXG4gIG1haW5DaGF0Q2xhc3NlcygpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLm9wZW5Cb2R5ID8gXCJhY3RpdmVcIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBtaW5pbWl6ZVRvZ2dsZSgpIHtcbiAgICB0aGlzLm9wZW5Cb2R5ID0gIXRoaXMub3BlbkJvZHk7XG4gICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICB9XG5cbiAgc3RvcmVNZXNzYWdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmlucHV0TWVzc2FnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlKCkge1xuICAgIHRoaXMuaW5wdXRNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLmNoYXRJbnB1dC5lbWl0KHRoaXMuaW5wdXRNZXNzYWdlKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhdC13cmFwcGVyXCIgKm5nSWY9XCJzaG93XCIgW25nQ2xhc3NdPVwibWFpbkNoYXRDbGFzc2VzKCkgKyAnICcgKyBjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwiY2hhdC1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIG04IGw4IHM4XCIgW2lubmVySHRtbF09XCJoZWFkZXJcIiAoY2xpY2spPVwibWluaW1pemVUb2dnbGUoKVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBtNCBsNCBzNFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtcmlnaHRcIj48YSBjbGFzcz1cInBhZFItMTBcIiAoY2xpY2spPVwibWluaW1pemVUb2dnbGUoKVwiPjxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPjwvYT48YSAoY2xpY2spPVwiY2xvc2VDaGF0KClcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2E+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2hhdC1ib2R5XCIgICNzY3JvbGxNZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhdC1tZXNzYWdlXCIgKm5nRm9yPVwibGV0IG1zZyBvZiBtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cIm1zZy5pc1NlbmRlciA/ICdpcy1zZW5kZXInIDogJ2lzLXJlY2lldmVyJ1wiPlxuICAgICAgPHAgY2xhc3M9XCJtZXNzYWdlLWluZm9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJieVwiPlxuICAgICAgICAgIHt7bXNnLnNlbmRlcn19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgICAge3ttc2cudGltZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwibWVzc2FnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cIm1zZy5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjaGF0LWZvb3RlclwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwieW91ciBtZXNzYWdlXCIgKGtleXVwKT1cInN0b3JlTWVzc2FnZSgkZXZlbnQpXCIvPlxuICAgIDxhIChjbGljayk9XCJzZW5kTWVzc2FnZSgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9hPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19