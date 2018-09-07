

var url = 'http://mylogger.io/log';

function log(message){
    //Send an http request
    console.log(message);
}

module.exports.log = log;
//module.exports.endpoint = url;

//way to export a funcion -> module.exports = log


//node module wrapper
//http - webservers, http request
//os - operating systems
//process - info for the current process
//stream -streams of data
//path
