import { AfterViewChecked, EventEmitter, OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChatComponent implements OnInit, OnChanges, AfterViewChecked {
    header: string;
    show: boolean;
    openBody: boolean;
    messages: {
        sender: string;
        time: string;
        description: string;
        isSender: boolean;
    }[];
    class: string;
    private myScrollContainer;
    inputMessage: string;
    chatInput: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewChecked(): void;
    scrollToBottom(): void;
    closeChat(): void;
    mainChatClasses(): string;
    minimizeToggle(): void;
    storeMessage(event: any): void;
    sendMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChatComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChatComponent, "mg-chat", never, { "header": "header"; "show": "show"; "openBody": "openBody"; "messages": "messages"; "class": "class"; }, { "chatInput": "chatInput"; }, never, never>;
}
