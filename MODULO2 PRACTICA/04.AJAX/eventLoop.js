// function multiply (x, y) {    
//     return x * y; 
//   } 
  
//   function printSquare (x) {    
//     var s = multiply(x, x);    
//     console.log(s); 
//   } 
  
//   printSquare(5);


//! maximum call stack
// function foo() {    
//     foo(); 
//   } 
  
//   foo();

//? ¿Cómo hacemos para escribir código no bloqueante?

console.log("hola");

setTimeout(function timeoutCallback() {

console.log("mundo");

}, 500);

console.log("Ubykuo, everytime, everywhere");

/* 
 * Resultados:
 * => hola
 * => Ubykuo, everytime, everywhere
 * => mundo
 */