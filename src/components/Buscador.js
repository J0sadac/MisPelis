import React, { Fragment } from 'react';

const Buscador = () => {

    return(
        <Fragment>
             <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" id="search_field" />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </Fragment>
    );
};

export default Buscador;