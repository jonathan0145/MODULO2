const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");
var botonIncrementar = document.getElementById("incremento");
var botonDecrementar = document.getElementById("decremento");


// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const contador = store.getState().contador;
  
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.textContent = contador;
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

botonIncrementar.addEventListener("click", function() {
  // Enviamos la acción de incremento al store
  store.dispatch(incremento());
});

botonDecrementar.addEventListener("click", function() {
  // Enviamos la acción de decremento al store
  store.dispatch(decremento());
});