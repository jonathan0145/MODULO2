//! las arrows function comparten el mismo this  que el codigo que las rodea
//*con expressiones
v => v+1;

//*cuerpoos con sentencias
 v => {
    if (v % 5 ==== 0) {
        cincos.push(v);
    }
}

//* this
// this
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  }