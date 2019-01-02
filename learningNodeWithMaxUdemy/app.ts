import fs = require('fs');
import http = require('http');

// will want an actual type later, use any for now
// this is a handler that can be used by server as a callback
let requestListener = (request : any, response: any) => {
console.log(request);

};

http.createServer(requestListener);



//this way is handling the req and res all in one function, the anoynmous way.

// http.createServer((request, response) => {

// });



