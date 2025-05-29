import EventEmitter from 'node:events';

const emitter = new EventEmitter();

const sendMessage = (username, userMessage, emitter) => {
    emitter.emit("message", username, userMessage)
}

emitter.on("message", (username, userMessage) => {
    console.log(`${username}: ${userMessage}`);
})

sendMessage("Alexander", "Hello!!!", emitter);
sendMessage("Michail", "How is it going?", emitter);
sendMessage("Yuriy", "Great!", emitter);
