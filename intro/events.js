const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {}

const eventName = "user:click";
const emitter =  new MyEmitter();

emitter.on(eventName, (e) => {
    console.log('User has hand\'s on click!', e);
});


setTimeout(() => { emitter.emit(eventName, 'Into bar')}, 1000);
setTimeout(() => { emitter.emit(eventName, 'Into navbar') }, 1000);
setTimeout(() => { emitter.emit(eventName, 'Into footer') }, 1000);