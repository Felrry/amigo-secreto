// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creando array
let amigos = [];


//Declarando la funcion agregar amigo
function agregarAmigo() {
    //Agrega los nombres de los amigos y los almacena en el array amigos
    let entradaNombreDeAmigo = document.getElementById('amigo').value;
    if (entradaNombreDeAmigo == "") {
        alert('Por favor, inserta un nombre.');
    } else {
        amigos.push(entradaNombreDeAmigo);
        console.log(amigos);
        limpiarCajas();
    }
    
}
function limpiarCajas() {
    //Limpia la caja de texto
    document.getElementById('amigo').value = '';
    
}
