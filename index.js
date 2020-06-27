const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const logger = require("./api/lib/logger");
const login = require("./api/router/LoginRouter");
const todoList  = require('./api/router/TodoListRouter');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyparser.json({ limit: '5mb' }));
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use('/api/logins',login);
app.use('/api/todoLists',todoList);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Orgin", "http://localhost:3001");
    res.header("Access-Control-Allow-Header", "Orgin,X-Request-With, Content-Type, Accept");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
});



app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    //  logger.info('error',error.message);
    if (error.name === 'ValidationError') {
        logger.error(error.name);
        res.status(error.status || 500).json({
            error: {
                message: error.message
            }
        });
    } else {
        logger.error(error.message);
        res.status(error.status || 500).json({
            error: {
                message: error
            }
        });
    }
});

module.exports = app;