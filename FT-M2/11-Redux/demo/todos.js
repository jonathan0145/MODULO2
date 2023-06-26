const redux = require('redux');

// traer el create store
//es una variable que indica cual es la funcion reducer
const createStore = redux.createStore;

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';

//este es el estado
const initialState = {
  todos: []
}

//esta es la funcion reducer
//* por parametro recibe un objeto que es el estado y una action esta tiene el type y payload
//!aqui va la logica
//aqui se hacen las tareas
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload] // esto remplaza al estado inicial
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

// una variable que ejecuta el create store y indica por parametro cual es la funcion reducer
const store = createStore(rootReducer);

//cadavez que modifica el estado lo muestra aqui
store.subscribe(() => {
  console.log('Subscription: ', store.getState()); //si pones el . punto y uno de los nombres que se encuentran en el estado saldra solo ese
});

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

// estas son las actions estas retornan un objeto
//! no llevan logica
store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1))

console.log(store.getState());

//! en un archivo aparte debes tener las actions types es decir guardadas en un const
//? combinatereducers el metodo para tener varios reducers

/*
  crear una carpeta redux que contenga las actions type en un archivo fuera del redux el reducer y el store
  * en el store te suscribes
  importas las actions
  *viene el dispatch tambien llamadas actions
  importas el reducers
  */