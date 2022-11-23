const express = require('express')
const router = express.Router();
const {tedious, connection} = require('../database');

//PARSERR
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) =>{
    var generos = []
    var tiposDocumentos = []
    var ciudades = []
    var Request = tedious.Request
    var obtenerGeneros = new Request("SELECT nombre FROM mydb.tipossexo", (err) =>{
        if(err)throw err;
    })

    obtenerGeneros.on("row", (columns) =>{
        if(columns && columns.length > 0){
            columns.forEach(element => {
                generos.push(element.value);
            });
        }
    })

    obtenerGeneros.on("requestCompleted", ()=>{
        var obtenerTD = new Request("SELECT nombre FROM mydb.tiposdocumento", (err)=>{
            if(err)throw err
        })
        
        obtenerTD.on("row", (columns)=>{
            if(columns && columns.length>0){
                columns.forEach(element =>{
                    tiposDocumentos.push(element.value)
                })
            }
        })

        obtenerTD.on("requestCompleted", ()=>{

            var obtenerCiudades = new Request("SELECT nombre FROM mydb.ciudades", (err) =>{
                if(err) throw err
            })

            obtenerCiudades.on('row', (columns)=>{
                if(columns && columns.length > 0){
                    columns.forEach(element =>{
                        ciudades.push(element.value)
                    })
                }
            })

            obtenerCiudades.on("requestCompleted", ()=>{
                console.log("Completada")
                res.render('registro', {generos: generos, tiposDocumentos: tiposDocumentos, ciudades: ciudades})
            })

            connection.execSql(obtenerCiudades);
        })
        connection.execSql(obtenerTD);
    })
    connection.execSql(obtenerGeneros);
})

router.post('/rg', urlencodedParser, (req, res) =>{
    //const {email, password} = req.body;
    var idPersona = -1;
    var Request = tedious.Request
    var Types = tedious.TYPES
    var insertarPersona = new Request("INSERT INTO [mydb].[personas]([idPersona],[primerNombre],[segundoNombre],[primerApellido],[segundoApellido],[numeroDocumento],[fechaNacimiento],[calleResidencia],[numeroResidencia],[telefono],[email],[idCiudadNacimiento],[idCiudadResidencia],[idTipoDocumento],[idSexo]) OUTPUT INSERTED.idPersona VALUES (@idpersona,@pn,@sn,@pa,@sa,@numd,@fec,@cr,@nr,@tel,@email,@idcn,@idcr,@idtd,@ids)", (err) =>{
        if(err) throw err
    })

    insertarPersona.addParameter("idpersona", Types.Int, 1);
    insertarPersona.addParameter("pn", Types.NVarChar, req.body.firstName);
    insertarPersona.addParameter("sn", Types.NVarChar, req.body.SecondName);
    insertarPersona.addParameter("pa", Types.NVarChar, req.body.primerApellido);
    insertarPersona.addParameter("sa", Types.NVarChar, req.body.segundoApellido);
    insertarPersona.addParameter("numd", Types.Int, req.body.numeroDocumento);
    insertarPersona.addParameter("fec", Types.Date, req.body.fechaNacimiento);
    insertarPersona.addParameter("cr", Types.NVarChar, req.body.calleResidencia);
    insertarPersona.addParameter("nr", Types.NVarChar, req.body.telefono);
    insertarPersona.addParameter("tel", Types.Int, req.body.celular);
    insertarPersona.addParameter("email", Types.NVarChar, req.body.correo);
    insertarPersona.addParameter("idcn", Types.Int, req.body.ciudadN);
    insertarPersona.addParameter("idcr", Types.Int, req.body.ciudadR);
    insertarPersona.addParameter("idtd", Types.Int, req.body.tipoDocumento);
    insertarPersona.addParameter("ids", Types.Int, req.body.idgenero);

    insertarPersona.on('row', (columns) =>{
        if(columns && columns.length > 0){
            console.log("INSERTADO idPersona: %d",columns[0].value)
            idPersona = columns[0].value;
        }
    })

    insertarPersona.on('requestCompleted', ()=>{
        console.log("Registrado")
        var insertarUsuario = new Request("INSERT INTO [mydb].[usuarios]([idUsuario],[idtipoUsuario],[password]) VALUES (@idusuario,@tu,@pass)", (err) =>{
            if(err) throw err
        })

        insertarUsuario.addParameter("idusuario", Types.Int, idPersona);
        insertarUsuario.addParameter("tu", Types.Int, req.body.tipoU);
        insertarUsuario.addParameter("pass", Types.NVarChar, req.body.pass);

        insertarUsuario.on('requestCompleted', ()=>{
            console.log("Usuario registrado");
            //alert("Usuario registrado con exito")
            res.redirect('../login');
        })

        connection.execSql(insertarUsuario);
    })

    connection.execSql(insertarPersona);

    //res.send("Enviado");
})

module.exports = router