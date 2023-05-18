// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size === 2);
console.log(s.has("hello") === true);
console.log(s);

// // Maps
// var m = new Map();
// console.log( m.set("hello", 42));
// console.log( m.set(s, 34));
// console.log( m.get(s) == 34);
// console.log(m);

// // Weak Maps
// var wm = new WeakMap();
// console.log(wm.set(s, { extra: 42 }));
// console.log(wm.size === undefined);

// Weak Sets
var ws = new WeakSet();
console.log(ws.add({ data: 42 }));
console.log(ws);
// Because the added object has no other references, it will not be held in the set