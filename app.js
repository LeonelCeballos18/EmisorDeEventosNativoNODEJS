var Emitter = require('events');
const config = require('./config');

var emtr = new Emitter();

emtr.on(config.events.GREET, ()=>{
    console.log('Somewhere, someone said hello.');
})

emtr.on(config.events.GREET, ()=>{
    console.log('A greet ocurred!');
})

console.log("Hello!");
emtr.emit('greet');

emtr.on(config.events.JUMP, ()=>{
    console.log('Someone jumped!');
})

emtr.emit('jump');