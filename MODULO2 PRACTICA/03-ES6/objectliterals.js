var obj = {
    // __proto__
    __proto__: theProtoObj, //extiende el prototipo
    propiedad, // atajo para propiedad:propiedad
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};