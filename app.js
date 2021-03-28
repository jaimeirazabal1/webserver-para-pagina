
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Servir contenido estatico 
app.use( express.static('public') );


//handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials');


app.get('/elements', (req, res) => {

    res.render('elements', {
        nombre : "Jaime Irazabal",
        titulo : "Node Js"
    });
})
app.get('/generic', (req, res) => {

    res.render('generic', {
        nombre : "Jaime Irazabal",
        titulo : "Node Js"
    });
})
app.get('/', (req, res) => {

    res.render('home', {
        nombre : "Jaime Irazabal",
        titulo : "Node Js"
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})