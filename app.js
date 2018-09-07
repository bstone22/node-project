//jshint -  great tool
//for parent folder = require(../parentFolder)
//for subfolder = require(./subfolder/logger)
//const logger = require('./logger');

//way to export a single function 


//console.log(logger);
//logger.log('message');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');
//const emitter = new EventEmitter();
//const path = require('path');
//var pathObj = path.parse(__filename);

//console.log(pathObj);
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory ${freeMem}`);

const file = fs.readdirSync('./');
console.log(file);

fs.readdir('./', function(err,files) {
    if (err) console.log(err);
    else console.log(files);
}); 





const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) =>{
    console.log('Lister called', arg);
});

logger.log('message');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Yo YO World");
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }


});

// server.on('connection', (socket) => {
//     console.log('New Connection');
// });

server.listen(3000);
console.log('listening on port 3000');

