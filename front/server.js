let express = require('express');
//let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

//app.use(parser.json());

/*
let count ={};
app.post('/users', (req, res) => {
    if(count[req.body['email']]){
        count[req.body['email']]++;
    } else{
        count[req.body['email']]=1;
    };
    res.send(count[req.body['email']].toString());
});
 router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
 })
*/

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
