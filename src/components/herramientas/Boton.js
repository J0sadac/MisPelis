import React from 'react';

const Boton = (props) => {

    return(
        <button onClick={props.funcion} className={props.estilos}>
            {props.nombre}
        </button>
    );
};

export default Boton;