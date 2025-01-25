// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creando array
let amigos = [];

//Declarando la funcion agregar amigo
function agregarAmigo() {
    //Agrega los nombres de los amigos y los almacena en el array amigos
    let entradaNombreDeAmigo = document.getElementById("amigo").value;
    if (entradaNombreDeAmigo == "") {
        alert("Por favor, inserta un nombre.");
    } else {
        amigos.push(entradaNombreDeAmigo);
        amigos.sort();
        console.log(amigos);
        limpiarCajas();
        actualizarListaDeAmigos();
    }
    return;
}

//Declarando la funcion que limpiara la caja de texto
function limpiarCajas() {
    //Limpia la caja de texto
    document.getElementById("amigo").value = "";
    return;
}

//Declarando la funcion que agregara los nombres a la lista
function actualizarListaDeAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    //limpiando lista de amigos anterior
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //creando la etiqueta lista
        li.appendChild(document.createTextNode(amigos[i])); //Colocando el nombre en la lista
        listaAmigos.appendChild(li); //ubicando la etiqueta dentro de la etiqueta ul
    }
    return;
}

//Declarando la funcion de seleccion de amigo
function sortearAmigo() {
    if (amigos == "") { //Comprobando si el array amigos esta vacio
        agregarAmigo();
    } else {
        let cantidadDeNombres = amigos.length;
        let amigoSeleccionado = amigos[Math.floor(Math.random() * cantidadDeNombres)];
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `El amigo secreto seleccionado es: ${amigoSeleccionado}`;
        document.getElementById("listaAmigos").innerHTML = "";
    }
    return;
}
