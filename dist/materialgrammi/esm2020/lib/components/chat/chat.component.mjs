import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["scrollMe"];
function ChatComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "p", 18);
    i0.ɵɵelementStart(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 21);
    i0.ɵɵelement(7, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", msg_r3.isSender ? "is-sender" : "is-reciever");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", msg_r3.sender, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", msg_r3.time, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", msg_r3.description, i0.ɵɵsanitizeHtml);
} }
function ChatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.minimizeToggle(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "p", 6);
    i0.ɵɵelementStart(6, "a", 7);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.minimizeToggle(); });
    i0.ɵɵelement(7, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 9);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.closeChat(); });
    i0.ɵɵelement(9, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 11, 12);
    i0.ɵɵtemplate(12, ChatComponent_div_0_div_12_Template, 8, 4, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 14);
    i0.ɵɵelementStart(14, "input", 15);
    i0.ɵɵlistener("keyup", function ChatComponent_div_0_Template_input_keyup_14_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.storeMessage($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 9);
    i0.ɵɵlistener("click", function ChatComponent_div_0_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r5); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.sendMessage(); });
    i0.ɵɵelement(16, "i", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.mainChatClasses() + " " + ctx_r0.class);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHtml", ctx_r0.header, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
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
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChatComponent, selectors: [["mg-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myScrollContainer = _t.first);
    } }, inputs: { header: "header", show: "show", openBody: "openBody", messages: "messages", class: "class" }, outputs: { chatInput: "chatInput" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "chat-wrapper", 3, "ngClass", 4, "ngIf"], [1, "chat-wrapper", 3, "ngClass"], [1, "chat-header"], [1, "row"], [1, "col", "m8", "l8", "s8", 3, "innerHtml", "click"], [1, "col", "m4", "l4", "s4"], [1, "text-right"], [1, "padR-10", 3, "click"], [1, "fas", "fa-minus"], [3, "click"], [1, "fas", "fa-times"], [1, "chat-body"], ["scrollMe", ""], ["class", "chat-message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer"], ["type", "text", "placeholder", "your message", 3, "keyup"], [1, "fas", "fa-paper-plane"], [1, "chat-message", 3, "ngClass"], [1, "message-info"], [1, "by"], [1, "time"], [1, "message-description"], [3, "innerHtml"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ChatComponent_div_0_Template, 17, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChatComponent, [{
        type: Component,
        args: [{ selector: 'mg-chat', template: "<div class=\"chat-wrapper\" *ngIf=\"show\" [ngClass]=\"mainChatClasses() + ' ' + class\">\n  <div class=\"chat-header\">\n    <div class=\"row\">\n      <div class=\"col m8 l8 s8\" [innerHtml]=\"header\" (click)=\"minimizeToggle()\"></div>\n      <div class=\"col m4 l4 s4\">\n        <p class=\"text-right\"><a class=\"padR-10\" (click)=\"minimizeToggle()\"><i class=\"fas fa-minus\"></i></a><a (click)=\"closeChat()\"><i class=\"fas fa-times\"></i></a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"chat-body\"  #scrollMe>\n    <div class=\"chat-message\" *ngFor=\"let msg of messages\" [ngClass]=\"msg.isSender ? 'is-sender' : 'is-reciever'\">\n      <p class=\"message-info\">\n        <span class=\"by\">\n          {{msg.sender}}\n        </span>\n        <span class=\"time\">\n          {{msg.time}}\n        </span>\n      </p>\n      <p class=\"message-description\">\n        <span [innerHtml]=\"msg.description\"></span>\n      </p>\n    </div>\n  </div>\n  <div class=\"chat-footer\">\n    <input type=\"text\" placeholder=\"your message\" (keyup)=\"storeMessage($event)\"/>\n    <a (click)=\"sendMessage()\"><i class=\"fas fa-paper-plane\"></i></a>\n  </div>\n</div>\n", styles: [""] }]
    }], function () { return []; }, { header: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRlcmlhbGdyYW1taS9zcmMvbGliL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsZ3JhbW1pL3NyYy9saWIvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNVL0gsK0JBQThHO0lBQzVHLDZCQUF3QjtJQUN0QixnQ0FBaUI7SUFDZixZQUNGO0lBQUEsaUJBQU87SUFDUCxnQ0FBbUI7SUFDakIsWUFDRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQUk7SUFDSiw2QkFBK0I7SUFDN0IsMkJBQTJDO0lBQzdDLGlCQUFJO0lBQ04saUJBQU07OztJQVppRCx1RUFBc0Q7SUFHdkcsZUFDRjtJQURFLDhDQUNGO0lBRUUsZUFDRjtJQURFLDRDQUNGO0lBR00sZUFBNkI7SUFBN0IsaUVBQTZCOzs7O0lBcEIzQyw4QkFBbUY7SUFDakYsOEJBQXlCO0lBQ3ZCLDhCQUFpQjtJQUNmLDhCQUEwRTtJQUEzQix1SkFBUyx1QkFBZ0IsSUFBQztJQUFDLGlCQUFNO0lBQ2hGLDhCQUEwQjtJQUN4Qiw0QkFBc0I7SUFBQSw0QkFBOEM7SUFBM0IscUpBQVMsdUJBQWdCLElBQUM7SUFBQyx1QkFBNEI7SUFBQSxpQkFBSTtJQUFBLDRCQUF5QjtJQUF0QixxSkFBUyxrQkFBVyxJQUFDO0lBQUMsd0JBQTRCO0lBQUEsaUJBQUk7SUFBQSxpQkFBSTtJQUNuSyxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDTixvQ0FBa0M7SUFDaEMsdUVBWU07SUFDUixpQkFBTTtJ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QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOzswRUFsR1UsYUFBYTtnRUFBYixhQUFhOzs7Ozs7UUNQMUIsK0RBNEJNOztRQTVCcUIsK0JBQVU7O3VGRE94QixhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsU0FBUztzQ0FLVixNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQTBDRyxLQUFLO2tCQUFiLEtBQUs7WUFHeUIsaUJBQWlCO2tCQUEvQyxTQUFTO21CQUFDLFVBQVU7WUFFWCxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWctY2hhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgaGVhZGVyID0gYENoYXQgYm94YDtcbiAgQElucHV0KCkgc2hvdyA9IHRydWU7XG4gIEBJbnB1dCgpIG9wZW5Cb2R5ID0gdHJ1ZTtcbiAgQElucHV0KCkgbWVzc2FnZXMgPSBbe1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDAgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYEhlbGxvIEkgYW0gUGVyc29uIEFgLFxuICAgIGlzU2VuZGVyOiBmYWxzZVxuICB9LCB7XG4gICAgc2VuZGVyOiBcIlBlcnNvbiBCXCIsXG4gICAgdGltZTogXCIwODowMiBBTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsbG8gSSBhbSBQZXJzb24gQmAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfSwge1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDMgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYFdoYXRzIHVwP2AsXG4gICAgaXNTZW5kZXI6IGZhbHNlXG4gIH0sIHtcbiAgICBzZW5kZXI6IFwiUGVyc29uIEJcIixcbiAgICB0aW1lOiBcIjA4OjA0IEFNXCIsXG4gICAgZGVzY3JpcHRpb246IGBBbGwgZ29vZGAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfSwge1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDAgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYEhlbGxvIEkgYW0gUGVyc29uIEFgLFxuICAgIGlzU2VuZGVyOiBmYWxzZVxuICB9LCB7XG4gICAgc2VuZGVyOiBcIlBlcnNvbiBCXCIsXG4gICAgdGltZTogXCIwODowMiBBTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsbG8gSSBhbSBQZXJzb24gQmAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfSwge1xuICAgIHNlbmRlcjogXCJQZXJzb24gQVwiLFxuICAgIHRpbWU6IFwiMDg6MDMgQU1cIixcbiAgICBkZXNjcmlwdGlvbjogYFdoYXRzIHVwP2AsXG4gICAgaXNTZW5kZXI6IGZhbHNlXG4gIH0sIHtcbiAgICBzZW5kZXI6IFwiUGVyc29uIEJcIixcbiAgICB0aW1lOiBcIjA4OjA0IEFNXCIsXG4gICAgZGVzY3JpcHRpb246IGBBbGwgZ29vZGAsXG4gICAgaXNTZW5kZXI6IHRydWVcbiAgfV07XG5cbiAgQElucHV0KCkgY2xhc3MgPSBcIlwiO1xuXG5cbiAgQFZpZXdDaGlsZCgnc2Nyb2xsTWUnKSBwcml2YXRlIG15U2Nyb2xsQ29udGFpbmVyITogRWxlbWVudFJlZjtcbiAgaW5wdXRNZXNzYWdlID0gXCJcIjtcbiAgQE91dHB1dCgpIGNoYXRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5teVNjcm9sbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMubXlTY3JvbGxDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7IH1cbiAgfVxuXG4gIGNsb3NlQ2hhdCgpIHtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgfVxuXG4gIG1haW5DaGF0Q2xhc3NlcygpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgcmVzdWx0cyArPSB0aGlzLm9wZW5Cb2R5ID8gXCJhY3RpdmVcIiA6IFwiXCI7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBtaW5pbWl6ZVRvZ2dsZSgpIHtcbiAgICB0aGlzLm9wZW5Cb2R5ID0gIXRoaXMub3BlbkJvZHk7XG4gICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICB9XG5cbiAgc3RvcmVNZXNzYWdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmlucHV0TWVzc2FnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlKCkge1xuICAgIHRoaXMuaW5wdXRNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLmNoYXRJbnB1dC5lbWl0KHRoaXMuaW5wdXRNZXNzYWdlKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhdC13cmFwcGVyXCIgKm5nSWY9XCJzaG93XCIgW25nQ2xhc3NdPVwibWFpbkNoYXRDbGFzc2VzKCkgKyAnICcgKyBjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwiY2hhdC1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIG04IGw4IHM4XCIgW2lubmVySHRtbF09XCJoZWFkZXJcIiAoY2xpY2spPVwibWluaW1pemVUb2dnbGUoKVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBtNCBsNCBzNFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtcmlnaHRcIj48YSBjbGFzcz1cInBhZFItMTBcIiAoY2xpY2spPVwibWluaW1pemVUb2dnbGUoKVwiPjxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPjwvYT48YSAoY2xpY2spPVwiY2xvc2VDaGF0KClcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2E+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2hhdC1ib2R5XCIgICNzY3JvbGxNZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhdC1tZXNzYWdlXCIgKm5nRm9yPVwibGV0IG1zZyBvZiBtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cIm1zZy5pc1NlbmRlciA/ICdpcy1zZW5kZXInIDogJ2lzLXJlY2lldmVyJ1wiPlxuICAgICAgPHAgY2xhc3M9XCJtZXNzYWdlLWluZm9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJieVwiPlxuICAgICAgICAgIHt7bXNnLnNlbmRlcn19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgICAge3ttc2cudGltZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwibWVzc2FnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cIm1zZy5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjaGF0LWZvb3RlclwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwieW91ciBtZXNzYWdlXCIgKGtleXVwKT1cInN0b3JlTWVzc2FnZSgkZXZlbnQpXCIvPlxuICAgIDxhIChjbGljayk9XCJzZW5kTWVzc2FnZSgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9hPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19