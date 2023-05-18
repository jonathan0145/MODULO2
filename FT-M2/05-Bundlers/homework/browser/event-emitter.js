// (function () {

  // window.EventEmitter = EventEmitter;

  // our EventEmitter constructor function
  //nuestra función constructora EventEmitter
  export default function EventEmitter () {
    this.subscribers = {};
  }

  // To be used like:
  // instanceOfEE.on('touchdown', cheerFn);
  // Para ser usado como:
   // instanciaDeEE.on('touchdown', cheerFn);
  EventEmitter.prototype.on = function (eventName, eventListener) {

    // If this instance's subscribers object does not yet
    // have the key matching the given event name, create the
    // key and assign the value of an empty array.
    // Si el objeto de suscriptores de esta instancia aún no
     // hacer que la clave coincida con el nombre del evento dado, crear el
     // tecla y asigna el valor de una matriz vacía.
    if (!this.subscribers[eventName]) {
        this.subscribers[eventName] = [];
    }

    // Push the given listener function into the array
    // located on the instance's subscribers object.
    // Empuje la función de escucha dada en la matriz
     // ubicado en el objeto de suscriptores de la instancia.
    this.subscribers[eventName].push(eventListener);

  };

  // To be used like:
  // instanceOfEE.emit('codec', 'Hey Snake, Otacon is calling!');
  // Para ser usado como:
   // instanceOfEE.emit('codec', '¡Oye, Snake, llama Otacon!');
  EventEmitter.prototype.emit = function (eventName) {

    // If there are no subscribers to this event name, why even?
    // Si no hay suscriptores para este nombre de evento, ¿por qué?
    if (!this.subscribers[eventName]) {
        return;
    }

    // Grab the remaining arguments to our emit function.
    // Grab the remaining arguments to our emit function.
    var remainingArgs = [].slice.call(arguments, 1);

    // For each subscriber, call it with our arguments.
    // Para cada suscriptor, llámalo con nuestros argumentos.
    this.subscribers[eventName].forEach(function (listener) {
        listener.apply(null, remainingArgs);
    });

  };

// })();
