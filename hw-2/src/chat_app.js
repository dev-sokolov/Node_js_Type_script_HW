import EventEmitter from 'node:events';

const sendMessage = new EventEmitter();

sendMessage.on("message", (username, userMessage) => {
    console.log(`${username}: ${userMessage}`);
})

export default sendMessage;
