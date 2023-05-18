//! enviar la solicitud  con POST
/*
envia la solicitud de clientes a la cocina.
en el codigo una solicitud post envia datos a tu servidor. eso significa que esta enviando datos del pedido al back-end.

?partes para hacer solicitus POST:
*URL: ruta que seguira la solicitud.
*Datos: parametro extra que necesitas enviar al servidor. sera unobjeto de datos
*Callback: lo que pasa despues de que hayas enviado la solicitud.
*/

//todo. pedido papas fritas y comboMeal

// let orden = {
//     mainMeal: 'cheeseburguer',
//     drink: 'pepsi',
//     price: 6,
//     excepcion: 'cebolla'
// };$.post('/papasFritas', orden);

// let orden1 ={
//     size: 'mediana',
//     price: 2
// };$.post('/comboMeal', orden1);

/*
    *El codigo no se puede ejecutar al azar. se necesita un evento de activacion que active la solicitud. en este caso un click en un boton de pedido en un sitio web. evento click de jQuery para ejecutar el POST.
 */

$('button').click(function () {
    let orden = {
        mainMeal: 'cheeseburguer',
        drink: 'pepsi',
        price: 6,
        excepcion: 'cebolla'
    };
    
    $.post('/papasFritas', orden, function(){
        alert("¡El próximo cliente por favor!");
    });
});
