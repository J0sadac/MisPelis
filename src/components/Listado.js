import React, { Fragment } from "react";

import Boton from './herramientas/Boton';

const Listado = () => {

    const conseguirPelicula = () => {
        let peliculas = JSON.parse(localStorage.getItem('Peliculas'));

        console.log(peliculas);
    }

  return (
    <Fragment>
      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">victorroblesweb.es</p>

        <Boton
            estilos='edit'
            nombre='Editar'
        />
       <Boton
            estilos='delete'
            nombre='Eliminar'
        />
      </article>
    </Fragment>
  );
};

export default Listado;
