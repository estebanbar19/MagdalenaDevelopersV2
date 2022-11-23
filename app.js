require('@babel/register')({
    presets: ['@babel/preset-react']
})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3100

//const db = require('./database')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//ROUTES
app.use(express.static(__dirname + '/public'))
app.use("/login",require('./routes/login'))
app.use("/registro",require('./routes/registro'))

app.get('/', (req, res) =>{
    res.render("index", {titulo : "MagdalenaDevelopers"})
}) 

app.listen(port, () =>{
    console.log('Servidor a su servicio ', port)
})

app.use((req, res, next) => {
    res.status(404).render("404")
})