// const EventEmitter = require('events');

// const emitter = new EventEmitter();
// //Raise a event
// emitter.on('messageLogged', function(arg){
//     console.log('Listener called', arg);
// });

// // const emitter:internal
// // making a noise, produce - signalling
// emitter.emit('messageLogged', {id:1, url: 'http://'})


const http = require('http');
const uc = require('upper-case');
// var nodemon = require('nodemon')


var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');



const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write(uc.upperCase('hello'));
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
}
);


server.listen(3000);

console.log('Listenin on port 3000...');