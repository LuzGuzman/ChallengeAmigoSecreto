// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresSorteados=[];

function mostrarLista() {
    let ul = document.querySelector("#listaAmigos");
    ul.innerHTML = ""; // Limpiar lista antes de volver a renderizar

    listaNombresSorteados.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function limpiarCaja(){
    document.querySelector("#amigo").value="";
}