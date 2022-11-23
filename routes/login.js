const express = require('express')
const router = express.Router();
const {tedious, connection} = require('../database');

//REACT
const react = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactDOMCliente = require('react-dom/client')

// //COMPONENTES
const login = require('../components/Login.jsx')
const navbar = require('../components/Navbarlogin.jsx')

//PARSERR
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) =>{
    res.render('login', {root: ReactDOMServer.renderToString(react.createElement(navbar))+ReactDOMServer.renderToString(react.createElement(login))})
})

router.post('/lg', urlencodedParser, (req, res) =>{
    const {email, password} = req.body;
    console.log(req.body);
    var Request = new tedious.Request
    //var iniciarSesion = new Request("SELECT *")
    res.redirect("./")
})

module.exports = router