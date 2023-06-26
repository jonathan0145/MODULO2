export function validatef(inputs){

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};

    if (!inputs.name) {
        errors.name = "Se requiere un nombre";
    }
    else if (!regexEmail.test(inputs.email)) {
        errors.email = 'Debe ser un correo electrónico';
    }
    else if (inputs.phone < 0) {
        errors.phone = "Sólo números positivos";
    }
    else if (!inputs.subject) {
        errors.subject = "Se requiere un asunto";
    }
    else if (!inputs.message) {
        errors.message = "Se requiere un mensaje";
    }
    return errors;
}