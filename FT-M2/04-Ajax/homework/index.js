//* punto 1
let verAmigos = document.querySelector("#boton");
let nombre = document.createElement("li");
let lista = document.querySelector("#lista");

//* punto 2
let buscarAmigo = document.querySelector("#search");
let mostrar = document.querySelector("#amigo");

//*punto 3
let deletes = document.querySelector("#delete");
let success = document.querySelector("#success");
let lis;
//*1
verAmigos.addEventListener("click", function(){
    $.get("http://localhost:5000/amigos/", function(data) {

        lis = data.map((element) => {
            nombre = document.createElement("li");
            lista.appendChild(nombre);
            return nombre.textContent = element.name;
        });
    });
});

//*2
buscarAmigo.addEventListener("click", function () {
    var x = $("#input").val();

    $.get("http://localhost:5000/amigos/" + x, function (data) {
        mostrar.textContent = data.name;
    })
});

//*3
deletes.addEventListener("click", function () {
    var x = $("#inputDelete").val();

    $.ajax({
        url: "http://localhost:5000/amigos/" + x,
        method: "DELETE",
        success: function() {
            lista.textContent = "hola";
            success.textContent = "Tu amigo fue borrado con exito";
        }
    });
});