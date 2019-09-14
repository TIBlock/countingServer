const express = require('express');

const app = express();

let count = 0;

app.post('/increment', (request, response, nextFn) => {
    count = count +1;
    response.send("The total count is: " + count)
    nextFn();
});

app.post('/decrement', (request, response, nextFn) => {
    count = count - 1;
    response.send("The total count is: " + count)

    nextFn();

});

app.get('/value', (request, response, nextFn) => {
    response.send("The total count is: " + count);
    nextFn();

});

function logAll(request, response, nextFn){

    console.log("A request is coming in to ", request.path);
    nextFn()
};

app.listen(3000, () => {
    
    console.log("TIBServer is running!");
});

app.use(logAll)