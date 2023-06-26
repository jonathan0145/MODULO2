import { ADD_PRODUCT, DELETE_PRODUCT } from "./types.js";

/*
    *funciones actions
    - agregar.
    - editar.
    - eliminar.
*/

function addProduct(product){
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

function deleteProduct(id){
    return{
        type: DELETE_PRODUCT,
        payload: id
    }
}

export { addProduct, deleteProduct }