
const EventEmitter = require('events');
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

log(message){
    //Send an http request
    console.log(message);


    //used to raise an event within the application
    this.emit('messageLogged', { id: 1, url: 'http//'});
    }
}

module.exports = Logger;
//module.exports.endpoint = url;

//way to export a funcion -> module.exports = log


//node module wrapper
//http - webservers, http request
//os - operating systems
//process - info for the current process
//stream -streams of data
//path
