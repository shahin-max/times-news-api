const express=require('express');
const bodyparser = require('body-parser');
const app=express();

const port= 5000;

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/js',express.static(__dirname + 'public/js'));

//templating engine
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
//routes
const newsRouter=require('./src/routes/news');

app.use('/',newsRouter);
app.use('/article',newsRouter);

//listen on port

app.listen(port,()=>console.log(`listening on port ${port}`));