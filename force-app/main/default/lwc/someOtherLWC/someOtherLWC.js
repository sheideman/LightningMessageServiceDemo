import { LightningElement, track, wire } from "lwc";
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
import { MessageContext, subscribe, unsubscribe } from "lightning/messageService"
export default class LwcMessageService extends LightningElement {
    @track messages = [];
    @wire(MessageContext) msgContext;
    subscription = null;
    connectedCallback() {
        if (!this.subscription) {
            subscribe(this.msgContext, messageDemo, (msg) => this.messageHandler(msg))
        }
    }
    disconnectedCallback() {
        unsubscribe(this.subscription)
        this.subscription = null;
    }
    messageHandler(message) {
        if (message && message.from !== "lwc-message-service") {
            this.messages.push({
                id: this.messages.length,
                value: message.message,
                from: message.from
            });
        }

    }

}
