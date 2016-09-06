"use strict";
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import http from 'http';

const app = express();

app.use(express.static(path.join(__dirname, '/src/client/')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

app.use(bodyParser.json({limit: "50mb"}));       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: "50mb",
    extended: false
}));

app.use(morgan('dev'));

app.get('*', (req, res) => {
    res.sendFile('/index.html');
});

const server = http.createServer(app);

server.listen(3000);
server.on('listening', () => {
    console.log('Listening on 3000');
});