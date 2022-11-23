let magdevicon = document.getElementById("magdevicon");
let btnIniciarSesion = document.getElementById("btnIniciarSesion");

magdevicon.onclick = () => {
    window.location.href = "../vistas/index.html"
}

btnIniciarSesion.onclick = () => {
    window.location.href = "http://"+window.location.host + "/login"
    console.log(__dirname)
}

//module.exports = magdevicon