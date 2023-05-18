var names = ["Domingo", "Lunes", "Martes", "Miercoles",
                "Jueves", "Viernes", "Sabado"];

exports.name = function name (number) { return names[number]; };
exports.number = function number(name) { return names.indexOf(name); };