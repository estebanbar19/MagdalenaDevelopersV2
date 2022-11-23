//DATA
var myurl = document.URL+""

//VARIABLES
let primerNombre, segundoNombre, primerApellido, segundoApellido, numeroDocumento, idgenero, fechaNacimiento, calleResidencia, ciudadN, ciudadR, telefono, celular, tipoDocumento, correo, pass;
let confirmarCorreo, confirmarContraseña;

let btnRegistrarse = document.getElementById("registro");


function validarDatos(){
    if(correo){
        if(correo == confirmarCorreo){
            if(pass){
                if(pass == confirmarContraseña){
                    return true
                }else{
                    //NO COINCIDEN LAS CONTRAS
                    alert("Contraseñas no coinciden")
                }
            }else{
                //NO INGRESO CORREO
                alert("Ingrese una contraseña");
            }
        }else{
            //NO COINCIDEN LOS CORREOS
            alert("Correos no coinciden");
        }
    }else{
        //NO INGRESO CORREO
        alert("Ingrese un correo");
    }
    return false;
}

btnRegistrarse.onclick = () =>{
    btnRegistrarse.disabled = "disabled";
    primerNombre = document.getElementById("firstName").value;
    segundoNombre = document.getElementById("SecondName").value;
    primerApellido = document.getElementById("primerApellido").value;
    segundoApellido = document.getElementById("segundoApellido").value;
    idgenero = document.getElementById("idgenero").value;
    numeroDocumento = document.getElementById("numeroDocumento").value;
    fechaNacimiento = document.getElementById("fechaNacimiento").value;
    calleResidencia = document.getElementById("calleResidencia").value;
    ciudadN = document.getElementById("ciudadN").value;
    ciudadR = document.getElementById("ciudadR").value;
    telefono = document.getElementById("telefono").value;
    celular = document.getElementById("celular").value;
    if(document.querySelector('input[name="tipoDocumento"]:checked') != null) {tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked').value;}
    else {tipoDocumento = -1;}
    correo = document.getElementById("correo").value;
    confirmarCorreo = document.getElementById("confirmarCorreo").value;
    pass = document.getElementById("pass").value;
    confirmarContraseña = document.getElementById("confirmarContraseña").value;

    //console.log(primerNombre, segundoNombre, primerApellido, segundoApellido, numeroDocumento, idgenero, fechaNacimiento, calleResidencia, ciudadN, ciudadR, telefono, celular, tipoDocumento, correo, pass)

    if(validarDatos()){
        console.log("correcto");
        document.getElementById("formRegistro").submit();
    }else{
        console.log("incorrecto");
        btnRegistrarse.disabled = false;
    }
}