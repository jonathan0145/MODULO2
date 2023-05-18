// // list matching
// var [a, , b] = [1,2,3];
// console.log(a, b);

// var { op: a, lhs: { op: b }, rhs: c }
//        = getASTNode()

// // object matching shorthand
// // binds `op`, `lhs` and `rhs` in scope
// var {op, lhs, rhs} = getASTNode()

// // Can be used in parameter position
// function g({name: x}) {
//     console.log(x);
//   }
//   g({name: 5})

//   // Fail-soft destructuring
// var [a] = [];
// console.log(a === undefined);

// Fail-soft destructuring with defaults
var [a = 1] = [];
console.log(a === 1);