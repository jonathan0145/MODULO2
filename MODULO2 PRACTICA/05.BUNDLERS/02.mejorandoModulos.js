// const x = 1;
// function evalAndReturnX(code) {
//   eval(code);
//   return x;
// }

// console.log(evalAndReturnX("var x = 2"));
// // → 2
// console.log(x);
// // → 1

// estas dos formas producen la misma funcion
function plusOne(n) {
    return n +1;
}
// console.log(plusOne(5));

let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5