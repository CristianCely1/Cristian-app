var btnGreent = document .getElementById("btnSaludo");
var txtName = document .getElementById("txtNombre");
var txtGreent = document .getElementById("txtSaludo");

var lista =[
    "Hola",
    "Hello",
    "Ciao",
    "Aloha",
    "Konniichiwa",
    "Ola",
    "Namaste"
]
function saludar(){
    if (txtName.value == "") {
        alert("Error, Ingresa tu nombre,")
        txtGreent.innerHTML=""
    }else{
        var nombre = txtName.value
        var numero = Math.floor(Math.random()*lista.length)
        var saludo = lista[numero] + ", " + nombre
        txtGreent.innerHTML = saludo
    }
}   
