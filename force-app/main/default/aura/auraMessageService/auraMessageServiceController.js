({
    handleSendMessage: function (component, event, helper) {
        const inputEle = component.find("inputElement");
        if (inputEle) {
            const msg = inputEle.get("v.value");
            const messages = component.get("v.messages");
            messages.push({
                id: messages.length,
                value: msg,
                from: "aura-message-service"
            });
            component.set("v.messages", messages);
            const messagePayload = {
                message: msg
            }
            const msgChannel = component.find("messageChannel");
            msgChannel.publish(messagePayload);
            inputEle.set("v.value", "");
        }
    },
    messageHandler: function (component, event, helper) {
        if (event && event.getParam("message") && event.getParam("from") !== "aura-message-service") {
            const msg = event.getParam("message");
            const messages = component.get("v.messages");
            messages.push({
                id: messages.length,
                value: msg,
                from: "aura-message-service"
            });
            component.set("v.messages", messages);
        }
    }
});
