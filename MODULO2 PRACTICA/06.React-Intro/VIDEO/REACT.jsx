//todo npm
//* codigo para montar react
// npx create-next-app all_react

const element = <h1 className= 'title '>Hello, world!</h1>;

//* crear y anidar componentes
function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

// anidando componente de arriba
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }

//   Nota que <MyButton /> empieza con mayúscula. Así es como sabes que es un componente de React. Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML deben estar minúsculas.

//? rfc para usar react

//! npm i react react-dom react-scripts

//* webpack
//una vez hecho el npm i de arriba necesaitamos instalar webpack
//! npm i webpack webpack-cli
//debemos configurar el webpack

//* debemos instalar babel
//! npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader