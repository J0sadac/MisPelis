import React, { Fragment, useState } from 'react';
import {GuardarEnLocalStorage} from './herramientas/GuardarEnLocalStorage';

const Crear = ({setListadoState}) => {

    var tituloComponente ='Añadir Pelicula';

    const [pelicula, setPelicula] = useState({
        titulo: '',
        descripcion: ''
    });


    const conseguirDatos = (event) => {
        event.preventDefault();

        //con esto creamos el objeto de peliculas
        let target = event.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        };

        //con esto guardamos el estado
        setPelicula(peli);

        //actualizar la pantalla
        setListadoState(elementos => {
            return[...elementos, peli]
        })

        //con esto lo guardamos en el almacenamiento local
        GuardarEnLocalStorage('Peliculas', peli);
  
    };

    return(
        <Fragment>
            <div className="add">
                <h3 className="title">{tituloComponente}</h3>
                
                <form onSubmit={conseguirDatos}>
                    <input type="text"
                            id="titulo"
                            name='titulo'
                            placeholder="Titulo" 
                    />

                    <textarea id="description"
                                name='descripcion'
                                placeholder="Descripción"></textarea>

                    <input type="submit"
                            id="save"
                            value="Guardar"
                    />
                </form>
            </div>
        </Fragment>
    );
};

export default Crear;