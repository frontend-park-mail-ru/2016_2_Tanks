const express = require('express');

const parser = require('body-parser');

const app = express();

const technoDoc = require('techno-gendoc');

// let path = require('path');

app.use('/start', express.static('public', {maxAge: 1}));
app.use('/login', express.static('public', {maxAge: 1}));
app.use('/signup', express.static('public', {maxAge: 1}));
app.use('/signin', express.static('public', {maxAge: 1}));
app.use('/', express.static('public', {maxAge: 1}));
technoDoc.generate(require('./api'), 'public');

app.use(parser.json());
//app.use('/libs', express.static('node_modules'));


app.get('/api/session', (req, res) => {
    res.send(technoDoc.mock(require('./api/scheme/Session')))
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`App started on port ${process.env.PORT || 3000}`);
});
