const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener
emitter.on('messageLogged', function(arg) {
    console.log("listener is called ", arg);
})

// raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// listener is a function that is called when an event is raised