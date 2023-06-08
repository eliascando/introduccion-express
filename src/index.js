const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('appName','Elias');
app.set('PORT', 5000);
app.set('view engine', 'ejs');

//Middleware
function logger(req, res, next){
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(logger);
app.use(express.json());
app.use(morgan('dev'));

//Routes
/*app.get('/',(req, res)=>{
    res.json({
        username: "camero",
        lastname: "mompiche"
    });
})*/

app.get('/',(req, res)=>{
    const data = [{name:"elias"},{name:"zoe"},{name:"joel"}];
    res.render('index.ejs', {personas: data});
})

app.get('/about',(req, res)=>{
    res.send('AboutME')
})

app.put('/put',(req, res)=>{
    res.send('<h1>PUT REQUEST RECEIVED</h1>')
})

app.post('/post',(req, res)=>{
    res.send('<h1>POST REQUEST RECEIVED</h1>')
})
app.post('/user',(req, res)=>{
    console.log(req.body)
    res.send("Post method received")
})

app.delete('/delete',(req, res)=>{
    res.send('<h1>DELETE REQUEST RECEIVED</h1>')
})

app.use(express.static('public'));

app.listen(app.get('PORT'), ()=> {
    console.log(app.get('appName'))
    console.log('Server on port: '+app.get('PORT'))
})