import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import { Card } from '../Card/Card'

export function Products({list}) {
  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">HENRY MARKET</h1>

        <div className="productsList">
          {/* ¡Renderiza aquí todas tus cards! */}
          {list.map(product => ( // Usar map para iterar sobre list
            // Devolver un componente Card por cada producto
            <Card 
              // Pasar las propiedades del producto al componente Card
              name={product.name}
              price={product.price}
              id={product.id}
              // Usar el id como key para diferenciar los componentes
              key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
    return {
      list: state.list
    }
}

export default connect(mapStateToProps, null)(Products);
