import React, { Fragment, useEffect} from "react";

import Boton from './herramientas/Boton';

const Listado = ({ListadoState, setListadoState}) => {

    useEffect(() => {
      conseguirPelicula();
    }, []);

    const conseguirPelicula = () => {
        let peliculas = JSON.parse(localStorage.getItem('Peliculas'));

        setListadoState(peliculas);

        return peliculas;
    };

    const eliminar = (id) => {
      let pelisAlmacenadas = conseguirPelicula();

      let nuevoArrayPeliculas = pelisAlmacenadas.filter(peli => peli.id != parseInt(id));

      setListadoState(nuevoArrayPeliculas);

      localStorage.setItem('Peliculas', JSON.stringify(nuevoArrayPeliculas));
    }

    let etiquetas = ListadoState != null ?
    ListadoState.map((peli) => {

      return(
      <article key={peli.id} className="peli-item">
        <h3 className="title">{peli.titulo}</h3>
        <p className="description">{peli.descripcion}</p>

        <Boton
            estilos='edit'
            nombre='Editar'
        />
      <Boton
            estilos='delete'
            nombre='Eliminar'
            funcion={() => eliminar(peli.id)}
        />
      </article>
      )
    }): <h2>Aun nos haz agregado ninguna de tus peliculas favoritas</h2>

  return (
    <Fragment>
      {etiquetas}
    </Fragment>
  );
};

export default Listado;
