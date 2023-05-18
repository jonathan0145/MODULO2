//! entregar pedido mediante GET
/*
    nos permite solicitar datos del servidor. estas no cambian nuestra base de datos. solo entregan esa informacion al front-end. la solicitud POST cambian la informcion de la base de datos.
*/

$('.answer').click(function(){
    let meal = {
        location: 'here',
        condiments: 'ketchup',
        idNumber: 191, 
    };$.get('/comboMeal', meal, function(data){ 
        eat(data); 
    }); 
});