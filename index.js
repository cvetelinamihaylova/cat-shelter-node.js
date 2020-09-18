const config = require('./config.json');
const url = require('url');
const http = require('http');
const path = require('path');
const fs = require('fs');

const VIEWS_PATH = path.resolve(config.viewsDir);

const routeMap = {
    '/': '/home/index.html'
}

function sendFiles(res, relativeFilePath){
    const fullFilePath = path.join(VIEWS_PATH, relativeFilePath);

}

function handler(req, res) {
    const pathName = url.parse(req.url).pathname;


    res.end('Hello!');
}

http.createServer(handler).listen(config.port, () => {
    console.log(`Listening on ${config.port} port`);
})