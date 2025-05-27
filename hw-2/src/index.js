import sendMessage from "./chat_app.js";

sendMessage.emit("message", "Alexander", "Hello!!!");
sendMessage.emit("message", "Michail", "How is it going?");
sendMessage.emit("message", "Yuriy", "Great!");