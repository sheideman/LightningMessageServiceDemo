import { LightningElement,wire } from 'lwc';
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
import { MessageContext, publish} from "lightning/messageService"
export default class ThingOne extends LightningElement {
 
    @wire(MessageContext) msgContext;
    
    clickHandler(){
        const messagePayload = {
            message: "button clicked in thing-one."
        }
        publish(this.msgContext, messageDemo, messagePayload)
    }

}