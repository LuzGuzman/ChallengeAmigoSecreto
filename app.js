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

function agregarAmigo(){
    let NombreUsuario=document.getElementById("amigo").value;
    if(NombreUsuario==""){
        alert("Por favor ingrese un nombre valido");
    }else{
        listaNombresSorteados.push(NombreUsuario);
        limpiarCaja();
        mostrarLista();
    }
}

function sortearAmigo(){
    let Indice= Math.floor(Math.random()*listaNombresSorteados.length);
    let AmigoSorteado =listaNombresSorteados[Indice];
    document.querySelector("#resultado").innerHTML = `El amigo sorteado es: ${AmigoSorteado}`;
    return AmigoSorteado
}
